import classes from './genres.module.css'


export function Genres() {




    return (
        <div className={classes.container}>

            <div className={classes.containerImg}>
                <img src="src\assets\valentinaLiAssets\home\banner.jpg" alt="" />
                <div className={classes.container_banner}>
                    <h3>Tekken 8</h3>
                    <button>Scopri di più</button>
                    <span className={classes.discount}>
                        <p>13%</p>
                    </span>
                </div>
            </div>
            <div className={classes.containerGenres}>
                <h2>GENERI</h2>

                <div className={classes.containerCards}>

                    <div className={`${classes.card} ${classes.action} `}  >
                        <img src="src\assets\valentinaLiAssets\home\genres\action_figure.png" alt="" className={`${classes.character} ${classes.figure_action}`} />
                        <div className={classes.ribbon}>Action</div>
                    </div>

                    <div className={`${classes.card} ${classes.fighting} `} >
                        <img src="src\assets\valentinaLiAssets\home\genres\fighting_figure.png" alt="" className={`${classes.character} ${classes.figure_fighting}`} />
                        <div className={classes.ribbon}>Fighting</div>
                    </div>

                    <div className={`${classes.card} ${classes.adventures} `} >
                        <img src="src\assets\valentinaLiAssets\home\genres\adventure_figure.png" alt="" className={`${classes.character} ${classes.figure_adventures}`} />
                        <div className={classes.ribbon}>Adventure</div>
                    </div>

                    <div className={`${classes.card} ${classes.multiplayer} `} >
                        <img src="src\assets\valentinaLiAssets\home\genres\multiplayer_figure.png" alt="" className={`${classes.character} ${classes.figure_multiplayer}`} />
                        <div className={classes.ribbon}>Multiplayer</div>
                    </div>

                    <div className={`${classes.card} ${classes.fps} `} >
                        <img src="src\assets\valentinaLiAssets\home\genres\fps_figure.webp" alt="" className={`${classes.character} ${classes.figure_fps}`} />
                        <div className={classes.ribbon}>FPS</div>
                    </div>

                    <div className={`${classes.card} ${classes.sport} `} >
                        <img src="src\assets\valentinaLiAssets\home\genres\sport_figure.png" alt="" className={`${classes.character} ${classes.figure_sport}`} />
                        <div className={classes.ribbon}>Sport</div>
                    </div>

                    <div className={`${classes.card} ${classes.indie} `} >
                        <img src="src\assets\valentinaLiAssets\home\genres\indie_figure.png" alt="" className={`${classes.character} ${classes.figure_indie}`} />
                        <div className={classes.ribbon}>Indie</div>
                    </div>

                    <div className={`${classes.card} ${classes.racing} `} >
                        <img src="src\assets\valentinaLiAssets\home\genres\racing_figure.png" alt="" className={`${classes.character} ${classes.figure_racing}`} />
                        <div className={classes.ribbon}>Racing</div>
                    </div>

                    <div className={`${classes.card} ${classes.rpg} `} >
                        <img src="src\assets\valentinaLiAssets\home\genres\rpg_figure.png" alt="" className={`${classes.character} ${classes.figure_rpg}`} />
                        <div className={classes.ribbon}>RPG</div>
                    </div>
                </div>
            </div>
        </div>
    )
}