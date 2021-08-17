import React from "react";
import styled from "styled-components";

const Title = (props) => {
  return <Header>{props.text}</Header>;
};

export default Title;

const Header = styled.div`
  width: 100%;

  margin: 5vh 0 20vh 0;
  font-size: 46px;
  font-family: Veneer;
  text-align: center;
`;
