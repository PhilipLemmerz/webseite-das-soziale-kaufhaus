import { Fragment } from "react"
import styles from '../styles/angebotEntruepleung.module.css'
import Head from "next/head"
import { FaArrowCircleRight } from "react-icons/fa";
import { useState, useRef } from "react";

export default function EntruemelungAnfrage() {

    const [isFlat, setFlat] = useState(false);
    const [isHouse, setHouse] = useState(false);
    const [isInventory, setInventory] = useState("undefiend");
    const [inputWithLabel, setInputwithLabel] = useState([]);
    const [isGender, setGender] = useState('undefiend');
    const [step, setStep] = useState(1);

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

    function selectInventory(e) {
        e === "yesInventory" ? setInventory("yes") : setInventory('no');
    }



    function selectGender(e) {
        console.log(e)
        const gender = e.target.id;
        const checked = e.target.checked;        
        checked ? setGender(gender) : setGender('undefiend');

        console.log(isGender)
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
                    <div >
                        <h1 className={styles.headline}>kostenfreies & unverbindliches Angebot </h1>
                    </div>
                    <div>
                        <form onSubmit={submitHandler}>
                            {step === 1 && <div>
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
                                    <div className={styles.questionBox}>
                                        <p className={styles.questionInventory}>Müssen Schrankinhalte & Kleinartikel geräumt werden?</p>
                                        <div className={styles.inputBox}>
                                            <div>
                                                <label htmlFor="IsInvetory"> Ja</label>
                                                <input id="yesInventory" type="checkbox" onChange={selectInventory.bind(this, "yesInventory")} checked={isInventory === "yes"} className={styles.checkBox} />
                                            </div>
                                            <div>
                                                <label htmlFor="isNotInventory"> Nein </label>
                                                <input id="noInventory" type="checkbox" onChange={selectInventory.bind(this, "noInventory")} checked={isInventory === "no"} className={styles.checkBox} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.questionBox}>
                                        <p className={styles.question}>Wie viele Zimmer müssen geräumt werden?</p>
                                        <div className={styles.inputLabelWrapper}>
                                            <label className={inputWithLabel.includes('rooms') ? styles.label : styles.noLabel}>Anzahl Zimmer</label>
                                            <input className={styles.inputShort} onChange={displayLabel.bind(this)} type="text" id="rooms" placeholder="Anzahl Zimmer" />
                                        </div>
                                    </div>
                                    <div className={styles.questionBox}>
                                        <p className={styles.question}>Bis wann muss die Immobilie geräumt werden?</p>
                                        <div className={styles.inputLabelWrapper}>
                                            <label className={inputWithLabel.includes('date') ? styles.label : styles.noLabel}>Monat/Jahr</label>
                                            <input className={styles.inputShort} onChange={displayLabel.bind(this)} type="text" id="date" placeholder="Monat/Jahr" />
                                        </div>
                                    </div>
                                    <button className={styles.nextStepBTN} onClick={setStep.bind(this, 2)}>weiter</button>
                                </div>
                            </div>}

                            {step === 2 && <div>
                                <div className={styles.questionBox}>
                                    <p className={styles.question}>Anrede</p>
                                    <div className={styles.inputBox}>
                                        <div>
                                            <label htmlFor="property ">Herr</label>
                                            <input id="genderMan" type="checkbox" checked={isGender === "genderMan"}  onChange={selectGender.bind(this)} className={styles.checkBox} />
                                        </div>
                                        {/* <div>
                                            <label htmlFor="property">Frau</label>
                                            <input id="gender" type="checkbox" className={styles.checkBox} />
                                        </div>
                                        <div>
                                            <label htmlFor="property">An</label>
                                            <input id="gender" type="checkbox"  onChange={selectGender.bind(this)} className={styles.checkBox} />
                                        </div> */}
                                    </div>
                                    <p className={styles.question}>Angebotsanschrift</p>
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
                            </div>}
                        </form>

                    </div>

                </div>
            </section >


        </Fragment >
    )
}