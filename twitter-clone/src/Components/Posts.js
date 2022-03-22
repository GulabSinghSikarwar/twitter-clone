import React, { useEffect, useState } from 'react'
import Post from './Post';
import './Posts.css';
// import {openSocket} from  'socket.io-client'
// import openSocket from 'socket.io-client'

import openSocket from 'socket.io-client'
function Posts() {

  const addData = (post) => {
    setPosts((oldPost) => {
      let updatedPost = [...oldPost];
      updatedPost.unshift(post)
      return updatedPost;

    })
  }


  const [posts, setPosts] = useState([]);



  useEffect(() => {


    fetch('http://localhost:5000/posts').then((result) => {
      return result.json()
    }).then((all_posts) => {
      setPosts([...all_posts.Post])
      console.log(all_posts)

    }).catch((err) => {
      console.log(err);
    })



    // connect the client 

     const socket=openSocket('http://localhost:5000')
     console.log(socket);
     socket.on('post',(data)=>{

      console.log( "event data  : ",data.data);
      addData(data.data)
     })
    



  }, [])
  const allPost = posts.map((post) => {
    console.log(post.title);
    return <Post key={post._id} id={post._id} title={post.title} body={post.body} image={post.image} />

  })
  return (
    <div className='allPosts' >

      {
        allPost
      }
    </div>



  )
}

export default Posts