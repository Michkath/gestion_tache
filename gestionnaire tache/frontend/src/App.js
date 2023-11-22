import "./App.css";
import React from "react";
import Update from "./component/affiche_tache/Update";
import Bienvenue from "./component/Admin/Bienvenue";
import Home from "./component/login/Home";
import Signin from "./component/login/Signin";
import Login from "./component/login/Login";
import Calendrier from "./component/calendar/Calendrier";
import Cookies from "js-cookie";
import Protectedroutes from "./component/login/Protectedroutes";
import Affiche_tache from "./component/affiche_tache/Affiche.js";
import Adminpage from "./component/Admin/Adminpage";
import Citation from "./component/citation/Citation";
import Login_admin from "./component/login/Login_admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Email from "./component/email/Email";

function App() {
  const authToken = Cookies.get('authToken'); 
  return (

    <BrowserRouter>
      <Routes>
        <Route index element={<Bienvenue />} />
        <Route  path="login" element={<Login />} />
        <Route  path="login_admin" element={<Login_admin />} />

        <Route  path="Signin" element={<Signin />} />
        <Route  path="Adminpage" element={  <Adminpage /> } />

        <Route element={<Protectedroutes />} >

           <Route  path="home" element={  <Home /> } />  
          <Route  path="citation" element={  <Citation/> } />
          <Route  path="contact" element={  <Email/> } />

          <Route  path="calendar" element={  <Calendrier/> } />
          <Route path="affiche_tache" element={ <Affiche_tache />} />
          <Route path="update/:id" element={<Update /> } />
        </Route>
        
      </Routes>
    </BrowserRouter>

  );
}

export default App;
