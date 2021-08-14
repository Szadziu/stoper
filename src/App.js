import { Component } from "react";
import GlobalFonts from "./fonts/fonts";
import Button from "./components/Button";
import TimePanel from "./components/TimePanel";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faUndo } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
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
    this.intervalId = setInterval(() => {
      const { minutes, seconds, miliseconds } = this.state;
      if (seconds >= 59) {
        this.setState({
          minutes: minutes + 1,
        });
      }
      if (miliseconds >= 99) {
        this.setState({
          seconds: seconds + 1,
        });
      }
      this.setState({
        miliseconds: miliseconds + 1,
      });
      if (miliseconds === 99) this.setState({ miliseconds: 0 });
      if (seconds === 59) this.setState({ seconds: 0 });
    }, 10);
  };

  handleStop = () => {
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
    const {
      handleStart,
      handleStop,
      handleReset,
      state: { minutes, seconds, miliseconds, active, resetAvailable },
    } = this;
    return (
      <>
        <GlobalFonts />
        <Title>Stoper-Demo</Title>
        <Wrapper>
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
