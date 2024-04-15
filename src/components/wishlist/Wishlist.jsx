import './wishlist.css'
export function Wishlist() {

    return (

        <div className="wishlistBackground">
            <img className='wishlistBackgroundImg' src='src\assets\loghi\ariGiaccariAssets\sfondo_wishlist.png' alt="" />
            
            <div className='wishlistContainer'>

                <div className="upperWishlist">
                    <img style={{ width: '100px', height: '100%' }} src="src\assets\loghi\ariGiaccariAssets\logo-removebg-preview.png" alt="" />
                    <h1>LISTA DESIDERI</h1>
                    <img style={{ width: '70px', height: '100%', paddingTop: '10px' }} src="src\assets\loghi\ariGiaccariAssets\cart_full-removebg-preview.png" alt="" />
                </div>

                <div className="favContainer">
                    <img style={{ width: '200px', height: 'auto' }} src="src\assets\loghi\ariGiaccariAssets\sfondo_wishlist.png" alt="" />
                    <div className="favProdName">
                        <p className='prodDetails'>nome</p>
                        <p>Hello World</p>
                    </div>
                    <div className="favProdPrice">
                        <p className='prodDetails'>prezzo</p>
                        <p>£12,99</p>
                    </div>
                    <div className="favProdStatus">disponibile?</div>
                    <div className="addRemoveBtns">
                        <button>aggiungi al carrello</button> 
                        <button>rimuovi</button>
                    </div>

                </div>
            </div>
        </div>


    )
}