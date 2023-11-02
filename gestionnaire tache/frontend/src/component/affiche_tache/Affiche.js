import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Affiche.css";
import Card from '../card/Card';
import Tasks from './Tasks';
import Cookies from 'js-cookie';
import Navbar from '../navbar/Navbar';

// var tab = [];
const Affiche = () => {
  var userid = Cookies.get('userId');

  const [tache, setTache] = useState([]);

  useEffect(() => {
    fetchTaches(); 
  }, []);

  const fetchTaches = () => {
    axios.get(`http://localhost:3002/api/taches/getspecitask/${userid}`)
      .then((response) => {
        setTache(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };



  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [echeance, setEcheance] = useState("");
  //  var userid = Cookies.get('userid');

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      const response = await axios.post("http://localhost:3002/api/taches/create", {
        title,
        description,
        echeance,
        userid
      });

      if (response.data === "tache enregistre") {
        alert("Tâche créée");
        setTitle("");
        setDescription("");
        setEcheance("");
        fetchTaches();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
    <Navbar />
      <div className='page_tache'>
        <h1>MY_TODO</h1>
        <form>
          <div className='all'>
            <div className='cas1'>
              <input type='text' value={title} className='put' placeholder='Tâche Title' onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='cas'>
              <input type='text' value={description} className='put' placeholder='Tâche Description' onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className='cas'>
              <input type='date' value={echeance} className='put' onChange={(e) => setEcheance(e.target.value)} />
            </div>
            {/* {userid=} */}
            <div className='cas'><button className='bout' onClick={handleSubmit}>ADD</button></div>
            <div className='cas'><button className='bout' >TRIER</button></div>
          </div>
        </form>

        <div className='formulaire'>
          <div className='toto'>
            <h4>Tasks List</h4>
          </div>

          {tache.map((task) => (
            <Tasks key={task._id} taskId={task._id} date={task.echeance} onfetch={fetchTaches}>{task.title}</Tasks>
          ))}
        </div>
      </div>
      {/* <Card/> */}

    </div>
    
  );
}

export default Affiche;
