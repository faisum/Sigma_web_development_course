import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective, getAdjective}) => {
    console.log("Navbar is rendered")
  return (
    <div>
      i am a {adjective} navbar
      <button onClick={()=>{getAdjective()}}>click me</button>
    </div>
  )
}

export default memo(Navbar)
