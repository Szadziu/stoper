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
  justify-content: center;
  align-items: center;

  width: 60px;
  padding: 0.5rem;
  /* margin-left: 20px; */
  font-size: 1rem;
  border-radius: 10px;

  background-color: lightgray;

  pointer-events: ${({ active }) => (active ? 'none' : '')};

  &:hover {
    background-color: ${({ text }) =>
      text === 'Start' ? 'rgb(255, 167, 65)' : 'lightgray'};
    cursor: pointer;
  }
`;

export default Button;
