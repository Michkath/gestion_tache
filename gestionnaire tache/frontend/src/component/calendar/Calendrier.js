import React, { useState } from 'react'
// import Calendar from 'react-calendar'
import { useEffect } from 'react';
import Forms_calendar from './Forms_calendar';
import axios from 'axios';
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from "@fullcalendar/react";  
import dayGridPlugin from "@fullcalendar/daygrid";  
import timeGridPlugin from "@fullcalendar/timegrid";
import './calendrier.css'
import Navbar from '../navbar/Navbar';

const Calendrier = () => {

  const token = localStorage.getItem('token');

   const [calendar,setcalendar]= useState([]);
   const [bool,setbool]= useState(false);

    useEffect(() => {
        fetchcalendar(); 
      }, []);

      

    const fetchcalendar = () => {
        axios.get(`http://localhost:3002/api/calendar/getall`,{
          headers: {
            // 'Content-Type': 'application/json' ,
            Authorization:'Bearer ' + token

          }})
          .then((response) => {
            setcalendar(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      };
     const handleforms=(e)=>{
        e.preventDefault();
        setbool(!bool);
      }
    return (  
      <div>

            <Navbar/>
            <Forms_calendar fetchcalendar={fetchcalendar} >{bool}</Forms_calendar>

            <button onClick={handleforms}>add event</button>
            <div className="container">  
                <FullCalendar  
                    plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}  
                    initialView="dayGridMonth"      
                    headerToolbar={
                        {
                            start: 'prev,next today', // will normally be on the left. if RTL, will be on the right
                            center: 'title',
                            end: 'dayGridMonth,timeGridWeek,timeGridDay'
                        }
                    }
                    events={calendar}
                      
                    />  
            </div>  
     </div>    
    )  

}

export default Calendrier
