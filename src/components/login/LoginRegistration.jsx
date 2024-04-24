// import './loginRegistration.css'
import { useState } from 'react'
import classes from './loginRegistration.module.css'
import { Link } from 'react-router-dom';



export function LoginRegistration() {

    const [isLeft, setIsLeft] = useState(false)
    const [username , setUsername] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        onLogin();
    }

    function handleMoveImgLeft() {
        setIsLeft(true)
    }

    function handleMoveImgRight() {
        setIsLeft(false)
    }

    //functions onChange:
     
   function handleUsernameChange(event) {
        setUsername(event.target.value);
   }
   function handleEmailChange(event) {
        setEmail(event.target.value);
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    //onLogin:

    function onLogin() {
        return new Promise((resolve, reject) => {
            if(username) {
                console.log("login avvenuto con successo");
                resolve(localStorage.setItem("username", username))
            } else {
                console.log("email o password non corretti");
                reject("the email is not correct")
            }
    }
)}


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
                <form className={classes.login_container_form} onSubmit={handleSubmit}>
                    <h3>Accedi</h3>
                    <input type="text" name="username_login" className={classes.username_login_input} placeholder='username' onChange={handleUsernameChange} value={username}/>
                    <input type="password" name="password_login" className={classes.password_login_input} placeholder='password' onChange={handlePasswordChange} value={password}/>
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
                    <input type="text" name='username_registration' value={username} onChange={handleUsernameChange} className={classes.username_registration} placeholder='username' />
                    <input type="email" name='email_registration' value={email} onChange={handleEmailChange} className={classes.email_registration} placeholder='email' />
                    <input type="password" name='password_registration'value={password} onChange={handlePasswordChange} className={classes.password_registration} placeholder='password' />
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