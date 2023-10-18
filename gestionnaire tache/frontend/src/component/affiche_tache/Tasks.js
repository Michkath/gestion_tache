import React from "react";
import "./Affiche.css"
const Tasks = ({children}) => {
  return (
    <div >
        <div className="impu">
        <div className="to">  <h6>{children}</h6> 
        <p> (dormir est un must)  </p>
        
        </div>
          <input type="radio" className="btn-check btn-check-custom" name="options-outlined" id="success-outlined" autocomplete="off" checked/>
          <label class="btn btn-outline-success" for="success-outlined">v</label>
            <div className="space"></div>
          <input type="radio" className="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off" />
          <label class="btn btn-outline-danger" for="danger-outlined">x</label>
        </div>

     </div>
      
  );
};

export default Tasks;
