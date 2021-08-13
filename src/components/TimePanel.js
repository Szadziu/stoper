import styled from "styled-components";

const TimePanel = (props) => {
  const { minutes, seconds, miliseconds } = props;
  return (
    <Timer>{`${minutes <= 9 ? "0" : ""}${minutes}:${
      seconds <= 9 ? "0" : ""
    }${seconds}:${miliseconds <= 9 ? "0" : ""}${miliseconds}`}</Timer>
  );
};

const Timer = styled.div`
  display: flex;
  align-items: center;
  height: 154px;
  background-color: beige;
  letter-spacing: 14px;
  border: 2px solid black;
`;

export default TimePanel;
