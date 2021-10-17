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
  position: relative;
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
  & .backBtn {
    position: absolute;
    top: 0;
    left: 0;
  }
  @media only screen and (max-width: 750px) {
    height: 40vh;
    justify-content: ${({ button }) =>
      button == "contact" ? "center" : "space-around"};
  }
`;
