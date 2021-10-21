import React from "react";
import {
  StyledMonitor,
  MonitorMassage,
  Blinker,
  ErroeData,
} from "./Monitor.styled";
import MyImage from "../MyImage";
import Typewriter from "typewriter-effect";
import Button from "../container/Button";
import Icon from "../container/Icon";

function Monitor({ command, Massage, speed, Display, inputData, errorData }) {

  const themeChange = () => {
     console.log("working");
  }

  return (
    <StyledMonitor>
      <MyImage />
      <Button name="themeButton" onClick={themeChange}>
        <Icon name="moon" />
      </Button>
      <MonitorMassage Display={Display}>
        <span className="command">&gt; {command && `${command}: `}</span>
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
