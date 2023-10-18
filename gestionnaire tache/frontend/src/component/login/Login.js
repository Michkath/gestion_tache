import {React,useState} from "react";
import { Link } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './login.css'


 const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
   const naviguate = useNavigate();
 
  async function submit(e){
    e.preventDefault();
     try{
      await axios.post("http://localhost:3002/api/users/login",{
        email,password
      })

      .then((res)=>{
        if(res.data.token){
          alert("utilisateur trouver")
          naviguate('/home',{state:{id:email}})
        }
      })
    }
    catch{
      console.log(e);
    }
  }
  return ( 
    <div className="toutl">
    <div className="form">
    <div className="sign">
      <h4>Login</h4>
    </div>
    <div className="underline"></div>

    <div className="case">
      <input  className="imput" type="email" placeholder="  User Email" onChange={(e)=>{setemail(e.target.value)}}></input>
    </div>

    <div className="case">
      <input className="imput" type="password" placeholder="  Password" onChange={(e)=>{setpassword(e.target.value)}}></input>
    </div>
    <div className="casebout">
      <button className="bouton" onClick={submit}>Login</button>
    </div>
    <Link className="link" to= '/'>Don't have an account?</Link>
  </div>
  </div>
 
    )
};

export default Login;