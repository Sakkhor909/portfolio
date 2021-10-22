import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.BodyColor};
  padding: 4% 6%;
  transition: all 0.5s ease;
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
  transition: all 0.5s ease;
  justify-content: ${({ button }) =>
    button == "contact" ? "center" : "space-evenly"};
  align-items: center;
  background: ${({ theme }) => theme.KeyboardBodyColor};
  border: ${({ theme }) => theme.Border};
  box-shadow: 6px 9px 0px 2px rgb(0 0 0 / 25%);
  border-radius: 10px;
  padding: 1rem;
  @media only screen and (max-width: 750px) {
    height: 40vh;
    justify-content: ${({ button }) =>
      button == "contact" ? "center" : "space-around"};
  }
`;
