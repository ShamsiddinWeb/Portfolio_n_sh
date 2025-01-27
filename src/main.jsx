import React from "react";
import ReactDOM from "react-dom/client";    
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
// import { store } from "./context/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>
);
