import styled from "styled-components";

const Button = (props) => {
  return (
    <Btn
      className={[
        props.activity ? "isDisabled" : "",
        props.text === "Start" ? "begin" : "",
      ]}
      disabled={props.activity}
      onClick={props.click}
    >
      {`${props.text} `}
      {props.icon}
    </Btn>
  );
};

const Btn = styled.button`
  background-color: lightgray;
  &.isDisabled {
    pointer-events: none;
  }

  &.begin:hover {
    background-color: rgb(255, 167, 65);
  }

  &:hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;

export default Button;
