import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.BodyColor};
  padding: 4% 6%;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;





export const Keyboard = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ button }) =>
    button == "contact" ? "center" : "space-evenly"};
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 6px 9px 0px 2px rgb(0 0 0 / 25%);
  border-radius: 10px;
  padding: 1rem;
  & .inputBtn {
    height: 20%;
    border-radius: 0px 10px 10px 0px;
  }
  @media only screen and (max-width: 750px) {
    height: 40vh;
    justify-content: ${({ button }) =>
    button == "contact" ? "center" : "space-around"};
  }
`;

export const KeyButton = styled.button`
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
  @media only screen and (max-width: 750px) {
    font-size: 1rem;
    margin-left: 0%;
  }
`;
