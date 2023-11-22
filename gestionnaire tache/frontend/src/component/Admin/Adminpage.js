import React from 'react'
import Affiche_user from './Affiche_user';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

const Adminpage = ({ children }) => {

  var token = localStorage.getItem('token');
  console.log('Token', token)
  const [user, setuser] = useState([]);

  useEffect(() => {
    fetchuser();
  }, []);

  const fetchuser = () => {
    axios.get(`http://localhost:3002/api/users/getall`,{
      headers: {
        // 'Content-Type': 'application/json' ,
        Authorization: 'Bearer ' + token
      },
    })
      .then((response) => {
        setuser(response.data);
        // alert(token)

      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
     
      <div>
        <h4 className='listuser'>List Users</h4>

        {user.map((task) => (
          <Affiche_user key={task.id} name={task.Name} userid={task._id} password={task.password} fetchuser ={fetchuser} >{task.email} </Affiche_user>
        ))}
      </div>    
    </div>
  )
}

export default Adminpage

