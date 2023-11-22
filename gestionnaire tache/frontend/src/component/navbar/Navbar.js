import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
const Navbar = () => {

  const handleLogout = () => {
    localStorage.removeItem('token'); 
  };
  return (
    <nav className="navbar navbar-custom navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">TaskMaster</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <Link className='liennavbar'to='/home'>Home</Link>
         <Link className='liennavbar' to="/affiche_tache"> Tâche </Link>
         <Link className='liennavbar' to='/calendar' >Calendar</Link>
          <Link className='liennavbar' to="/citation">Citation</Link>
          <Link className='liennavbar' to='/contact'>Contact </Link>
          <Link className='liennavbar' to='/login' onClick={handleLogout}>Déconnection</Link>

        </div>
      </div>
    </div>
  </nav>
  )
}
export default Navbar

