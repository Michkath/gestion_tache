import React from "react";
import "./Affiche.css";
const Tasks = ({ children }) => {
  return (
    <div className="p">
      <div className="to">
        <h6 id="barrer">{children}</h6>
      </div>

      <div className="impu">
        <button className="boutsucces" onClick={()=>{document.getElementById("barrer").style.textDecoration="line-through"}}>succes</button>
        <div className="space"></div>
        <button className="boutdelete">delete</button>
        <div className="space"></div>
        <button className="boutupdate">update</button>
      </div>
    </div>
  );
};

export default Tasks;
