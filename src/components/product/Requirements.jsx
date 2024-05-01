import classes from './requirements.module.css'

export function Requirements() {
  return (
    <div className={classes.container}>
      <div className={classes.requisiti_title}>
        <div className={classes.title}>
          <h2>Requisiti</h2>
          <hr />
        </div>
        <div className={classes.requisiti}>
          {/* requisiti minimi */}
          <div className={classes.minimumRequirements_container}>
            <h2>Minimi</h2>
            <hr />
            <table className={classes.minimumRequirements_table}>
              <thead>
                <tr>
                  <td>OS:</td>
                  <td>Windows 10 (64 bit)/Windows 11 (64 bit)</td>
                </tr>
                <tr>
                  <td>Processore:</td>
                  <td>Intel Core i5 10600 / AMD Ryzen 5 3600</td>
                </tr>
                <tr>
                  <td>Memoria:</td>
                  <td>16GB RAM</td>
                </tr>
                <tr>
                  <td>Scheda grafica:</td>
                  <td>
                    NVIDIA GeForce GTX 1070 / AMD Radeon RX 5500 XT with 8GB
                    VRAM
                  </td>
                </tr>
                <tr>
                  <td>DirectX:</td>
                  <td>Versione 12</td>
                </tr>
              </thead>
            </table>
          </div>

          {/* requisiti suggeriti */}

          <div className={classes.suggestedRequirements_container}>
            <h2>Raccomandati </h2>
            <hr />
            <table className={classes.suggestedRequirements_table}>
              <thead>
                <tr>
                  <td>OS:</td>
                  <td>Windows 10 (64 bit)/Windows 11 (64 bit)</td>
                </tr>
                <tr>
                  <td>Processore:</td>
                  <td>Intel Core i7 10700 / AMD Ryzen 5 3600</td>
                </tr>
                <tr>
                  <td>Memoria:</td>
                  <td>16GB RAM</td>
                </tr>
                <tr>
                  <td>Scheda grafica:</td>
                  <td>NVIDIA GeForce RTX 2080 / AMD Radeon RX 6700</td>
                </tr>
                <tr>
                  <td>DirectX:</td>
                  <td>Versione 12</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
