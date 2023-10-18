import React, { useState } from 'react'
import { useEffect} from 'react'
import axios from 'axios';
import "./Affiche.css"
import Tasks from './Tasks';
import Navbar from '../navbar/Navbar';

const Affiche = () => {

const[tache,settache] = useState(['']);

  useEffect(()=>{
    axios.get("http://localhost:3002/api/taches/getall")
    .then(tache=> settache(tache.data))
    .catch(err=>console.log(err))
  },[])

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
   const[echeance,setecheance] = useState();

  async function submit(e){
    e.preventDefault();
    
    try{
    await axios.post("http://localhost:3002/api/taches/create",{
      title,description,echeance
    })
    .then(res=>{
      if(res.data === "create"){
        alert("tache creer")
        e.target.value = " ";
      }
    })
  }
  catch{
    console.log(e);
  }
  e.target.value = " ";
}

  return (
    <div>
      <Navbar/>
      <form >
        <div className='all'>
        <div className='cas1'>
        <input type='text' value= {e.target.value }className='put' placeholder='Tâche Title' onChange={(e)=>{settitle(e.target.value)}}/>
        </div>
        <div className='cas'>
        <input type='text' className='put' placeholder='Tâche Description' onChange={(e)=>{setdescription(e.target.value)}}/>
        </div>
        <div className='cas'>
        <input type='date' className='put' onChange={(e)=>{setecheance(e.target.value)}}/>
        </div>
        <div className='cas'><button className='bout' onClick={submit} >ADD</button></div>
        <div className='cas'><button className='bout' >TRIER</button></div>

        </div>
      </form>

     <div className='formulaire'>
        <div className='toto'>
          <h4>Tasks List</h4>
       </div>
       {/* { tache.map((i)=>{
       return <li key={i.title}>{i.title}</li>
      })} */}
       {tache.map((i)=>{
        return <Tasks>{i.title}</Tasks> 
       })}

      </div>
    </div>
  )
}
// { tache.map((i)=>{
//   return <li key={i.title}>{i.title}</li>
//  })}


export default Affiche
