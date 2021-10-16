import React from "react";
import { KeyButton } from "./styles/Styled";

function Buttons({ Text, Icon, handelClicked, button }) {
  return (
    <KeyButton onClick={handelClicked} className={button === "contact" ? "inputBtn" : null}>
      <i className={`fa-solid ${Icon}`}></i> {Text}
    </KeyButton>
  );
}

export default Buttons;
