import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
<<<<<<< Updated upstream
import { Provider } from "react-redux";
import { store } from "./redux/store";
=======
import { store } from "./redux/store";
import { Provider } from "react-redux";
>>>>>>> Stashed changes

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
<<<<<<< Updated upstream
    <Provider store={store}>
      <App />
=======
  <Provider store = {store}>
    <App />
>>>>>>> Stashed changes
    </Provider>
  </BrowserRouter>
);
