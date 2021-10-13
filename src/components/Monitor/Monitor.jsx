import React from "react";
import { StyledMonitor, MonitorMassage } from "./Monitor.styled";
import Typewriter from "typewriter-effect";

function Monitor({ Massage }) {

  return (
    <StyledMonitor>
      <MonitorMassage>
        &gt; <Typewriter onInit={(typewriter) => {
            typewriter.typeString(Massage).start()
        }} />
      </MonitorMassage>
    </StyledMonitor>
  );
}

export default Monitor;
