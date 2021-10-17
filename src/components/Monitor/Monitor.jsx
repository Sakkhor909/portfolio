import React from "react";
import styled from "styled-components";
import { StyledMonitor, MonitorMassage } from "./Monitor.styled";
import MyImage from "../MyImage";
import Typewriter from "typewriter-effect";

function Monitor({ Massage, speed, Display, name }) {
  return (
    <StyledMonitor>
      <MyImage />
      <MonitorMassage Display={Display}>
        &gt;{" "}
        <Typewriter
          options={{
            strings: Massage,
            autoStart: true,
            delay: speed,
            cursor: null,
          }}
        />
        <span>{name}</span>
        <Blinker>|</Blinker>
      </MonitorMassage>
    </StyledMonitor>
  );
}

export default Monitor;

const Blinker = styled.span`
  animation: blinker 1s infinite;

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;
