import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Affiche.css";
import Card from '../Admin/Card';
import Tasks from './Tasks';
import Cookies from 'js-cookie';
import Navbar from '../navbar/Navbar';

// var tab = [];
const Affiche = () => {
  var userid = Cookies.get('userId');
  const token = localStorage.getItem('token');

  const [tache, setTache] = useState([]);
  const [tri, settrie] = useState(false);
  const [tachetri, settachetrie] = useState([]);

  useEffect(() => {
    fetchTaches();
    fetchTache();
  }, []);


  const fetchTaches = () => {
    const auth = 'Bearer ' + token
    // console.log(auth)
    axios.get(`http://localhost:3002/api/taches/getspecitask/${userid}`,{
       headers: {
        // 'Content-Type': 'application/json' ,
        Authorization: auth

      },
    })
      .then((response) => {
        setTache(response.data);
        // alert(token)
      })
      .catch((error) => {
        console.error(error);
      });
  };


  const fetchTache = () => {
    // const auth = 'Bearer ' + token

    axios.get(`http://localhost:3002/api/taches/getspecitask/${userid}`,{
      headers: {
        // 'Content-Type': 'application/json' ,
        Authorization:'Bearer ' + token


      },
    })
      .then((response) => {
        settachetrie(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  const trie = (e) => {

    e.preventDefault();
    settrie(!tri)

    tachetri.sort(function (a, b) {
      return new Date(a.echeance) - new Date(b.echeance);
    });
  }



  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [echeance, setEcheance] = useState("");
  const [filter, setfilter] = useState("");

  var userid = Cookies.get('userid');

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3002/api/taches/create", {
        title,
        description,
        echeance,
        userid
      },
      {
        headers: {
          // 'Content-Type': 'application/json' ,
          Authorization:'Bearer ' + token
  
        }}
        );

      if (response.data === "tache enregistre") {
        alert("Tâche créée");
        setTitle("");
        setDescription("");
        setEcheance("");
        fetchTaches();
        fetchTache();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='page_tache'>
        {/* {    console.log(tache)} */}
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


            <div className='cas'>
              <input type='text' value={filter} className='put' onChange={(e) => setfilter(e.target.value)} />
            </div>
            {console.log(filter)}

            <div className='cas'><button className='bout' onClick={handleSubmit}>ADD</button></div>
            <div className='cas'><button className='bout' onClick={trie} >TRIER</button></div>
            {/* <div className='cas'><button className='bout' onClick={trie} >filtrer</button></div> */}

          </div>
        </form>

        <div className='formulaire'>
          <div className='toto'>
            <h4>Tasks List</h4>
          </div>

          {
            tri ? tachetri.filter((val) =>{
              return val.title.includes(filter)
            }).map((task) => (
              <Tasks key={task._id} taskId={task._id} date={task.echeance} description={task.description} onfetch={fetchTaches} trifetch= {fetchTache}>{task.title}</Tasks>
            ))
              :
              tache.filter((val) =>{
                return val.title.includes(filter)
              }).map((task) => (
                <Tasks key={task.title} taskId={task._id} date={task.echeance} description={task.description} onfetch={fetchTaches}>{task.title}</Tasks>
              ))
              }
        </div>
      </div>

    </div>

  );
}

export default Affiche;
