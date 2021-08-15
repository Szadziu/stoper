import { Component } from "react";
import GlobalFonts from "./fonts/fonts";
import Button from "./components/Button";
import TimePanel from "./components/TimePanel";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faUndo } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  // Zastanawiam się, czy nie lepszym pomysłem jest trzymanie wewnątrz stanu tylko milisekund
  // na ich podstawie możemy obliczać pozostałe wartości, a dzięki temu mamy mniej do ogarniania wewnątrz komponentu
  // pamiętaj, że każda zmiana stanu powoduje rerender całego komponentu
  state = {
    active: false,
    resetAvailable: false,
    minutes: 0,
    seconds: 0,
    miliseconds: 0,
  };

  handleStart = () => {
    this.setState({
      active: true,
      resetAvailable: true,
    });

    // utrzymywanie wewnątrz stanu id interwału jest znacznie lepszym pomysłem
    // w aktualnej wersji, dopóki nie przeczytam kodu komponentu, to nie mam pojęcia, że istnieje w ogóle taka
    // właściwość, jak intervalId - dążymy do jak największej czytelności i przy okazji nie łamiemy zasady, że
    // w stanie nie trzymamy wartości statycznych - ID interwału będzie się zmieniać po jego wyczyszczeniu
    this.intervalId = setInterval(() => {
      // kolejny plus przechowywania w stanie tylko milisekund - mniej do destrukturyzowania
      const { minutes, seconds, miliseconds } = this.state;

      // potencjalny rerender nr 1
      // >= powoduje, że minuty zmieniają się w momencie pojawienia się liczby 59 (sekund), a powinny dopiero przy resecie sekund do 0 (60s - pełna minuta), nie?
      if (seconds >= 59) {
        this.setState({
          minutes: minutes + 1,
        });
      }

      // potencjalny rerender nr 2
      // analogicznie, co przy minutach, tutaj różnica jest trudna do zauważenia gołym okiem, trzeba użyć narzędzi do debbugowania
      if (miliseconds >= 99) {
        this.setState({
          seconds: seconds + 1,
        });
      }


      // rerender nr 3
      this.setState({
        miliseconds: miliseconds + 1,
      });

      // potencjalny rerender nr 4
      if (miliseconds === 99) this.setState({ miliseconds: 0 });

      // potencjalny rerender nr 5
      if (seconds === 59) this.setState({ seconds: 0 });

      //! podsumowując - gdyby w stanie były tylko milisekund, komponent byłby rerenderowany raz na 10ms, teraz w najgorszym wypadku zostanie przerenderowany
      //! 5 razy (co 10 ms), a w najlepszym raz. Duże usprawnienie wydajnościowe
    }, 10);
  };

  handleStop = () => {
    // gdyby ID interwału było przechowywane w stanie, to nie musielibyśmy mieć w ogóle wartości active
    // w momencie kiedy interwał jest aktywny, jego ID (a tym samym właściwość w stanie) byłaby typem number - czyli truthy
    // w momencie wyczyszczenie interwału, możemy też zmienić stan na np. null (falsy), a następnie opierać się na tej wartości
    clearInterval(this.intervalId);
    this.setState({
      active: false,
    });
  };

  handleReset = () => {
    clearInterval(this.intervalId);
    this.setState({
      active: false,
      minutes: 0,
      seconds: 0,
      miliseconds: 0,
      resetAvailable: false,
    });
  };

  render() {
    // kolejny plus przechowywania w stanie tylko milisekund - mniej do destrukturyzowania
    const {
      handleStart,
      handleStop,
      handleReset,
      state: { minutes, seconds, miliseconds, active, resetAvailable },
    } = this;
    return (
      <>
        <GlobalFonts />
        {/* potencjał na osobny komponent - reużywalność zawsze na plus */}
        <Title>Stoper-Demo</Title>
        <Wrapper>
          {/* mniej propsów do przekazania, jeśli stan przechowuje tylko MS - komponent TimePanel mógłby sam wyliczać pozostałe wartości
          dzięki temu logika zarządzania wyświetlanym czasem, nie jest przechowywana w App, a w komponencie, który faktycznie tego potrzebuje */}
          <TimePanel
            minutes={minutes}
            seconds={seconds}
            miliseconds={miliseconds}
          />
          <Controls>
            <Button
              icon={<FontAwesomeIcon icon={faPlay} />}
              text="Start"
              activity={active}
              click={handleStart}
            />
            <Button
              icon={<FontAwesomeIcon icon={faStop} />}
              text="Stop"
              activity={!active}
              click={handleStop}
            />
            <Button
              icon={<FontAwesomeIcon icon={faUndo} />}
              text="Reset"
              activity={!resetAvailable}
              click={handleReset}
            />
          </Controls>
        </Wrapper>
        {/* <div>
          Font made from{" "}
          <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>is
          licensed by CC BY 3.0
        </div> */}
      </>
    );
  }
}

const Title = styled.div`
  width: 100%;

  margin: 5vh 0 20vh 0;
  font-size: 46px;
  font-family: Veneer;
  text-align: center;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 525px;

  padding: 5px;
  margin: 0 auto;

  background-color: #000;
  border: 12px black solid;
  border-left-width: 8px;
  border-right-width: 8px;
  border-radius: 20px;
`;
const Controls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & button {
    width: 250px;
    height: 30%;

    margin-left: 20px;
    font-size: 24px;
    border-radius: 10px;
  }
`;

export default App;
