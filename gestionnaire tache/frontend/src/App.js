import "./App.css";
import React from "react";
//import { useState } from "react";
import Navbar from "./component/navbar/Navbar";
import Update from "./component/affiche_tache/Update";
import Home from "./component/login/Home";
import Signin from "./component/login/Signin";
import Login from "./component/login/Login";
import Bienvenue from "./component/card/Bienvenue";
import Cookies from "js-cookie";
import Protectedroutes from "./component/login/Protectedroutes";
import { useNavigate } from "react-router-dom";
import Affiche_tache from "./component/affiche_tache/Affiche.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const authToken = Cookies.get('authToken'); 
  return (

    <BrowserRouter>
      <Routes>
        <Route index element={<Signin />} />
        <Route  path="login" element={<Login />} />

        <Route element={<Protectedroutes />} >

          <Route  path="home" element={  <Home /> } />
          <Route path="affiche_tache" element={ <Affiche_tache />} />
          <Route path="update/:id" element={<Update /> } />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
