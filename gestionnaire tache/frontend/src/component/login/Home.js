import React from 'react';
import Navbar from '../../navbar/Navbar';
import Carousel from './Carousel';
import { useLocation,useNavigate } from 'react-router-dom'
const Home = () => {
 // const location = useLocation();
  return (

  
    <div>
        <Navbar/>
        
      {/* <h1>Hello {location.state.id} bienvenue sur votre appli de gestion de tacheS</h1> */}
    </div>
  )
}

export default Home
