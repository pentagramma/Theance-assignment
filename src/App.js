import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Submitted from "./pages/Submitted";
import Home from "./pages/Home";

/**
 * Main component of the application.
 * Renders different components based on the current route.
 * @returns {JSX.Element} App component
 */
function App() {
  return (
    <>
      {/* Define routes */}
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Home />} />
        {/* Route for the signup page */}
        <Route path="/signup" element={<Signup />} />
        {/* Route for the submitted page */}
        <Route path="/submitted" element={<Submitted />} />

      </Routes>
    </>
  );
}

export default App;
