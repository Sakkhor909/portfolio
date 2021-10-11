import React from 'react';
import GlobalStyles from './styles/Global';
import {Body, Container, Row, Monitor, ThemeSwitcher, MonitorMassage, Keyboard} from './styles/Styled';
import MyImage from './MyImage';
import Button from './Button';

function App() {
    return (
        <>
        <GlobalStyles />
        <Body>
            <Container className={`container`}>
                <Row>
                <MyImage/>
                <Monitor>
                  <ThemeSwitcher></ThemeSwitcher>
                  <MonitorMassage>Welcome to my website</MonitorMassage>
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
