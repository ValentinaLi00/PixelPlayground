import { useEffect, useState } from "react";
import classes from "./product.module.css";
import { Link, useParams } from "react-router-dom";
import { Gallery } from "./Gallery";
import { Requirements } from "./Requirements";
import { Reviews } from "./Reviews";
import { ScrollUp } from "../footer/ScrollUp";


export function Product() {
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
  }, []);

  function handleAlert() {
    alert("Il gioco è stato aggiunto al carrello");
  }

  return (
    <div className={classes.product_component}>
      <div className={classes.product_thumbnail_container}>
        <div className={classes.product_thumbnail}>
          <img src={data.image_background_url} alt="product's thumbnail" />
        </div>
        <div className={classes.super_container}>
          <div className={classes.trailer_container}>
            <iframe
              className={classes.trailer}
              src={data.video_url}
              title="Dragon Quest 3 HD-2D Remake - Official Japanese Trailer"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>

          <div className={classes.price_container}>
            {/* <p className={classes.sales_date}>L'offerta scade il 22/12/2024</p> */}
            {/* <div className={classes.sales_container}>
              <p className={classes.sales_amount}>-{data.discount}$</p>
            </div> */}
            <div className={classes.price}>
              <p className={classes.previous_price}>
                <s>{data.price}$</s>
              </p>
              <h2 className={classes.actual_price}>{data.discount_price}</h2>
            </div>
            <div className={classes.priceBtn_container}>
              <button name="wishlistBtn" className={classes.wishlistBtn}>
                <img
                  src="src\assets\imagesGabriele\heart_wishlist.png"
                  alt=""
                />
              </button>
              <button
                name="addToCartBtn"
                className={classes.addToCartBtn}
                onClick={handleAlert}
              >
                Aggiungi al carrello
              </button>
              <Link to="/payment">
                <button name="buyNowBtn" className={classes.buyNowBtn}>
                  Compra ora
                </button>
              </Link>
            </div>
            <span className={classes.discount}>
              {`Sconto del ${data.discount}%`}
            </span>
          </div>
        </div>
      </div>
      <h1 className={classes.product_title}>{data.title}</h1>
      <h2 className={classes.product_subTitle}>{data.sub_title}</h2>
      <div className={classes.descriptionAndDetails_container}>
        <div className={classes.description_container}>
          <h2 className={classes.title_description}>Descrizione</h2>
          <p>{data.description}</p>
        </div>
        <div className={classes.details_container}>
          <h2 className={classes.details_title}>Dettagli di gioco</h2>
          <div className={classes.details_table_container}>
            <table className={classes.details_table}>
              <thead>
                <tr>
                  <td>Rating:</td>
                  <td>{data.rating}</td>
                </tr>
                <tr>
                  <td>Sviluppatore:</td>
                  <td>{data.developer}</td>
                </tr>
                <tr>
                  <td>Data di rilascio:</td>
                  <td>22 marzo 2024</td>
                </tr>
                <tr>
                  <td>Genere:</td>
                  <td>{data.genre}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
      
      {/* <Gallery /> */}
      <Requirements />
      <Reviews />
      <ScrollUp/>
    </div>
  );
}
