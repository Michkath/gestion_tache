import { React, useState, useContext, createContext, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';

import './login.css'
import Navbar from "../navbar/Navbar";

// export const Context = createContext();


const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const naviguate = useNavigate();
  // const [cookies, setCookies, removeCookie] = useCookies();



  async function submit(e) {

    e.preventDefault();
    try {
      await axios.post("http://localhost:3002/api/users/login", {
        email, password
      })
        .then((res) => {
          
          const userInfo = {
            id: res.data.user_id,
            token: res.data.token
        }
        
        
        // Convertit l'objet userInfo en une chaîne JSON
        const userInfoStr = JSON.stringify(userInfo);
        
        // Stocke la chaîne JSON dans un cookie
        Cookies.set('userInfo', userInfoStr);
        console.log(userInfo.id);
        console.log(userInfo.token);

        naviguate('/home')
      })
    }
    catch {
      console.log(e);
    }
  }

  //   const value = useMemo(
  //     () => ({
  //         cookies,
  //     }),
  //     [cookies]
  // );

  const value = "toto";
  return (

    // <Context.Provider value={value}>
    <div className="toutl">
      <Navbar />

      <div className="form">
        <div className="sign">
          <h4>Login</h4>
        </div>
        <div className="underline"></div>

        <div className="case">
          <input className="imput" type="email" placeholder="  User Email" onChange={(e) => { setemail(e.target.value) }}></input>
        </div>

        <div className="case">
          <input className="imput" type="password" placeholder="  Password" onChange={(e) => { setpassword(e.target.value) }}></input>
        </div>
        <div className="casebout">
          <button className="bouton" onClick={submit}>Login</button>
        </div>
        <Link className="link" to='/'>Don't have an account?</Link>
      </div>
    </div>

)
};

export default Login;