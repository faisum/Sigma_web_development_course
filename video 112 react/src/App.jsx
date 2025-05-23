import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("Harry")
  const [form, setForm] = useState({email:"",phone:""})

  const handleClick=()=>{
    alert("Hey I am clicked")
  }
  const OnMouse=()=>{
    alert("I am on mouse over")
  }

  // const handleChange=(e)=>{
  //   setName(e.target.value)
  // }

  const handleChange=(e)=>{
    setForm({...form, [e.target.name]:e.target.value})
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>
      {/* <div onMouseOver={OnMouse} className="red">
        I am a Red
      </div> */}
      {/* <input type="text"  value={name} onChange={handleChange} /> */}
      <input type="text" name='email' value={form.email} onChange={handleChange} />
      <input type="text" name='phone' value={form.phone} onChange={handleChange} />
    </>
  )
}

export default App
