require("dotenv").config();
import React, { useState, useRef } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import Input from "./Input";
import Button from "../container/Button.styled";
import Icon from "../container/Icon";
import { init } from "emailjs-com";
init(process.env.REACT_APP_USER_KEY);

function ContactForm({ monitorState, setMonitorState }) {
  const form = useRef();
  // Defining The contact data state
  const [ContcatData, setContcatData] = useState({
    name: "",
    email: "",
    massage: "",
    inputName: "name",
  });
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
  const handelSubmit = (event, Step, form) => {
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
        setMonitorState,
        form
      );
    } else {
      return false;
    }
    event.target[0].focus();
  };

  let FormHTML = null;

  if (Step !== 4) {
    FormHTML = (
      <StyledContactForm
        ref={form}
        onSubmit={(event) => handelSubmit(event, Step, form)}
      >
        <Input
          inputtype={InputState.inputtype}
          handelChange={handelChange}
          value={monitorState.inputData}
          placeholder={InputState.Placeholder}
          name={ContcatData.inputName}
        />
        <Input inputtype="hidden" name="Hname" value={ContcatData.name} />
        <Input inputtype="hidden" name="Hemail" value={ContcatData.email} />
        <Button Type="submit" name="nextInput">
          {" "}
          <Icon name="greater-than" />{" "}
        </Button>
      </StyledContactForm>
    );
  }

  return FormHTML;
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
  setMonitorState,
  form
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
        inputName: "message",
      });
    }
    if (prevValue === 3) {
      setInputState({
        ...InputState,
        inputtype: "",
        Placeholder: "",
      });
      setContcatData({
        ...ContcatData,
        inputName: "",
      });
      setMonitorState({
        ...monitorState,
        inputData: "",
        command: "",
        massage: `Sending...`,
      });
      sendEmail(form, monitorState, setMonitorState);
    }
    return (Step = prevValue + 1);
  });
}

const sendEmail = (form, monitorState, setMonitorState) => {
  emailjs
    .sendForm(
      process.env.REACT_APP_SERVICE_KEY,
      process.env.REACT_APP_TEMPLATE_KEY,
      form.current,
      process.env.REACT_APP_USER_KEY
    )
    .then(
      (result) => {
        if (result.text == "OK") {
          setMonitorState({
            ...monitorState,
            inputData: "",
            command: "",
            massage: `Your email has been send. I will be reply you soon, Thank you`,
          });
        }
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
        setMonitorState({
          ...monitorState,
          inputData: "",
          command: "",
          massage: `Something went wrong, Retry or send me email at sakkhor909@gmail.com`,
        });
      }
    );
};
