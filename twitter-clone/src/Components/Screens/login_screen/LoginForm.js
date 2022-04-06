import React from 'react'
import styles from './LoginForm.module.css'
import ReactDOM from 'react-dom';



const Backdrop = () => {
    return (
        <div className={styles.backdrop} />

    )
}



const Login_Card = ({showFormHandeler}) => {
    return (
        <div className={styles.overlay_container}>
            <div className={styles.form_card}>
                <h1>
                    This is the Login card
                </h1>
                <form>
                    <div className={styles.form_item_group}>
                        <label className={styles.label}>Email </label>
                        <input />
                    </div>

                    <div className={styles.form_item_group}>
                        <label className={styles.label}>Password  </label>
                        <input />
                    </div>

                   

                    <div className={styles.form_item_group_btn_container}>
                        <span className={styles.signup_form_button}>
                            Login
                        </span>
                        <span onClick={showFormHandeler} className={styles.signup_form_button}>
                           cancel
                        </span>
                    </div>


                </form>

            </div>

        </div>
    )
}
function LoginForm({showFormHandeler}) {
    const overlayRoot = document.getElementById('overlay');
    return (
        <React.Fragment>
            {
                ReactDOM.createPortal(<Backdrop />, overlayRoot)
            }
            {
                ReactDOM.createPortal(<Login_Card  showFormHandeler={showFormHandeler}/>, overlayRoot)
            }

        </React.Fragment>
    )
}


export default LoginForm