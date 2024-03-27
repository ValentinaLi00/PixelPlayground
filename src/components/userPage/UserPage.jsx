import React from "react";
import "./userPage.css";

export function UserPage() {
  return (
    <div className="UserPage_component">
      <div className="userPage_logo_container">
        <img src="src\assets\loghi\logo-removebg-preview.png" alt="" />
      </div>
      <div className="cards_collection">
        <div className="cards_collection_container">
          <div className="user_card_container">
            <img src="" alt="" />
            <p>Personalizza</p>
          </div>
          <div className="user_card_container">
            <img src="" alt="" />
            <p>I miei Ordini</p>
          </div>
        </div>
        <div className="cards_collection_container">
          <div className="user_card_container">
            <img src="" alt="" />
            <p>Wishlist</p>
          </div>
          <div className="user_card_container">
            <img src="" alt="" />
            <p>Privacy e Sicurezza</p>
          </div>
        </div>
        <div className="cards_collection_container">
          <div className="user_card_container">
            <img src="" alt="" />
            <p>Newsletter</p>
          </div>
          <div className="user_card_container">
            <img src="" alt="" />
            <p>Exit</p>
          </div>
        </div>
      </div>
    </div>
  );
}
