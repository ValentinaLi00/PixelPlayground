import { useEffect, useRef, useState } from "react"
import './uploadAvatar.css'

export function UploadAvatar() {
    const inputRef = useRef(null)
    const [image, setImage] = useState('')

    function handleImageClick() {
        inputRef.current.click()
    }
    function handleImageChange(event) {
        const file = event.target.files[0];
        console.log(file);
        setImage(event.target.files[0])
    }

    return (
        <div className="uploadPic" onClick={handleImageClick}>
            <h1>CARICA LA TUA IMMAGINE</h1>
            {image ? <img src={URL.createObjectURL(image)} alt="" /> : <img style={{filter: 'invert(100%)'}} src="src\assets\paoloLupoAssets\uploadImage.png" alt="avatar_img" />}
            <input type="file" ref={inputRef} onChange={handleImageChange} style={{ display: 'none' }} />
        </div>


    )
}