import { Component } from "react";
import GlobalFonts from "./fonts/fonts";
import Button from "./components/Button";
import TimePanel from "./components/TimePanel";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faUndo } from "@fortawesome/free-solid-svg-icons";
import Title from "./components/Title";

class App extends Component {
  state = {
    resetAvailable: false,
    miliseconds: 0,
    intervalId: null,
  };

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
    this.setState({
      intervalId: null,
    });
  }

  handleStart = () => {
    this.setState({
      resetAvailable: true,
      intervalId: setInterval(() => {
        const { miliseconds } = this.state;
        this.setState({
          miliseconds: this.state.miliseconds + 1,
        });
        if (miliseconds === 100) {
          console.log("milisekundy są równe 100");
          this.setState({ miliseconds: 0 });
        }
      }, 10),
    });
  };

  handleStop = () => {
    clearInterval(this.state.intervalId);
    this.setState({
      intervalId: null,
    });
    console.log(this.state.intervalId);
  };

  handleReset = () => {
    clearInterval(this.state.intervalId);
    this.setState({
      intervalId: null,
    });
    this.seconds = 0;
    this.setState({
      miliseconds: 0,
      resetAvailable: false,
    });
  };

  render() {
    const {
      handleStart,
      handleStop,
      handleReset,
      state: { miliseconds, resetAvailable, intervalId },
    } = this;
    return (
      <>
        <GlobalFonts />
        <Title text="Stoper-Demo" />
        <Wrapper>
          <TimePanel miliseconds={miliseconds} />
          <Controls>
            <Button
              icon={<FontAwesomeIcon icon={faPlay} />}
              text="Start"
              activity={intervalId}
              click={handleStart}
            />
            <Button
              icon={<FontAwesomeIcon icon={faStop} />}
              text="Stop"
              activity={!intervalId}
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
