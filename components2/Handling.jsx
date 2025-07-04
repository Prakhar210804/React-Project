import React, { useState } from 'react'

const Handling = () => {

  const [name, setName] = useState("Harry")
  const[form,setForm] = useState({email: "", phone: ""})

  const handleClick = () => {
    alert("Iam clicked!")
  }

  const mouseOver=()=>{
    <style>
        color:red,
    </style>
  }

  const handleChange=(e)=>{

    // setName(e.target.value)

    setForm({...form,[e.target.name]:e.target.value})
    console.log(form)
  }
  return (
    <div>

      <div>
        <button onClick={handleClick}>Click me</button>
      </div>

      <div>
         <p onMouseOver={mouseOver}>Iam a red div</p>
      </div>

      <input value={name} onChange={handleChange} type="text" />

      <input type="text" name='email' value={form.email} onChange={handleChange} />
      <input type="text" name='phone' value={form.phone} onChange={handleChange} />
      

    </div>
  )
}

export default Handling
