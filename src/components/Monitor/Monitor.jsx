// Need to work on my own type effect
import React from "react";
import {
  StyledMonitor,
  MonitorMassage,
  Command,
  Blinker,
  ErroeData,
} from "./Monitor.styled";
import MyImage from "../container/MyImage.styled";
import image from "../../assets/images/MyImage.jpg";
import Typewriter from "typewriter-effect";
import Button from "../container/Button.styled";
import Icon from "../container/Icon";
import Sound from "../../assets/sound/click.wav";
// import Type from "./Type"; my own type component
const ClickSound = new Audio(Sound);

function Monitor({
  command,
  Massage,
  speed,
  Display,
  inputData,
  errorData,
  setTheme,
}) {
  const ChangeTheme = () => {
    // play sound
    ClickSound.play();
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
      <MyImage src={image} alt="my image" />
      <Button name="themeButton" onClick={ChangeTheme} title="Change Theme">
        <Icon name={themeButtonIcon} />
      </Button>
      <MonitorMassage Display={Display}>
        {/* <Type speed={speed} command={command}>
          {Massage}
        </Type> */}
        <Command>&gt; {command && `${command}: `}</Command>
        <Typewriter
          options={{
            strings: Massage,
            autoStart: true,
            delay: speed,
            cursor: null,
          }}
        />
        <code>{inputData}</code>
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
