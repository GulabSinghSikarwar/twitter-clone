import bellOne from '../resources/twitter_icons/searchOne.png'
import React, { useEffect, useState } from 'react'
import styled from './News.module.css'
import Headline from './Headline/Headline'
function News() {
  const [headlines, setHeadlines] = useState([])



  useEffect(() => {
    const url = 'https://newsapi.org/v2/everything?q=technology&apiKey=07aabd4aa38340f6b5375b1f1fad712d'
    fetch(url).then((result) => { return result.json() }).then((all_headlines) => {
      setHeadlines(all_headlines.articles)
      console.log(all_headlines.articles);
    }).catch((err) => {
      console.log(err);
    })

  }, [])
  // const AllNews=
  return (
    <div className={styled.Main_News_Section_Container}>
      <div className={styled.container}>
        <div >

        <div className={styled.search_News_container}>
          <div className={styled.search_box_container}>
            <img src={bellOne} />
            <input placeholder='Search Twitter' />


          </div>
        </div>
        <div className={styled.News_section_container}>
          <div>
            <div className={styled.news_happening_heding_box} >
              <h3 className={styled.happening}>What's Happening</h3>
            </div>

            <div className={styled.News_Section}>
              {/*

            // multiple New hadline will rendered Here

            //   Headline 1

            //   Headline 2


            //   Headline 3

            //    Headline 4

            //    Headline 5

            */}
              {
                headlines.map((news) => {
                  console.log(" source :", news.source.name);
                  const name = news.source.name;

                  // const author=news.author;
                  const title = news.title;
                  // console.log( "title :  ", title);
                  // const description=news.description;
                  // const url=news.urlToImage;
                  // const date=news.publishedAt;
                  // const content=news.content;
                  return <Headline Provider_name={name} author={news.author} title={title} description={news.description} url={news.urlToImage} date={news.publishedAt} content={news.content} />
                })
              }


            </div>
          </div>

        </div>
        </div>


      </div>

    </div>

  )
}

export default News
