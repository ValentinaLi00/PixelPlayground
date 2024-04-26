import { useState } from "react";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import { Game } from "./Game";
import classes from "./catalogue.module.css";

import { useFetchGames } from "../home/useFetchGames";
import { Link, useParams } from "react-router-dom";

export function Catalogue() {
  const { data, loading, error } = useFetchGames();
  const [show, setShow] = useState(9);
  const [platform, setPlatform] = useState("selectPlatform");
  const [genre, setGenre] = useState("selectGenre");
  const [order, setOrder] = useState('selectOrder');
  const [price, setPrice] = useState('selectPrice')
  const {id} = useParams

  if (loading) {
    return <p>Caricamento in corso...</p>;
  }

  if (error) {
    return <p>Si è verificato un errore: {error.message}</p>;
  }

  function handleShowmore() {
    setShow((prevShow) => prevShow + 8);
  }

  function handleShowLess() {
    setShow((prevShow) => prevShow - 8);
  }

  function handleSelectChange(event) {
    setPlatform(event.target.value);
    setGenre(event.target.value);
    setOrder(event.target.value)
    setPrice(event.target.value)
  }

  return (
    <>
      <Navbar />
      <div className={classes.container_catalogue}>
        <div className={classes.container_filter}>
          <div className={classes.filter}>
            <label htmlFor="sistemi">Sistemi</label>
            <select
              name="sistemi"
              id={classes.sistemi}
              placeholder="sistemi"
              onChange={handleSelectChange}
            >
              <option value="selectPlatform" selected>
                Seleziona sistema
              </option>
              <option value="PC">PC</option>
              <option value="Playstation">Playstation</option>
              <option value="XBOX">XBOX</option>
              <option value="Nintendo">Switch</option>
            </select>
          </div>

          <div className={classes.filter}>
            <label htmlFor="generi">Generi</label>
            <select
              name="generi"
              id={classes.generi}
              onChange={handleSelectChange}
            >
              <option value="selectGenre" selected>
                Seleziona genere
              </option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="FPS">FPS</option>
              <option value="Fighting">Fighting</option>
              <option value="Indie">Indies</option>
              <option value="Multiplayer">Multiplayer</option>
              <option value="Racing">Racing</option>
              <option value="RPG">RPG</option>
              <option value="sport">Sport</option>
              <option value="GiftCard">GiftCard</option>
            </select>
          </div>

          <div className={classes.filter}>
            <label htmlFor="ordina">Ordina</label>
            <select name="ordina" id={classes.ordina} onChange={handleSelectChange}>
              <option value='selectOrder' selected>Seleziona per</option>
              <option value="Bestseller">Bestseller</option>
              <option value="In arrivo">Nuovi arrivi</option>
              <option value="Prezzo: crescente">Prezzo: crescente</option>
              <option value="Prezzo: decrescente">Prezzo: decrescente</option>

            </select>
          </div>

          <div className={classes.filter}>
            <label htmlFor="prezzi">Prezzi</label>
            <select name="prezzi" id={classes.prezzi} onChange={handleSelectChange}>
              <option value='selectPrice' selected>Seleziona range di prezzo</option>
              <option value="low">da 0€ a 10€</option>
              <option value="medium-low">da 10€ a 30€</option>
              <option value="medium">da 30€ a 50€</option>
              <option value="high">da 50€ in su</option>
            </select>
          </div>
        </div>

        <div className={classes.container_game}>
          {/* card */}
          {data && data.filter((game) =>
            platform === "selectPlatform" ||
            game.platform === platform ||
            genre === "selectGenre" ||
            game.genre === genre ||
            order === 'selectOrder' ||
            game.order === order ||
            price === 'selectPrice' ||
            game.prezzi === price)
            .slice(1, show)
            .map((game) => <Link to={`/catalogue/product/${game.id}`}><Game key={game.id} game={game} /></Link>)}

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
      <Footer />
    </>
  );
}
