import styled from "styled-components";

export const StyledMonitor = styled.div`
  width: 70%;
  height: 50%;
  margin: -20px auto;
  @media (orientation: portrait) {
    margin: -12px auto;
  }
  background: #000000;
  border: 15px inset rgb(145 145 145);
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

export const SocialLinkSection = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialLink = styled.a`
  .linkedin-icon {
    font-size: 3rem;
    margin-right: 20px;
    color: #0a66c2;
    transform: perspective(500px) scale3d(1, 1, 1) translateZ(100px);
    transition: all.5s transform ease-in;
    &:hover {
      transform: scale3d(1.3, 1.3, 1.5);
    }
    @media (orientation: portrait) {
      font-size: 2rem;
    }
  }
`;

export const MonitorMassage = styled.div`
  width: 100%;
  color: #35b833;
  font-size: 4vmin;
  font-weight: normal;
  user-select: none;
  padding: 4% 0 0 4%;
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

export const Command = styled.span`
  color: yellowgreen;
`;

export const Blinker = styled.span`
  animation: blinker 1s infinite;

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;

export const ErroeData = styled.div`
  color: red;
  margin-top: 10px;
  font-weight: lighter;
  font-size: 1.2rem;
`;
