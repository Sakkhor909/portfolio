import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "../Button";

function ContactForm({ monitorState, setMonitorState }) {
  // Defining The contact data state
  const [ContcatData, setContcatData] = useState({
    name: null,
    email: null,
    massage: null,
    inputName: "name",
  });
  //Defining validation state
  const [validation, setvalidation] = useState(true);
  // Defining the step of the form
  const [Step, setStep] = useState(1);
  // Defining the input state of the form
  const [InputState, setInputState] = useState({
    inputtype: "text",
    Placeholder: "Type your name here",
  });

  const handelChange = (event) => {
    let inputData = event.target.value;
    const Name = event.target.name;
    // Showing data to monitor
    setMonitorState({
      ...monitorState,
      inputData: inputData,
      errorData: null,
    });
    // setting the contact data into state
    setContcatData({
      ...ContcatData,
      [Name]: inputData,
    });
  };
  // Function for the submission of the contact data
  const handelSubmit = (event, Step) => {
    event.preventDefault();
    const inputValue = event.target[0].defaultValue.trim();
    const validate = Validation(monitorState, setMonitorState, inputValue);
    if (validate) {
      chnagingstep(
        Step,
        setStep,
        InputState,
        setInputState,
        ContcatData,
        setContcatData,
        monitorState,
        setMonitorState
      );
    } else {
      return false;
    }
    event.target[0].focus();
  };

  let Form = null;

  if (Step !== 4) {
    Form = (
      <StyledContactForm onSubmit={(event) => handelSubmit(event, Step)}>
        <Input
          inputtype={InputState.inputtype}
          handelChange={handelChange}
          value={monitorState.inputData}
          placeholder={InputState.Placeholder}
          name={ContcatData.inputName}
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

function Validation(monitorState, setMonitorState, Value) {
  if (Value == "") {
    setMonitorState({
      ...monitorState,
      errorData: "You can't leave it blank",
    });
    return false;
  } else if (Value.length < 3) {
    setMonitorState({
      ...monitorState,
      errorData: "Yow name is less then two letter ?",
    });
    return false;
  } else {
    return true;
  }
}

function chnagingstep(
  Step,
  setStep,
  InputState,
  setInputState,
  ContcatData,
  setContcatData,
  monitorState,
  setMonitorState
) {
  setStep((prevValue) => {
    if (prevValue === 1) {
      setInputState({
        ...InputState,
        inputtype: "email",
        Placeholder: "Type Your Email Here...",
      });
      setContcatData({
        ...ContcatData,
        inputName: "email",
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
        inputName: "massage",
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
        inputName: "",
      });
    }
    return (Step = prevValue + 1);
  });
}
