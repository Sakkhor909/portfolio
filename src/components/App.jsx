import React, { useState } from "react";
import GlobalStyles from "./styles/Global";
import { Body, Container, Keyboard } from "./styles/Styled";
import Monitor from "./Monitor/Monitor";
import Button from "./Button";
import ContactForm from "./ContactForm/ContactForm";

function App() {
  const [MonitorData, setMonitorData] = useState({
    massage: "Welcome to my website",
    speed: 100,
    display: null,
    clicked: null,
    contactName: null,
  });

  const showName = () => {
    setMonitorData({
      ...MonitorData,
      massage: "My Name is Minhajur Rahman",
      display: null,
    });
  };

  const showProfession = () => {
    setMonitorData({
      ...MonitorData,
      massage: "I am a Full Stack Developer",
      display: null,
    });
  };

  const showEducation = () => {
    setMonitorData({
      ...MonitorData,
      massage: `I have studied Bachelor of Business Administration (BBA) with a major in Management Information system (MIS) graduated from <a href="https://daffodilvarsity.edu.bd/" target="_blank"> Daffodil Internation University  </a> `,
      speed: 40,
      display: null,
    });
  };

  const showProjects = () => {
    setMonitorData({
      ...MonitorData,
      massage: `<ul>
                <li> Raw Javascript : 
                <a href="https://sakkhor909.github.io/javascript-projects/webcolorgame/" target="_blank"> Web Color Game 
                </a>
                </li>
                <li> Live Project : <a href="https://khuji.net/" target="_blank"> Khuji </a> </li>
                </ul>`,
      speed: 70,
      display: "inline-block",
    });
  };

  const showContactForm = () => {
    setMonitorData({
      ...MonitorData,
      massage: `
               Your Name :
               `,
      speed: 70,
      clicked: "contact",
    });
  };


  return (
    <>
      <GlobalStyles />
      <Body>
        <Container>
          <Monitor
            Massage={MonitorData.massage}
            speed={MonitorData.speed}
            Display={MonitorData.display}
            name={MonitorData.contactName}
          />
          <Keyboard button={MonitorData.clicked}>
            {MonitorData.clicked ? (
              <>
                <Button
                  Text="Back"
                  Icon="fa-arrow-alt-circle-left"
                  className="backBtn"
                />
               <ContactForm State={MonitorData} setState={setMonitorData} />
              </>
            ) : (
              <>
                <Button Text="Name" Icon="fa-user" handelClicked={showName} />
                <Button
                  Text="Profession"
                  Icon="fa-user-tie"
                  handelClicked={showProfession}
                />
                <Button
                  Text="Education"
                  Icon="fa-user-graduate"
                  handelClicked={showEducation}
                />
                <Button
                  Text="Projects"
                  Icon="fa-diagram-project"
                  handelClicked={showProjects}
                />
                <Button
                  Text="Contact"
                  Icon="fa-envelope"
                  handelClicked={showContactForm}
                />
              </>
            )}
          </Keyboard>
        </Container>
      </Body>
    </>
  );
}

export default App;
