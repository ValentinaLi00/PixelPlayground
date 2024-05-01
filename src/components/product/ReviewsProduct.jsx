import classes from "./reviews.module.css";


export function ReviewsProduct() {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h2>Recensioni</h2>
        <hr />
      </div>

      <div className={classes.container_reviews}>

        <div className={classes.user}>
          <div className={classes.avatar}>
            <div className={classes.image}>
              <img src="src\assets\paoloLupoAssets\assetsDiProva\Screenshot 2024-03-30 153947.png" alt="" />
            </div>
            <p>Mario Rossi</p>
          </div>
          <div className={classes.review}>
            <div className={classes.stars}>
              <img src="src\assets\paoloLupoAssets\pixel-star.png" alt="" />
              <img src="src\assets\paoloLupoAssets\pixel-star.png" alt="" />
              <img src="src\assets\paoloLupoAssets\pixel-star.png" alt="" />
              <img src="src\assets\paoloLupoAssets\pixel-star.png" alt="" />
              <img src="src\assets\paoloLupoAssets\pixel-star.png" alt="" />

            </div>
            <div className={classes.description}>
              <p>Sono rimasto rapito dal mondo creato in questo videogioco. La trama avvincente e i personaggi ben sviluppati mi hanno catturato sin dall'inizio. Gli effetti grafici sono spettacolari e l'ambientazione è unica. Tuttavia, avrei gradito una maggiore varietà di missioni secondarie per prolungare la longevità del gioco.</p>
            </div>
          </div>
        </div>

        <div className={classes.user}>
          <div className={classes.avatar}>
            <div className={classes.image}>
              <img src="src\assets\paoloLupoAssets\assetsDiProva\Screenshot 2024-03-30 153958.png" alt="" />
            </div>
            <p>Jessica Bianchi</p>
          </div>
          <div className={classes.review}>
            <div className={classes.stars}>
              <img src="src\assets\paoloLupoAssets\pixel-star.png" alt="" />
              <img src="src\assets\paoloLupoAssets\pixel-star.png" alt="" />
              <img src="src\assets\paoloLupoAssets\pixel-star.png" alt="" />
              <img src="src\assets\paoloLupoAssets\pixel-star.png" alt="" />
              <img src="src\assets\paoloLupoAssets\pixel-star.png" alt="" />
            </div>
            <div className={classes.description}>
              <p>Questo videogioco è un'avventura epica che mi ha coinvolto fin dalla prima battaglia. La varietà di personaggi giocabili e le abilità personalizzabili offrono un'esperienza di gioco coinvolgente. Tuttavia, ho notato alcune ripetizioni nelle missioni principali che avrebbero potuto essere evitate per mantenere la freschezza del gioco.</p>
            </div>
          </div>
        </div>

        <div className={classes.user}>
          <div className={classes.avatar}>
            <div className={classes.image}>
              <img src="src\assets\paoloLupoAssets\assetsDiProva\Screenshot 2024-03-30 153932.png" alt="" />
            </div>
            <p>Melissa Neri</p>
          </div>
          <div className={classes.review}>
            <div className={classes.stars}>
              <img src="src\assets\paoloLupoAssets\pixel-star.png" alt="" />
              <img src="src\assets\paoloLupoAssets\pixel-star.png" alt="" />
              <img src="src\assets\paoloLupoAssets\pixel-star.png" alt="" />
              <img src="src\assets\paoloLupoAssets\pixel-star.png" alt="" />
              <img src="src\assets\paoloLupoAssets\pixel-star.png" alt="" />
            </div>
            <div className={classes.description}>
              <p>Il videogioco è un capolavoro di creatività e design. La trama avvincente e le ambientazioni incantevoli mi hanno trasportato in un mondo fantastico. Apprezzo i dettagli curati e l'attenzione ai particolari. Tuttavia, ho riscontrato alcune imperfezioni nella fluidità del gameplay che potrebbero essere migliorate con aggiornamenti futuri.</p>
            </div>
          </div>
        </div>

        <div className={classes.user}>
          <div className={classes.avatar}>
            <div className={classes.image}>
              <img src="src\assets\paoloLupoAssets\assetsDiProva\Screenshot 2024-03-30 153954.png" alt="" />
            </div>
            <p>Gabriele Prenz</p>
          </div>
          <div className={classes.review}>
            <div className={classes.stars}>
              <img src="src\assets\paoloLupoAssets\pixel-star.png" alt="" />
              <img src="src\assets\paoloLupoAssets\pixel-star.png" alt="" />
              <img src="src\assets\paoloLupoAssets\pixel-star.png" alt="" />
              <img src="src\assets\paoloLupoAssets\pixel-star.png" alt="" />
            </div>
            <div className={classes.description}>
              <p>Questo videogioco è un'esperienza intensa e coinvolgente che ti rapisce fin dalle prime fasi di gioco. Gli effetti grafici e l'audio avvincente contribuiscono a creare un'atmosfera realistica. Tuttavia, ho notato alcuni bug minori che potrebbero influire sull'immersione nel gioco. Spero che vengano corretti al più presto.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
