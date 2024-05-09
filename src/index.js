import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

// Create a root for concurrent mode rendering
const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * Renders the main application within a Router component.
 */
const renderApp = () => {
  root.render(
    <React.StrictMode>
      {/* Wrap the app in StrictMode for additional checks */}
      <Router>
        {/* Use the BrowserRouter as Router */}
        <App />
      </Router>
    </React.StrictMode>
  );
};

// Call renderApp to render the app initially
renderApp();

// Report web vitals
reportWebVitals();
