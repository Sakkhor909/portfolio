import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.BodyColor};
  padding: 4% 6%;
  transition: all 0.5s ease;
  overflow: hidden;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  perspective: 400px;
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
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 10px;
  padding: 1rem;
  transform-style: preserve-3d;
  transform: rotateX(20deg) translateZ(-20px);
  backface-visibility: visible;
  @media only screen and (max-width: 750px) {
    height: 40vh;
    justify-content: ${({ button }) =>
      button == "contact" ? "center" : "space-around"};
  }
`;
