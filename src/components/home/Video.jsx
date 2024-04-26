import classes from './video.module.css'

export function Video() {
    return (
        <div className={classes.container}>
            <div className={classes.container_video}>
                <video autoPlay muted loop>
                    <source src="src/assets/valentinaLiAssets/home/Registrazione 2024-04-25 185044.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}