import React, { useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import Button from "../container/Button.styled";
import Icon from "../container/Icon";
import Sound from '../../assets/sound/click.wav';
function ContactStateKeyboard({ MonitorData, setMonitorData }) {
  // Defining The contact data state
  const [ContcatData, setContcatData] = useState({
    name: "",
    email: "",
    massage: "",
    inputName: "name",
  });
  // Function for back to Home section
  const backto = (event) => {
    // need to include step
    if (MonitorData.inputData !== "") {
      const clickOK = confirm(
        "All data you input will be lost, are you sure ?"
      );
      if (clickOK) {
        ResetMonitor(MonitorData, setMonitorData);
        event.target.blur();
      } else {
        return;
      }
    } else {
    // play sound
    new Audio(Sound).play();
      ResetMonitor(MonitorData, setMonitorData);
      event.target.blur();
    }
  };
  // Function for changing input
  const handelChange = (event) => {
    let inputData = event.target.value;
    const Name = event.target.name;
    // Showing data to monitor
    setMonitorData({
      ...MonitorData,
      inputData: inputData,
      errorData: null,
    });
    // setting the contact data into state
    setContcatData({
      ...ContcatData,
      [Name]: inputData,
    });
  };
  return (
    <>
      <Button type="button" name="backButton" onClick={backto} title="Back">
        <Icon name="arrow-alt-circle-left" />
      </Button>
      <ContactForm
        monitorState={MonitorData}
        setMonitorState={setMonitorData}
        ContcatData={ContcatData}
        setContcatData={setContcatData}
        handelChange={handelChange}
      />
    </>
  );
}

export default ContactStateKeyboard;

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
