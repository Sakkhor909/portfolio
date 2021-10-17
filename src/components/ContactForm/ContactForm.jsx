import React from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "../Button";

function ContactForm({ State, setState }) {
  const showContactData = (event) => {
    setState({
      ...State,
      contactName: event.target.value,
    });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <StyledContactForm onSubmit={handelSubmit}>
      <Input handelChange={showContactData} Value={State.contactName} />
      <Button Type="submit" Icon="fa-greater-than" buttonName={State.clicked} />
    </StyledContactForm>
  );
}

export default ContactForm;

export const StyledContactForm = styled.form`
  display: flex;
`;
