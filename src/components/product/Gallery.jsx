import classes from './gallery.module.css'

export function Gallery() {
  return (
    <div className={classes.container}>
        {/* Immagine principale e bottoni */}
        <div className={classes.image}>
            
            <img src="src\assets\valentinaLiAssets\home\eiyuden_chronicle.jpg" alt="" />
            <button className={classes.prev}>&lt;</button>
            <button className={classes.next}>&lt;</button>
        </div>
        {/* immagini miniatura */}
        <div className={classes.miniature}>
            <img src="src\assets\valentinaLiAssets\home\eiyuden_chronicle.jpg" alt="" />
            <img src="src\assets\valentinaLiAssets\home\eiyuden_chronicle.jpg" alt="" />
            <img src="src\assets\valentinaLiAssets\home\eiyuden_chronicle.jpg" alt="" />
            <img src="src\assets\valentinaLiAssets\home\eiyuden_chronicle.jpg" alt="" />
            <img src="src\assets\valentinaLiAssets\home\eiyuden_chronicle.jpg" alt="" />
        </div>
    </div>
)
}