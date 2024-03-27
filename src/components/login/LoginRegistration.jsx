// import './loginRegistration.css'
import classes from './loginRegistration.module.css'

export function LoginRegistration() {
    return (
        <div className={classes.loginRegistration_component}>

            {/* login */}
            <div className={classes.card}>
                {/* form container*/}
                <div className={classes.login_container}>
                    {/* logo */}
                    <div className={classes.login_container_logo}>
                        <img src="src\assets\loghi\logo2.png" alt="logo PixelPlayground" className={classes.login_logo}  />
                        <h2>Ben Tornato!</h2>
                    </div>
                    {/* form */}
                    <div className={classes.login_container_form}>
                        <h3>Accedi</h3>
                        <input type="text" name="username_login" className={classes.username_login_input} />
                        <input type="password" name="password_login" className={classes.password_login_input} />
                        <button type="submit" className={classes.login_submit}>Accedi</button>
                        <p>oppure</p>
                        <img src="src\assets\valentinaLiAssets\login\google.png" alt="google" className={classes.login_google_img} style={{ width: '100px' }} />
                    </div>

                    {/* registration */}
                    <div className={classes.login_container_registration}>
                        <p>Non hai un account?</p>
                        <p>Hai dimenticato la password?</p>
                    </div>
                </div>

                {/* image */}
                <div className={classes.img_container}>
                    <img src="src\assets\valentinaLiAssets\background\desktop_img.png" alt="immagine di login" />
                </div>
            </div>


            {/* Registration*/}

            {/* <div>
                <div className={classes.img_container}>
                    <img src="src\assets\valentinaLiAssets\background\desktop_img.png" alt="immagine di login" />
                </div>

                <div className={classes.registration_container}>
                    <div className="registration_container_logo">
                        <h2>Unisciti a Noi!</h2>
                        <img src="src\assets\loghi\logo.png" alt="logo PixelPlayground" className={classes.registration_logo} />
                    </div>
                    <div className={classes.registration_container_form}>
                        <h3>Registrati</h3>
                        <input type="text" name={classes.username_registration} />
                        <input type="email" name={classes.email_registration} />
                        <input type="password" name={classes.password_registration} />
                        <button type="submit" className={classes.registration_submit}>Registrati</button>
                    </div>
                    <div className={classes.registration_container_login}>
                        <p>Hai già un account?</p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}