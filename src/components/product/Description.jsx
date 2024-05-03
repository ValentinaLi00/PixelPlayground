import { useEffect, useState } from 'react';
import classes from './description.module.css'
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartProvider';

export function Description() {
    const { addToCart } = useCart();
    const [data, setData] = useState([]);
    const { id } = useParams();

    async function getAPI() {
        try {
            const response = await fetch(`http://localhost:5001/api/oggetti/${id}`);
            const responseJson = await response.json();
            setData(responseJson);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getAPI();
    }, [id]);

    const handleAddToCart = () => {
        if (data) {
            addToCart({
                id: data.id,
                title: data.title,
                price: data.discount_price,
                image: data.image_url
            });
            alert('Prodotto aggiunto al carrello!');
        }
    };

    

    return (
        <div className={classes.container}>
            <div className={classes.container_img_banner}>
                <div className={classes.background_image}>
                    <img src={data.image_background_url} alt="" />
                    <div className={classes.video_banner}>
                        {/* video */}
                        <div className={classes.video}>
                            <iframe
                                className={classes.trailer}
                                src={data.video_url}
                                title="Dragon Quest 3 HD-2D Remake - Official Japanese Trailer"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                        {/* banner */}
                        <div className={classes.banner}>
                            <div className={classes.price}>
                                <div>
                                    <s>{data.price}€</s>
                                </div>
                                <p>{data.discount_price}€</p>
                            </div>
                            <div className={classes.buttons}>
                                <div className={classes.wish} onClick={handleAddToCart}><img src="src\assets\imagesGabriele\heart.png" alt="" /></div>
                                <button onClick={handleAddToCart}>aggiungi al carrello</button>
                            </div>
                            <span className={classes.discount}>
                                Sconto del 10%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.title}>
                <h2>{data.title}</h2>
                <p>{data.sub_title}</p>
            </div>
            <div className={classes.description_details}>
                <div className={classes.description}>
                    <h2>Descrizione</h2>
                    <hr />
                    <div className={classes.container_description}>
                        <p>{data.description}</p>
                    </div>
                </div>
                <div className={classes.details}>
                    <h2>Dettagli</h2>
                    <hr />
                    <table className={classes.details_table}>
                        <thead className={classes.thead}>
                            <tr className={classes.tr}>
                                <td>Rating:</td>
                                <td>{data.rating}</td>
                            </tr>
                            <tr className={classes.tr}>
                                <td>Sviluppatore:</td>
                                <td>{data.developer}</td>
                            </tr>
                            <tr className={classes.tr}>
                                <td>Data di rilascio:</td>
                                <td>22 marzo 2024</td>
                            </tr>
                            <tr className={classes.tr}>
                                <td>Genere:</td>
                                <td>{data.genre}</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}