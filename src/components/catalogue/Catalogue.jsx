import './catalogue.css';
// import classes from './catalogue.module.css'

export function Catalogue() {
    return (
        <div className="container_catalogue">
            <div className="container_filter">

                <div className='filter'>
                    <label htmlFor="sistemi">Sistemi</label>
                    <select name="sistemi" id="sistemi" placeholder='sistemi'>
                        <option selected>Seleziona sistema</option>
                        <option value="pc">PC</option>
                        <option value="Playstation 4">Playstation 4</option>
                        <option value="Playstation 5">Playstation 5</option>
                        <option value="Xbox One">Xbox One</option>
                        <option value="Xbox Series X|S">Xbox Series X|S</option>
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
                        <option value="Cooperation">Cooperation</option>
                        <option value="FPS">FPS</option>
                        <option value="Fighting">Fighting</option>
                        <option value="Free to Play">Free to Play</option>
                        <option value="Indies">Indies</option>
                        <option value="MMO">MMO</option>
                        <option value="Multiplayer">Multiplayer</option>
                        <option value="Racing">Racing</option>
                        <option value="Single player">Single player</option>
                        <option value="Wargame">Wargame</option>
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
                <div className="card">
                    <div className="container_img" >
                        <img src="src\assets\valentinaLiAssets\catalogue\maro_kart.jpg" alt="mario kart deluxe" />
                    </div>
                    <div className="container_description">
                        <h3>Nome gioco</h3>
                        <p>49,90€</p>
                    </div>
                </div>

                <div className="card">
                    <div className="container_img">
                        <img src="src\assets\valentinaLiAssets\catalogue\maro_kart.jpg" alt="mario kart deluxe" />
                    </div>
                    <div className="container_description">
                        <h3>Nome gioco</h3>
                        <p>49,90€</p>
                    </div>
                </div>


                <div className="card">
                    <div className="container_img">
                        <img src="src\assets\valentinaLiAssets\catalogue\maro_kart.jpg" alt="mario kart deluxe" />
                    </div>
                    <div className="container_description">
                        <h3>Nome gioco</h3>
                        <p>49,90€</p>
                    </div>
                </div>


                <div className="card">
                    <div className="container_img">
                        <img src="src\assets\valentinaLiAssets\catalogue\maro_kart.jpg" alt="mario kart deluxe" />
                    </div>
                    <div className="container_description">
                        <h3>Nome gioco</h3>
                        <p>49,90€</p>
                    </div>
                </div>


                <div className="card">
                    <div className="container_img">
                        <img src="src\assets\valentinaLiAssets\catalogue\maro_kart.jpg" alt="mario kart deluxe" />
                    </div>
                    <div className="container_description">
                        <h3>Nome gioco</h3>
                        <p>49,90€</p>
                    </div>
                </div>

                <div className="card">
                    <div className="container_img">
                        <img src="src\assets\valentinaLiAssets\catalogue\maro_kart.jpg" alt="mario kart deluxe" />
                    </div>
                    <div className="container_description">
                        <h3>Nome gioco</h3>
                        <p>49,90€</p>
                    </div>
                </div>

                <div className="card">
                    <div className="container_img" >
                        <img src="src\assets\valentinaLiAssets\catalogue\maro_kart.jpg" alt="mario kart deluxe" />
                    </div>
                    <div className="container_description">
                        <h3>Nome gioco</h3>
                        <p>49,90€</p>
                    </div>
                </div>

                <div className="card">
                    <div className="container_img">
                        <img src="src\assets\valentinaLiAssets\catalogue\maro_kart.jpg" alt="mario kart deluxe" />
                    </div>
                    <div className="container_description">
                        <h3>Nome gioco</h3>
                        <p>49,90€</p>
                    </div>
                </div>




            </div>

            <div className='container_btn'>
                <button className='mostraAltro'>Mostra altro</button>

            </div>


        </div>
    )
}