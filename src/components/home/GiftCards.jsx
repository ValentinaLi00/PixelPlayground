import { useEffect, useState } from 'react';
import { GiftCardSingle } from './GiftCardSingle';
import classes from './giftCards.module.css'
import { useFetchGames } from './useFetchGames';
import { Link } from 'react-router-dom';

export function GiftCards() {

    const { data, loading, error } = useFetchGames();
    const [randomGiftCard, setRandomGiftCard] = useState([])
    const show = 6;

    useEffect(() => {
        if(data ) {
            const random = data.sort(() => Math.floor(Math.random() - 0.5))
            setRandomGiftCard(random)
        }
    }, [data])

    if (loading) {
        return <p>Caricamento in corso...</p>;
    }

    if (error) {
        return <p>Si è verificato un errore: {error.message}</p>;
    }

    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h2>GIFT CARD</h2>
            </div>

            <div className={classes.containerImg}>
                {randomGiftCard && randomGiftCard.filter((game) => game.genre === 'GiftCard').slice(0, show).map((game) => (<Link to={`/${game.id}`}><GiftCardSingle key={game.id} game={game} /></Link>))}
            </div>
        </div>
    )
}