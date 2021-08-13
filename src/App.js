import { Component } from "react";
import GlobalFonts from "./fonts/fonts";
import Button from "./components/Button";
import TimePanel from "./components/TimePanel";
import styled from "styled-components";

class App extends Component {
  state = {
    isPaused: false,
    resetOn: false,
    active: false,
    minutes: 0,
    seconds: 0,
    miliseconds: 0,
  };

  componentWillUnmount() {
    console.log("unmount");
    clearInterval(this.intervalId);
  }

  handleStart = () => {
    this.setState({
      resetOn: true,
    });
    if (!this.state.active) {
      this.setState({
        active: true,
        isPaused: false,
      });
    }
    if (!this.state.isPaused) {
      this.setState({
        active: true,
      });

      //! interval function
      this.intervalId = setInterval(() => {
        console.log(this.state.miliseconds);
        if (!this.state.isPaused) {
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
        }
      }, 10);
    } else if (this.state.isPaused) {
      this.setState({
        isPaused: false,
      });
    }
  };
  handleStop = () => {
    this.handleStart();

    this.setState({
      isPaused: !this.state.isPaused,
      active: false,
      resetOn: true,
    });
    clearInterval(this.intervalId);
  };

  handleReset = () => {
    clearInterval(this.intervalId);
    this.setState({
      isPaused: true,
      active: false,
      minutes: 0,
      seconds: 0,
      miliseconds: 0,
      resetOn: false,
    });
  };

  render() {
    return (
      <>
        <GlobalFonts />
        <Title>Stoper-Demo</Title>
        <Wrapper>
          <TimePanel
            minutes={this.state.minutes}
            seconds={this.state.seconds}
            miliseconds={this.state.miliseconds}
          />
          <Flex>
            <Button
              text="Start"
              activity={this.state.active}
              click={this.handleStart}
            />
            <Button
              text="Stop"
              activity={!this.state.active}
              click={this.handleStop}
            />
            <Button
              text="Reset"
              activity={!this.state.resetOn}
              click={this.handleReset}
            />
          </Flex>
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

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & button {
    border-radius: 10px;
    font-size: 24px;
    height: 30%;
    width: 250px;

    margin-left: 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-family: Veneer;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 0 10vh 0;
  font-size: 36px;
`;

export default App;
