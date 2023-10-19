import React, { useState } from "react";
import "./Affiche.css";

const Tasks = ({ children }) => {
  const [isDone, setIsDone] = useState(false);

  const handleSuccess = () => {
    setIsDone(!isDone);
  };

  return (
    <div className={`p ${isDone ? 'done' : ''}`}>
      <div className="to">
        <h6>{children}</h6>
      </div>
      <div className="impu">
        <button className="boutsucces" onClick={handleSuccess}>
          Success
        </button>
        <div className="space"></div>
        <button className="boutdelete">Delete</button>
        <div className="space"></div>
        <button className="boutupdate">Update</button>
      </div>
    </div>
  );
};

export default Tasks;
