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
                                <div className={classes.product}>
                                    <img src={item.image} alt={item.title} />
                                    <div className={classes.title}>
                                        <p>Nome del gioco</p>
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className={classes.price}>
                                        <p>Prezzo</p>
                                        <h3>{item.price}€</h3>
                                    </div>
                                    <button className={classes.button_delete} onClick={() => removeFromCart(item.id)}>Elimina</button>
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>

            {/* Riepilogo */}
            <div className={classes.resume}>
                <h2>Riepilogo</h2>
                <div className={classes.resume_total}>
                    <div className={classes.resume_game }>
                        {cartItems.map(item => (

                            <div className={classes.game} key={item.id}>
                                <h3>{item.title}</h3>
                                <h3>{item.price}€</h3>
                            </div>

                        ))}
                    </div>
                    <div className={classes.total}>
                        <p>Totale</p>
                        <p>{calculateTotalPrice()}</p>
                    </div>
                    {/* <div className={classes.discount}>
                        <p>codice sconto</p>
                        <label htmlFor="discount"></label>
                        <input type="text" name='discount' />
                    </div> */}
                    <div className={classes.button_resume}>
                        <Link to='/payment'><button className={classes.checkOut_button}>Checkout</button></Link>
                        <Link to='/'><button className={classes.continue_button}>Continua con lo shopping</button></Link>
                    </div>
                </div>
            </div>

        </div >

    )

}
