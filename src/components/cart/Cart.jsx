import "./cart.css";

export function Cart() {
    return (
        <div className="cart-component">
            <div className="cart-container">
                <h2 className="cart-title">Carrello</h2>
                <div className="cart-items">
                    {/* Mappare qui gli articoli nel carrello */}

                    {/* Esempio di struttura per un singolo elemento del carrello */}
                    {/* Sostituire con dati reali */}
                    <div className="cart-item">
                        <div className="cart-item-thumbnail">
                            <img src="immagine.png" alt="Titolo del gioco" />
                        </div>
                        <div className="cart-item-details">
                            <p className="cart-item-title">Titolo del gioco</p>
                            <p className="cart-item-price">Prezzo: $XX.XX</p>
                            <div className="cart-buttons">
                                <button className="add-button">Aggiungi</button>
                                <button className="remove-button">Rimuovi</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="resume">
                <h2 className="cart-title">Riepilogo</h2>
                <div>
                    <ul>{/* map lista giochi nel carrello */}</ul>
                    <div className="cart-total">
                        <p className="cart-total-text">Totale:</p>
                        <p className="cart-total-amount">$XX.XX</p>
                    </div>
                    <div className="cart-resume-buttons">
                        <button className="checkout-button">Vai al checkout</button>
                        <button className="continue-shopping-button">
                            Continua lo shopping
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}
