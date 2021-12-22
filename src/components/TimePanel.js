import React from "react";
import styled from "styled-components";

const TimePanel = ({ miliseconds }) => {
  const minutes = Math.floor(miliseconds / 100 / 60);
  const seconds = Math.floor((miliseconds - minutes * 60 * 100) / 100);
  const mili = Math.floor(miliseconds - minutes * 60 * 100 - seconds * 100);

  return (
    <Timer>
      {minutes <= 9 ? "0" + minutes : minutes}:
      {seconds <= 9 ? "0" + seconds : seconds}:{mili <= 9 ? "0" + mili : mili}
    </Timer>
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
