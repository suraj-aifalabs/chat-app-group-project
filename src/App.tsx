import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Reserve from "./Components/Reserve";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>
    </Router>
  );
};

export default App;
