import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "../Button";
import Textarea from "./Textarea";

function ContactForm({ State, setState }) {
  const [ContcatData, setContcatData] = useState({
    name: null,
    email: null,
    massage: null,
  });
  const [Step, setStep] = useState(1);
  const [InputState, setInputState] = useState({
    Type: "text",
    Placeholder: "Type your name here",
  });

  const showContactData = (event) => {
    setState({
      ...State,
      inputData: event.target.value,
    });
  };

  const handelSubmit = (event, Step) => {
    setStep((prevValue) => {
      if (prevValue === 1) {
        setInputState({
          ...InputState,
          Type: "email",
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
          Type: "textarea",
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
          Type: "",
          Placeholder: "",
        });
        setContcatData({
          ...ContcatData,
          massage: event.target[0].defaultValue,
        });
      }
      return (Step = prevValue + 1);
    });

    event.preventDefault();
  };



  return (
    <StyledContactForm onSubmit={() => handelSubmit(event, Step)}>
      {InputState.Type === "text" || InputState.Type === "email" ? (
        <>
        <Input
          handelChange={showContactData}
          Value={State.inputData}
          placeholder={InputState.Placeholder}
          type={InputState.Type}
        />
        <Button Type="submit" Icon="fa-greater-than" buttonName={State.clicked} />
        </>
      ) : InputState.Type === "textarea" ? (
        <>
        <Textarea Value={State.inputData} handelChange={showContactData} />
        <Button Type="submit" Icon="fa-greater-than" buttonName={State.clicked} />
        </>
      ) : null}

    </StyledContactForm>
  );
}

export default ContactForm;

export const StyledContactForm = styled.form`
  display: flex;
`;
