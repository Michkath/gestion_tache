import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Affiche.css";
import Tasks from './Tasks';
import Navbar from '../navbar/Navbar';

const Affiche = () => {
  const [tache, setTache] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/api/taches/getall")
      .then((response) => {
        setTache(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // console.log(tache[0]._id)

  // const id = response.data._id
  // console.log("id",id);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [echeance, setEcheance] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3002/api/taches/create", {
        title,
        description,
        echeance
      });

      if (response.data === "tache enregistre") {
        alert("Tâche créée");
        setTitle("");
        setDescription("");
        setEcheance("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
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
          <div className='cas'><button className='bout' onClick={handleSubmit}>ADD</button></div>
          <div className='cas'><button className='bout'>TRIER</button></div>
        </div>
      </form>

      <div className='formulaire'>
        <div className='toto'>
          <h4>Tasks List</h4>
        </div>

        {tache.map((task) => (
          <Tasks key={task._id} taskId={task._id}>{task.title}</Tasks>
        ))}
      </div>
    </div>
  );
}

export default Affiche;
