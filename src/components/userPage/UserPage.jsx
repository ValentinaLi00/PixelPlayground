import React from "react";
import "./userPage.css";

export function UserPage() {
  return (
    <div className="UserPage_component">
      {/* <div className="userPage_logo_container">
        <img src="src\assets\loghi\logo-removebg-preview.png" alt="" />
      </div> */}
      <div className="cards_collection">
        <div className="cards_collection_container">
          <div className="user_card_container">
            <div className="icon_img_container">
              <img
                src="src\assets\paoloLupoAssets\user_avatar.png"
                alt="user_avatar"
              />
            </div>
            <p>Personalizza</p>
          </div>
          <div className="user_card_container">
            <div className="icon_img_container"><img src="src\assets\paoloLupoAssets\myOrders_icon.avif" alt="" /></div>
            <p>I miei Ordini</p>
          </div>
        </div>
        <div className="cards_collection_container">
          <div className="user_card_container">
            <div className="icon_img_container"><img src="src\assets\paoloLupoAssets\chest_wishlist_icon.png" alt="" /></div>
            <p>Wishlist</p>
          </div>
          <div className="user_card_container">
            <div className="icon_img_container"><img src="src\assets\paoloLupoAssets\shield_privacy_icon.png" alt="" /></div>
            <p>Privacy e Sicurezza</p>
          </div>
        </div>
        <div className="cards_collection_container">
          <div className="user_card_container">
            <siv className="icon_img_container"><img src="src\assets\paoloLupoAssets\newsletter_icon.jpg" alt="" /></siv>
            <p>Newsletter</p>
          </div>
          <div className="user_card_container">
            <div className="icon_img_container"><img src="src\assets\paoloLupoAssets\exitDoor_icon.jpg" alt="" /></div>
            <p>Exit</p>
          </div>
        </div>
      </div>
    </div>
  );
}
