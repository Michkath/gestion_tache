import React, { useState } from 'react'
// import Calendar from 'react-calendar'
import { useEffect } from 'react';
import axios from 'axios';
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from "@fullcalendar/react";  
import dayGridPlugin from "@fullcalendar/daygrid";  
import timeGridPlugin from "@fullcalendar/timegrid";
import './calendrier.css'
import Navbar from '../navbar/Navbar';
const Calendrier = () => {

   const [calendar,setcalendar]= useState([]);

    useEffect(() => {
        fetchcalendar(); 
      }, []);
    
    const fetchcalendar = () => {
        axios.get(`http://localhost:3002/api/calendar/getall`)
          .then((response) => {
            setcalendar(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      };

    return (  
      <div>

            <Navbar/>
            <button>add event</button>

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
