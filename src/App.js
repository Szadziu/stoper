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
    this.clearCurrentInterval();
  }

  clearCurrentInterval = () => {
    clearInterval(this.state.intervalId);
    this.setState({
      intervalId: null,
    });
  };

  handleStart = () => {
    this.setState({
      resetAvailable: true,
      intervalId: setInterval(() => {
        this.setState((prevState) => ({
          miliseconds: prevState.miliseconds + 1,
        }));
      }, 10),
    });
  };

  handleReset = () => {
    this.clearCurrentInterval();
    this.setState({
      miliseconds: 0,
      resetAvailable: false,
    });
  };

  render() {
    const {
      handleStart,
      clearCurrentInterval,
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
              disabled={intervalId}
              click={handleStart}
            />
            <Button
              icon={<FontAwesomeIcon icon={faStop} />}
              text="Stop"
              disabled={!intervalId}
              click={clearCurrentInterval}
            />
            <Button
              icon={<FontAwesomeIcon icon={faUndo} />}
              text="Reset"
              disabled={!resetAvailable}
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
