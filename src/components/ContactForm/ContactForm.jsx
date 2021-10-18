import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "../Button";


function ContactForm({ State, setState }) {
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
    setState({
      ...State,
      inputData: event.target.value,
    });
  };

  const handelSubmit = (event, Step) => {
    event.preventDefault();
    setStep((prevValue) => {
      if (prevValue === 1) {
        setInputState({
          ...InputState,
          inputtype: "email",
          Placeholder: "Type Your Email Here...",
        });
        setContcatData({
          ...ContcatData,
          name: event.target[0].defaultValue,
        });
        setState({
          ...State,
          inputData: "",
          massage: `Your Email : `,
        });
      }
      if (prevValue === 2) {
        setState({
          ...State,
          inputData: "",
          massage: `Your Massage : `,
        });
        setInputState({
          ...InputState,
          inputtype: "textarea",
        });
        setContcatData({
          ...ContcatData,
          email: event.target[0].defaultValue,
        });
      }
      if (prevValue === 3) {
        setState({
          ...State,
          inputData: "",
          massage: `I will be text you soon, Thank you`,
        });
        setInputState({
          ...InputState,
          inputtype: "",
          Placeholder: "",
        });
        setContcatData({
          ...ContcatData,
          massage: event.target[0].defaultValue,
        });
      }
      return (Step = prevValue + 1);
    });
    event.target[0].focus();
  };

  let Form = null;

  if (Step !== 4) {
    Form = <StyledContactForm onSubmit={() => handelSubmit(event, Step)}>
    <Input inputtype={InputState.inputtype} handelChange={showContactData} value={State.inputData} placeholder={InputState.Placeholder} />
    <Button Type="submit" Icon="fa-greater-than" buttonName={State.clicked} />
     </StyledContactForm>
  }

  return Form;
}

export default ContactForm;

export const StyledContactForm = styled.form`
  display: flex;
`;

