import React from 'react'
import { useState,useRef,useEffect } from 'react'

const Ref = () => {
   const [value, setValue] = useState(0)

   const ref = useRef()
   const a = useRef(0)

   useEffect(()=>{
 
    console.log(`First rendering..`)
    ref.current.style.backgroundColor = "red"
   },[])

   useEffect(()=>{
    a.current =a.current+1;
    console.log(`rendering the value of a is ${a.current}`)
   })
    
  return (
    <div>
           <h1>The count is {value}</h1>
           <button ref={ref} onClick={()=>{setValue(value+1 )}}>Click me</button>
    </div>
  )
}

export default Ref
