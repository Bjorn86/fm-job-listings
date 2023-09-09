// IMPORT PACKAGES
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

// IMPORT STYLES
import "./index.scss";

// IMPORT COMPONENTS
import App from "./components/App/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>,
);
