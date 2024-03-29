import "./product.css";

export function Product() {
  return (
    <div className="product_component">
      <div className="product_thumbnail_container">
        <img src="" alt="product's thumbnail" />
      </div>
      <div className="super_container">
        <div className="trailer_container">
          <video src="" type="" className="video_trailer"></video>
        </div>
        <div className="price_container">
          <p className="sales_date">L'offerta scade il 01/01/2024</p>
          <div className="sales_container">
            <p className="sales_amount">-50%</p>
          </div>
          <div className="price">
            <p className="previous_price">39,99$</p>
            <h2 className="actual_price">39,99$</h2>
          </div>
          <div className="priceBtn_container">
            <button name="wishlistBtn" className="wishlistBtn">
              <img src="" alt="cuore preferiti" />
            </button>
            <button name="addToCartBtn">Aggiungi al carrello</button>
            <button name="buyNowBtn">Compra ora</button>
          </div>
        </div>
      </div>
      <h1 className="product_title">Titolo prodotto:</h1>
      <h2 className="product_subTitle">Sottotito prodotto</h2>
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
          <div className="details_table">
            <table>
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
        <div>
          <img src="" alt="product's thumbnail" />
          <img src="" alt="product's thumbnail" />
          <img src="" alt="product's thumbnail" />
          <img src="" alt="product's thumbnail" />
          <img src="" alt="product's thumbnail" />
        </div>
      </div>
      <div className="requirements_container">
        <h2 className="requirements_title">Requisiti di sistema</h2>
        <div className="minimumRequirements_container">
          <h3 className="requirements_title">Minimi</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim dicta
            voluptas natus repellendus, eos modi ipsam cum illum, culpa vel hic
            repudiandae sint magni, cumque quis? Earum repellat odio reiciendis.
            Aperiam maxime sunt, tempora qui mollitia eius accusamus magni?
            Molestiae earum, iste et amet incidunt deleniti dolorum esse
            necessitatibus labore at aspernatur sunt, tempora sed animi impedit
            optio ducimus laborum.
          </p>
        </div>
        <div className="suggestedRequirements_container">
          <h3 className="requirements_title">Raccomandati</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A officiis
            sint maxime consectetur sed recusandae saepe debitis, porro
            praesentium vero dolore ducimus quod mollitia in necessitatibus
            eligendi fuga sunt consequuntur? Quam quibusdam illum amet cum
            reprehenderit officia enim asperiores dolorem corporis excepturi,
            tempore tempora incidunt, labore, voluptatum ipsum ad! Nulla
            repellendus odit optio expedita, laboriosam fuga id perspiciatis
            autem aut.
          </p>
        </div>
        <div className="mainReview_container">
          <h2 className="review_title">Recensioni</h2>
          <div className="userReviewer_container">
            <div className="userReviewer_avatar_container">
              <img src="" alt="user avatar" />
              <span>User's name</span>
            </div>
          </div>
          <div className="stars_container">
            <button className="starThumbnail">
              <img src="" alt="star" />
            </button>
            <button className="starThumbnail">
              <img src="" alt="star" />
            </button>
            <button className="starThumbnail">
              <img src="" alt="star" />
            </button>
            <button className="starThumbnail">
              <img src="" alt="star" />
            </button>
            <button className="starThumbnail">
              <img src="" alt="star" />
            </button>
          </div>
          <div className="subReview_container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              aliquid ad reprehenderit in laborum dicta rerum libero quis ipsa
              autem mollitia cum explicabo, consequatur dolorum veritatis qui
              hic! Quisquam, sint.
            </p>
          </div>
          <div className="userReviewer_container">
            <div className="userReviewer_avatar_container">
              <img src="" alt="user avatar" />
              <span>User's name</span>
            </div>
          </div>
          <div className="stars_container">
            <button className="starThumbnail">
              <img src="" alt="star" />
            </button>
            <button className="starThumbnail">
              <img src="" alt="star" />
            </button>
            <button className="starThumbnail">
              <img src="" alt="star" />
            </button>
            <button className="starThumbnail">
              <img src="" alt="star" />
            </button>
            <button className="starThumbnail">
              <img src="" alt="star" />
            </button>
          </div>
          <div className="subReview_container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              aliquid ad reprehenderit in laborum dicta rerum libero quis ipsa
              autem mollitia cum explicabo, consequatur dolorum veritatis qui
              hic! Quisquam, sint.
            </p>
          </div>
          <div className="userReviewer_container">
            <div className="userReviewer_avatar_container">
              <img src="" alt="user avatar" />
              <span>User's name</span>
            </div>
          </div>
          <div className="stars_container">
            <button className="starThumbnail">
              <img src="" alt="star" />
            </button>
            <button className="starThumbnail">
              <img src="" alt="star" />
            </button>
            <button className="starThumbnail">
              <img src="" alt="star" />
            </button>
            <button className="starThumbnail">
              <img src="" alt="star" />
            </button>
            <button className="starThumbnail">
              <img src="" alt="star" />
            </button>
          </div>
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
  );
}
