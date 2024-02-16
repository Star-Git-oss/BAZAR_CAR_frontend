import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Vehicle from "./pages/Vehicle";
import System from "./pages/System";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/vehicle" element={<Vehicle />} />
        <Route path="/system" element={<System />} />
      </Routes>
    </Router>
  );
};

export default App;
