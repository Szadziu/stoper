import React from 'react';
import Button from '../Button/Button';
import TimePanel from '../TimePanel/TimePanel';
import Title from '../Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faUndo } from '@fortawesome/free-solid-svg-icons';
import * as P from './Stopwatch.parts';

class Stopwatch extends React.Component {
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
            <P.Container>
                <Title text="stopwatch" />
                <P.Wrapper>
                    <TimePanel miliseconds={miliseconds} />
                    <P.Controls>
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
                    </P.Controls>
                </P.Wrapper>
                <P.FontAuthor>
                    Font made from{' '}
                    <P.Link href="http://www.onlinewebfonts.com">
                        oNline Web Fonts
                    </P.Link>
                    is licensed by CC BY 3.0
                </P.FontAuthor>
            </P.Container>
        );
    }
}

export default Stopwatch;
