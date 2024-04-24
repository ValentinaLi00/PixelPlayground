import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import './payment.css'
import { useState } from "react";


export function Payment() {
  const [show, setShow] = useState(false);

  return (
    <div className="background_container">
      <Navbar />
      <form action="#" id="paymentForm">
        <div className="address_container">
          <div className="input_container">
            <h1 className="titles">Indirizzo di fatturazione</h1>
            <br />
            <label htmlFor="input_name">Nome</label>
            <input type="text" name="input_name" id="input_name" />

            <label htmlFor="input_surname">Cognome</label>
            <input type="text" name="input_surname" id="input_surname" />

            <label htmlFor="input_address">Indirizzo di fatturazione</label>
            <input type="text" name="input_address" id="input_address" />
          </div>
        </div>

        <div className="resume_container_payment">
          <div className="container_payment_resume">
            <h2 className="cart-title-resume">Riepilogo</h2>
            <div className="cart-item_resume">
              <div className="cart-resume-thumbnail">
                <div className="check_items">
                  <input type="checkbox" />
                  <img
                    src="https://seeklogo.com/images/P/pokemon-logo-67F682590B-seeklogo.com.png"
                    alt="Titolo del gioco"
                  />
                </div>
                <div className="cart-item-details">
                  <p className="cart-item-title">Titolo del gioco</p>
                  <p className="cart-item-price">Prezzo: $XX.XX</p>
                </div>
                <div className="cart-buttons_resume">
                  <button className="remove_btn">Rimuovi</button>
                </div>
              </div>
            </div>
            <div>
              <ul>{/* map lista giochi nel carrello */}</ul>
              <div className="cart-title_resume">
                <p className="cart-total-text">Totale:</p>
                <p className="cart-total-amount">$XX.XX</p>
                <p className="cart-discount">$XX.XX</p>
              </div>
              <div className="cart-resume-buttons">
                <button className="payment_btn">Paga ora</button>
              </div>
            </div>
          </div>
        </div>

        <div className="payment_box">
          <div className="payment_container">
            <h1 className="titles">Pagamento</h1>
            <div className="cards_payment_container">
              <div className="google_payment">
                <img
                  src="src\assets\melissa_img\payment_icon\Gpay.png"
                  alt="google pay"
                />
              </div>

              <div className="paypal_payment">
                <img
                  src="src\assets\melissa_img\payment_icon\paypal.png"
                  alt="paypal"
                />
              </div>

              <div className="visa_payment">
                <img
                  src="src\assets\melissa_img\payment_icon\visa.png"
                  onClick={() => setShow(true)}
                  alt="visa"
                />
              </div>

              <div className="mastercard_payment">
                <img
                  src="src\assets\melissa_img\payment_icon\mastercard.png"
                  onClick={() => setShow(true)}
                  alt=""
                />
              </div>
            </div>
            {show ? (
              <div className="input_details">
                <label htmlFor="input_card_name">Titolare Carta</label>
                <input
                  className="card_name"
                  type="text"
                  name="input_card_name"
                  id="input_card_name"
                />

                <label htmlFor="input_card_number">Numero carta</label>
                <input
                  className="card_number"
                  type="text"
                  name="input_card_number"
                  id="input_card_number"
                />

                <label htmlFor="input_card_expairy">Scadenza</label>
                <input
                  className="card_expairy"
                  type="text"
                  name="input_card_expairy"
                  id="input_card_expairy"
                  placeholder="MM/AAAA"
                />

                <label htmlFor="input_cvv">CVV</label>
                <input
                  className="card_cvv"
                  type="text"
                  name="input_cvv"
                  id="input_cvv"
                  placeholder="123"
                />

                <div className="checkbox_container">
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="checkbox"
                    checked=""
                  />
                  <label className="checkbox_label" htmlFor="checkbox">
                    Salva per i prossimi acquisti
                  </label>
                </div>

                <div className="payment_btn_container">
                  <button className="payment_btn">Paga ora</button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}
