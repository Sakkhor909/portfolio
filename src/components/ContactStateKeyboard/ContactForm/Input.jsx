import React from "react";
import styled from "styled-components";

function Input({
  name,
  inputtype,
  value,
  handelChange,
  placeholder,
  handelFocus,
  handelBlur,
}) {
  let inputElement = null;
  switch (inputtype) {
    case "text":
      inputElement = (
        <StyledInput
          name={name}
          type="text"
          value={value}
          onChange={handelChange}
          onFocus={handelFocus}
          onBlur={handelBlur}
          autoComplete="off"
          required
          placeholder={placeholder}
          autoFocus
          maxLength="30"
          pattern="[a-zA-z ]+"
          title="Letters only"
        />
      );
      break;
    case "email":
      inputElement = (
        <StyledInput
          name={name}
          type="email"
          value={value}
          onChange={handelChange}
          onFocus={handelFocus}
          autoComplete="off"
          required
          placeholder={placeholder}
          maxLength="30"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
          title="Enter a valid email address"
        />
      );
      break;
    case "textarea":
      inputElement = (
        <StyledTextArea
          name={name}
          onChange={handelChange}
          onFocus={handelFocus}
          value={value}
          placeholder={placeholder}
          required
          autoFocus
        />
      );
      break;
    case "hidden":
      inputElement = <StyledInput name={name} type="hidden" value={value} />;
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
