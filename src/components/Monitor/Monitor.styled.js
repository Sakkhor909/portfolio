import styled from "styled-components";

export const StyledMonitor = styled.div`
  width: 70%;
  margin: 0% 10%;
  background: #000000;
  box-shadow: 7px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 750px) {
    width: 100%;
    min-height: 25vh;
    margin-top: -20%;
  }
`;

export const MonitorMassage = styled.h1`
  color: #35b833;
  font-size: 4vmin;
  font-weight: normal;
  user-select: none;
  .Typewriter {
    display: inline;
  }
`;
