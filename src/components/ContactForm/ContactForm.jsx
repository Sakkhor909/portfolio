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
    Type: "text",
    Placeholder: "Type your name here",
  });

  const showContactData = (event) => {
    setState({
      ...State,
      contactName: event.target.value,
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
      }
      if (prevValue === 2) {
        setContcatData({
          ...ContcatData,
          email: event.target[0].defaultValue,
        });
      }
      return (Step = prevValue + 1);
    });
    setState({
      ...State,
      contactName: "",
      massage: `Your Email : `,
    });
    event.target[1].blur();
    event.target[0].focus();
    event.preventDefault();
  };

  return (
    <StyledContactForm onSubmit={() => handelSubmit(event, Step)}>
      <Input
        handelChange={showContactData}
        Value={State.contactName}
        placeholder={InputState.Placeholder}
        type={InputState.Type}
      />
      <Button Type="submit" Icon="fa-greater-than" buttonName={State.clicked} />
    </StyledContactForm>
  );
}

export default ContactForm;

export const StyledContactForm = styled.form`
  display: flex;
`;
