import './catalogue.css';

export function Game({ game }) {


    return (
        <div className="card">
            <div className="container_img" >
                <img src={game.image_url}  />
            </div>
            <div className="container_description">
                <h4>{game.sub_title}</h4>
                <p>{game.price}€</p>
            </div>
        </div>
    )
}