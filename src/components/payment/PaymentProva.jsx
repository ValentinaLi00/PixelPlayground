import classes from './prova.module.css'

export function PaymentProva() {

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
                            <label htmlFor="">Nome</label>
                            <input type="text" name="name" placeholder="name" />
                            <label htmlFor="">Cognome</label>
                            <input type="text" name="surname" placeholder="surname" />
                        </div>
                        <div className={classes.email_address}>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" />
                            <label htmlFor="address">Indirizzo, numero civico, CAP</label>
                            <input type="text" name="address" />
                        </div>
                    </div>
                </div>

                {/* info pagamento */}
                <div className={classes.payment_info}>
                    <div className={classes.choose_payment}>
                        <h4>Dati di pagamento</h4>
                        <div className={classes.paypal}>
                            <img src="src\assets\melissa_img\payment_icon\paypal.png" alt="" />
                        </div>
                        <div className={classes.googlePay}>
                            <img src="src\assets\melissa_img\payment_icon\Gpay.png" alt="" />
                        </div>
                        <div className={classes.mastercard}>
                            <img src="src\assets\melissa_img\payment_icon\mastercard.png" alt="" />
                        </div>
                        <div className={classes.visa}>
                            <img src="src\assets\melissa_img\payment_icon\visa.png" alt="" />
                        </div>
                    </div>

                    <div className={classes.payment}>
                        <label htmlFor="">Titolare della Carda</label>
                        <input type="text" />
                        <label htmlFor="">Numero della carta</label>
                        <input type="number" />
                        <label htmlFor="">Scadenza</label>
                        <input type="date" />
                        <label htmlFor="">CVV</label>
                        <input type="password" />
                        <button>Paga ora</button>
                    </div>

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
                        <button className={classes.checkOut_button}>Checkout</button>
                        <button className={classes.continue_button}>Continua con lo shopping</button>
                    </div>
                </div>
            </div>
        </form>
    )
}