import React from 'react'
import "./login.css"
import { useLocation,useNavigate } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Img1 from "./Img1.png"
import Img2 from "./Img2.png"
import Img3 from "./Img3.png"

const Home = () => {
  const location = useLocation();

  return (
    
    <div>
      
      <Navbar/>
      <div id="carouselExampleCaptions" class="carousel carousel-custom slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={Img1} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
            <h4>Hello {location.state.id} bienvenue sur votre appli de gestion de tacheS</h4>
             
            </div>
          </div>
          <div class="carousel-item">
            <img src={Img2} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={Img3} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>


    </div>
  )
}

export default Home
