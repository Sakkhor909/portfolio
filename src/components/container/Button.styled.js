import styled, { css } from "styled-components";
import { Color } from "../../theme";
const Button = styled.button`
  background: #bababa;
  box-shadow: 2px 3px 0px 2px ${Color.primaryColor},
    44px 8px 0px ${Color.primaryColor} inset;
  text-align: center;
  padding: 1rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.5rem;
  transition: 0.3s;
  outline: none;
  border: none;

  ${({ name }) =>
    name === "backButton" &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      box-shadow: 2px 3px 0px 2px ${Color.primaryColor};
      @media only screen and (max-width: 750px) {
        padding: 5px;
        box-shadow: none;
      }
    `}
  ${({ name }) =>
    name === "nextInput" &&
    css`
      border-radius: 0px 10px 10px 0px;
      box-shadow: 0px 3px 0px 2px rgb(0 0 0 / 25%);
    `}
  @media (hover: hover) {
    &:hover,
    :focus {
      color: ${Color.seconderyColor};
      background: #e8ede6;
      transform: translateY(-5px);
      box-shadow: 4px 6px 0px 2px ${Color.primaryColor};
    }
    &:active {
      transform: translateY(5px);
      box-shadow: 1px 2px 0px 2px rgb(0 0 0 / 25%);
    }
  }
  @media (hover: none) {
    &:focus {
      color: ${Color.seconderyColor};
      background: #e8ede6;
      transform: translateY(-5px);
      box-shadow: 4px 6px 0px 2px rgb(0 0 0 / 25%);
    }
    &:active {
      transform: translateY(5px);
      box-shadow: 1px 2px 0px 2px rgb(0 0 0 / 25%);
    }
  }
  ${({ name }) =>
    name === "themeButton" &&
    css`
      position: absolute;
      left: 0;
      top: 0;
      padding: 5px;
      box-shadow: none;
      @media (hover: hover) {
        &:hover,
        :focus {
          box-shadow: none;
          transform: translateY(0px);
        }
        &:active {
          transform: translateY(5px);
        }
      }
    `}
  @media only screen and (max-width: 750px) {
    font-size: 1rem;
    margin-left: 0%;
  }
`;

export default Button;
