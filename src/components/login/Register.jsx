import { useState } from 'react'
import classes from './register.module.css'
import { Link, useNavigate } from 'react-router-dom';

export function Register() {

    const navigate = useNavigate()

    const [input, setInput] = useState({
        username: '',
        email: '',
        password: '',
    })

    function handleSubmit(event) {
        event.preventDefault();
        localStorage.setItem('user', JSON.stringify(input));
        navigate('/login')
    }

    return (
        <div className={classes.container}>
            <div className={classes.home}>
                <Link to='/'><img src="src\assets\imagesGabriele\logo-removebg-preview.png" alt="" /></Link>
            </div>
            <div className={classes.register}>
                <div className={classes.container_form}>
                    <div className={classes.welcome}>
                        <h2>Benvenuto!</h2>
                        <h3>Registrati</h3>
                    </div>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <label htmlFor="username"></label>
                        <input type="text" name="username" value={input.username} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} id="username" placeholder="username" />
                        <label htmlFor="email"></label>
                        <input type="text" name='email' value={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} id='email' placeholder='email' />
                        <label htmlFor="password"></label>
                        <input type="password" name='password' value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} id='password' placeholder='password' />
                        <button className={classes.button_login}>Registrati</button>
                    </form>
                    <div className={classes.registration}>
                        <p>Hai già un account?</p>
                        <Link to="/login"><p>Clicca qui!</p></Link>
                    </div>
                </div>
                <div className={classes.container_img}>
                    <img src="src\assets\valentinaLiAssets\background\desktop_img.png" alt="" />
                </div>
            </div>
        </div>
    )
}