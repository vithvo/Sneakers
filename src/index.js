import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./index.scss";
import "macro-css";
import "lodash";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
