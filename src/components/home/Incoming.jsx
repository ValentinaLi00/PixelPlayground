import classes from './incoming.module.css'

export function Incoming() {
    return (
        <div className={classes.container}>
            <h2>IN ARRIVO</h2>
            <div className={classes.containerImg}>

                <div className={classes.card}>
                    <img src="src\assets\valentinaLiAssets\home\elden_rings.jpg" alt="" />
                    <div className={classes.description}>
                        <p>Elden Rings</p>
                        <p>30.99€</p>
                    </div>
                    <div className={classes.pre_order}>
                        <p>Preordina 24 maggio 2024</p>
                    </div>
                </div>

                <div className={classes.card}>
                    <img src="src\assets\valentinaLiAssets\home\eiyuden_chronicle.jpg" alt="" />
                    <div className={classes.description}>
                        <p>Eiyuden chronicle</p>
                        <p>25.90€</p>
                    </div>
                    <div className={classes.pre_order}>
                        <p>Preordina 24 maggio 2024</p>
                    </div>
                </div>

                <div className={classes.card}>
                    <img src="src\assets\valentinaLiAssets\home\stalker2.jpg" alt="" />
                    <div className={classes.description}>
                        <p>stalker 2</p>
                        <p>20.90€</p>
                    </div>
                    <div className={classes.pre_order}>
                        <p>Preordina 24 maggio 2024</p>
                    </div>
                </div>
            </div>
        </div>
    )
}