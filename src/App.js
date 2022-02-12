import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faUndo } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import Button from './components/Button';
import TimePanel from './components/TimePanel';
import Title from './components/Title';
import GlobalFonts from './fonts/fonts';

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
        <Title text='Stopwatch' />
        <Wrapper>
          <TimePanel miliseconds={miliseconds} />
          <Controls>
            <Button
              icon={
                <FontAwesomeIcon
                  icon={faPlay}
                  color={intervalId || '#6B9430'}
                />
              }
              text='Start'
              disabled={intervalId}
              click={handleStart}
            />
            <Button
              icon={<FontAwesomeIcon icon={faStop} />}
              text='Stop'
              disabled={!intervalId}
              click={clearCurrentInterval}
            />
            <Button
              icon={<FontAwesomeIcon icon={faUndo} />}
              text='Reset'
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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 50vh;
  margin: 0 auto;
  border: 12px black solid;
  border-left-width: 8px;
  border-right-width: 8px;
  border-radius: 20px;

  background-color: #000;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 1366px) {
    width: 60%;
  }
  @media (min-width: 3840px) {
    width: 90%;
  }
`;
const Controls = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media (min-width: 768px) {
    width: 70%;
    height: 70%;
    align-items: center;
    flex-direction: column;
  }
`;

export default App;
