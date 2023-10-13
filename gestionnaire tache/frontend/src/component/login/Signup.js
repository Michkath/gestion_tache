import {React, useState } from "react";
import "./login.css";
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";

const Signup = () => {
  const [email, setemail] = useState("");
  const [Name, setname] = useState("");
  const [password, setpassword] = useState("");
  const redict= useNavigate();

  async  function submit (e) {
    e.preventDefault();

    try{
      await axios.post("http://localhost:3000/api/users/signin",{
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
    <div className="form">
      <div className="sign">
        <h4>SIGN UP</h4>
      </div>
      <div className="underline"></div>
      <div className="case">
        <label className="labl">NAME</label>
        <input type="text" placeholder="name" onChange={(e)=>{setname(e.target.value)}}></input>
      </div>

      <div className="case">
        <label className="labl">EMAIL </label>
        <input type="email" placeholder="email" onChange={(e)=>{setemail(e.target.value)}}></input>
      </div>

      <div className="case">
        <label className="labl">PASSWORD</label>
        <input type="password" placeholder="password" onChange={(e)=>{setpassword(e.target.value)}}></input>
      </div>
      <div className="casebout">
        <button onClick={submit}>SUBMIT</button>
      </div>
      <Link to= '/Login'>login</Link>
    </div>
    
  );
};

export default Signup;
