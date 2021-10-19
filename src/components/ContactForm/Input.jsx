import React from "react";
import styled from "styled-components";

function Input({ inputtype, value, handelChange, placeholder }) {
  let inputElement = null;
  switch (inputtype) {
    case "text":
      inputElement = (
        <StyledInput
          type="text"
          value={value}
          onChange={handelChange}
          autoComplete="off"
          required
          placeholder={placeholder}
          autoFocus
          minLength="3"
          maxLength="25"
        />
      );
      break;
    case "email":
      inputElement = (
        <StyledInput
          type="email"
          value={value}
          onChange={handelChange}
          autoComplete="off"
          required
          placeholder={placeholder}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <StyledTextArea
          onChange={handelChange}
          value={value}
          placeholder={placeholder}
          required
          autoFocus
        />
      );
      break;
    default:
      inputElement = null;
  }

  return inputElement;
}

export default Input;

const StyledInput = styled.input`
  outline: none;
  box-shadow: 0px 3px 0px 2px rgb(0 0 0 / 25%);
  font-size: large;
  border: 1px solid rgb(0 0 0 / 25%);
  width: 40vw;
  @media only screen and (max-width: 750px) {
    width: initial;
  }
  &:focus {
    border: 1px solid #35b833;
  }
`;

const StyledTextArea = styled.textarea`
  padding: 1rem;
  height: 7em;
  width: 45em;
  outline: none;
  box-shadow: 0px 3px 0px 2px rgb(0 0 0 / 25%);
  font-size: large;
  border: 1px solid rgb(0 0 0 / 25%);
  @media only screen and (max-width: 750px) {
    width: initial;
  }
  &:focus {
    border: 1px solid #35b833;
  }
`;
