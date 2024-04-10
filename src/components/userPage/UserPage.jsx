import { useEffect, useRef, useState } from "react";
import "./userPage.css";

export function UserPage() {
  const [editing, setEditing] = useState(false);
  const [email, setEmail] = useState("");

  const [editingPsw, setEditingPsw] = useState(false);
  const [password, setPassword] = useState("");

  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  function handleImageClick() {
    inputRef.current.click();
  }
  function handleImageChange(event) {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
  }

  return (
    <>
      <div className="userPagediv">
        <div className="wholeUserPage">
          <div className="leftUserPart">
            <div className="account">
              <p
                style={{
                  fontSize: "23px",
                  fontWeight: "100",
                  color: "white",
                  textShadow: "0px 0px 15px rgb(205, 0, 185)",
                }}
              >
                ACCOUNT
              </p>
              <div className="modifyAcc">
                <div className="uploadPic" onClick={handleImageClick}>
                  <h3>User's name</h3>
                  {image ? (
                    <div>
                      <img
                        className="clientPic"
                        src={URL.createObjectURL(image)}
                        alt=""
                      />{" "}
                      <p>clicca per scegliere un'altra foto</p>
                    </div>
                  ) : (
                    <div>
                      {" "}
                      <img
                        className="uploadImg"
                        src="src\assets\paoloLupoAssets\uploadImage.png"
                        alt="avatar_img"
                      />{" "}
                    </div>
                  )}
                  <input
                    type="file"
                    ref={inputRef}
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                </div>
                {editing ? (
                  <div>
                    <span>e-mail:</span>
                    <input
                      className="inputUserPage"
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />{" "}
                    <img
                      onClick={() => setEditing(false)}
                      style={{
                        width: "15px",
                        cursor: "pointer",
                        height: "100%",
                        transform: "rotate(40deg)",
                      }}
                      src="src\assets\paoloLupoAssets\pencil_pxl-removebg-preview.png"
                      alt="modify_email"
                    />
                  </div>
                ) : (
                  <div>
                    <span>e-mail: jessicarossi@gmail.com </span>{" "}
                    <img
                      onClick={() => setEditing(true)}
                      style={{
                        width: "15px",
                        cursor: "pointer",
                        height: "100%",
                        transform: "rotate(40deg)",
                      }}
                      src="src\assets\paoloLupoAssets\pencil_pxl-removebg-preview.png"
                      alt="modify_email"
                    />
                  </div>
                )}
                {editingPsw ? (
                  <>
                    <div>
                      <span>password:</span>
                      <input
                        className="inputUserPage"
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />{" "}
                      <img
                        onClick={() => setEditingPsw(false)}
                        style={{
                          width: "15px",
                          cursor: "pointer",
                          height: "100%",
                          transform: "rotate(40deg)",
                        }}
                        src="src\assets\paoloLupoAssets\pencil_pxl-removebg-preview.png"
                        alt="modify_password"
                      />
                    </div>
                    <p>cancella account</p>
                  </>
                ) : (
                  <>
                    <div>
                      <span>password: ************ </span>{" "}
                      <img
                        onClick={() => setEditingPsw(true)}
                        style={{
                          width: "15px",
                          cursor: "pointer",
                          height: "100%",
                          transform: "rotate(40deg)",
                        }}
                        src="src\assets\paoloLupoAssets\pencil_pxl-removebg-preview.png"
                        alt="modify-psw"
                      />
                    </div>
                    <p>cancella account</p>
                  </>
                )}
              </div>
            </div>
            <div className="orders">
              <span
                style={{
                  fontSize: "23px",
                  fontWeight: "100",
                  color: "white",
                  textShadow: "0px 0px 15px rgb(205, 0, 185)",
                }}
              >
                I MIEI ORDINI
              </span>
              <img
                src="src\assets\paoloLupoAssets\casket-removebg-preview.png"
                alt="casket"
              />
              <div className="ordersList">
                <div className="orderedItem">
                  <p>ordine:</p>
                  <p>data: --/--/--</p>
                </div>
                <p className="showMore">mostra altro</p>
              </div>
            </div>
          </div>
          <div className="rightUserPart">
            <div className="newsletter">
              <span
                style={{
                  fontSize: "23px",
                  fontWeight: "100",
                  color: "white",
                  textShadow: "0px 0px 15px rgb(205, 0, 185)",
                }}
              >
                NEWSLETTER
              </span>
              <img
                src="src\assets\paoloLupoAssets\newsletter-removebg-preview.png"
                alt=""
              />
              <div className="subscribe">
                <p>iscriviti per rimanere aggiornato</p>
                <button>subscribe</button>
              </div>
            </div>
            <div className="wishlistAndExit">
              <div>
                <p
                  style={{
                    fontSize: "23px",
                    fontWeight: "100",
                    color: "white",
                    textShadow: "0px 0px 15px rgb(205, 0, 185)",
                  }}
                >
                  WISHLIST
                </p>
                <div className="wishlistDivImg">
                  <img
                    className="wishlist"
                    src="\src\assets\paoloLupoAssets\cuore_grande_pixel-removebg-preview.png"
                    alt="heart_wishlist_icon"
                  />
                </div>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "23px",
                    fontWeight: "100",
                    color: "white",
                    textShadow: "0px 0px 15px rgb(205, 0, 185)",
                  }}
                >
                  EXIT
                </p>
                <div className="exitDivImg">
                  {" "}
                  <img
                    className="exit"
                    src="src\assets\paoloLupoAssets\exitDoor_icon-removebg-preview.png"
                    alt="exit_icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
