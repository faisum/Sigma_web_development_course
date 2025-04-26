import React from 'react'

const Navbar = ({color}) => {

     // case 1: Run on every render 
  useEffect(() => {
    alert("i will run on every render")
  })

  // cse 2:Run only on first render 
  useEffect(() => {
    alert("Hey welcome to my page, this is the first render")
  }, [])

  // cse 2:Run only on certain value changed 
  useEffect(() => {
    alert("Run only on certain value changed")
  }, [count])

  return (
    <div>
        <nav>
            i am navbar of {color} of hehe...
        </nav>
    </div>
  )
}

export default Navbar
