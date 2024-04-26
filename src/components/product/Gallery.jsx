import classes from "./product.module.css";

export function Gallery() {
  return (
    <>
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
    </>
  );
}
