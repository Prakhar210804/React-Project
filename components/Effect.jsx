import React from 'react'

import { useEffect } from 'react'

const Effect = () => {

    
  const [count,setCount]= useState(0)

  // case 1 : Run on every render
  useEffect(()=>{
    alert("Hey I will run on every render")
  })

    // case 2 : Run only  on first render

  useEffect(()=>{
    alert("Hey iam prakhar")
  },[])


    // case 3 : Run only when certain values changed 
  useEffect(()=>{
    alert("Count was changed")
  },[count])
  
  return (
    <div>
      
    </div>
  )
}

export default Effect
