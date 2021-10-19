import React, { useState } from "react";
import GlobalStyles from "./styles/Global";
import { Body, Container, Keyboard } from "./styles/Styled";
import Monitor from "./Monitor/Monitor";
import { ButtonsData, ContactFormData } from "./Monitor/MonitorData";
import Button from "./Button";
import ContactForm from "./ContactForm/ContactForm";

function App() {
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
  // Function for back to Home section
  const backto = (event) => {
    if (MonitorData.inputData !== "") {
      alert("All data you input will be lost, are you sure ?");
    }
    ResetMonitor(MonitorData, setMonitorData);
    event.target.blur();
  };
  return (
    <>
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
          />
          <Keyboard button={MonitorData.page}>
            {MonitorData.page === "contact" ? (
              <>
                <Button
                  Text="Back"
                  Type="button"
                  Icon="fa-arrow-alt-circle-left"
                  className="backBtn"
                  handelClicked={backto}
                />
                <ContactForm
                  monitorState={MonitorData}
                  setMonitorState={setMonitorData}
                />
              </>
            ) : (
              <>
                {ButtonsData.map((button) => (
                  <Button
                    key={button.id}
                    Type="button"
                    Text={button.Text}
                    Icon={button.Icon}
                    handelClicked={() =>
                      TabCommand(
                        button.command,
                        button.MonitorData,
                        button.typingSpeed,
                        button.display,
                        button.page
                      )
                    }
                  />
                ))}
              </>
            )}
          </Keyboard>
        </Container>
      </Body>
    </>
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

function ResetMonitor(MonitorData, setMonitorData) {
  setMonitorData({
    ...MonitorData,
    command: null,
    massage: "Welcome to my website",
    speed: 100,
    display: null,
    page: "home",
    inputData: "",
    errorData: null,
  });
}
