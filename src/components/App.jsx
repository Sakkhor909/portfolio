import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import themes from "../theme";
import GlobalStyles from "./styles/Global";
import { Body, Container, Keyboard } from "./styles/Styled";
import Monitor from "./Monitor/Monitor";
import { ButtonsData } from "../config";
import Button from "./container/Button.styled";
import Icon from "./container/Icon";
import ContactStateKeyboard from "./ContactStateKeyboard";
import sound from "../assets/sound/click.wav";

const ClickSound = new Audio(sound);

function App() {
  // defining theme value
  if (typeof Storage !== "undefined") {
    if (!localStorage.theme) {
      localStorage.setItem("theme", "light");
    }
  }
  const [theme, setTheme] = useState(localStorage.theme);
  // Defining Monitor Data state
  const [MonitorData, setMonitorData] = useState({
    command: null,
    massage: ``,
    speed: 100,
    display: null,
    page: "home",
    inputData: "",
    errorData: null
  });

  // on first load click the first button
  // To DO: needs to refactor in react
  useEffect(() => {
    MonitorData.command == null
      ? document.querySelector(".KeyButton").click()
      : false;
    if (MonitorData.command == "") {
      document.querySelectorAll(".KeyButton").forEach((element) => {
        element.classList.remove("active");
      });
      document.querySelector(".KeyButton").classList.add("active");
    } else if (MonitorData.command == "Education") {
      document.querySelectorAll(".KeyButton").forEach((element) => {
        element.classList.remove("active");
      });
      document.querySelectorAll(".KeyButton")[1].classList.add("active");
    } else if (MonitorData.command == "Skill") {
      document.querySelectorAll(".KeyButton").forEach((element) => {
        element.classList.remove("active");
      });
      document.querySelectorAll(".KeyButton")[2].classList.add("active");
    } else if (MonitorData.command == "Projects") {
      document.querySelectorAll(".KeyButton").forEach((element) => {
        element.classList.remove("active");
      });
      document.querySelectorAll(".KeyButton")[3].classList.add("active");
    } else {
      document.querySelectorAll(".KeyButton").forEach((element) => {
        element.classList.remove("active");
      });
    }
  }, [MonitorData]);

  // Function for keyboard command
  const TabCommand = (e, command, massage, speed, display, page) => {
    // play sound
    ClickSound.play();
    // Changing monitor data
    ShowToMonitor(
      MonitorData,
      setMonitorData,
      command,
      massage,
      speed,
      display,
      page
    );
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Body>
        <Container>
          <Monitor
            command={MonitorData.command}
            Massage={MonitorData.massage}
            speed={MonitorData.speed}
            Display={MonitorData.display}
            inputData={MonitorData.inputData}
            errorData={MonitorData.errorData}
            setTheme={setTheme}
          />
          <Keyboard button={MonitorData.page}>
            {MonitorData.page === "contact" ? (
              <ContactStateKeyboard
                MonitorData={MonitorData}
                setMonitorData={setMonitorData}
              />
            ) : (
              <>
                {ButtonsData.map((button) => (
                  <Button
                    key={button.id}
                    Type="button"
                    className={`KeyButton`}
                    onClick={(e) =>
                      TabCommand(
                        e,
                        button.command,
                        button.MonitorData,
                        button.typingSpeed,
                        button.display,
                        button.page
                      )
                    }
                  >
                    <Icon name={button.Icon} /> <kbd>{button.Text}</kbd>
                  </Button>
                ))}
              </>
            )}
          </Keyboard>
        </Container>
      </Body>
    </ThemeProvider>
  );
}

export default App;

function ShowToMonitor(
  state,
  setFunc,
  command,
  massage,
  speed = 100,
  display = null,
  page = "home"
) {
  setFunc({
    ...state,
    command: command,
    massage: massage,
    speed: speed,
    display: display,
    page: page,
    inputData: "",
    errorData: null
  });
}
