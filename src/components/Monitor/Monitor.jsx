import React from "react";
import { StyledMonitor, MonitorMassage } from "./Monitor.styled";
import Typewriter from "typewriter-effect";

function Monitor({ Massage, speed, Display }) {
  return (
    <StyledMonitor>
      <MonitorMassage Display={Display}>
        &gt; <Typewriter 
          options={{
            strings: Massage,
            autoStart: true,
            delay: speed
          }}
       />
      </MonitorMassage>
    </StyledMonitor>
  );
}

export default Monitor;

