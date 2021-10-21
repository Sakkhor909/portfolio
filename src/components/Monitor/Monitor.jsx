import React from "react";
import {
  StyledMonitor,
  MonitorMassage,
  Blinker,
  ErroeData,
} from "./Monitor.styled";
import MyImage from "../MyImage";
import Typewriter from "typewriter-effect";
import Button from "../container/Button.styled";
import Icon from "../container/Icon";

function Monitor({ command, Massage, speed, Display, inputData, errorData, setTheme }) {
  const ChangeTheme = () => {
    if (localStorage.theme == "light") {
      if (typeof Storage !== "undefined") {
        localStorage.theme = "dark";
        setTheme("dark");
      }
    } else {
      if (typeof Storage !== "undefined") {
        localStorage.theme = "light";
        setTheme("light");
      }
    }
  };
  const themeButtonIcon = localStorage.theme == "light" ? "moon" : "sun";

  return (
    <StyledMonitor>
      <MyImage />
      <Button name="themeButton" onClick={ChangeTheme}>
        <Icon name={themeButtonIcon} />
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
