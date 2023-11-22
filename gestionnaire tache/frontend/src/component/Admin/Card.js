import React from 'react'
import './card.css'
const Card = ({bool,date,description,title}) => {
  return (

    <div>
        
{ bool &&
      <form className='grid'>
        <h6> Title: {title}</h6>
        <h6> Description:  {description}</h6>
        <h6> Echance: {date}</h6>
      </form>
      }

    </div>

  )
}

export default Card
