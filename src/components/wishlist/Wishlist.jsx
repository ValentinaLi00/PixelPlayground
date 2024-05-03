import "./wishlist.css";
import { ScrollUp } from "../footer/ScrollUp";
import { useCart } from "../../context/CartProvider";

export function Wishlist() {
  const { addToWishlist, removeFromWishlist } = useCart();


  return (
    <div>
      <div className="wishlistBackground">
        <div className="wishlistContainer">
          <div className="upperWishlist">
            <h1>LISTA DESIDERI</h1>
          </div>
          <div className="favContainer">
            <img
              style={{ width: "200px", height: "auto" }}
              src="src\assets\loghi\ariGiaccariAssets\sfondo_wishlist.png"
              alt=""
            />
            <div className="favProdName">
              <p className="prodDetails">nome</p>
              <p>Hello World</p>
            </div>
            <div className="favProdPrice">
              <p className="prodDetails">prezzo</p>
              <p>£12,99</p>
            </div>
            <div className="favProdStatus">disponibile?</div>
            <div className="addRemoveBtns">
              <button className="addToCartBtn">aggiungi al carrello</button>
              <button className="removeFromWishlistBtn">rimuovi</button>
            </div>
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
