import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from "./context/LoginContext";
import { ShoppingProvider } from "./context/ShoppingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <LoginProvider>
      <ShoppingProvider>
        <App />
      </ShoppingProvider>
    </LoginProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
reportWebVitals();
