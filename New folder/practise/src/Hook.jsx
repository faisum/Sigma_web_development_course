import React from 'react'
import { useState } from 'react'

const Hook = () => {
    const [color, setColor] = useState("red")

        const updateColor=()=>{
            setColor(previousState=> {
                return{...previousState,color:"blue"}
            })
        }
  return (
    <div>
      <p>The color is {color.color}</p>
    </div>
  )
}

export default Hook
