
import classes from './video.module.css'
import { Link } from 'react-router-dom';

import { useFetchGames } from './useFetchGames';

export function Video() {

    const { data, loading, error } = useFetchGames()
    if (loading) {
        return <p>Caricamento in corso...</p>;
    }

    if (error) {
        return <p>Si è verificato un errore: {error.message}</p>;
    }


    return (
        <div className={classes.container}>
            <div className={classes.container_video}>
                <video autoPlay muted loop>
                    <source src="src/assets/valentinaLiAssets/home/Registrazione 2024-04-25 185044.mp4" type="video/mp4" />
                </video>
                {data && data.filter((game) => game.title === 'Final Fantasy').map((game) => <Link to={`/catalogue/product/${game.id}`}><h3>{game.sub_title}   {game.discount_price}€</h3></Link> )}
            </div>
        </div>
    )
}