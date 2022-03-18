import React from 'react'
import './Post.css'
import User from './resources/images/user.png'
function Post({ title, image, body }) {
    return (
        <div className='Post'>
            <img src={User}/>
           <div className='PostBody'>
           <div className='PostHeader'>
                {
                    title
                }
            </div>
            <div className='PostBodyCotent'>
                <p>
                    {
                        body
                    }
                <span className='img'>
                    {
                    image
                    }
                </span>
                </p>

            </div>

           </div>

        </div>
    )
}

export default Post