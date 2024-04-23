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
                {data && data.filter((game) => game.genre === 'In arrivo').slice(0, show).map((game) => (<IncomingGame key={game.id} game={game} />))}
            </div>
        </div>
    )
}