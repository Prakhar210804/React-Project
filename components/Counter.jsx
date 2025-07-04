import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div style={{textAlign:'center',position:'relative',top:'350px',margin:'10px'}}>
        <h3 style={{margin:'10px'}}>The count is {count}</h3>
        <button style={{backgroundColor:'beige',padding:'5px',borderRadius:'10px'}}  onClick={()=>{
            setCount(count+1);
        }}>click me</button>
    </div>
  )
}

export default Counter
