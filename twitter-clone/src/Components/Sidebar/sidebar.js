import React from 'react'
import styled from './Sidebar.module.css'

import birdIcon from '../resources/twitter_icons/birdOne.png'
import searchOneIcon from '../resources/twitter_icons/searchOne.png'
import homeOneIcon from '../resources/twitter_icons/homeOne.png'
import bellOneIcon from '../resources/twitter_icons/bellOne.png'
import messageOneIcon from '../resources/twitter_icons/mailOne.png'
import bookmarkOneIcon from '../resources/twitter_icons/bookmarkOne.png'
import ListOneIcon from '../resources/twitter_icons/listOne.png'
import ProfileOneIcon from '../resources/twitter_icons/profileOne.png'
import MoreOneIcon from '../resources/twitter_icons/more.png'

const Sidebar = () => {
    return (

        <div className={styled.mainContainer}>

            <div className={styled.sidebarContainer}>
                <div className={styled.bird}>

                    <div className={styled.bird_Icon_Container}  >
                        <img src={birdIcon} />
                    </div>

                </div>


                {/*  Feature Icons Starting  */}


                <div className={styled.fetatureIconsContainer}>


                    <div id='home_Icon_Container' className={styled.home_Icon_Container}>

                        <img src={homeOneIcon} /><h4 >Home</h4>

                    </div>
                    <h4 className={styled.home_Icon_text}>Home </h4>


                    <div className={styled.search_Icon_Container}>

                        <img src={searchOneIcon} /><h4>Search</h4>


                    </div>
                    <h4 className={styled.search_Icon_text}>Search </h4>



                    <div className={styled.Notifications_Icon_Container}>
                      <img  style={{width:"25px",objectFit:"contain"}} src={bellOneIcon}/>
                        <h3>Notifications</h3>

                    </div>
                    <h4 className={styled.Notifications_Icon_text}>Notifications_Icon_text </h4>

                    <div className={styled.Messages_Icon_Container}>

                        <img src={messageOneIcon} /><h4>Messages</h4>

                    </div>
                    <h4 className={styled.message_Icon_text}>message_Icon_text </h4>


                    <div className={styled.bookmark_Icon_Container}>

                        <img src={bookmarkOneIcon} /><h4>Bookmarks</h4>

                    </div>
                    <h4 className={styled.bookmark_Icon_text}>bookmark </h4>


                    <div className={styled.list_Icon_Container}>

                        <img src={ListOneIcon} /><h4>List</h4>

                    </div>
                    <h4 className={styled.list_Icon_text}>list  </h4>



                    <div className={styled.profile_Icon_Container}>

                        <img src={ProfileOneIcon} /><h4>Profile</h4>

                    </div>
                    <h4 className={styled.profile_Icon_text}>profile </h4>



                    <div className={styled.more_Icon_Container}>

                        <img src={MoreOneIcon} /><h4>more</h4>

                    </div>
                    <h4 className={styled.more_Icon_text}>more </h4>



                </div>
                <div className={styled.Tweet_button_container}> 
                   <button>Tweet</button>
            </div>
            </div>


        </div>

    )
}
export default Sidebar
