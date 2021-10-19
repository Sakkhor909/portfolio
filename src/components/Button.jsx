import React from "react";
import styled from "styled-components";

function Buttons({ Text, Icon, handelClicked, buttonName, className, Type }) {
  if (buttonName === "contact") {
    className = "inputBtn";
  } else {
    null;
  }
  return (
    <KeyButton onClick={handelClicked} className={className} type={Type}>
      <i className={`fa-solid ${Icon}`}></i> {Text}
    </KeyButton>
  );
}

export default Buttons;

const KeyButton = styled.button`
  background: #bababa;
  box-shadow: 2px 3px 0px 2px rgb(0 0 0 / 25%);
  text-align: center;
  padding: 1rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.5rem;
  transition: 0.3s;
  outline: none;
  border: none;
  @media (hover: hover) {
    &:hover,
    :focus {
      color: #35b833;
      background: rgba(255, 255, 255, 0.6);
      transform: translateY(-5px);
      box-shadow: 4px 6px 0px 2px rgb(0 0 0 / 25%);
    }
    &:active {
      transform: translateY(5px);
      box-shadow: 1px 2px 0px 2px rgb(0 0 0 / 25%);
    }
  }
  @media (hover: none) {
    &:focus {
      color: #35b833;
      background: rgba(255, 255, 255, 0.6);
      transform: translateY(-5px);
      box-shadow: 4px 6px 0px 2px rgb(0 0 0 / 25%);
    }
    &:active {
      transform: translateY(5px);
      box-shadow: 1px 2px 0px 2px rgb(0 0 0 / 25%);
    }
  }
  @media only screen and (max-width: 750px) {
    font-size: 1rem;
    margin-left: 0%;
  }
`;
