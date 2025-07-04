import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Exercise = () => {

    // 1. You have to use an api and display the data in the form of a card under a container. All the data points returned by the API

 // 2. Use this API : https://jsonplaceholder.typicode.com/posts

 // Hint : Create a state for the data which eill be fetched using the Json Placeholder API
 //  Inside useEffect , use fetch to populate that state and then use map to render the cards from that state.

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data=>setPosts(data))
  },[])



  return (
    
    <div>
        {posts.map(post=>(
             <div key={post.id}>
                <h3>{post.title}</h3>
                <p><strong>ID:</strong>{post.id}</p>
                <p><strong>User ID:</strong>{post.userId}</p>
                <p>{post.body}</p>

             </div>
        ))}


    </div>
      
   
  )
}

export default Exercise
