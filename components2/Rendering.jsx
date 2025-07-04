import React from 'react'
import { useState } from 'react'

const Rendering = () => {

    const [count, setCount] = useState(0)
    const [showbtn, setShowbtn] = useState(false)

    const [todos, setTodos] = useState([
        {
            title: "Hey",
            desc: "Iam a good todo"
        },

        {
            title: "Hey Another todo",
            desc: "Iam a good todo too"
        },

        {
            title: "Hey Iam a grocery",
            desc: "Iam a good todo also Iam grocery todo"
        },
    ])

    const Todo = ({ todo }) => {
        return (
            <>
                <div>
                    <div className="todo">{todo.title}</div>
                    <div className="todo">{todo.desc}</div>
                </div>

            </>
        )
    }


    return (
        <div>

            <h1>The count is {count}</h1>
            <button onClick={() => { setShowbtn(!showbtn) }}>Click me</button>



            {/* {showbtn ?<button>I will be shown only when second button is clicked</button> : "thenga"} */}

            {showbtn && <button>Show btn is true</button>}


            {todos.map((todo) => {
                return <Todo key={todo.title} todo={todo} />
            })}


        </div>
    )

}

export default Rendering
