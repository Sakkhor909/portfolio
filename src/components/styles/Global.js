import { createGlobalStyle } from "styled-components";
import { Color } from "../../theme";
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
  .active {
  color: ${Color.seconderyColor};
  background: #e8ede6;
  transform: translateY(-5px);
  box-shadow: 4px 6px 0px 2px rgb(0 0 0 / 25%);
}
}

`;

export default GlobalStyles;
