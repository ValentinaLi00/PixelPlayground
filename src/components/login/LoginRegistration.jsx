// import './loginRegistration.css'
import { useState } from 'react'
import classes from './loginRegistration.module.css'
import { Link } from 'react-router-dom';



export function LoginRegistration() {

    const [isLeft, setIsLeft] = useState(false)
    const [dataRegistration, setDataRegistration] = useState({
        username: '',
        email: '',
        password: '',
    })


    function handleSubmit(event) {
        event.preventDefault();
        localStorage.setItem('user', JSON.stringify(dataRegistration))
       
    }

    function handleMoveImgLeft() {
        setIsLeft(true)
    }

    function handleMoveImgRight() {
        setIsLeft(false)
    }



    return (
        <div className={classes.card}>
            {/* form container*/}
            <div className={classes.login_container}>
                {/* logo */}
                <div className={classes.login_container_logo}>
                    <Link to="/"><img src="src\assets\loghi\logo2.png" alt="logo PixelPlayground" className={classes.login_logo} /></Link>
                    <h2>Ben Tornato!</h2>
                </div>
                {/* form */}
                <form className={classes.login_container_form}>
                    <h3>Accedi</h3>
                    <input type="text" name="username_login" className={classes.username_login_input} placeholder='username' />
                    <input type="password" name="password_login" className={classes.password_login_input} placeholder='password' />
                    <button type="submit" name='submit_login' className={classes.login_submit}>Accedi</button>
                    <p>oppure</p>
                    <img src="src\assets\valentinaLiAssets\login\google.png" alt="google" />
                </form>

                {/* registration */}
                <div className={classes.login_container_registration}>
                    <p onClick={handleMoveImgLeft}>Non hai un account?</p>
                    <p>Hai dimenticato la password?</p>
                </div>
            </div>

            {/* image */}
            <div className={`${classes.img_container} ${isLeft ? classes.move_left : classes.move_right}`}>
                <img src="src\assets\valentinaLiAssets\background\desktop_img.png" alt="immagine di login" />
            </div>

            {/* Registration*/}
            <div className={classes.registration_container}>
                <div className={classes.registration_container_logo}>
                    <h2>Unisciti a Noi!</h2>
                   <Link to="/"><img src="src\assets\loghi\logo2.png" alt="logo PixelPlayground" className={classes.registration_logo} /></Link> 
                </div>
                <form className={classes.registration_container_form} onSubmit={handleSubmit}>
                    <h3>Registrati</h3>
                    <input type="text" name='username_registration' value={dataRegistration.username} onChange={(e) => setDataRegistration({ ...dataRegistration, [e.target.username]: e.target.value })} className={classes.username_registration} placeholder='username' />
                    <input type="email" name='email_registration' value={dataRegistration.email} onChange={(e) => setDataRegistration({ ...dataRegistration, [e.target.email]: e.target.value })} className={classes.email_registration} placeholder='email' />
                    <input type="password" name='password_registration'value={dataRegistration.password} onChange={(e) => setDataRegistration({ ...dataRegistration, [e.target.password]: e.target.value })} className={classes.password_registration} placeholder='password' />
                    <button type="submit" name='submit_registration' className={classes.registration_submit}>Registrati</button>
                    <p>oppure</p>
                    <img src="src\assets\valentinaLiAssets\login\google.png" alt="google" className={classes.login_google_img} />
                </form>
                <div className={classes.registration_container_login}>
                    <p onClick={handleMoveImgRight}>Hai già un account?</p>
                </div>
            </div>

        </div>

    )
}