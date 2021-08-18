import React from "react";
import styled from "styled-components";

const TimePanel = ({ miliseconds }) => {
  const seconds = Math.floor(miliseconds / 100);
  const minutes = Math.floor(miliseconds / 6000);

  return (
    <Timer>{`${minutes <= 9 ? "0" + minutes : minutes}:${
      seconds >= 60
        ? seconds % 60 <= 9
          ? "0" + (seconds % 60)
          : seconds % 60
        : seconds <= 9
        ? "0" + seconds
        : seconds
    }:${
      miliseconds % 100 <= 9 ? "0" + (miliseconds % 100) : miliseconds % 100
    }`}</Timer>
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
