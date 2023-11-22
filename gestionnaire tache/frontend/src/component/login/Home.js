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

  const userid = Cookies.get('userid');
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
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Img3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            <h3> {usermail} C’est un grand plaisir pour nous de vous avoir à bord ! </h3>

            </div>
          </div>

        </div>
       
      </div>
      <h4 className='textaftercarousel'>TaskMaster, votre solution ultime pour la gestion des tâches.</h4>
        <div className='second'>

          <div class="card" >
            <img src={Img1} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text"> TaskMaster vous permettra de dresser des listes de tâches et toutes sortes d’autres listes pour ne rien oublier.</p>
            </div>
          </div>

          <div class="card" >
            <img src={Img1} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text"> TaskMaster vous permettra de Gagner du temps parce que tu sais ce que tu as à faire presque en tout temps et que tu ne cherches pas tes choses lorsque tu en as besoin.</p>
            </div>
          </div>

          <div class="card" >
            <img src={Img1} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text"> TaskMaster vous permettra d'Atteindre les objectifs qui nous tiennent complètement à cœur, c’est aussi une manière d’être plus épanoui.</p>
            </div>
          </div>
          </div>
    </div>
  )
}

export default Home
