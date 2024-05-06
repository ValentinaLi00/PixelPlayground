import { useState } from "react";
import classes from  "../catalogue/catalogue.module.css"
import { Game } from "../catalogue/Game";

export function IndieGames() {
    const [data , setData] = useState([])
    const [show, setShow] = useState(9);

   async function getApi() {
        const response = await fetch("http://localhost:5001/api/oggetti");
        const responseJson = await response.json();
        setData(responseJson);
    }

    getApi()

    function handleShowmore() {
        setShow((prevShow) => prevShow + 8);
      }
    
      function handleShowLess() {
        setShow((prevShow) => prevShow - 8);
      }

    const actionGames = data.filter(game => game.genre === 'Indie');

    return (
        <>
          <div className={classes.container_catalogue}>
            <div className={classes.container_game}>
              {/* card */}
              {data && actionGames.filter((game) => game)
            .slice(1, show)
            .map((game) => <a href={`/${game.id}`}><Game key={game.id} game={game} /></a>)}
    
            </div>
            <div className={classes.container_btn}>
          <button className={classes.mostraAltro} onClick={handleShowmore}>
            Mostra altro
          </button>
          <button className={classes.mostraAltro} onClick={handleShowLess}>
            Mostra meno
          </button>
        </div>
          </div>
        </>
    )
}