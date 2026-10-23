import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainParent from "./MainParent";
import "./global.css";
import Signup from "./Signup";
import Login from "./Login";

function App() {
return (
  <Router>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/> 
      <Route path="/mainparent/:id" element={<MainParent/>}/> 
    </Routes>
  </Router>
)
}

export default App
