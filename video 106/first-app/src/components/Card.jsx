import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzkNuKl_FQmwo0jVqeI5_l7-mYIpizD2SOEQ&s" alt="" width={310} style={{border:"2px solid black"}} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>

    </div>
  )
}

export default Card
