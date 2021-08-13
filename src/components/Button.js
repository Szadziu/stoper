import styled from "styled-components";

const Button = (props) => {
  return (
    <Btn disabled={props.activity} onClick={props.click}>
      {props.text}
    </Btn>
  );
};

const Btn = styled.button`
  /* background-color: red; */
`;

export default Button;
