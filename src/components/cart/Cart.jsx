import "./cart.css";

export function Cart() {
  return (
    <div className="cart-container">
      <h2 className="cart-title">Il tuo carrello</h2>
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
            {/* Aggiungi pulsanti per modificare o rimuovere l'articolo */}
          </div>
        </div>
        {/* Fine esempio di elemento del carrello */}

      </div>
      <div className="cart-total">
        <p className="cart-total-text">Totale:</p>
        <p className="cart-total-amount">$XX.XX</p>
      </div>
      <div className="cart-buttons">
        {/* Aggiungi qui pulsanti per il checkout o per tornare allo shopping */}
        <button className="checkout-button">Vai al checkout</button>
        <button className="continue-shopping-button">
          Continua lo shopping
        </button>
      </div>
    </div>
  );
}
