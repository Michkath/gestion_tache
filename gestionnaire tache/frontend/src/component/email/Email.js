import React from 'react'
import { useState } from 'react'
import Navbar from '../navbar/Navbar'
import axios from 'axios'
import "./email.css"

const Email = () => {

const [email,setemail] = useState("")
const [objet,setobjet] = useState("")
const [message,setmessage] = useState("")


async function  handlemail (e){


    e.preventDefault();
    try {
      await axios.post("http://localhost:3002/api/users/login", {
        email,objet,message
      })
        .then((res) => {

        //     naviguate('/home')
        //   if (res.data.user_id) {
        //   }

        })
    }
    catch {
      console.log(e);
    }
}

  return (
    <div className='email'>
        <Navbar></Navbar>
        <h4>Contact Us </h4>
      <div className="fon">
            <div className="fondform">
              {/* <div className='updatetitle'> <h3>UPDATE TACHE</h3> </div> */}
              <div className="ca">
                <label>email:</label>
                <input type='text' value={email} className='putt' placeholder='receiver mail' onChange={(e) => setemail(e.target.value)} />
              </div>

              <div className="ca">
                <label>objet:</label>
                <input type='text' value={objet} className='putt' placeholder='Objet' onChange={(e) => setobjet(e.target.value)} />
              </div>

              <div className="ca">
                <label>Message:</label>
                <input type='text' placeholder='message' value={message} className='putt' onChange={(e) => setmessage(e.target.value)} />
              </div>

              <div className="caseboutt">
                <button className='boutt' onClick={handlemail}>send email</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Email
