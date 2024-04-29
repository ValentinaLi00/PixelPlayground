import classes from './privacy.module.css'

export function Privacy() {
    return (
        <div className={classes.container}>
            <div className={classes.privacy_title}>
                <h2>Informativa sulla privacy</h2>
                <p className={classes.general}>La tua privacy è importante per noi. In questa informativa sulla privacy, spieghiamo quali informazioni raccogliamo, come le utilizziamo e come le proteggiamo quando visiti il nostro sito di e-commerce di videogiochi.</p>

                <div className={classes.privacy}>
                    <h3>Raccolta delle informazioni personali:</h3>
                    <ul className={classes.personalInfo}>
                        <li>Nome e cognome</li>
                        <li>Indirizzo email</li>
                        <li>Indirizzo di spedizione</li>
                        <li>Informazioni di pagamento</li>
                    </ul>

                    <h3>Utilizzo delle informazioni:</h3>
                    <ul className={classes.personalInfo}>
                        <li>Elaborare e completare gli ordini</li>
                        <li>Comunicare con te riguardo agli ordini e alle informazioni sul prodotto</li>
                        <li>Personalizzare la tua esperienza di shopping</li>
                        <li>Migliorare i nostri prodotti e servizi</li>
                    </ul>

                    <h3>Protezione delle informazioni</h3>
                    <ul className={classes.personalInfo}>
                        <li>Adottiamo misure di sicurezza per proteggere le informazioni personali che ci fornisci</li>
                        <li>Utilizziamo protocolli di crittografia per proteggere i dati sensibili durante la trasmissione e implementiamo misure di sicurezza per proteggere i dati memorizzati</li>
                    </ul>


                    <h3>Condivisione delle informazioni</h3>
                    <p>Non condividiamo le tue informazioni personali con terze parti senza il tuo consenso, a meno che non sia richiesto dalla legge o necessario per completare un ordine.</p>

                    <h3>Diritti dell'utente</h3>
                    <p>Hai il diritto di accedere, modificare o eliminare le tue informazioni personali. Puoi contattarci per richiedere l'accesso o la modifica delle tue informazioni.</p>

                    <h3>Accettazione della politica sulla privacy</h3>
                    <p>Utilizzando il nostro sito di e-commerce di videogiochi, accetti la nostra politica sulla privacy e il trattamento delle tue informazioni personali come descritto in questa informativa.</p>

                    <h3 className={classes.generalBot}>Ti invitiamo a leggere attentamente la nostra informativa sulla privacy e a contattarci se hai domande o dubbi. La tua privacy è importante per noi e faremo del nostro meglio per proteggere le tue informazioni.</h3>
                </div>
            </div>
            <ScrollUp/>
        </div>
    )
}