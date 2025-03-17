import { Fragment } from "react"
import styles from '../styles/angebotEntruepleung.module.css'
import Head from "next/head"
import { BsCheckCircleFill, BsTrash, BsWhatsapp, Bs1Circle, Bs2Circle, Bs3Circle, Bs4Circle } from "react-icons/bs";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { useRef, useState } from "react";

export default function EntruemelungAnfrage() {

    const [isFlat, setFlat] = useState(false);
    const [isHouse, setHouse] = useState(false);
    const [isInventory, setInventory] = useState("undefiend");
    const [inputWithLabel, setInputwithLabel] = useState([]);
    const [isGender, setGender] = useState('undefiend');
    const [step, setStep] = useState(1);
    const [files, setFiles] = useState([]);

    const townRef = useRef();
    const townOfferRef = useRef();
    const fileRef = useState();

    async function submitHandler(event) {
        event.preventDefault();
        console.log(townRef);
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
    }

    function handleFileChange(event) {
        setFiles([...files, ...event.target.files])
        event.target.value = null;
    }

    function deleteFile(name) {
        const index = files.findIndex(file => file.name === name);
        files.splice(index, 1);
        setFiles([...files]);
    }


    function test() {
        console.log(townRef)
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
                    <div className={step === 1 ? styles.stepActive : styles.stepInactive}>
                        <p>  <Bs1Circle className={step === 1 ? styles.activeIcon : styles.displayNone} /> {step !== 1 ? "1." : ""} Angaben zur Immobilie</p>
                    </div>
                    <div className={step === 2 ? styles.stepActive : styles.stepInactive}>
                        <p><Bs2Circle className={step === 2 ? styles.activeIcon : styles.displayNone} /> {step !== 2 ? "2." : ""} Kontaktinfomationen</p>
                    </div>
                    <div className={step === 3 ? styles.stepActive : styles.stepInactive}>
                        <p><Bs3Circle className={step === 3 ? styles.activeIcon : styles.displayNone} /> {step !== 3 ? "3." : ""} Video & Bilder hochladen (Optional)</p>
                    </div>
                    <div className={step === 4 ? styles.stepActive : styles.stepInactive}>
                        <p><Bs4Circle className={step === 4 ? styles.activeIcon : styles.displayNone} />{step !== 4 ? "4." : ""} Zusammenfassung</p>
                    </div>
                    {step === 3 && <div className={styles.exampleVideoWrapper}>
                        <p className={styles.headlineExampleVideo}>Beispielvideo</p>
                        <video className={styles.exapmpleVideo} width="250" height="230" controls preload="none" poster="/entruempelung_bonn_koeln_thumbnail.webp">
                            <source src="/Entruemeplung_koeln_bonn_video.mp4" type="video/mp4" />
                            Dieses Fortmat wird von Ihrem Browser leider nicht unterstützt.
                        </video>
                    </div>}
                </div>
                <div className={styles.formBox}>
                    <div >
                        <h1 className={styles.headline}>kostenfreies & unverbindliches Angebot </h1>
                    </div>
                    <div>
                        <form onSubmit={submitHandler} >
                            <div className={step !== 1 ? styles.displayNone : ""}>
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
                                    <div className={isFlat ? styles.inputBox : styles.displayNone}>
                                        <div className={styles.inputLabelWrapper}>
                                            <label className={inputWithLabel.includes('floor') ? styles.label : styles.noLabel} htmlFor="floor">Etage</label>
                                            <input className={styles.inputShort} id="floor" type="text" placeholder="Stockwerk" onChange={displayLabel.bind(this)} />
                                        </div>
                                    </div>
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
                                    <div className={styles.btnBoxFirstStep}>
                                        <button className={styles.nextStepBTN} type="button" onClick={setStep.bind(this, 2)}>weiter</button>
                                    </div>

                                </div>
                            </div>

                            <div className={step !== 2 ? styles.displayNone : ""}>
                                <div className={styles.questionBox}>
                                    <p className={styles.question}>Anrede</p>
                                    <div className={styles.inputBox}>
                                        <div>
                                            <label htmlFor="genderWoman">Frau</label>
                                            <input id="genderWoman" type="checkbox" checked={isGender === "genderWoman"} onChange={selectGender.bind(this)} className={styles.checkBox} />
                                        </div>
                                        <div>
                                            <label htmlFor="genderMan">Herr</label>
                                            <input id="genderMan" type="checkbox" checked={isGender === "genderMan"} onChange={selectGender.bind(this)} className={styles.checkBox} />
                                        </div>

                                        <div>
                                            <label htmlFor="genderUnkown">An</label>
                                            <input id="genderUnkown" type="checkbox" checked={isGender === "genderUnkown"} onChange={selectGender.bind(this)} className={styles.checkBox} />
                                        </div>
                                    </div>
                                    <div className={styles.questionBox}>
                                        <p className={styles.question}>Angebotsanschrift</p>
                                        <div className={styles.inputBox}>
                                            <div className={styles.inputLabelWrapper}>
                                                <label className={inputWithLabel.includes('nameOffer') ? styles.label : styles.noLabel}>Name</label>
                                                <input className={styles.inputLong} onChange={displayLabel.bind(this)} type="text" id="nameOffer" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className={styles.inputBox}>
                                            <div className={styles.inputLabelWrapper}>
                                                <label className={inputWithLabel.includes('townOffer') ? styles.label : styles.noLabel}>Ort</label>
                                                <input className={styles.inputLong} onChange={displayLabel.bind(this)} id="townOffer" type="text" ref={townOfferRef} placeholder="Ort" />
                                            </div>
                                            <div className={styles.inputLabelWrapper}>
                                                <label className={inputWithLabel.includes('zipOffer') ? styles.label : styles.noLabel}>Postleitzahl</label>
                                                <input className={styles.inputShort} id="zipOffer" type="text" onChange={displayLabel.bind(this)} placeholder="Postleitzahl" />
                                            </div>

                                        </div>
                                        <div className={styles.inputBox}>
                                            <div className={styles.inputLabelWrapper}>
                                                <label className={inputWithLabel.includes('streetOffer') ? styles.label : styles.noLabel}>Straße</label>
                                                <input className={styles.inputLong} onChange={displayLabel.bind(this)} type="text" id="streetOffer" placeholder="Straße" />
                                            </div>
                                            <div className={styles.inputLabelWrapper}>
                                                <label className={inputWithLabel.includes('streetnumberOffer') ? styles.label : styles.noLabel}>Hausnummer</label>
                                                <input className={styles.inputShort} onChange={displayLabel.bind(this)} type="text" id="streetnumberOffer" placeholder="Hausnummer" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.questionBox}>
                                    <div className={styles.questionBox}>
                                        <p className={styles.question}>Kontaktinformationen</p>
                                        <div className={styles.inputBox}>
                                            <div className={styles.inputLabelWrapper}>
                                                <label className={inputWithLabel.includes('email') ? styles.label : styles.noLabel}>E-Mail</label>
                                                <input className={styles.inputLong} onChange={displayLabel.bind(this)} type="email" id="email" placeholder="E-Mail" />
                                            </div>
                                        </div>
                                        <div className={styles.inputBox}>
                                            <div className={styles.inputLabelWrapper}>
                                                <label className={inputWithLabel.includes('tel') ? styles.label : styles.noLabel}>Telefonnummer</label>
                                                <input className={styles.inputLong} onChange={displayLabel.bind(this)} type="text" id="tel" placeholder="Telefonnummer" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.btnBox}>
                                    <button className={styles.backStepBTN} type="button" onClick={setStep.bind(this, 1)}>zurück</button>
                                    <button className={styles.nextStepBTN} type="button" onClick={setStep.bind(this, 3)}>weiter</button>
                                </div>
                            </div>

                            <div className={step !== 3 ? styles.displayNone : ""}>
                                <p> Laden Sie Video oder Bilder der Räumlichkeiten hoch & wir senden Ihnen umgehend einen Festpreiskostenvoranschlag zu. </p>
                                <p> Oder senden Sie Ihr Video ganz einfach via <BsWhatsapp className={styles.whatsAppIcon} /> WhatsApp an 0170 - 723 0 385</p>

                                <div className={styles.uploadWrapper}>
                                    <div>
                                        <div className={styles.uploadFormGroup}>
                                            <label htmlFor="fileupload" className={styles.customFileBTN}>
                                                <AiOutlineVideoCameraAdd /> Dateien hochladen
                                            </label>
                                            <input multiple type="file" id="fileupload" className={styles.inputFile} onChange={handleFileChange} ref={fileRef}></input>
                                            <div className={styles.uploadedVideoBox}>
                                                {files.length === 0 && <p>Noch keine Dateien hochgeladen</p>}
                                                {files.map(file => <div key={Math.random()} className={styles.uploadFileEntryWrapper}> <div className={styles.iconAndNameVideoWrapper}> <span className={styles.checkIconVideo}><BsCheckCircleFill /></span>
                                                    {file.name}</div> <span className={styles.trashIcon}>
                                                        <BsTrash onClick={deleteFile.bind(this, file.name)} /></span> </div>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.btnBoxVideoUpoad}>
                                    <button type="button" className={styles.backStepBTN} onClick={setStep.bind(this, 2)}>zurück</button>
                                    <button type="button" className={files.length === 0 ? styles.backStepBTN : styles.nextStepBTN} onClick={setStep.bind(this, 4)}>{files.length === 0 ? "weiter (ohne Video)" : "weiter"} </button>
                                </div>
                            </div>
                            {step === 4 && <div className={styles.summerizeStepWrapper}>
                                <div>
                                    <h4>Angaben zu Immobilie:</h4>
                                    <p>Anschrift: <em>{townRef.current.value}</em></p>
                                    <p> Anzahl der Zimmer: </p>

                                    <p>Räumung von Schrankinhalten: </p>


                                    <p>Wunschtermin: </p>
                                </div>
                                <div>
                                    <h4>Angebotsanschrift & Kontaktinformationen:</h4>
                                    <p>Name: </p>
                                    <p>Anschrift</p>
                                    <p>E-Mail: </p>
                                    <p>Telefon: </p>
                                </div>
                                <div>
                                    <h4>Hochgeladene Dateien</h4>
                                    <p> Sie haben {files.length} Dateien hochgeladen. <u>Dateien bearbeiten</u></p>
                                </div>


                                <div className={styles.btnBox}>
                                    <button type="button" className={styles.backStepBTN} onClick={setStep.bind(this, 3)}>zurück</button>
                                    <button className={styles.nextStepBTN} type="submit"> senden </button>
                                </div>

                            </div>}

                        </form>

                    </div>

                </div >
            </section >


        </Fragment >
    )
}