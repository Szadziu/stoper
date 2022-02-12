import React from 'react';
import styled from 'styled-components';

const TimePanel = ({ miliseconds }) => {
  const minutes = Math.floor(miliseconds / 100 / 60);
  const seconds = Math.floor((miliseconds - minutes * 60 * 100) / 100);
  const mili = Math.floor(miliseconds - minutes * 60 * 100 - seconds * 100);

  return (
    <Timer>
      {minutes <= 9 ? '0' + minutes : minutes}:
      {seconds <= 9 ? '0' + seconds : seconds}:{mili <= 9 ? '0' + mili : mili}
    </Timer>
  );
};

const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 150px;
  border-radius: 10px;

  background-color: #f5c801;

  letter-spacing: 9px;

  @media (min-width: 768px) {
    font-size: 4rem;
    margin-left: 1rem;
    height: 70%;
  }
  @media (min-width: 1920px) {
    font-size: 5rem;
  }
  @media (min-width: 3840px) {
    font-size: 8rem;
  }
`;

export default TimePanel;
