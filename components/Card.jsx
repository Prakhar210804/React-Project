import React from 'react'
import "./card.css"

const Card = ({title,desc}) => {
    return (

            <div className='card'>
                <h1>{title}</h1>
               <h5>{desc}</h5>

            </div>




    )
}

export default Card
