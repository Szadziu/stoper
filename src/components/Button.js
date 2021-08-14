import styled from "styled-components";

const Button = (props) => {
  const { activity, text, click, icon } = props;
  return (
    <ControlButton
      className={[
        activity ? "isDisabled" : "",
        text === "Start" ? "beginning" : "",
      ]}
      disabled={activity}
      onClick={click}
    >
      {`${text} `}
      {icon}
    </ControlButton>
  );
};

const ControlButton = styled.button`
  background-color: lightgray;
  &.isDisabled {
    pointer-events: none;
  }

  &.beginning:hover {
    background-color: rgb(255, 167, 65);
  }

  &:hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;

export default Button;
