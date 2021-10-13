import React, { useState } from "react";
import GlobalStyles from "./styles/Global";
import { Body, Container, Row, Keyboard } from "./styles/Styled";
import Monitor from "./Monitor/Monitor";
import MyImage from "./MyImage";
import Button from "./Button";
function App() {
  const [Massage, setMassage] = useState("Welcome to my website");

  const showName = () => {
    setMassage("My name is Minhajur Rahman");
  };

  return (
    <>
      <GlobalStyles />
      <Body>
        <Container>
          <Row>
            <MyImage />
            <Monitor Massage={Massage} />
          </Row>
          <Keyboard>
            <Button Text="Name" Icon="fa-user" handelClicked={showName} />
            <Button Text="Profession" Icon="fa-user-tie" />
            <Button Text="Education" Icon="fa-user-graduate" />
            <Button Text="Projects" Icon="fa-diagram-project" />
          </Keyboard>
        </Container>
      </Body>
    </>
  );
}

export default App;
