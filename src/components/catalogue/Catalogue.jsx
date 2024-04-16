import { useEffect, useState } from "react";

import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import { Game } from "./Game";

import classes from "./catalogue.module.css";

export function Catalogue() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(9);
  const [platform, setPlatform] = useState("selectPlatform");
  const [genre, setGenre] = useState("selectGenre");

  async function handleFecthData() {
    try {
      const response = await fetch("http://localhost:5001/api/oggetti");
      const responseJson = await response.json();
      setData(responseJson);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleFecthData();
  }, []);

  function handleShowmore() {
    setShow((prevShow) => prevShow + 8);
  }

  function handleShowLess() {
    setShow((prevShow) => prevShow - 8);
  }

  function handleSelectChange(event) {
    setPlatform(event.target.value);
    setGenre(event.target.value);
    setIncreasingPrice(event.target.value);
  }

  const filterGames = data.filter(
    (game) =>
      platform === "selectPlatform" ||
      game.platform === platform ||
      genre === "selectGenre" ||
      game.genre === genre
  );

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
            </select>
          </div>

          <div className={classes.filter}>
            <label htmlFor="ordina">Ordina</label>
            <select
              name="ordina"
              id={classes.ordina}
              onChange={handleSelectChange}
            >
              <option selected>Seleziona per</option>
              <option value="Bestseller">Bestseller</option>
              <option value="Scontati">Gratuiti</option>
              <option value="Prezzo: crescente">Prezzo: crescente</option>
              <option value="Prezzo: decrescente">Prezzo: decrescente</option>
              <option value="Nuovi arrivi">Nuovi arrivi</option>
            </select>
          </div>

          <div className={classes.filter}>
            <label htmlFor="prezzi">Prezzi</label>
            <select name="prezzi" id={classes.prezzi}>
              <option selected>Seleziona range di prezzo</option>
              <option value="low">da 0€ a 10€</option>
              <option value="medium-low">da 10€ a 30€</option>
              <option value="medium">da 30€ a 50€</option>
              <option value="high">da 50€ in su</option>
            </select>
          </div>
        </div>

        <div className={classes.container_game}>
          {/* card */}

          {filterGames.length > 0 &&
            filterGames
              .slice(1, show)
              .map((game) => <Game key={game.id} game={game} />)}
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
