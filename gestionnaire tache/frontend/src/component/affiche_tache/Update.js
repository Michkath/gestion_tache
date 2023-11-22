import { React, useState, useEffect } from 'react';
import { json, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
// import { useEffect } from 'react';
import "./update.css"

import Navbar from '../navbar/Navbar';


const Update = () => {
  const token = localStorage.getItem('token');


 
  const _id = useParams();
  const navigue = useNavigate();
  var a = 0;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [echeance, setEcheance] = useState("");

  const handlesetinfo = () => {
    axios.get(`http://localhost:3002/api/taches/getinfowithtacheid/${_id.id}`,{
      headers: {
        // 'Content-Type': 'application/json' ,
        Authorization:'Bearer ' + token


      }},)
    
      .then((info) => {
         setTitle(info.data.message[0].title)
         setDescription(info.data.message[0].description)
         setEcheance(info.data.message[0].echeance)
      })
      .catch((error) => {
        console.error(error);
      });
      
  };

  const Handleupdate=(e)=> {
    e.preventDefault();
    axios.put(`http://localhost:3002/api/taches/update/${_id.id}`, {
      title,
      description,
      echeance
    },
    {
      headers: {
        // 'Content-Type': 'application/json' ,
        Authorization:'Bearer ' + token


      }},)
      .then((res) => {
          navigue('/affiche_tache');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handlesetinfo();
  }, []);

  return (
      <div >
        <Navbar/>
        <div className="fond">
            <div className="fondform">
            {/* <button onClick={handlesetinfo}>reset</button>  */}
              <div className='updatetitle'> <h3>UPDATE TACHE</h3> </div>
              <div className="ca">
                <label>TITLE:</label>
                <input type='text' value={title} className='putt' placeholder='Tâche Title' onChange={(e) => setTitle(e.target.value)} />
              </div>

              <div className="ca">
                <label>DESCRIPTION:</label>
                <input type='text' value={description} className='putt' placeholder='Tâche Description' onChange={(e) => setDescription(e.target.value)} />
              </div>

              <div className="ca">
                <label>ECHEANCE:</label>
                <input type='date' value={echeance} className='putt' onChange={(e) => setEcheance(e.target.value)} />
              </div>

              <div className="caseboutt">
                <button className='boutt' onClick={Handleupdate}>update</button>
              </div>
            </div>
        </div>
      </div>   
  )
}

export default Update
