import React, { useState } from "react";
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
    massage: "Welcome to my website",
    speed: 100,
    display: null,
    page: "home",
    inputData: "",
    errorData: null,
  });
  // Function for keyboard command
  const TabCommand = (command, massage, speed, display, page) => {
    // play sound
    new Audio(sound).play();
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
                    onClick={() =>
                      TabCommand(
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
    errorData: null,
  });
}
