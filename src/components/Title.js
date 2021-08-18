import React from "react";
import styled from "styled-components";

const Title = ({ text }) => {
  return <Header>{text}</Header>;
};

export default Title;

const Header = styled.div`
  width: 100%;

  margin: 5vh 0 20vh 0;

  text-align: center;
  font-family: Veneer;
  font-size: 46px;
`;
