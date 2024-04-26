import { Link } from 'react-router-dom';
import { DiscountedGame } from './DiscountedGame';
import classes from './discountedGames.module.css';
import { useFetchGames } from './useFetchGames';

export function DiscountedGames() {
    const { data, loading, error } = useFetchGames(); 

    if (loading) {
        return <p>Caricamento in corso...</p>;
    }

    if (error) {
        return <p>Si è verificato un errore: {error.message}</p>;
    }

    const show = 5;

    return (
        <div className={classes.container}>
            <h2>GIOCHI SCONTATI</h2>

            <div className={classes.scroller}>

                {/* scroller inner 1 */}
                <div className={classes.scroller_inner}>
                    {data && data.slice(0, show).map((game) => (<Link to={`/catalogue/product/${game.id}`}><DiscountedGame key={game.id} game={game} /></Link>))}
                </div>

                {/* scroller inner 2 */}
                <div className={classes.scroller_inner}>
                    {data && data.slice(show, 2*show).map((game) => (<Link to={`/catalogue/product/${game.id}`}><DiscountedGame key={game.id} game={game} /></Link>))}
                </div>

            </div>
        </div>
    );
}
