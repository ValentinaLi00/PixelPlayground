import { Link } from 'react-router-dom';
import { IncomingGame } from './IncomingGame';
import classes from './incoming.module.css'
import { useFetchGames } from './useFetchGames';

export function Incoming() {

    const { data, loading, error } = useFetchGames();
    const show = 3;

    if (loading) {
        return <p>Caricamento in corso...</p>;
    }

    if (error) {
        return <p>Si è verificato un errore: {error.message}</p>;
    }

    return (
        <div className={classes.container}>
            <h2>IN ARRIVO</h2>
            <div className={classes.containerImg}>
                {/* Card */}
                {data && data.filter((game) => game.order === 'In arrivo').slice(0, show).map((game) => (<Link to={`/product/${game.id}`}><IncomingGame key={game.id} game={game} /></Link>))}
            </div>
        </div>
    )
}