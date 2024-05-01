import { useNavigate } from 'react-router-dom';
import classes from './payment.module.css'
import { useState } from 'react';

export function Payment() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  //PopUp
  const handleRedirect = (url) => {
    const confirmRedirect = window.confirm("Stai per essere reindirizzato ad un'altra pagina. Vuoi continuare?");
    if (confirmRedirect) {
      navigate(url); // Reindirizzamento alla pagina
    }
  };

  //Input expiry card
  const handleExpiryChange = (event) => {
    const input = event.target.value;
    const formattedInput = input.replace(/[^0-9/]/g, '');
    const formattedExpiry = formattedInput.substring(0, 5);


    setExpiry(formattedExpiry);
  }

  const handleCvvChange = (event) => {
    const input = event.target.value;
    const formattedInput = input.replace(/[^0-9]/g, ''); // Accetta solo numeri
    const formattedCvv = formattedInput.substring(0, 4); // Limita a massimo 4 cifre

    setCvv(formattedCvv);
  };

    return (
      <form className={classes.container}>

        {/* Payment*/}
        <div className={classes.payment_container}>
          <h2>Pagamento</h2>
          {/* info personali */}
          <div className={classes.billing_address}>
            <h4>Indirizzo di Fatturazione</h4>

            <div className={classes.personal_info}>
              {/* input per nome e cognome */}
              <div className={classes.name_surname}>
                <div className={classes.name_person}>
                  <label htmlFor="">Nome</label>
                  <input type="text" name="name" placeholder="name" />
                </div>
                <div className={classes.surname_person}>
                  <label htmlFor="">Cognome</label>
                  <input type="text" name="surname" placeholder="surname" align="center" />
                </div>
              </div>
              <div className={classes.email_address}>
                <div className={classes.email_person}>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" placeholder="email" />
                </div>
                <div className={classes.address_person}>
                  <label htmlFor="address">Indirizzo, numero civico, CAP</label>
                  <input type="text" name="address" placeholder="indirizzo" />
                </div>
              </div>
            </div>
          </div>

          {/* info pagamento */}
          <div className={classes.payment_info}>
            <div className={classes.choose_payment}>
              <h4>Metodo di pagamento</h4>
              <div className={classes.container_card}>
                <div className={classes.paypal}>
                  <img src="src\assets\melissa_img\payment_icon\paypal.png" alt="" onClick={() => handleRedirect("https://www.paypal.com")} />
                </div>
                <div className={classes.googlePay}>
                  <img src="src\assets\melissa_img\payment_icon\Gpay.png" alt="" onClick={() => handleRedirect("https://pay.google.com")} />
                </div>
                <div className={classes.mastercard}>
                  <img src="src\assets\melissa_img\payment_icon\mastercard.png" alt="" onClick={() => setShow(!show)} />
                </div>
                <div className={classes.visa}>
                  <img src="src\assets\melissa_img\payment_icon\visa.png" alt="" onClick={() => setShow(!show)} />
                </div>
              </div>
            </div>
            {/* dati carta cliente */}
            {show ? (<div className={classes.payment}>
              <div className={classes.owner_container}>
                <div className={classes.owner_card}>
                  <label htmlFor="" >Titolare della Carda</label>
                  <input type="text" />
                </div>
                <div className={classes.card_number}>
                  <label htmlFor="">Numero della carta</label>
                  <input type="number" />
                </div>
                <div className={classes.card_date}>
                  <label htmlFor="">Scadenza (MM/YY)</label>
                  <input type="text" value={expiry} onChange={handleExpiryChange} placeholder="MM/YY" maxLength={5} />
                </div>
                <div className={classes.cvv}>
                  <label htmlFor="">CVV</label>
                  <input type="password" maxLength={4} value={cvv} onChange={handleCvvChange}/>
                </div>
              </div>
            </div>) : null}

          </div>
          <div className={classes.button}>
            <button>Paga ora</button>
          </div>
        </div>

        {/* Riepilogo */}
        <div className={classes.resume}>
          <h2>Riepilogo</h2>
          <div className={classes.resume_total}>
            <div className={classes.game}>
              <p>Titolo gioco</p>
              <p>10€</p>
            </div>
            <div className={classes.total}>
              <p>Totale</p>
              <p>150€</p>
            </div>
            <div className={classes.discount}>
              <p>codice sconto</p>
              <label htmlFor="discount"></label>
              <input type="text" name='discount' />
            </div>
            <div className={classes.button_resume}>
              {/* <button className={classes.checkOut_button}>Checkout</button> */}
              {/* <button className={classes.continue_button}>Continua con lo shopping</button> */}
            </div>
          </div>
        </div>
      </form>
    )

  }
