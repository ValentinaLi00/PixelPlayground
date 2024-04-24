import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

import classes from "./aboutUs.module.css";

export function AboutUs() {
  return (
    <>
      <Navbar />
      <div className={classes.container}>
        {/* la nostra storia */}
        <div className={classes.story}>
          <h2>LA NOSTRA STORIA</h2>
          <img
            src="src\assets\valentinaLiAssets\aboutUs\logo_name.png"
            alt=""
          />
          <p>
            Fondato da cinque giovani creativi con una passione comune per i
            videogiochi e il web development, Pixel Playground nasce come un
            progetto che unisce la nostalgia della pixel art e il fascino dei
            giochi indie. La nostra avventura è iniziata durante il corso con
            Develhope, dove abbiamo coltivato le nostre competenze e la nostra
            visione per creare un'esperienza unica.
          </p>
        </div>

        {/* la nsotra missione */}
        <div className={classes.mission}>
          <h2>LA NOSTRA MISSIONE</h2>
          <img src="src\assets\valentinaLiAssets\aboutUs\mission.png" alt="" />
          <p>
            Vogliamo trasmettere la passione per i videogiochi attraverso una
            piattaforma online che celebra la diversità e l'originalità del
            mondo dei giochi.
          </p>
        </div>

        {/* il nostro team */}
        <div className={classes.team}>
          <h2>IL NOSTRO TEAM</h2>
          <img src="src\assets\valentinaLiAssets\aboutUs\About_US.png" alt="" />
          <p>
            <span className={classes.rainbow}>
              Arianna, Melissa, Paolo, Gabriele e Valentina
            </span>{" "}
            <br /> sono i cuori pulsanti di Pixel Playground. Con competenze
            complementari e una grande dose di entusiasmo, lavoriamo insieme per
            portare la nostra visione alla realtà. Ogni membro del team porta
            con sé un bagaglio unico di esperienze e competenze, contribuendo a
            plasmare l'identità e la creatività del nostro progetto.
          </p>
        </div>

        {/* il nostro stile */}
        <div className={classes.style}>
          <h2>IL NOSTRO STILE</h2>
          <img
            src="src\assets\valentinaLiAssets\aboutUs\style_fungo.png"
            alt=""
          />
          <p>
            Ci ispiriamo alla <span className={classes.rainbow}>pixel art</span>{" "}
            e <br /> al mondo dei{" "}
            <span className={classes.rainbow}>giochi indie</span> per creare un
            design unico e accattivante che si riflette nel nostro sito. Ogni
            dettaglio è stato curato con attenzione per offrire un'esperienza
            visiva memorabile e coinvolgente per i nostri visitatori. Unisciti a
            noi in questa avventura videoludica e scopri un mondo di
            divertimento e creatività!
          </p>
        </div>

        {/* <div className={classes.scroller}>
                <ul className={`${classes.list} ${classes.scroller_inner}`}>
                    <li>CSS</li>
                    <li>REACT.js</li>
                    <li>NODE.js</li>
                    <li>VSC</li>
                    <li>CANVA</li>
                    <li>GIT</li>
                    <li>GITHUB</li>
                    <li>SQL</li>
                </ul>
                <ul className={`${classes.list} ${classes.scroller_inner}`}>
                    <li>CSS</li>
                    <li>REACT.js</li>
                    <li>NODE.js</li>
                    <li>VSC</li>
                    <li>CANVA</li>
                    <li>GIT</li>
                    <li>GITHUB</li>
                    <li>SQL</li>
                </ul>
            </div> */}
      </div>
      <Footer />
    </>
  );
}
