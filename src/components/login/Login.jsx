// import classes from './loginRegistration.module.css'
import { useState } from 'react'
import classes from './login.module.css'
import { Link, useNavigate } from 'react-router-dom';

export function Login() {
    const navigate = useNavigate()

    const [input, setInput] = useState({
        email: '',
        password: '',
    });

    function handleLogin(event) {
        event.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem('user'));
        if (input.email === loggedUser.email && input.password === loggedUser.password) {
            localStorage.setItem('loggedin', true)
            navigate('/userPage')
        } else {
            alert('Email o password errata')
        }
    };

    return (
        <div className={classes.container}>
            <div className={classes.home}>
                <Link to='/'><img src="src\assets\imagesGabriele\logo-removebg-preview.png" alt="" /></Link>
            </div>
            <div className={classes.login}>
                <div className={classes.container_form}>
                    <div className={classes.welcome}>
                        <h2>Ben tornato!</h2>
                        <h3>Accedi</h3>
                    </div>
                    <form className={classes.form} onSubmit={handleLogin}>
                        <label htmlFor="email"></label>
                        <input type="text" name='email' value={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} id='email' placeholder='email' required />
                        <label htmlFor="password"></label>
                        <input type="password" name='password' value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} id='password' placeholder='password' required/>
                        <button className={classes.button_login}>Accedi</button>
                    </form>
                    <div className={classes.registration}>
                        <p>Non hai un account?</p>
                        <Link to="/registration"><p>Clicca qui!</p></Link>
                    </div>
                </div>
                <div className={classes.container_img}>
                    <img src="src\assets\valentinaLiAssets\background\desktop_img.png" alt="" />
                </div>
            </div>
        </div>
    )
}