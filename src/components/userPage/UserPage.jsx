import React, { useState } from "react";
import "./userPage.css";

export function UserPage() {
  const [editing, setEditing] = useState(false);
  const [email, setEmail] = useState('');

  const [editingPsw, setEditingPsw] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <>
      <div className="userIcon">
        <p>user's name</p>
        <img src="" alt="user_icon" />
      </div>
      <div className="wholeUserPage">
        <div className="leftUserPart">
          <div className="account">
            <p>ACCOUNT</p>
            <div className="modifyAcc" >
              {editing ? (
                <div>
                  <span>e-mail:</span><input className="inputUserPage" type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <img onClick={() => setEditing(false)} style={{ width: '15px', cursor: 'pointer', height: '100%', transform: 'rotate(40deg)' }} src="src\assets\paoloLupoAssets\pencil_pxl-removebg-preview.png" alt="modify_email" />
                </div>
              ) : (
                <div>
                  <span>e-mail: jessicarossi@gmail.com </span> <img onClick={() => setEditing(true)} style={{ width: '15px', cursor: 'pointer', height: '100%', transform: 'rotate(40deg)' }} src="src\assets\paoloLupoAssets\pencil_pxl-removebg-preview.png" alt="modify_email" />
                </div>
              )}
              {editingPsw ? (
                <>
                  <div>
                    <span>password:</span><input className="inputUserPage" type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <img onClick={() => setEditingPsw(false)} style={{ width: '15px', cursor: 'pointer', height: '100%', transform: 'rotate(40deg)' }} src="src\assets\paoloLupoAssets\pencil_pxl-removebg-preview.png" alt="modify_password" />
                  </div>
                  <p>cancella account</p>
                </>) : (
                <>
                  <div>
                    <span>password:  ************ </span> <img onClick={() => setEditingPsw(true)} style={{ width: '15px', cursor: 'pointer', height: '100%', transform: 'rotate(40deg)' }} src="src\assets\paoloLupoAssets\pencil_pxl-removebg-preview.png" alt="modify-psw" />
                  </div>
                  <p>cancella account</p>
                </>
              )}

            </div>

          </div>
          <div className="orders">
            <p>I MIEI ORDINI</p>
            <div className="ordersList">
              <p>ordine:</p>
              <p>data: </p>
              <p>mostra altro</p>
            </div>
          </div>
        </div>
        <div className="rightUserPart">
          <div className="newsletter">
            <p>NEWSLETTER</p>
            <div className="subscribe">
              <p>iscriviti per rimanere aggiornato</p>
              <img style={{width: '50px'}} src="src\assets\paoloLupoAssets\newsletter-removebg-preview.png" alt="" />
              <button>iscriviti</button>
            </div>
          </div>
          <div classname='wishlistAndExit'>
            <div className="wishlist">
              <p>WISHLIST</p>
              <img src="" alt="heart_wishlist_icon" />
            </div>
            <div className="exit">
              <p>EXIT</p>
              <img src="src\assets\paoloLupoAssets\exitDoor_icon.jpg" alt="exit_icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
