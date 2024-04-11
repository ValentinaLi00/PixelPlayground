import classes from './bestsellers.module.css'

export function Bestsellers() {
    return (
        <div className={classes.container}>
            <h2>Bestsellers</h2>
            <div className={classes.container_card}>
                <div className={classes.card}>
                    <img src="src\assets\valentinaLiAssets\home\eiyuden_chronicle.jpg" alt="" />
                   <div className={classes.description}>
                        <p>nome</p>
                        <p>prezzo</p>
                   </div>
                </div>
                <div className={classes.card}>
                    <img src="src\assets\valentinaLiAssets\home\eiyuden_chronicle.jpg" alt="" />
                    <div className={classes.description}>
                        <p>nome</p>
                        <p>prezzo</p>
                    </div>
                </div>
                <div className={classes.card}>
                    <img src="src\assets\valentinaLiAssets\home\eiyuden_chronicle.jpg" alt="" />
                    <div className={classes.description}>
                        <p>nome</p>
                        <p>prezzo</p>
                    </div>
                </div>
                <div className={classes.card}>
                    <img src="src\assets\valentinaLiAssets\home\eiyuden_chronicle.jpg" alt="" />
                    <div className={classes.description}>
                        <p>nome</p>
                        <p>prezzo</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}