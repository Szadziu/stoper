import styled from "styled-components";

const TimePanel = (props) => {
  const { minutes, seconds, miliseconds } = props;
  return (
    <Timer>{` ${minutes <= 9 ? "0" : ""}${minutes}:${
      seconds <= 9 ? "0" : ""
    }${seconds}:${miliseconds <= 9 ? "0" : ""}${miliseconds}`}</Timer>
  );
};

const Timer = styled.div`
  padding-left: 8px;
  display: flex;
  align-items: center;
  height: 154px;
  background-color: #f5c801;
  letter-spacing: 9px;
  border-radius: 10px;
`;

export default TimePanel;
