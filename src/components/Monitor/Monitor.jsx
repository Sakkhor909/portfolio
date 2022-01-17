// Need to work on my own type effect
import React from "react";
import {
  StyledMonitor,
  SocialLinkSection,
  SocialLink,
  MonitorMassage,
  Command,
  Blinker,
  ErroeData
} from "./Monitor.styled";
import UpworkImg from "../container/UpworkImg.styled";
import image from "../../assets/images/upwork.png";
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
  setTheme
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
      <SocialLinkSection>
        <SocialLink
          href="https://www.linkedin.com/in/minhajur-rahman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin linkedin-icon"></i>
        </SocialLink>
        <a
          href="https://www.upwork.com/freelancers/~01c9dc588b478ed0c3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UpworkImg src={image} alt="Upwork" />
        </a>
      </SocialLinkSection>

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
            cursor: null
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
                autoStart: true
              }}
            />
          </ErroeData>
        )}
      </MonitorMassage>
    </StyledMonitor>
  );
}

export default Monitor;
