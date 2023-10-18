import "./App.css";
import React from "react";
//import { useState } from "react";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/login/Home";
import Signin from "./component/login/Signin";
import Login from "./component/login/Login";
import Affiche_tache from "./component/affiche_tache/Affiche.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (

    <div>
      
      <BrowserRouter>
        <Routes>
        <Route index element={<Signin/>} />
         <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} /> 
          <Route path="Affiche_tache" element={<Affiche_tache />} /> 
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
