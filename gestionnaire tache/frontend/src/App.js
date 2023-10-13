import "./App.css";
import React from "react";
//import { useState } from "react";
import Navbar from "./navbar/Navbar";
import Signup from "./component/login/Signup";
import Home from "./component/login/Home";
import Login from "./component/login/Login";
import Affiche_tache from "./component/affiche_tache/Affiche.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      
        {/* <Home /> */}
        <Affiche_tache />
      {/* <BrowserRouter>
        <Routes>
          <Route index element={<Signup />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="Affiche_tache" element={<Affiche_tache />} />
        </Routes>
      </BrowserRouter>  */}
    </div>
  );
}

export default App;
