import React from 'react'

const Card_users = ({bool,Name,email,password}) => {
  return (
    <div>
      { bool &&
      <form className='grid'>
        <h6> Name: {Name}</h6>
        <h6> Email:  {email}</h6>
        <h6> password: {password}</h6>
      </form>
      }
    </div>
  )
}

export default Card_users
