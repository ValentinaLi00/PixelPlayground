import classes from './termOfUse.module.css'

export function TermOfUse() {

    return (
        <div className={classes.container}>
            <div className={classes.termOfUse_title}>
                <h2>Condizioni d'Uso per il Sito di E-commerce di PixelPlayground</h2>
                <p className={classes.general}>Benvenuti su PixelPlayground, il vostro negozio online di videogiochi preferito. Prima di utilizzare i nostri servizi, vi invitiamo a leggere attentamente le seguenti condizioni d'uso che regolano la vostra interazione con il nostro sito:</p>

                <div className={classes.termOfUse}>

                    <h3>Accettazione dei Termini</h3>
                    <p>Utilizzando il nostro sito, accettate di essere vincolati da queste condizioni d'uso e dalla nostra politica sulla privacy.</p>

                    <h3>Registrazione e Account</h3>
                    <p>Per acquistare su VendoGames, potrebbe essere necessario creare un account e fornire informazioni personali accurate e aggiornate.</p>

                    <h3>Acquisto e Pagamento</h3>
                    <p>Al momento dell'acquisto di un videogioco, accettate di pagare il prezzo indicato e di rispettare le modalità di pagamento disponibili sul sito.
                    </p>

                    <h3>Spedizione e Consegna</h3>
                    <p>Ci impegniamo a consegnare i vostri videogiochi nel minor tempo possibile e a fornirvi informazioni chiare sulle modalità di spedizione e consegna.</p>

                    <h3>Diritto di Recesso</h3>
                    <p>Offriamo la possibilità di restituire i videogiochi acquistati entro un determinato periodo di tempo, nel rispetto delle condizioni di reso indicate sul sito.</p>

                    <h3>Garanzia e Assistenza Clienti</h3>
                    <p>Garantiamo la qualità dei nostri prodotti e offriamo assistenza clienti per eventuali problemi o domande relative ai vostri acquisti.</p>

                    <h3>Proprietà Intellettuale</h3>
                    <p>I contenuti presenti su PixelPlayground sono protetti da copyright e non possono essere utilizzati senza autorizzazione.</p>

                    <h3>Limitazioni di Responsabilità</h3>
                    <p>Non siamo responsabili per eventuali danni derivanti dall'uso del sito o dei prodotti acquistati, salvo diversamente specificato dalla legge applicabile.</p>

                    <h3>Modifiche alle Condizioni</h3>
                    <p>Ci riserviamo il diritto di apportare modifiche a queste condizioni d'uso e di informarvi in caso di aggiornamenti.</p>

                    <h3>Contatti</h3>
                    <p>Per qualsiasi domanda, reclamo o assistenza, potete contattarci all'indirizzo email supporto@pixelplayground.com o tramite i nostri canali social</p>

                    <h3 className={classes.generalBot}>
                        Grazie per aver scelto PixelPlayground per i vostri acquisti di videogiochi. <br /> Buono shopping!
                    </h3>
                </div>
            </div>
            <ScrollUp/>
        </div>
    )
}