import React from "react";
import { StyledMonitor, MonitorMassage } from "./Monitor.styled";
import Typewriter from "typewriter-effect";

function Monitor({ Massage }) {
  return (
    <StyledMonitor>
      <MonitorMassage>
        &gt; <Typewriter 
          options={{
            strings: Massage,
            autoStart: true
          }}
       />
      </MonitorMassage>
    </StyledMonitor>
  );
}

export default Monitor;
