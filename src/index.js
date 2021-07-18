import React from "react";
import { render } from "react-dom";
import { SpeechProvider } from "@speechly/react-client";
import { App } from "./app";
import { Provider } from "./contexts/globalContext";
import { GlobalStyles } from "./global-styles";
import reportWebVitals from "./reportWebVitals";

render(
  <SpeechProvider appId="0041b535-011d-4b3d-8ddd-f6b7793731f3" language="en-US">
    <Provider>
      <GlobalStyles />
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
