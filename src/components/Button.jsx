import React from "react";
import { KeyButton } from "./styles/Styled";

function Buttons({ Text, Icon, handelClicked }) {
  return (
    <KeyButton onClick={handelClicked}>
      <i className={`fa-solid ${Icon}`}></i> {Text}
    </KeyButton>
  );
}

export default Buttons;
