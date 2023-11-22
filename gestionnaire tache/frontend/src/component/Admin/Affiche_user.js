import React, { useState } from 'react'
import { MdSlideshow } from 'react-icons/md'
import { RiDeleteBin6Line ,RiSlideshow4Fill } from 'react-icons/ri'
import { useEffect } from 'react'
import axios from 'axios'
import Card from './Card'
import Card_users from './Card_users'
import './card.css'

const Affiche_user = ({ children, name, userid,password,fetchuser }) => {

    const [bon, setbon] = useState(false);
    const [mal, setmal] = useState(false);

    const handleplus = () => {
        setbon(!bon)
    }

    const handlepluss = () => {
        setmal(!mal)
    }

    const [tacheuser, settacheuser] = useState([]);

    useEffect(() => {
        fetchusertache();
    }, []);

    const fetchusertache = () => {
        axios.get(`http://localhost:3002/api/taches/getspecitask/${userid}`)
            .then((response) => {
                settacheuser(response.data);
                 
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleDelete = () => {
        axios.delete(`http://localhost:3002/api/users/delete/${userid}`)
          .then(() => {
            fetchuser ();
          })
          .catch((error) => {
            console.error(error);
          });
      };

    return (
        <div className='info-user'>
                {/* {console.log(tacheuser)} */}
            <div className='username'> <p >{children}</p></div>

            <div ><MdSlideshow className='iconshow' onClick={handleplus} /></div>
            <div ><RiSlideshow4Fill className='iconshow2' onClick={handlepluss} /></div>
            <div ><RiDeleteBin6Line  className='iconsdelete' onClick={handleDelete} /></div>

            <Card_users bool={bon} Name={name} email={children} password={password}></Card_users>

            {tacheuser.map((task)=>(<Card bool={mal} title={task.title} date={task.echeance} description={task.description} ></Card> ))}
        </div>
    )
}

export default Affiche_user
