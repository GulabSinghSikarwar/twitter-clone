import React, { useState } from 'react'
import styled from './Post.module.css'

// images import ................................

import userImage from './resources/images/userImage.jpg'
import User from './resources/images/user.png'
import replyOne from '../Components/resources/images/replyOne.png'
import replyTwo from '../Components/resources/images/replyTwo.png'
import postBodyImage from './resources/images/postBodyImage2.jpg'

import retweetOne from '../Components/resources/images/retweetOne.png'
import retweetTwo from '../Components/resources/images/retweetTwo.png'


import likeOne from '../Components/resources/images/likeOne.png'
import likeTwo from '../Components/resources/images/likeTwo.png'


import shareOne from '../Components/resources/images/shareOne.png'
import shareTwo from '../Components/resources/images/shareTwo.png'







//...........................................
function Post({ title, image, body, id }) {
    const changeBackground = (id, permit, image) => {
        if (permit) {
            const styles = {
                "background-image": `url(${image})`,
                "height": "12px",
                "width": "12px",
                "background-size": "cover",
            }
            var obj = document.getElementById(id);
            Object.assign(obj.style, styles);



        }
        else {
            const styles = {
                "background-image": `url(${image})`,
                "height": "12px",
                "width": "12px",
                "background-size": "cover",
            }
            var obj = document.getElementById(id);
            Object.assign(obj.style, styles);

        }

    }
    let reTweet = false;

    // const [hover]
    return (
        <div className={styled.Post}>
            <div style={{
                display:"flex",
                flexDirection:"column",
                width: "50px",
                position: "relative",
                top: "60px",
                right: "50px"

                
        }}>
            <img className={styled.userImage} src={userImage} />

            </div>
            <div className={styled.PostBody}>
                <div className={styled.PostHeader}>
                    {
                        (reTweet) ? "ReTweetedBy X" : ""

                    }
                </div>
                <div className={styled.PostBodyCotent}>
                    <div className={styled.PostBodyHeader}>
                        <h4>
                            Brittany Burnam</h4>

                        <span className={styled.userHandel}> @Bymspleasant</span>

                    </div>
                    <div className={styled.PostBody_Content}>
                        <div className={styled.post_Body_Main_content_text}>
                            <p>
                                JavaScript Tip 💡

                                Use the 'Set' object to remove duplicates from an array.

                                No cheat!
                                Simply the easiest way...
                            </p>

                        </div>
                        <img src={postBodyImage} className={styled.Post_body_content_main_img} />

                    </div>

                </div>
                <div className={styled.Post_Footer}>
                    <div className={styled.Post_reply} onMouseOver={() => {
                        changeBackground(`reply${id}`, true, replyTwo)
                    }} onMouseOut={() => {
                        changeBackground(`reply${id}`, false, replyOne)
                    }} >
                        <div id={`reply${id}`} className={styled.reply}>

                        </div>
                        <h4 >count</h4>
                    </div>
                    <div className={styled.Post_retweet} onMouseOver={() => {
                        changeBackground(`retweet${id}`, true, retweetTwo)
                    }} onMouseOut={() => {
                        changeBackground(`retweet${id}`, false, retweetOne)
                    }} >
                        <div id={`retweet${id}`} className={styled.retweet}>

                        </div>
                        <h4>count</h4>
                    </div>
                    <div className={styled.Post_like} onMouseOver={() => {
                        changeBackground(`like${id}`, true, likeTwo)
                    }} onMouseOut={() => {
                        changeBackground(`like${id}`, false, likeOne)
                    }} >
                        <div id={`like${id}`} className={styled.like}>

                        </div>
                        <h4>count</h4>
                    </div>
                    <div className={styled.Post_share} onMouseOver={() => {
                        changeBackground(`share${id}`, true, shareTwo)
                    }} onMouseOut={() => {
                        changeBackground(`share${id}`, false, shareOne)
                    }} >
                        <div id={`share${id}`} className={styled.share}>

                        </div>
                        <h4>count</h4>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Post