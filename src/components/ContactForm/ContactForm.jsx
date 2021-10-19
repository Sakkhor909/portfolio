import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "../Button";

function ContactForm({ monitorState, setMonitorState }) {
  const [ContcatData, setContcatData] = useState({
    name: null,
    email: null,
    massage: null,
  });
  const [Step, setStep] = useState(1);
  const [InputState, setInputState] = useState({
    inputtype: "text",
    Placeholder: "Type your name here",
  });

  const showContactData = (event) => {
    setMonitorState({
      ...monitorState,
      inputData: event.target.value,
    });
  };

  const handelSubmit = (event, Step) => {
    event.preventDefault();
    let inputValue = event.target[0].defaultValue.trim();
    setStep((prevValue) => {
      if (prevValue === 1) {
        setInputState({
          ...InputState,
          inputtype: "email",
          Placeholder: "Type Your Email Here...",
        });
        setContcatData({
          ...ContcatData,
          name: inputValue,
        });
        setMonitorState({
          ...monitorState,
          inputData: "",
          command: `Your Email`,
        });
      }
      if (prevValue === 2) {
        setMonitorState({
          ...monitorState,
          inputData: "",
          command: `Your Massage`,
        });
        setInputState({
          ...InputState,
          inputtype: "textarea",
          Placeholder: "Type Your Massage Here...",
        });
        setContcatData({
          ...ContcatData,
          email: inputValue,
        });
      }
      if (prevValue === 3) {
        setMonitorState({
          ...monitorState,
          inputData: "",
          command: null,
          massage: `I will be text you soon, Thank you`,
        });
        setInputState({
          ...InputState,
          inputtype: "",
          Placeholder: "",
        });
        setContcatData({
          ...ContcatData,
          massage: inputValue,
        });
      }
      return (Step = prevValue + 1);
    });
    event.target[0].focus();
  };

  let Form = null;

  if (Step !== 4) {
    Form = (
      <StyledContactForm onSubmit={(event) => handelSubmit(event, Step)}>
        <Input
          inputtype={InputState.inputtype}
          handelChange={showContactData}
          value={monitorState.inputData}
          placeholder={InputState.Placeholder}
        />
        <Button
          Type="submit"
          Icon="fa-greater-than"
          buttonName={monitorState.clicked}
        />
      </StyledContactForm>
    );
  }

  return Form;
}

export default ContactForm;

export const StyledContactForm = styled.form`
  display: flex;
`;
