import React, { useEffect, useState } from "react";
import styled from "styled-components";
function Type({ children, speed = 150, command }) {
  const [Text, setText] = useState("");
  useEffect(() => {
    let index = 0;
    const effect = setInterval(() => {
      if (children) {
        setText(children.slice(0, ++index));
        if (children.length == index) {
          clearInterval(effect);
        }
      } else {
        clearInterval(effect);
      }
    }, speed);
    return () => {
      clearInterval(effect);
    };
  }, [children]);

  return <StyledType command={command}> {Text}</StyledType>;
}

export default Type;

const StyledType = styled.div`
  &::before {
    content: "> ${({ command }) => command} ${({ command }) => command && ":"}";
    color: yellowgreen;
  }
  &::after {
    content: "|";
    animation: blinker 1s infinite;
  }
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;
