import React from 'react'
import './bienvenue.css'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";

const Bienvenue = () => {

  const navigue = useNavigate();
  const nav = (e) => {
    e.preventDefault();
    navigue('/login_admin')
  }
  const nav2 = (e) => {
    e.preventDefault();
    navigue('../Signin')
  }


  return (
    <div>
      <div className='accueil'>
        <p>Bienvenue sur TaskMaster</p>
      </div>

      <div className='bienvenue'>

        <div > <button onClick={nav} className='BouTon'>Administrator</button></div>

        <div>  <button onClick={nav2} className='BouTon'>Clienteles</button></div>

      </div>
    </div>
  )
}

export default Bienvenue
