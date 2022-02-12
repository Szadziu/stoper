import styled from 'styled-components';

const Button = ({ disabled, text, click, icon }) => {
  return (
    <ControlButton
      active={disabled}
      text={text}
      disabled={disabled}
      onClick={click}
    >
      {text}
      {icon}
    </ControlButton>
  );
};

const ControlButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  padding: 0.5rem;
  border-radius: 10px;

  background-color: #bbb;

  font-size: 1rem;

  pointer-events: ${({ active }) => (active ? 'none' : '')};

  &:hover {
    background-color: ${({ text }) =>
      text === 'Start' ? 'rgb(255, 167, 65)' : 'lightgray'};

    cursor: pointer;
  }

  @media (min-width: 768px) {
    font-size: 1.4rem;
    padding: 1rem;
    width: 50%;
  }
  @media (min-width: 1366px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1920px) {
    font-size: 2.2rem;
  }
  @media (min-width: 3840px) {
    width: 60%;
    font-size: 4rem;
  }
`;

export default Button;
