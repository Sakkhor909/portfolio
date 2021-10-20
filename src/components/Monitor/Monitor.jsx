import React from "react";
import {
  StyledMonitor,
  MonitorMassage,
  Blinker,
  ErroeData,
} from "./Monitor.styled";
import MyImage from "../MyImage";
import Typewriter from "typewriter-effect";

function Monitor({ command, Massage, speed, Display, inputData, errorData }) {
  return (
    <StyledMonitor>
      <MyImage />
      <MonitorMassage Display={Display}>
        <span>&gt; {command && `${command}: `}</span>
        <Typewriter
          options={{
            strings: Massage,
            autoStart: true,
            delay: speed,
            cursor: null,
          }}
        />
        <span>{inputData}</span>
        <Blinker>|</Blinker>
        {errorData && (
          <ErroeData>
            {" "}
            &gt;{" "}
            <Typewriter
              options={{
                strings: errorData,
                autoStart: true,
              }}
            />
          </ErroeData>
        )}
      </MonitorMassage>
    </StyledMonitor>
  );
}

export default Monitor;
