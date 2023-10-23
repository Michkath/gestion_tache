import React, { useState } from "react";
import "./Affiche.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";


const Tasks = ({ children, taskId, onDelete }) => {
  const [isDone, setIsDone] = useState(false);
  const handleSuccess = () => {
    setIsDone(!isDone);
  };

  // const naviguate = useNavigate()
  // console.log("taskId", taskId)

  const deletefonc = () => {
    onDelete(taskId); 
  };

  return (
    <div className="p">
      <div className="to">
        <h6 className={`${isDone && "done"}`}>{children}</h6>
      </div>
      <div className="impu">
        <button className="boutsucces" onClick={handleSuccess}>
          Success
        </button>
        <div className="space"></div>
        <button className="boutdelete" onClick={deletefonc}>
          Delete
        </button>
        <div className="space"></div>
        <button className="boutupdate">Update</button>
      </div>
    </div>
  );
};

export default Tasks;
