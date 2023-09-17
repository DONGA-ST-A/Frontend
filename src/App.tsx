import { RecoilRoot } from "recoil";

import Router from "./router/router";
import { GlobalStyle } from "./style/global";

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <Router />
      </RecoilRoot>
    </>
  );
}

export default App;
