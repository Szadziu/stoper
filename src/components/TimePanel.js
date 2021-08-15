import styled from "styled-components";

const TimePanel = (props) => {
  // Jak masz tylko 4 propy to może lepiej je destrukturyzować od razu przy deklaracji komponentu?
  // jedna linia kodu mniej
  const { minutes, seconds, miliseconds } = props;
  return (
    <Timer>{` ${minutes <= 9 ? "0" : ""}${minutes}:${
      seconds <= 9 ? "0" : ""
    }${seconds}:${miliseconds <= 9 ? "0" : ""}${miliseconds}`}</Timer>
  );
};

const Timer = styled.div`
  display: flex;
  align-items: center;
  height: 154px;

  background-color: #f5c801;
  padding-left: 8px;
  border-radius: 10px;
  letter-spacing: 9px;
`;

export default TimePanel;
