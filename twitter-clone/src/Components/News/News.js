import bellOne from '../resources/twitter_icons/searchOne.png'
import React from 'react'
import styled from './News.module.css'
function News() {
  return (
    <div className={styled.Main_News_Section_Container}>


      <div className={styled.search_News_container}>
        <div className={styled.search_box_container}>
          <img src={bellOne}/>
          <input placeholder='Search Twitter'/>


        </div>
      </div>
      <div className={styled.News_section_container}>
        <div>
          <h3>What's Happening</h3>
          <div className={styled.News_Section}>
            {/*

            // multiple New hadline will rendered Here

            //   Headline 1

            //   Headline 2


            //   Headline 3

            //    Headline 4

            //    Headline 5

            */}


          </div>
        </div>

      </div>

    </div>

  )
}

export default News
