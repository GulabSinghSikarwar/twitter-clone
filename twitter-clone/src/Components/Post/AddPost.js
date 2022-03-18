import './AddPost.css'
import React from 'react'
// utilities import 
import { useRef } from 'react'

// packeages import 
import {openSocket} from 'socket.io-client'

// files imports
import user from '../resources/images/user.png'
function AddPost() {
  // const Body
  const title=useRef()
  const body=useRef()
  const image=useRef()

 


  const upload_Tweet = () => {
    alert("Tweet Upload ");
    const bodyData={
      title:title.current.value,
      body:body.current.value,
      image:image.current.value,
    }
    console.log( "bodyData : ",bodyData);

    fetch('http://localhost:5000/addPost',
    {
      method:'POST',
      body:JSON.stringify(bodyData),
      headers:{
        'Content-Type':'application/json'
      }
    }).then((result)=>{
      return result.json()
    }).then((post)=>{
      console.log(post);
    }).catch((err)=>{
      alert(err)
    })
  }

  return (
    <div className='addPost'>
      <div className='user_logo'>
        <img src={user} />
      </div>
      <div className='form'>
        <form>
          <input ref={body} className='mainInput' name='body' placeholder={`What's happening`} />
          <div className='RemainingItems'>  
            <div className='items'>
              
              <input ref={image} name='image' placeholder='Image' />
              <input ref={title} name='title' placeholder='Title' />
            </div>
            <div onClick={upload_Tweet} className='button'>
              <span>
                Tweet
              </span>

            </div>
          </div>


        </form>

      </div>
    </div>
  )
}

export default AddPost