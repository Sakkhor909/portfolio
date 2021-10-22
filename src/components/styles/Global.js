import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   // Reset/normalize
*,
::after,
::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  line-height: 1rem;
}


body {
  font-family: 'VT323', monospace;
  text-transform: uppercase;
  font-size: 4vmin;
}

`;

export default GlobalStyles;
