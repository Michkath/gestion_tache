import {React, useState } from "react";
import "./login.css";
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";

const Signin = () => {
    const [email, setemail] = useState("");
    const [Name, setname] = useState("");
    const [password, setpassword] = useState("");
    const redict= useNavigate();
  
    async  function submit (e) {
      e.preventDefault();
  
      try{
        await axios.post("http://localhost:3002/api/users/signin",{
        email,Name,password
      })
      .then((res)=>{
        if(res.data === "utilisateur creer"){
          alert("utilisateur creer")
          redict('/Home',{state:{id:email}})
        }
      })
    }
    catch(e){
      console.log(e);
    }
    };
  
    return (
        <div className="tout">
      <div className="form">
        <div className="sign">
          <h4>SIGNIN</h4>
        </div>
        <div className="underline"></div>
        <div className="case">
          <input className="imput" type="text" placeholder="  User Name" onChange={(e)=>{setname(e.target.value)}}></input>
        </div>
  
        <div className="case">
          <input className="imput"  type="email" placeholder="  User Email" onChange={(e)=>{setemail(e.target.value)}}></input>
        </div>
  
        <div className="case">
          <input className="imput"  type="password" placeholder="  Password" onChange={(e)=>{setpassword(e.target.value)}}></input>
        </div>
        <div className="casebout">
          <button className="bouton" onClick={submit}>SIGNIN</button>
        </div>
        <Link className="link" to= '/Login'> Have you a account?</Link>
      </div>
      </div>
    );
}

export default Signin
