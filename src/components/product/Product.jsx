import "./product.css";

export function Product() {
  return (
    <div className="product_component">
      <div className="product_thumbnail_container">
        <div className="product_thumbnail">
          <img
            src="src\assets\paoloLupoAssets\assetsDiProva\dragon-quest-iii-remake-ps5-remake-edition-playstation-5-gioco-playstation-store-cover.jpg"
            alt="product's thumbnail"
          />
        </div>
        <div className="super_container">
          <div className="trailer_container">
            <iframe
              className="trailer"
              src="https://www.youtube.com/embed/FmfiqydPjVk?&mute=1&autoplay=1"
              title="Dragon Quest 3 HD-2D Remake - Official Japanese Trailer"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="price_container">
            <p className="sales_date">L'offerta scade il xx/xx/xxxx</p>
            <div className="sales_container">
              <p className="sales_amount">-X%</p>
            </div>
            <div className="price">
              <p className="previous_price">
                <s>xx,xx$</s>
              </p>
              <h2 className="actual_price">XX,XX$</h2>
            </div>
            <div className="priceBtn_container">
              <button name="wishlistBtn" className="wishlistBtn">
                <img
                  src="src\assets\paoloLupoAssets\heart_wishlist.png"
                  alt=""
                />
              </button>
              <button name="addToCartBtn" className="addToCartBtn">
                Aggiungi al carrello
              </button>
              <button name="buyNowBtn" className="buyNowBtn">
                Compra ora
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="product_title">Titolo prodotto:</h1>
      <h2 className="product_subTitle">Sottotitolo prodotto</h2>
      <div className="descriptionAndDetails_container">
        <div className="description_container">
          <h2 className="title_description">Descrizione</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quia
            delectus eos facilis enim at vitae maiores esse architecto nihil.
            Iste nulla, iure commodi magni nisi facere similique vero dolorum?
            Iure quos, repudiandae nostrum voluptatum necessitatibus dolorem!
            Pariatur repellendus vel voluptate delectus alias natus vitae dolore
            quod possimus cumque exercitationem, veritatis labore sed,
            necessitatibus sapiente, aliquam facere inventore! Repudiandae,
            fugit. Alias, quas molestiae ratione vitae voluptatum dolores
            perspiciatis rem deserunt natus in expedita enim inventore
            reprehenderit, voluptatibus vel a ipsa, consectetur non velit sunt.
            Odio nisi laudantium ratione ab et? Aliquid labore reiciendis
            voluptate cum asperiores dignissimos necessitatibus facilis, ipsa
            voluptatibus provident explicabo et at qui architecto quibusdam vero
            rerum esse quidem error numquam enim impedit quos! Quidem, fugit
            cumque. Odio perspiciatis recusandae eaque laudantium, sapiente
            voluptatem ad quas consectetur excepturi porro iusto accusamus ut.
            Enim amet deserunt nemo consectetur error, ab tempore, porro quasi
            eaque commodi repellendus, dicta quibusdam! Perspiciatis numquam cum
            error at voluptas rerum dolorem non obcaecati earum, qui atque
            quisquam labore eveniet omnis optio temporibus mollitia veritatis!
            Ratione, eveniet. Dolorum saepe repellat atque, cupiditate ex cum.
            Blanditiis earum temporibus ipsa porro mollitia nobis quos atque
            veniam dicta tempore fuga quasi quod, magnam asperiores omnis!
            Dolorem eos consectetur quis. Nihil rerum necessitatibus laudantium
            quidem provident nam! Accusamus. Doloremque, eaque! Quis sit fuga
            obcaecati accusantium libero autem, possimus temporibus officia eum
            cum? Tempore, cupiditate quia nam sequi, nihil facere voluptatem
            consectetur id, eos sunt laboriosam culpa. Quo, est! Omnis
            necessitatibus aperiam nam eum labore alias minima adipisci nesciunt
            harum, optio dolorem tempora voluptatum laboriosam sapiente
            molestiae mollitia aliquid quae laborum iste porro minus, magni
            facilis atque! Quasi, beatae! Doloribus commodi et velit magnam
            exercitationem provident animi veritatis nesciunt! Maiores veniam
            reprehenderit rem labore beatae consectetur quos consequuntur eius
            voluptate, exercitationem perspiciatis suscipit ullam, delectus,
            sapiente molestias autem non.
          </p>
        </div>
        <div className="details_container">
          <h2 className="details_title">Dettagli di gioco</h2>
          <div className="details_table_container">
            <table className="details_table">
              <thead>
                <tr>
                  <td>Rating:</td>
                  <td>PEGI 18</td>
                </tr>
                <tr>
                  <td>Sviluppatore:</td>
                  <td>CAPCOM Co., Ltd</td>
                </tr>
                <tr>
                  <td>Data di rilascio:</td>
                  <td>22 marzo 2024</td>
                </tr>
                <tr>
                  <td>Genere:</td>
                  <td>Giocatore singolo, Azione, RPG</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
      <div className="product_gallery">
        <h2 className="productGallery_title">Immagini di gioco</h2>
        <div className="product_gallery_subContainer">
          <div>
            <img
              src="src\assets\paoloLupoAssets\myOrders_icon.avif"
              alt="product's thumbnail"
            />
          </div>{" "}
          <div>
            <img
              src="src\assets\paoloLupoAssets\myOrders_icon.avif"
              alt="product's thumbnail"
            />
          </div>{" "}
          <div>
            <img
              src="src\assets\paoloLupoAssets\myOrders_icon.avif"
              alt="product's thumbnail"
            />
          </div>{" "}
          <div>
            <img
              src="src\assets\paoloLupoAssets\myOrders_icon.avif"
              alt="product's thumbnail"
            />
          </div>
        </div>
      </div>
      <div className="requirements_container">
        <h2 className="requirements_title">Requisiti di sistema</h2>
        <div className="requirements_subContainer">
          <div className="minimumRequirements_container">
            <h3 className="minimumRequirements_title">Minimi</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
              dicta voluptas natus repellendus, eos modi ipsam cum illum, culpa
              vel hic repudiandae sint magni, cumque quis? Earum repellat odio
              reiciendis. Aperiam maxime sunt, tempora qui mollitia eius
              accusamus magni? Molestiae earum, iste et amet incidunt deleniti
              dolorum esse necessitatibus labore at aspernatur sunt, tempora sed
              animi impedit optio ducimus laborum.
            </p>
          </div>
          <div className="suggestedRequirements_container">
            <h3 className="suggestedRequirements_title">Raccomandati</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              officiis sint maxime consectetur sed recusandae saepe debitis,
              porro praesentium vero dolore ducimus quod mollitia in
              necessitatibus eligendi fuga sunt consequuntur? Quam quibusdam
              illum amet cum reprehenderit officia enim asperiores dolorem
              corporis excepturi, tempore tempora incidunt, labore, voluptatum
              ipsum ad! Nulla repellendus odit optio expedita, laboriosam fuga
              id perspiciatis autem aut.
            </p>
          </div>
        </div>
      </div>
      <div className="mainReview_container">
        <h2 className="review_title">Recensioni</h2>

        <div className="userReviewer_container">
          <div className="userReviewer_avatar_container">
            <img
              src="src\assets\paoloLupoAssets\assetsDiProva\Screenshot 2024-03-30 154044.png"
              alt=""
              width="80px"
              height="80px"
            />
            <span>User's name</span>
          </div>
          <div className="stars_container">
            <button className="starThumbnail">
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className="yellowStar"
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className="blackStar"
              />
            </button>
            <button className="starThumbnail">
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className="yellowStar"
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className="blackStar"
              />
            </button>
            <button className="starThumbnail">
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className="yellowStar"
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className="blackStar"
              />
            </button>
            <button className="starThumbnail">
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className="yellowStar"
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className="blackStar"
              />
            </button>
            <button className="starThumbnail">
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className="yellowStar"
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className="blackStar"
              />
            </button>
            <div className="subReview_container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                aliquid ad reprehenderit in laborum dicta rerum libero quis ipsa
                autem mollitia cum explicabo, consequatur dolorum veritatis qui
                hic! Quisquam, sint.
              </p>
            </div>
          </div>
        </div>

        <div className="userReviewer_container">
          <div className="userReviewer_avatar_container">
            <img
              src="src\assets\paoloLupoAssets\assetsDiProva\Screenshot 2024-03-30 154010.png"
              alt=""
              width="80px"
              height="80px"
            />
            <span>User's name</span>
          </div>
          <div className="stars_container">
            <button className="starThumbnail">
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className="yellowStar"
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className="blackStar"
              />
            </button>
            <button className="starThumbnail">
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className="yellowStar"
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className="blackStar"
              />
            </button>
            <button className="starThumbnail">
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className="yellowStar"
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className="blackStar"
              />
            </button>
            <button className="starThumbnail">
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className="yellowStar"
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className="blackStar"
              />
            </button>
            <button className="starThumbnail">
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className="yellowStar"
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className="blackStar"
              />
            </button>
            <div className="subReview_container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                aliquid ad reprehenderit in laborum dicta rerum libero quis ipsa
                autem mollitia cum explicabo, consequatur dolorum veritatis qui
                hic! Quisquam, sint.
              </p>
            </div>
          </div>
        </div>

        <div className="userReviewer_container">
          <div className="userReviewer_avatar_container">
            <img
              src="src\assets\paoloLupoAssets\assetsDiProva\Screenshot 2024-03-30 154026.png"
              alt=""
              width="80px"
              height="80px"
            />
            <span>User's name</span>
          </div>
          <div className="stars_container">
            <button className="starThumbnail">
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className="yellowStar"
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className="blackStar"
              />
            </button>
            <button className="starThumbnail">
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className="yellowStar"
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className="blackStar"
              />
            </button>
            <button className="starThumbnail">
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className="yellowStar"
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className="blackStar"
              />
            </button>
            <button className="starThumbnail">
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className="yellowStar"
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className="blackStar"
              />
            </button>
            <button className="starThumbnail">
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className="yellowStar"
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className="blackStar"
              />
            </button>
            <div className="subReview_container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                aliquid ad reprehenderit in laborum dicta rerum libero quis ipsa
                autem mollitia cum explicabo, consequatur dolorum veritatis qui
                hic! Quisquam, sint.
              </p>
            </div>
          </div>
        </div>

        <div className="userReviewer_container">
          <div className="userReviewer_avatar_container">
            <img
              src="src\assets\paoloLupoAssets\assetsDiProva\Screenshot 2024-03-30 153928.png"
              alt=""
              width="80px"
              height="80px"
            />
            <span>User's name</span>
          </div>
          <div className="stars_container">
            <button className="starThumbnail">
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className="yellowStar"
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className="blackStar"
              />
            </button>
            <button className="starThumbnail">
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className="yellowStar"
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className="blackStar"
              />
            </button>
            <button className="starThumbnail">
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className="yellowStar"
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className="blackStar"
              />
            </button>
            <button className="starThumbnail">
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className="yellowStar"
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className="blackStar"
              />
            </button>
            <button className="starThumbnail">
              <img
                src="src\assets\paoloLupoAssets\pixel-star.png"
                alt="star"
                className="yellowStar"
              />
              <img
                src="src\assets\paoloLupoAssets\black-pixel-star.png"
                alt=""
                className="blackStar"
              />
            </button>
            <div className="subReview_container">
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
