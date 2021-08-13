import { Component } from "react";
import Button from "./components/Button";
import TimePanel from "./components/TimePanel";

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

    clearInterval(this.intervalId);
    this.setState({
      isPaused: !this.state.isPaused,
      active: false,
      resetOn: true,
    });
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
        <TimePanel
          minutes={this.state.minutes}
          seconds={this.state.seconds}
          miliseconds={this.state.miliseconds}
        />
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
      </>
    );
  }
}

export default App;
