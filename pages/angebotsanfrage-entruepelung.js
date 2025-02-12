import { Fragment } from "react"
import styles from '../styles/angebotEntruepleung.module.css'
import Head from "next/head"
import { FaArrowCircleRight } from "react-icons/fa";

export default function EntruemelungAnfrage() {
    async function submitHandler(event) {
        console.log('gesendet')
    }

    return (

        <Fragment>
            <Head>
                <title>Angebot Entrümpelung Bonn & Köln anfragen</title>
                <meta name="description" content="Wir unterbreiten Ihnen ein Festpreis-Angebot für eine besenreine Entrümpelung bei Bonn & Köln" />
            </Head>
            <section className={styles.section}>
                <div className={styles.stepsBox}>
                    <p><em>Ihre Nächsten Schritte</em></p>
                    <div className={styles.stepActive}>
                        <p>  <FaArrowCircleRight className={styles.activeIcon} /> Angaben zur Immobilie</p>
                    </div>
                    <div>
                        <p>Kontaktinfomationen</p>
                    </div>
                    <div>
                        <p>Angebotserstellung</p>
                    </div>
                </div>
                <div className={styles.formBox}>
                    <div>
                        <h1 className={styles.headline}>kostenfreies & unverbindliches Angebot </h1>
                        <p className={styles.introText}>Bitte nehmen Sie sich  doch ein paar Sekunden Zeit und teilen Sie uns ein paar Information mit.  </p>
                    </div>
                    <div>
                        <form onSubmit={submitHandler}>
                            <div className={styles.formGroupContact}>
                                <p>Welche Immobilie möchten Sie auflösen</p>
                                <div>
                                    <label htmlFor="Objektart "> Haus</label><input type="checkbox" />
                                    <label htmlFor="Objektart "> Wohnung </label><input type="checkbox" />
                                </div>

                            </div>

                        </form>
                    </div>

                </div>
            </section>
        </Fragment>
    )
}