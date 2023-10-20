import React, { useState } from "react";
import "./Affiche.css";
import axios from 'axios';

const Tasks = ({ children, taskId }) => {

  const [isDone, setIsDone] = useState(false);
  const handleSuccess = () => {
    setIsDone(!isDone);
  };

  console.log("taskId", taskId)

  const deletefonc = async(e)=>{

    try{
      await axios
      .delete(`http://localhost:3002/api/taches/delete/:${taskId}`)
      .then((res)=>{
        if(res.data === "tache delete"){
          alert("tache delete");
        }
      })
    }catch{
      console.log(e)
    }
    
  }

  return (
    <div className="p">
      <div className="to">
        <h6  className={`${isDone &&'done'}`}>{children}</h6>
      </div>
      <div className="impu">
        <button className="boutsucces" onClick={handleSuccess}>
          Success
        </button>
        <div className="space"></div>
        <button className="boutdelete" onClick={deletefonc}>Delete</button>
        <div className="space"></div>
        <button className="boutupdate">Update</button>
      </div>
    </div>
  );
};

export default Tasks;
