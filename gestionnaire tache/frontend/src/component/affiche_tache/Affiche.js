import React, { useState } from 'react'
import { useEffect} from 'react'
import axios from 'axios';

const Affiche = () => {

const[tache,settache] = useState(['']);

  useEffect(()=>{
    axios.get("http://localhost:3000/api/taches/getall")
    .then(tache=> settache(tache.data))
    .catch(err=>console.log(err))
  },[])

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
   const[echeance,setecheance] = useState();

  async function submit(e){
    e.preventDefault();
    
    try{
    await axios.post("http://localhost:3000/api/taches/create",{
      title,description,echeance
    })
    .then(res=>{
      if(res.data === "create"){
        alert("tache creer")
      }
    })
  }
  catch{
    console.log(e);
  }
}

  return (
    <div>
      {/* <label>tache</label> */}
      <form >
      <input type='text' placeholder='title' onChange={(e)=>{settitle(e.target.value)}}/>
      <input type='text' placeholder='description' onChange={(e)=>{setdescription(e.target.value)}}/>
      <input type='date' placeholder='echeance' onChange={(e)=>{setecheance(e.target.value)}}/>
      <button onClick={submit} >submit</button>
      </form>
{ tache.map((i)=>{
       return <li key={i.title}>{i.title}</li>
      })}
    </div>
  )
}



export default Affiche
