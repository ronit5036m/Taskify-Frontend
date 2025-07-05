import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./pages/Register";
import LoginForm from "./pages/Login";
import Home from "./pages/Home";
import "./App.css";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/register" element={<RegisterForm/>}/>
          <Route path="/login" element={<LoginForm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
