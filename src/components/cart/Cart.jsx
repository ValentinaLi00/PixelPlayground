import { Link, useNavigate } from 'react-router-dom'
import classes from './cart.module.css'
import { ScrollUp } from '../footer/ScrollUp'
import { useCart } from '../../context/CartProvider';

export function Cart() {

    const { cartItems, removeFromCart } = useCart();

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    return (
        <div className={classes.container}>

            {/* Carrello */}
            <div className={classes.cart}>
                <h2>Carrello</h2>
                {/* contenitore di tutti i prodotti */}
                <div className={classes.products}>
                    {/* singolo prodotto */}

                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <img src={item.image} alt={item.title} />
                                <h4>{item.title}</h4>
                                <p>{item.price}€</p>
                                <button onClick={() => removeFromCart(item.id)}>Elimina</button>
                            </li>
                        ))}
                    </ul>
                    
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
                        <p>{calculateTotalPrice()}</p>
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
