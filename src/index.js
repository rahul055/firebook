import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//redux

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { reducers } from "./redux/reducers";
const store = createStore(reducers, compose(applyMiddleware()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
