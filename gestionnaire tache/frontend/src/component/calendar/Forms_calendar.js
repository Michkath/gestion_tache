import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const Forms_calendar = ({children,fetchcalendar}) => {

    var userid = Cookies.get('userid');
    const token = localStorage.getItem('token');

    const [title,settitle] = useState("");
    const [start,setstart] = useState("");
    const [end,setend] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await axios.post("http://localhost:3002/api/calendar/create", {
            title,
            start,
            end,
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
            settitle("");
            setend("2023-00-00T00:00:00.000Z");
            setstart("2023-00-00T00:00:00.000Z");
             fetchcalendar();
          }
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(() => {
        setend("2023-00-00T00:00:00.000Z"); 
        setstart("2023-00-00T00:00:00.000Z"); 
      }, []);
    
  return (
    <div>
        {children && 
        <div className='formscalendar'>
            {/* <p>toto</p> */}
            <label>Title:</label>
            <input placeholder='tache' type='text' value={title} onChange={(e)=>settitle(e.target.value)}/> 

            <label>Start:</label>
            <input  type='text' value={start} onChange={(e)=>setstart(e.target.value)}/>

            <label>End:</label>
            <input type='text' value={end} onChange={(e)=>setend(e.target.value)}/> 

            <button onClick={handleSubmit}>send</button>
        </div>
        }
      
    </div>
    
  )
}

export default Forms_calendar
