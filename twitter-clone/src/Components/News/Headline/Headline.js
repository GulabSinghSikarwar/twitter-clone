import React from 'react'
import styled  from './Headline.module.css'
function Headline( {title ,Provider_name}) {
    return (
        //   news constainer 
        <div className={styled.new_container}   >
            <div className={styled.news_content_container}>
                <div className={styled.news_heading_name_header_container}>
                    <h4> {Provider_name}</h4>

                </div>
               
                <div className={styled.news_heading_name_body_container}>
                    <h4> {title}</h4>

                </div>

            </div>
            <div className={styled.news_container_image}>

            </div>

        </div>
    )
}

export default Headline