import { Link, useNavigate } from 'react-router-dom'
import classes from './cart.module.css'
import { ScrollUp } from '../footer/ScrollUp'

export function Cart() {

    function handleDelete() {
        alert('Il prodotto è stato eliminato dal tuo carrello')
    }

    return (
        <div className={classes.container}>

            {/* Carrello */}
            <div className={classes.cart}>
                <h2>Carrello</h2>
                {/* contenitore di tutti i prodotti */}
                <div className={classes.products}>
                    {/* singolo prodotto */}
                    <div className={classes.product}>
                        <div className={classes.checkbox}>
                            <label htmlFor="choose"></label>
                            <input type="checkbox" name='choose' />
                        </div>
                        <img src="https://seeklogo.com/images/P/pokemon-logo-67F682590B-seeklogo.com.png" alt="" />
                        <div className={classes.product_title}>
                            <h4>Titolo del gioco</h4>
                            <p>God of war</p>
                        </div>
                        <div className={classes.product_price}>
                            <h4>Prezzo</h4>
                            <p>50€</p>
                        </div>
                        <div className={classes.available}>
                            <p>disponibile</p>
                        </div>
                        <div className={classes.delete}>
                            <button className={classes.button_delete} onClick={handleDelete}>Elimina</button>
                        </div>
                    </div>
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
                        <Link to='/payment'><button className={classes.checkOut_button}>Checkout</button></Link>
                        <Link to='/'><button className={classes.continue_button}>Continua con lo shopping</button></Link>
                    </div>
                </div>
            </div>
            
        </div>
        
    )


}
