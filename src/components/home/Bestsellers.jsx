import { Link } from 'react-router-dom';
import { BestsellerGame } from './BestsellerGame';
import classes from './bestsellers.module.css'
import { useFetchGames } from './useFetchGames'

export function Bestsellers() {
    const { data, loading, error } = useFetchGames();
    const show = 4;
    
    
    if (loading) {
        return <p>Caricamento in corso...</p>;
    }

    if (error) {
        return <p>Si è verificato un errore: {error.message}</p>;
    }

    return (
        <div className={classes.container}>
            <h2>Bestsellers</h2>
            <div className={classes.container_card}>
                {/* Card */}
                {data && data.filter((game) => game.order === 'Bestseller').slice(0, show).map((game) => ( <Link to={`/catalogue/product/${game.id}`}><BestsellerGame key={game.id} game={game} /></Link> ))}
            </div>
        </div>
    )
}