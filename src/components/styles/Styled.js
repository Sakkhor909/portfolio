import styled from "styled-components";

export const Body = styled.body`
     width: 100%;
     height: 100vh;
     background-color: ${({theme}) => theme.color.BodyColor };
     padding: 4% 6%;
`;

export const Container = styled.div`
   width: 100%;
   height: 100%;
`;

export const Row = styled.div`
    display: flex;
    height: 50%;
`;

export const MyImageCSS = styled.img`
     width: 20%;
     min-width: 250px;
     border-radius: 50px;
`;

export const Monitor = styled.div`
     width: 80%;
     background-color: black;
`;

export const ThemeSwitcher = styled.button`
     background-color: green;
`;

export const MonitorMassage = styled.div`
     color: white;
`;

export const Keyboard = styled.div`
     width: 100%;
     height: 50%;
     display: flex;
     justify-content: center;
     align-items: center;
     background: rgba(255, 255, 255, 0.6);
     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 5px 20px rgba(0, 0, 0, 0.25);
     border-radius: 10px;
`;