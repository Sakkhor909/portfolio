import styled from "styled-components";

export const StyledMonitor = styled.div`
  width: 70%;
  height: 50%;
  margin: 0 auto;
  background: #000000;
  box-shadow: 7px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media only screen and (max-width: 750px) {
    width: 100%;
    min-height: 25vh;
  }
`;

export const MonitorMassage = styled.h1`
  color: #35b833;
  font-size: 4vmin;
  font-weight: normal;
  user-select: none;
  padding: 5%;
  margin-right: 10%;
  line-height: 1.5rem;
  @media (orientation: portrait) {
    margin-right: 0%;
  }
  .Typewriter {
    display: inline;
    .Typewriter__wrapper {
      display: ${(Props) => Props.Display};
      ul {
        list-style-position: inside;
        li {
          padding: 10px;
        }
      }
    }
  }
`;
