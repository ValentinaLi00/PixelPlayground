import { useState } from "react";
import classes from "./product.module.css";
import { useParams } from "react-router-dom";

export function Product() {
  const [data , setData] = useState([])
  const {id} = useParams()


  async function getAPI() {
    try{
      const response = await fetch(`http://localhost:5001/api/oggetti/${id}`)
      const responseJson = await response.json()
      setData(responseJson)
    }catch(error){
      console.error(error);
    }
    
  }

  getAPI()


  return (
    <div className={classes.product_component}>
      <div className={classes.product_thumbnail_container}>
        <div className={classes.product_thumbnail}>
          <img
            src={data.image_url}
            alt="product's thumbnail"
          />
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
            <p className={classes.sales_date}>L'offerta scade il 22/12/2024</p>
            <div className={classes.sales_container}>
              <p className={classes.sales_amount}>-{data.discount}$</p>
            </div>
            <div className={classes.price}>
              <p className={classes.previous_price}>
                <s>{data.price}$</s>
              </p>
              <h2 className={classes.actual_price}>{data.discount_price}$</h2>
            </div>
            <div className={classes.priceBtn_container}>
              <button name="wishlistBtn" className={classes.wishlistBtn}>
                <img
                  src="src\assets\paoloLupoAssets\heart_wishlist.png"
                  alt=""
                />
              </button>
              <button name="addToCartBtn" className={classes.addToCartBtn}>
                Aggiungi al carrello
              </button>
              <button name="buyNowBtn" className={classes.buyNowBtn}>
                Compra ora
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1 className={classes.product_title}>{data.title}</h1>
      <h2 className={classes.product_subTitle}>{data.sub_title}</h2>
      <div className={classes.descriptionAndDetails_container}>
        <div className={classes.description_container}>
          <h2 className={classes.title_description}>Descrizione</h2>
          <p>
            {data.description}
          </p>
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
      <div className={classes.product_gallery}>
        <h2 className={classes.productGallery_title}>Immagini di gioco</h2>
        <div className={classes.gallery_container}>
          <div className={classes.mainFrame}>
            <img
              src="src\assets\paoloLupoAssets\myOrders_icon.avif"
              alt="main frame"
            />
          </div>
          <div className={classes.galleryBtn_container}>
            <button className={classes.leftGalleryBtn}> {`<`} </button>
            <button className={classes.rightGalleryBtn}> {`>`} </button>
          </div>
          <div className={classes.product_gallery_subContainer}>
            <div>
              <img
                src="src\assets\paoloLupoAssets\myOrders_icon.avif"
                alt="product's thumbnail"
              />
            </div>
            <div>
              <img
                src="src\assets\paoloLupoAssets\myOrders_icon.avif"
                alt="product's thumbnail"
              />
            </div>
            <div>
              <img
                src="src\assets\paoloLupoAssets\myOrders_icon.avif"
                alt="product's thumbnail"
              />
            </div>
            <div>
              <img
                src="src\assets\paoloLupoAssets\myOrders_icon.avif"
                alt="product's thumbnail"
              />
            </div>
            <div>
              <img
                src="src\assets\paoloLupoAssets\myOrders_icon.avif"
                alt="product's thumbnail"
              />
            </div>
            <div>
              <img
                src="src\assets\paoloLupoAssets\myOrders_icon.avif"
                alt="product's thumbnail"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.requirements_container}>
        <h2 className={classes.requirements_title}>Requisiti di sistema</h2>
        <div className={classes.requirements_subContainer}>
          <div className={classes.minimumRequirements_container}>
            <h3 className={classes.minimumRequirements_title}>Minimi</h3>
            <table className={classes.minimumRequirements_table}>
              <thead>
                <tr>
                  <td>OS:</td>
                  <td>Windows 10 (64 bit)/Windows 11 (64 bit)</td>
                </tr>
                <tr>
                  <td>Processore:</td>
                  <td>Intel Core i5 10600 / AMD Ryzen 5 3600</td>
                </tr>
                <tr>
                  <td>Memoria:</td>
                  <td>16GB RAM</td>
                </tr>
                <tr>
                  <td>Scheda grafica:</td>
                  <td>
                    NVIDIA GeForce GTX 1070 / AMD Radeon RX 5500 XT with 8GB
                    VRAM
                  </td>
                </tr>
                <tr>
                  <td>DirectX:</td>
                  <td>Versione 12</td>
                </tr>
              </thead>
            </table>
          </div>
          <div className={classes.suggestedRequirements_container}>
            <h3 className={classes.suggestedRequirements_title}>Raccomandati</h3>
            <table className={classes.suggestedRequirements_table}>
              <thead>
                <tr>
                  <td>OS:</td>
                  <td>Windows 10 (64 bit)/Windows 11 (64 bit)</td>
                </tr>
                <tr>
                  <td>Processore:</td>
                  <td>Intel Core i7 10700 / AMD Ryzen 5 3600</td>
                </tr>
                <tr>
                  <td>Memoria:</td>
                  <td>16GB RAM</td>
                </tr>
                <tr>
                  <td>Scheda grafica:</td>
                  <td>NVIDIA GeForce RTX 2080 / AMD Radeon RX 6700</td>
                </tr>
                <tr>
                  <td>DirectX:</td>
                  <td>Versione 12</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
      <div className={classes.mainReview_container}>
        <h2 className={classes.review_title}>Recensioni</h2>

        <div className={classes.userReviewer_container}>
          <div className={classes.userReviewer_avatar_container}>
            <img
              src="src\assets\paoloLupoAssets\assetsDiProva\Screenshot 2024-03-30 154044.png"
              alt=""
              width="80px"
              height="80px"
            />
            <span>User's name</span>
          </div>
          <div className={classes.stars_container}>
            <button className={classes.starThumbnail}>
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className={classes.yellowStar}
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className={classes.blackStar}
              />
            </button>
            <button className={classes.starThumbnail}>
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className={classes.yellowStar}
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className={classes.blackStar}
              />
            </button>
            <button className={classes.starThumbnail}>
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className={classes.yellowStar}
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className={classes.blackStar}
              />
            </button>
            <button className={classes.starThumbnail}>
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className={classes.yellowStar}
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className={classes.blackStar}
              />
            </button>
            <button className={classes.starThumbnail}>
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className={classes.yellowStar}
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className={classes.blackStar}
              />
            </button>
            <div className={classes.subReview_container}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                aliquid ad reprehenderit in laborum dicta rerum libero quis ipsa
                autem mollitia cum explicabo, consequatur dolorum veritatis qui
                hic! Quisquam, sint.
              </p>
            </div>
          </div>
        </div>

        <div className={classes.userReviewer_container}>
          <div className={classes.userReviewer_avatar_container}>
            <img
              src="src\assets\paoloLupoAssets\assetsDiProva\Screenshot 2024-03-30 153928.png"
              alt=""
              width="80px"
              height="80px"

            />
            <span>User's name</span>
          </div>
          <div className={classes.stars_container}>
            <button className={classes.starThumbnail}>
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className={classes.yellowStar}
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className={classes.blackStar}
              />
            </button>
            <button className={classes.starThumbnail}>
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className={classes.yellowStar}
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className={classes.blackStar}
              />
            </button>
            <button className={classes.starThumbnail}>
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className={classes.yellowStar}
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className={classes.blackStar}
              />
            </button>
            <button className={classes.starThumbnail}>
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className={classes.yellowStar}
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className={classes.blackStar}
              />
            </button>
            <button className={classes.starThumbnail}>
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className={classes.yellowStar}
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className={classes.blackStar}
              />
            </button>
            <div className={classes.subReview_container}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                aliquid ad reprehenderit in laborum dicta rerum libero quis ipsa
                autem mollitia cum explicabo, consequatur dolorum veritatis qui
                hic! Quisquam, sint.
              </p>
            </div>
          </div>
        </div>

        <div className={classes.userReviewer_container}>
          <div className={classes.userReviewer_avatar_container}>
            <img
              src="src\assets\paoloLupoAssets\assetsDiProva\Screenshot 2024-03-30 153944.png"
              alt=""
              width="80px"
              height="80px"
            />
            <span>User's name</span>
          </div>
          <div className={classes.stars_container}>
            <button className={classes.starThumbnail}>
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className={classes.yellowStar}
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className={classes.blackStar}
              />
            </button>
            <button className={classes.starThumbnail}>
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className={classes.yellowStar}
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className={classes.blackStar}
              />
            </button>
            <button className={classes.starThumbnail}>
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className={classes.yellowStar}
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className={classes.blackStar}
              />
            </button>
            <button className={classes.starThumbnail}>
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className={classes.yellowStar}
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className={classes.blackStar}
              />
            </button>
            <button className={classes.starThumbnail}>
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className={classes.yellowStar}
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className={classes.blackStar}
              />
            </button>
            <div className={classes.subReview_container}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                aliquid ad reprehenderit in laborum dicta rerum libero quis ipsa
                autem mollitia cum explicabo, consequatur dolorum veritatis qui
                hic! Quisquam, sint.
              </p>
            </div>
          </div>
        </div>

        <div className={classes.userReviewer_container}>
          <div className={classes.userReviewer_avatar_container}>
            <img
              src="src\assets\paoloLupoAssets\assetsDiProva\Screenshot 2024-03-30 154010.png"
              alt=""
              width="80px"
              height="80px"
            />
            <span>User's name</span>
          </div>
          <div className={classes.stars_container}>
            <button className={classes.starThumbnail}>
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className={classes.yellowStar}
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className={classes.blackStar}
              />
            </button>
            <button className={classes.starThumbnail}>
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className={classes.yellowStar}
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className={classes.blackStar}
              />
            </button>
            <button className={classes.starThumbnail}>
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className={classes.yellowStar}
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className={classes.blackStar}
              />
            </button>
            <button className={classes.starThumbnail}>
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className={classes.yellowStar}
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className={classes.blackStar}
              />
            </button>
            <button className={classes.starThumbnail}>
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className={classes.yellowStar}
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className={classes.blackStar}
              />
            </button>
            <div className={classes.subReview_container}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                aliquid ad reprehenderit in laborum dicta rerum libero quis ipsa
                autem mollitia cum explicabo, consequatur dolorum veritatis qui
                hic! Quisquam, sint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
