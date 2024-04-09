import classes from './genres.module.css'

export function Genres() {
    return (
        <div className={classes.container}>

            <div className={classes.containerImg}>
                <img src="src\assets\valentinaLiAssets\home\hollow.jpg" alt="" />
            </div>

            <div className={classes.containerGenres}>
                <h2>GENERI</h2>

                <div className={classes.containerCards}>

                    <div className={classes.card} >
                        <img src="src\assets\valentinaLiAssets\home\omen.png" alt="" className={classes.character}/>
                        <h3>FPS</h3>
                    </div>
                    
                    <div className={classes.card} >
                        <img src="src\assets\valentinaLiAssets\home\omen.png" alt="" className={classes.character}/>
                    </div>

                    <div className={classes.card} >
                        <img src="src\assets\valentinaLiAssets\home\omen.png" alt="" className={classes.character}/>
                    </div>

                    <div className={classes.card} >
                        <img src="src\assets\valentinaLiAssets\home\omen.png" alt="" className={classes.character}/>
                    </div>

                    <div className={classes.card} >
                        <img src="src\assets\valentinaLiAssets\home\omen.png" alt="" className={classes.character}/>
                    </div>

                    <div className={classes.card} >
                        <img src="src\assets\valentinaLiAssets\home\omen.png" alt="" className={classes.character}/>
                    </div>

                    <div className={classes.card} >
                        <img src="src\assets\valentinaLiAssets\home\omen.png" alt="" className={classes.character}/>
                    </div>

                    <div className={classes.card} >
                        <img src="src\assets\valentinaLiAssets\home\omen.png" alt="" className={classes.character}/>
                    </div>

                    <div className={classes.card} >
                        <img src="src\assets\valentinaLiAssets\home\omen.png" alt="" className={classes.character}/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}