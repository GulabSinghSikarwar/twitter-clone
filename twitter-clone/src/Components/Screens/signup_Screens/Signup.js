import React, { useState } from 'react'
import styles from './signup.module.css'
import image from '../../resources/images/R.jfif';
import logo from '../../resources/images/twitter (1).png';
import SignUpForm from './SignUpForm/SignUpForm';
import { Link } from 'react-router-dom'
import LoginForm from '../login_screen/LoginForm';


function Signup() {
    const [showForm, setShowForm] = useState(false)
    const [showLoginForm, setShowLoginForm]=useState(false)

    const showFormHandeler = () => {
        console.log(showForm);

        setShowForm((latest_show_state) => {
            return (!latest_show_state)
        })
    }
    const showLoginForm_Handeler=()=>{

        setShowLoginForm((latest_show_state) => {
            return (!latest_show_state)
        })
    }

    return (
        <div className={styles.container} >
            <div className={styles.logo_container}>
                <img src={image} />

            </div>
            <div className={styles.right}>

                <div className={styles.small_logo_conainer}>
                    <img src={logo} />

                </div>

                <div className={styles.heading_container}>
                    <h1>Happening now</h1>
                    <h3>Join Twitter today.</h3>

                </div>



                <div className={styles.btn_container}>

                    <span className={styles.show_sign_up_btn} onClick={showFormHandeler}>Sign Up With E-mail </span>
                    {(showForm) ? (<SignUpForm showFormHandeler={showFormHandeler} />) : ""}

                    <div className={styles.login_tem_container}>
                        <h3 style={{
                            "fontSize":"18px",
                            "fontWeight":"300",
                            "marginRight":"8px"
                    }}>
                            Already Have Account

                        </h3>
                        <div onClick={showLoginForm_Handeler} to={'/login'} className={styles.go_to_login_page}>
                            <h3 >
                                log in
                              

                            </h3>

                        </div>
                        {(showLoginForm) ? (<LoginForm showFormHandeler={showLoginForm_Handeler} />) : ""}

                    </div>




                </div>

            </div>

        </div>
    )
}

export default Signup