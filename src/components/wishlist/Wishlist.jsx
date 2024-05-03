import "./wishlist.css";
import { ScrollUp } from "../footer/ScrollUp";
import { useCart } from "../../context/CartProvider";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useCart();
  const { addToCart } = useCart();
  const { id } = useParams();
  const [data, setData] = useState([]);

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
    <div>
      <div className="wishlistBackground">
        <div className="wishlistContainer">
          <div className="upperWishlist">
            <h1>LISTA DESIDERI</h1>
          </div>
          <div className="favContainer">
            <ul>
              {wishlistItems.map(wish => (
                <li key={wish.id}>
                  <img
                    style={{ width: "200px", height: "auto" }}
                    src={wish.image}
                    alt=""
                  />
                  <div className="favProdName">
                    <p className="prodDetails">Nome del gioco</p>
                    <p>{wish.title}</p>
                  </div>
                  <div className="favProdPrice">
                    <p className="prodDetails">Prezzo</p>
                    <p>{wish.price}</p>
                  </div>
                  <div className="addRemoveBtns">
                    <button className="addToCartBtn" onClick={handleAddToCart}>aggiungi al carrello</button>
                    <button className="removeFromWishlistBtn" onClick={() => removeFromWishlist(wish.id)}>rimuovi</button>
                  </div>
                </li>
              ))}
            </ul>

          </div>

          {/* IF WISHLIST IS EMPTY  */}
          {/* <div className='emptyWishlist' >
                    <p style={{fontSize: '25px'}}>la tua lista desideri è vuota</p>
                    <img style={{ width: '50px' }} src="src\assets\loghi\ariGiaccariAssets\broken-heart.png" alt="brokenHeart" />
                </div> */}
        </div>
      </div>
      <ScrollUp />
    </div>
  );
}
