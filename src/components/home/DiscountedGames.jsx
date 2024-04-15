import { useEffect, useState } from 'react'
import { DiscountedGame } from './DiscountedGame'
import classes from './discountedGames.module.css'

export function DiscountedGames() {

    const [data, setData] = useState([])
    const [show, setShow] = useState(10)

    async function handleFecthData() {
        try {
            const response = await fetch('http://localhost:5001/api/oggetti')
            const responseJson = await response.json()
            setData(responseJson)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleFecthData()
    }, [])


    return (
        <div className={classes.container}>
            <h2>GIOCHI SCONTATI</h2>

            <div className={classes.scroller}>

                {/* scroller inner 1 */}
                <div className={classes.scroller_inner}>
                    {data.slice(1, show).map((game) => (<DiscountedGame key={game.id} game={game} />))}
                </div>

                {/* scroller inner 2 */}
                <div className={classes.scroller_inner}>
                    {data.slice(1, show).map((game) => (<DiscountedGame key={game.id} game={game} />))}
                </div>

            </div>
        </div>
    )
}