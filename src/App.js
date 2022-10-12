import Router from "./router/Router";
import GlobalStyle from "./styles/GlobalStyle";
import { Reset } from "styled-reset";
function App(props) {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
