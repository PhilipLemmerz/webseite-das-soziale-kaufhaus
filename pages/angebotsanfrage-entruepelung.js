import { Fragment } from "react"
import styles from '../styles/angebotEntruepleung.module.css'
import Head from "next/head"
import { FaArrowCircleRight } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

export default function EntruemelungAnfrage() {


    const [isFlat, setFlat] = useState(false);
    const [isHouse, setHouse] = useState(false);
    const [inputSelected, setInputSelected] = useState('');


    async function submitHandler(event) {
        console.log('gesendet')
    }

    function selectFlat(e) {
        setFlat(e.target.checked);
        isHouse ? setHouse(false) : true;
    }

    function selectHouse(e) {
        setHouse(e.target.checked);
        isFlat ? setFlat(false) : true;
    }

    function test(e) {
        const inputID = e.target.id
        const value = e.target.value;
        value.length > 0 ? setInputSelected(inputID) : setInputSelected('');
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
                            <div className={styles.questionBox}>
                                <p className={styles.question}>Welche Immobilie möchten Sie auflösen?</p>
                                <div className={styles.inputBox}>
                                    <div>
                                        <label htmlFor="property "> Haus</label>
                                        <input id="property" type="checkbox" onChange={selectHouse.bind(this)} checked={isHouse} className={styles.checkBox} />
                                    </div>
                                    <div>
                                        <label htmlFor="property"> Wohnung </label>
                                        <input id="property" type="checkbox" onChange={selectFlat.bind(this)} checked={isFlat} className={styles.checkBox} />
                                    </div>
                                </div>
                                <div className={styles.inputBox}>
                                    <div className={styles.inputLabelWrapper}>
                                        {inputSelected == "floor" && <label className={styles.label} htmlFor="floor"> Etage</label>}
                                        <input className={styles.inputFloor} id="floor" type="text" placeholder="Etage der Wohnung" onChange={test.bind(this)} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.questionBox}>
                                <p className={styles.question}>Adresse der Immobilie:</p>
                                <div className={styles.inputBox}>
                                    <div className={styles.inputLabelWrapper}>
                                        {inputSelected == "town" && <label className={styles.label}>Ort</label>}
                                        <input className={styles.inputLong} id="town" type="text" onChange={test.bind(this)} placeholder="Ort" />
                                    </div>
                                    <div className={styles.inputLabelWrapper}>
                                        {inputSelected == "zip" && <label className={styles.label}>Postleitzahl</label>}
                                        <input className={styles.inputShort} id="zip" type="text" onChange={test.bind(this)} placeholder="Postleitzahl" />
                                    </div>

                                </div>
                                <div className={styles.inputBox}>
                                    <input className={styles.inputLong} type="text" id="street" placeholder="Straße" />
                                    <input className={styles.inputShort} type="text" id="streetnumber" placeholder="Hausnummer" />
                                </div>
                            </div>
                        </form>
                        {/* <button onClick={test}>test</button> */}
                    </div>

                </div>
            </section>


        </Fragment>
    )
}