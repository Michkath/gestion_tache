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
      await axios.post("http://localhost:3000/api/users/login",{
        email,password
      })

      .then((res)=>{
        //console.log(res.date)
        if(res.data.token){
          
          alert("utilisateur trouver")
          naviguate('/home')
        }
      })
    }
    catch{
      console.log(e);
    }
  }
  return ( 
    <div className="form">
    <div className="sign">
      <h4>Login</h4>
    </div>
    <div className="underline"></div>

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
    <Link to= '/'>Signup</Link>
  </div>
  
 
    )
};

export default Login;
