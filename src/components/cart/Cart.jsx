import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import { Payment } from "../payment/Payment";

import { useState } from "react";
import { Link } from "react-router-dom";

import "./cart.css";

export function Cart() {
    const [showPayment, setShowPayment] = useState(false);

    function handleCheckout() {
        setShowPayment(true);
    }

    return (
        /*BACKGROUND PROVA*/
        <>
            <Navbar />
            {!showPayment && (
                <div className="cart_component_background">
                    <h2 className="cart-title">Carrello</h2>
                    <div className="cart-component">
                        <div className="cart-container">
                            <div className="cart-items">
                                {/* Mappare qui gli articoli nel carrello */}

                                {/* Esempio di struttura per un singolo elemento del carrello */}
                                {/* Sostituire con dati reali */}
                                <div className="cart-item">
                                    <div className="cart-item-thumbnail">
                                        <input type="checkbox" />
                                        <img
                                            src="https://seeklogo.com/images/P/pokemon-logo-67F682590B-seeklogo.com.png"
                                            alt="Titolo del gioco"
                                        />
                                        <div className="cart-item-details">
                                            <p className="cart-item-title">Titolo del gioco</p>
                                            <p className="cart-item-price">Prezzo: $XX.XX</p>
                                        </div>
                                    </div>
                                    <div className="cart-buttons">
                                        <button className="remove-button_cart">Rimuovi</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="resume_container">
                            <h2 className="resume-title">Riepilogo</h2>
                            <div>
                                <ul>{/* map lista giochi nel carrello */}</ul>
                                <div className="cart-total">
                                    <p className="cart-total-text">Totale:</p>
                                    <p className="cart-total-amount">$XX.XX</p>
                                    <p className="cart-discount">$XX.XX</p>
                                </div>
                                <div className="cart-resume-buttons">
                                    <Link to="/cart/payment">
                                        <button
                                            className="checkout-button"
                                            onClick={handleCheckout}
                                        >
                                            Vai al checkout
                                        </button>
                                    </Link>
                                    <Link to="/catalogue">
                                        <button className="continue-shopping-button">
                                            Continua lo shopping
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showPayment && <Payment />}
            <Footer />
        </>
        //fine background
    );
}
