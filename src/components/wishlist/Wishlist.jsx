import "./wishlist.css";
import { ScrollUp } from "../footer/ScrollUp";
import { useCart } from "../../context/CartProvider";

export function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useCart();




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
                    <button className="addToCartBtn">aggiungi al carrello</button>
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
