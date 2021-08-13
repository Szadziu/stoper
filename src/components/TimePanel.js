const TimePanel = (props) => {
  const { minutes, seconds, miliseconds } = props;
  return <div>{`${minutes}:${seconds}:${miliseconds}`}</div>;
};

export default TimePanel;
