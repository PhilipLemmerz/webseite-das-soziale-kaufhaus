import { Fragment } from "react"
import styles from '../styles/angebotEntruepleung.module.css'
import Head from "next/head"
import { FaArrowCircleRight } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

export default function EntruemelungAnfrage() {

    const [isFlat, setFlat] = useState(false);
    const [isHouse, setHouse] = useState(false);
    const [inputWithLabel, setInputwithLabel] = useState([]);

    const townRef = useRef();


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

    function displayLabel(e) {

        const inputID = e.target.id
        const value = e.target.value;
        const index = inputWithLabel.indexOf(inputID);

        if (index == -1 && value.length > 0) {
            setInputwithLabel([...inputWithLabel, inputID]);
        }

        if (index !== -1 && value.length == 0) {
            let labelArray = [...inputWithLabel];
            labelArray.splice(index, 1);
            setInputwithLabel([...labelArray]);
        }

    }


    function test() {

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
                                {isFlat && <div className={styles.inputBox}>
                                    <div className={styles.inputLabelWrapper}>
                                        <label className={inputWithLabel.includes('floor') ? styles.label : styles.noLabel} htmlFor="floor">Etage</label>
                                        <input className={styles.inputShort} id="floor" type="text" placeholder="Stockwerk" onChange={displayLabel.bind(this)} />
                                    </div>
                                </div>}
                            </div>
                            <div className={styles.questionBox}>
                                <p className={styles.question}>Adresse der Immobilie:</p>
                                <div className={styles.inputBox}>
                                    <div className={styles.inputLabelWrapper}>
                                        <label className={inputWithLabel.includes('town') ? styles.label : styles.noLabel}>Ort</label>
                                        <input className={styles.inputLong} onChange={displayLabel.bind(this)} id="town" type="text" ref={townRef} placeholder="Ort" />
                                    </div>
                                    <div className={styles.inputLabelWrapper}>
                                        <label className={inputWithLabel.includes('zip') ? styles.label : styles.noLabel}>Postleitzahl</label>
                                        <input className={styles.inputShort} id="zip" type="text" onChange={displayLabel.bind(this)} placeholder="Postleitzahl" />
                                    </div>

                                </div>
                                <div className={styles.inputBox}>
                                    <div className={styles.inputLabelWrapper}>
                                        <label className={inputWithLabel.includes('street') ? styles.label : styles.noLabel}>Straße</label>
                                        <input className={styles.inputLong} onChange={displayLabel.bind(this)} type="text" id="street" placeholder="Straße" />
                                    </div>
                                    <div className={styles.inputLabelWrapper}>
                                        <label className={inputWithLabel.includes('streetnumber') ? styles.label : styles.noLabel}>Hausnummer</label>
                                        <input className={styles.inputShort} onChange={displayLabel.bind(this)} type="text" id="streetnumber" placeholder="Hausnummer" />
                                    </div>
                                </div>
                            </div>
                        </form>
                        <button onClick={test}>test</button>
                    </div>

                </div>
            </section >


        </Fragment >
    )
}