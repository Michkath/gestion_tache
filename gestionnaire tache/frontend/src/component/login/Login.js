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

            naviguate('/home')

          if (res.data.user_id) {

          //  Cookies.set('authToken', res.data.token, { expires: 7 })
            Cookies.set('userid', res.data.user_id, { expires: 7 })
            alert(document.cookie())

            // const token = Cookies.get('authToken');

          }
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