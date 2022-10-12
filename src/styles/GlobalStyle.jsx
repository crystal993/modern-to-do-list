import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
* {
	box-sizing: border-box;
}
body {
  font-size: 62.5%;
	background-color: #5D5FEF;
  font-family: 'Nanum Gothic Coding', monospace;
}
body * {
	background-color: transparent;
	letter-spacing: -0.5px;
}
h1 {
  font-family: 'Roboto', sans-serif;
}
a {
	text-decoration: none;
  color: inherit;
}
`;

export default GlobalStyle;
