import React, { useState } from "react";
import "./Affiche.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { AiFillDelete, AiFillEdit, AiFillSafetyCertificate ,AiFillInfoCircle} from 'react-icons/ai';
import{RiDeleteBin6Line} from 'react-icons/ri'



const Tasks = ({ children, taskId,date, onfetch }) => {

  const [isDone, setIsDone] = useState(false);
  // const [infotache,setinfotache] = useState[""]

  const handleSuccess = () => {
    setIsDone(!isDone);
  };



  const handleDelete = () => {
    axios.delete(`http://localhost:3002/api/taches/delete/${taskId}`)
      .then(() => {
        onfetch();
      })
      .catch((error) => {
        console.error(error);
      });
  };



  return (

      <div className="p">

        <div className="title">
          <h6 className={`${isDone && "done"}`}>{children}</h6>
        </div>
        <div className="impu">

          <div>
            <AiFillSafetyCertificate className="boutsucces" onClick={handleSuccess} />
          </div>
          {/* <div className="space"></div> */}

          <div>
            <RiDeleteBin6Line className="boutdelete" onClick={handleDelete} />
          </div>
          {/* <div className="space"></div> */}

          <Link to={`/update/${taskId}`} className="updatelink">
            <AiFillEdit className="boutupdate" />
          </Link>
        </div>
        <div className="infodate"><AiFillInfoCircle/> </div>
          <p className="date">{date}</p>
      </div>
  );
};

export default Tasks;
