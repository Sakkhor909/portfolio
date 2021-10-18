import React, { useRef, useEffect } from "react";
import styled from "styled-components";

function Input({ handelChange, Value, placeholder, type }) {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <StyledInput
      ref={inputRef}
      type={type}
      placeholder={placeholder}
      value={Value}
      onChange={handelChange}
      autoComplete="off"
      required
    />
  );
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
