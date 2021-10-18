import React from "react";
import styled from "styled-components";

function Textarea({ handelChange,  Value}) {
  return (
    <StyledTextArea
      value={Value}
      onChange={handelChange}
      autoFocus
      maxLength="500"
      placeholder="Type your massage"
      required
    ></StyledTextArea>
  );
}

export default Textarea;

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
