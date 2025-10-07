import React from "react";
import ReactDOM from "react-dom/client.js";
import Home from "./components/home.js";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </React.StrictMode>
);