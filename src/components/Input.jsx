import React from "react";
import styled from "styled-components";

function Input() {
  return <StyledInput type="text" placeholder="Type your name here" />;
}

export default Input;

const StyledInput = styled.input`
  outline: none;
  width: 50%;
  height: 20%;
  box-shadow: 0px 3px 0px 2px rgb(0 0 0 / 25%);
  font-size: large;
  border: 1px solid rgb(0 0 0 / 25%);
`;
