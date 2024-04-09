import { useState } from "react"
import "./payment.css"

export function Payment() {
    const [show, setShow] = useState(false)



    return (
        <div className="background_container">

            <form action="#">
                <div className="address_container">
                    
                    <div className="input_container">
                    <h1>Indirizzo di fatturazione</h1>
                    <br />
                        <label htmlFor="input_name">Nome</label>
                        <input type="text" name="input_name" id="input_name" />

                        <label htmlFor="input_surname">Cognome</label>
                        <input type="text" name="input_surname" id="input_surname" />

                        <label htmlFor="input_address">Indirizzo di fatturazione</label>
                        <input type="text" name="input_address" id="input_address" />

                        <label htmlFor="input_city" name="input_city" id="input_city">Città</label>
                        <input type="text" name="input_city" id="input_city" />

                        <label htmlFor="input_cap" name="input_cap" id="input_cap">Cap</label>
                        <input type="text" name="input_cap" id="input_cap" />
                    </div>

                </div>

                <div className="payment_container">
                    <h1>Pagamento</h1>
                    <div className="cards_payment_container">

                        <div className="google_payment">                            
                            <img src="src\assets\melissa_img\payment_icon\Gpay.png" onClick={()=>setShow(true)} alt="google pay" />
                        </div>

                        <div className="paypal_payment">
                            <img src="src\assets\melissa_img\payment_icon\paypal.png" alt="paypal" />
                        </div>

                        <div className="visa_payment">
                            <img src="src\assets\melissa_img\payment_icon\visa.png" alt="visa" />
                            
                        </div>

                        <div className="mastercard_payment">
                            <img src="src\assets\melissa_img\payment_icon\mastercard.png" alt="" />
                        </div>

                    </div>
                    {show ?(<div className="input_details">
                        <label htmlFor="input_card_name">Titolare Carta</label>
                        <input type="text" name="input_card_name" id="input_card_name" />

                        <label htmlFor="input_card_number">Numero carta</label>
                        <input type="text" name="input_card_number" id="input_card_number" />

                        <label htmlFor="input_card_expaire">Scadenza</label>
                        <input type="text" name="input_card_expaire" id="input_card_expaire" />

                        <label htmlFor="input_cvv">CVV</label>
                        <input type="text" name="input_cvv" id="input_cvv" />
                        <button>Paga ora</button>
                    </div>): null}
                </div>



            </form>

        </div>
    )
}