import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
const Navbar = () => {
  return (
    <nav className="navbar navbar-custom navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">MICHOUATPOINT</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
         <Link className='liennavbar' to="/affiche_tache"> Tâche </Link>
          <Link className='liennavbar'to='/home'>Home</Link>
          <Link className='liennavbar' to='/calendar' >Calendar</Link>
          <Link className='liennavbar' to='/login' onClick={Cookies.remove('userInfo')}>Déconnection</Link>
        </div>
      </div>
    </div>
  </nav>
  )
}
export default Navbar

