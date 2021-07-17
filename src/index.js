import React from "react";
import { render } from "react-dom";
import { App } from "./app";
import { Provider } from "./contexts/globalContext";
import { GlobalStyles } from "./global-styles";
import reportWebVitals from "./reportWebVitals";

render(
  <Provider>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
