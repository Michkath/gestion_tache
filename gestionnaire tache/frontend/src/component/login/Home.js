import React from 'react'
import "./login.css"
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Cookies from 'js-cookie';
import axios from 'axios'
import Img1 from "./Img1.png"
import Img2 from "./Img2.png"
import Img3 from "./Img3.png"



const Home = () => {
  const userInfoStr = Cookies.get('userInfo');
console.log(userInfoStr);

let userInfo;
let userid;

if (userInfoStr) {
    try {
        userInfo = JSON.parse(userInfoStr);
        console.log(userInfo.id);

        userid = userInfo.id;
        console.log("aaa", userid);
    } catch (error) {
        console.error("Erreur lors de la conversion du cookie en objet :", error);
    }
} else {
    console.log("Le cookie 'userInfo' n'existe pas ou a expiré");
}

  const [usermail, setusermail] = useState("")

  const getuseremail = () => {
    axios.get(`http://localhost:3002/api/users/getemailwithuserid/${userid}`)
      .then((info) => {
        setusermail(info.data.message[0].email)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (

    <div>
      {getuseremail()}

      <Navbar />
      <div id="carouselExampleCaptions" className="carousel carousel-custom slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Img3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            <h3>Hello {usermail} bienvenue sur votre appli de gestion de tacheS</h3>

            </div>
          </div>

        </div>
        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
      <h4 className='textaftercarousel'>BONNE ARRIV22</h4>
        <div className='second'>

          <div className="card"style={{width: 18 +'rem'}} >
            <img src={Img1} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          <div className="card"style={{width: 18 +'rem'}} >
            <img src={Img1} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          <div className="card"style={{width: 18 +'rem'}} >
            <img src={Img1} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          </div>
    </div>
  )
}

export default Home
