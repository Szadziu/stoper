import * as P from './TimePanel.parts';

const TimePanel = ({ miliseconds }) => {
    const minutes = Math.floor(miliseconds / 100 / 60);
    const seconds = Math.floor((miliseconds - minutes * 60 * 100) / 100);
    const mili = Math.floor(miliseconds - minutes * 60 * 100 - seconds * 100);

    return (
        <P.Timer>
            {minutes <= 9 ? '0' + minutes : minutes}:
            {seconds <= 9 ? '0' + seconds : seconds}:
            {mili <= 9 ? '0' + mili : mili}
        </P.Timer>
    );
};

export default TimePanel;
