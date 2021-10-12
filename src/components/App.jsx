import React from 'react';
import GlobalStyles from './styles/Global';
import {Body, Container, Row, Monitor, MonitorMassage, Keyboard} from './styles/Styled';
import MyImage from './MyImage';
import Button from './Button';

function App() {
    return (
        <>
        <GlobalStyles />
        <Body>
            <Container>
                <Row>
                <MyImage/>
                <Monitor>
                  <MonitorMassage>&gt; Welcome to my website</MonitorMassage>
                </Monitor>
                </Row>
              <Keyboard>
               <Button Text="Name" />
               <Button Text="Profession" />
               <Button Text="Education" />
               <Button Text="Projects" /> 
              </Keyboard>
            </Container>
        </Body>
        </>
    )
}

export default App;
