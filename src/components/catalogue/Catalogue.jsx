import { useEffect, useState } from 'react';
import './catalogue.css';
import { Game } from './Game';
// import classes from './catalogue.module.css'

export function Catalogue() {

    const [data, setData] = useState([])
    const [show, setShow] = useState(9)
    const [platform, setPlatform] = useState('')

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
    

    function handleShowmore() {
        setShow((prevShow) => prevShow + 8)
    }

    function handleShowLess() {
        setShow((prevShow) => prevShow - 8)
    }

    function handlePlatformChange(event) {
        setPlatform(event.target.value)
    }


    return (
        <div className="container_catalogue">
            <div className="container_filter">

                <div className='filter'>
                    <label htmlFor="sistemi" onChange={handlePlatformChange}>Sistemi</label>
                    <select name="sistemi" id="sistemi" placeholder='sistemi'>
                        <option selected>Seleziona sistema</option>
                        <option value="pc">PC</option>
                        <option value="Playstation 4">Playstation</option>
                        <option value="Xbox One">Xbox</option>
                        <option value="Switch">Switch</option>
                    </select>
                </div>

                <div className='filter'>
                    <label htmlFor="generi">Generi</label>
                    <select name="generi" id="generi">
                        <option selected>Seleziona genere</option>
                        <option value="Action">Action</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Arcade">Arcade</option>
                        <option value="FPS">FPS</option>
                        <option value="Fighting">Fighting</option>
                        <option value="Indies">Indies</option>
                        <opton value="Multiplayer">Multiplayer</opton>
                        <option value="Racing">Racing</option>
                        <option value="Single player">RPG</option>
                    </select>
                </div>

                <div className='filter'>
                    <label htmlFor="ordina">Ordina</label>
                    <select name="ordina" id="ordina">
                        <option selected>Seleziona per</option>
                        <option value="Bestseller">Bestseller</option>
                        <option value="Scontati">Scontati</option>
                        <option value="Prezzo: crescente">Prezzo: crescente</option>
                        <option value="Prezzo: decrescente">Prezzo: decrescente</option>
                        <option value="Nuovi arrivi">Nuovi arrivi</option>
                    </select>
                </div>

                <div className='filter'>
                    <label htmlFor="prezzi">Prezzi</label>
                    <select name="prezzi" id="prezzi">
                        <option selected>Seleziona range di prezzo</option>
                        <option value="low">da 0€ a 10€</option>
                        <option value="medium-low">da 10€ a 20€</option>
                        <option value="medium">da 20€ a 30€</option>
                        <option value="medium-high">da 30€ a 40€</option>
                        <option value="high">da 40€ a 50€</option>
                        <option value="other_high">da 50€ in su</option>
                    </select>
                </div>
            </div>

            <div className="container_game">
                {/* card */}

                {data.length > 0 && data.slice(1, show).map((game) => (
                    <Game key={game.id} game={game} />
                ))}

            </div>

            <div className='container_btn'>
                <button className='mostraAltro' onClick={handleShowmore}>Mostra altro</button>
                <button className='mostraAltro' onClick={handleShowLess}>Mostra meno</button>
            </div>


        </div>
    )
}