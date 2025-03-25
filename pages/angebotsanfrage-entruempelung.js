import { Fragment } from "react"
import styles from '../styles/angebotEntruepleung.module.css'
import Head from "next/head"
import { BsCheckCircleFill, BsTrash, BsWhatsapp, Bs1Circle, Bs2Circle, Bs3Circle, Bs4Circle } from "react-icons/bs";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { useRef, useState } from "react";
import router from 'next/router';

export default function EntruemelungAnfrage() {

    const [isObject, setObject] = useState("undefiend");
    const [isInventory, setInventory] = useState("undefiend");
    const [inputWithLabel, setInputwithLabel] = useState([]);
    const [isGender, setGender] = useState('undefiend');
    const [step, setStep] = useState(1);
    const [files, setFiles] = useState([]);
    const [invalidInputs, setInvalidInputs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const date = new Date();
    const timeStamp = date.getTime();

    const floorRef = useRef(null);
    const townRef = useRef(null);
    const zipRef = useRef(null);
    const streetRef = useRef(null);
    const streetNumberRef = useRef(null);
    const roomRef = useRef(null);
    const dateRef = useRef(null);
    const nameOfferRef = useRef(null);
    const townOfferRef = useRef(null);
    const zipOfferRef = useRef(null);
    const streetOfferRef = useRef(null);
    const streetNumberOfferRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const fileRef = useState(null);

    async function submitHandler(event) {
        event.preventDefault();
        prepareEmail();
    }


    async function prepareEmail() {
        setLoading(true)
        try {
            setErrorMessage(false);
            const data = {
                property: isObject,
                floor: floorRef.current.value,
                town: townRef.current.value,
                zip: zipRef.current.value,
                street: streetRef.current.value,
                streetNumber: streetNumberRef.current.value,
                inventory: isInventory,
                rooms: roomRef.current.value,
                date: dateRef.current.value,
                genderOffer: isGender,
                nameOffer: nameOfferRef.current.value,
                townOffer: townOfferRef.current.value,
                zipOffer: zipOfferRef.current.value,
                streetOffer: streetOfferRef.current.value,
                streetNumberOffer: streetNumberOfferRef.current.value,
                email: emailRef.current.value,
                phone: phoneRef.current.value
            }

            const fileNameArray = await uploadFiles(data.nameOffer);
            await sendEmail(fileNameArray, data);


        } catch (err) {
            console.log(err)
            setLoading(false)
            setErrorMessage('Ups - Leider ist ein Fehler aufgetreten - Bitte versuchen Sie es erneut');
        }
    }

    async function sendEmail(filenameArray, data) {
        if (filenameArray.length > 0) {
            try {
                const videoUrl = `https://portal.einsatzplaner.com/dsk-website/entruempelung/${filenameArray.join('+++')}`;
                const response = await fetch('https://api.einsatzplaner.com/dsk-website/entruempelungForm', {
                    method: "POST",
                    body: JSON.stringify({ ...data, link: videoUrl }),
                    headers: { "Content-Type": "application/json" }
                });
                console.log(response);

                if (response.ok) {
                    setLoading(false);
                    router.replace('anfrage-entruempelung-erhalten');
                } else {
                    setLoading(false)
                    setErrorMessage('Ups - Leider ist ein Fehler aufgetreten - Bitte versuchen Sie es erneut');
                }
            } catch (err) {
                console.log(err)
                setLoading(false)
                setErrorMessage('Ups - Leider ist ein Fehler aufgetreten - Bitte versuchen Sie es erneut');
            }
        } else {
            try {
                const response = await fetch('https://api.einsatzplaner.com/dsk-website/entruempelungForm', {
                    method: "POST",
                    body: JSON.stringify({ ...data }),
                    headers: { "Content-Type": "application/json" }
                });
                console.log(response);

                if (response.ok) {
                    setLoading(false);
                    router.replace('anfrage-entruempelung-erhalten');
                } else {
                    setLoading(false)
                    setErrorMessage('Ups - Leider ist ein Fehler aufgetreten - Bitte versuchen Sie es erneut');
                }
            } catch (err) {
                console.log(err)
                setLoading(false)
                setErrorMessage('Ups - Leider ist ein Fehler aufgetreten - Bitte versuchen Sie es erneut');
            }
        }
    }

    async function uploadFiles(clientName) {
        const fileNameArray = [];
        for await (let file of files) {
            const filename = `${clientName}-${timeStamp}-${Math.floor(1000 + Math.random() * 9000)}`;
            fileNameArray.push(filename);
            const response = await fetch('https://api.einsatzplaner.com/dsk-website/getSignedURL', {
                method: "POST",
                body: JSON.stringify({ method: "putObject", filename: filename }),
                headers: { "Content-Type": "application/json" }
            });
            if (response.ok) {
                const data = await response.json();
                await fetch(`${data.url}`, {
                    method: "PUT",
                    body: file,
                });
            } else {
                return false
            }
        }
        return fileNameArray
    }


    function selectObject(e) {
        const object = e.target.id;
        object === "Wohnung" ? setObject("Wohnung") : setObject('Haus');
        validInput("property");
        deleteFloorInvalidIfHouse(object)
    }

    function deleteFloorInvalidIfHouse(object) {
        if (object === "Haus") {
            const index = invalidInputs.indexOf("floor");
            if (index !== -1) {
                let invalidInputArray = [...invalidInputs];
                invalidInputArray.splice(index, 1);
                setInvalidInputs([...invalidInputArray])
            }
        }
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
        validInput(inputID)
    }

    function validInput(inputID) {
        const index = invalidInputs.indexOf(inputID);
        if (index !== -1) {
            let invalidInputArray = [...invalidInputs];
            invalidInputArray.splice(index, 1);
            setInvalidInputs([...invalidInputArray])
        }
    }

    function selectInventory(e) {
        e === "yesInventory" ? setInventory("ja") : setInventory('nein');
        validInput("inventory");
    }

    function selectGender(e) {
        const gender = e.target.id;
        const checked = e.target.checked;
        checked ? setGender(gender) : setGender(gender);
        validInput("gender");
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


    function changeStep(e) {
        if (e === 2) {
            const invalidInputsArray = validatePropertyStep1();
            invalidInputsArray.length === 0 ? setStep(2) : setStep(1);
        }
        if (e === 3) {
            const invalidInputsArray = validateContactStep2();
            invalidInputsArray.length === 0 ? setStep(3) : setStep(2);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function validatePropertyStep1() {
        const invalidInputsArray = [...invalidInputs];

        if (townRef.current.value.length < 1 && invalidInputs.indexOf("town") === -1) {
            invalidInputsArray.push('town')
        }

        if (isObject === "undefiend" && invalidInputs.indexOf("property") === -1) {
            invalidInputsArray.push('property');
        }

        if (zipRef.current.value.length < 1 && invalidInputs.indexOf("zip") === -1) {
            invalidInputsArray.push('zip')
        }

        if (floorRef.current.value.length < 1 && invalidInputs.indexOf("floor") === -1) {
            if (isObject === "Wohnung") {
                invalidInputsArray.push('floor')
            }
        }

        if (streetRef.current.value.length < 1 && invalidInputs.indexOf("street") === -1) {
            invalidInputsArray.push('street')
        }

        if (streetNumberRef.current.value.length < 1 && invalidInputs.indexOf("streetnumber") === -1) {
            invalidInputsArray.push('streetnumber')
        }

        if (isInventory === "undefiend" && invalidInputs.indexOf("inventory") === -1) {
            invalidInputsArray.push('inventory');
        }

        if (roomRef.current.value.length < 1 && invalidInputs.indexOf("rooms") === -1) {
            invalidInputsArray.push('rooms')
        }

        if (dateRef.current.value.length < 1 && invalidInputs.indexOf("date") === -1) {
            invalidInputsArray.push('date')
        }

        setInvalidInputs([...invalidInputsArray]);

        return invalidInputsArray;

    }


    function validateContactStep2() {
        const invalidInputsArray = [...invalidInputs];

        if (isGender === "undefiend" && invalidInputs.indexOf("gender") === -1) {
            invalidInputsArray.push('gender');
        }

        if (nameOfferRef.current.value.length < 1 && invalidInputs.indexOf("nameOffer") === -1) {
            invalidInputsArray.push('nameOffer')
        }

        if (streetOfferRef.current.value.length < 1 && invalidInputs.indexOf("streetOffer") === -1) {
            invalidInputsArray.push('streetOffer')
        }

        if (streetNumberOfferRef.current.value.length < 1 && invalidInputs.indexOf("streetnumberOffer") === -1) {
            invalidInputsArray.push('streetnumberOffer')
        }

        if (zipOfferRef.current.value.length < 1 && invalidInputs.indexOf("zipOffer") === -1) {
            invalidInputsArray.push('zipOffer')
        }

        if (townOfferRef.current.value.length < 1 && invalidInputs.indexOf("townOffer") === -1) {
            invalidInputsArray.push('townOffer')
        }

        if (emailRef.current.value.length < 1 && invalidInputs.indexOf("email") === -1) {
            invalidInputsArray.push('email')
        }

        if (phoneRef.current.value.length < 1 && invalidInputs.indexOf("tel") === -1) {
            invalidInputsArray.push('tel')
        }

        setInvalidInputs([...invalidInputsArray]);

        return invalidInputsArray;

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
                </div>
                <div className={styles.mobileStepBox}>
                    <p>
                        Schritt {step} von 4 - {step === 1 && "Angaben Immobilie"} {step === 2 && "Kontaktinformation"} {step === 3 && "Video hochladen (Optional)"} {step === 4 && "Zusammenfassung"}
                    </p>
                </div>
                <div className={styles.formBox}>
                    <div >
                        <h1 className={styles.headline}>kostenfreies & unverbindliches Angebot </h1>
                    </div>
                    <div>
                        <form onSubmit={submitHandler} >
                            <div className={step !== 1 ? styles.displayNone : ""}>
                                <div className={styles.questionBox}>
                                    <div className={invalidInputs.includes('property') ? styles.invalidCheckboxes : ""}>
                                        <p className={styles.question}>Welche Immobilie möchten Sie auflösen?</p>
                                        <div className={styles.inputBoxCheckBox}>
                                            <div>
                                                <label htmlFor="property "> Haus</label>
                                                <input id="Haus" type="checkbox" onChange={selectObject.bind(this)} checked={isObject === "Haus"} className={styles.checkBox} />
                                            </div>
                                            <div>
                                                <label htmlFor="property"> Wohnung </label>
                                                <input id="Wohnung" type="checkbox" onChange={selectObject.bind(this)} checked={isObject === "Wohnung"} className={styles.checkBox} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={isObject === "Wohnung" ? styles.inputBox : styles.displayNone}>
                                        <div className={styles.inputLabelWrapper}>
                                            <label className={inputWithLabel.includes('floor') ? styles.label : styles.noLabel} htmlFor="floor">Stockwerk / Fahrstuhl</label>
                                            <input className={invalidInputs.includes('floor') ? styles.invalidShortInput : styles.inputShort} id="floor" type="text" ref={floorRef} placeholder="Stockwerk / Fahrstuhl" onChange={displayLabel.bind(this)} />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.questionBox}>
                                    <p className={styles.question}>Adresse der Immobilie:</p>
                                    <div className={styles.inputBox}>
                                        <div className={styles.inputLabelWrapper}>
                                            <label className={inputWithLabel.includes('town') ? styles.label : styles.noLabel}>Ort</label>
                                            <input className={invalidInputs.includes('town') ? styles.invalidLongInput : styles.inputLong} onChange={displayLabel.bind(this)} id="town" type="text" ref={townRef} placeholder="Ort" />
                                        </div>
                                        <div className={styles.inputLabelWrapper}>
                                            <label className={inputWithLabel.includes('zip') ? styles.label : styles.noLabel}>Postleitzahl</label>
                                            <input className={invalidInputs.includes('zip') ? styles.invalidShortInput : styles.inputShort} id="zip" type="text" ref={zipRef} onChange={displayLabel.bind(this)} placeholder="Postleitzahl" />
                                        </div>

                                    </div>
                                    <div className={styles.inputBox}>
                                        <div className={styles.inputLabelWrapper}>
                                            <label className={inputWithLabel.includes('street') ? styles.label : styles.noLabel}>Straße</label>
                                            <input className={invalidInputs.includes('street') ? styles.invalidLongInput : styles.inputLong} ref={streetRef} onChange={displayLabel.bind(this)} type="text" id="street" placeholder="Straße" />
                                        </div>
                                        <div className={styles.inputLabelWrapper}>
                                            <label className={inputWithLabel.includes('streetnumber') ? styles.label : styles.noLabel}>Hausnummer</label>
                                            <input className={invalidInputs.includes('streetnumber') ? styles.invalidShortInput : styles.inputShort} ref={streetNumberRef} onChange={displayLabel.bind(this)} type="text" id="streetnumber" placeholder="Hausnummer" />
                                        </div>
                                    </div>
                                    <div className={invalidInputs.includes('inventory') ? styles.invalidCheckboxes : styles.questionBox} >
                                        <p className={styles.questionInventory}>Müssen Schrankinhalte & Kleinartikel geräumt werden?</p>
                                        <div className={styles.inputBoxCheckBox}>
                                            <div>
                                                <label htmlFor="IsInvetory"> Ja</label>
                                                <input id="yesInventory" type="checkbox" onChange={selectInventory.bind(this, "yesInventory")} checked={isInventory === "ja"} className={styles.checkBox} />
                                            </div>
                                            <div>
                                                <label htmlFor="isNotInventory"> Nein </label>
                                                <input id="noInventory" type="checkbox" onChange={selectInventory.bind(this, "noInventory")} checked={isInventory === "nein"} className={styles.checkBox} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.questionBox}>
                                        <p className={styles.question}>Wie viele Zimmer müssen geräumt werden?</p>
                                        <div className={styles.inputLabelWrapper}>
                                            <label className={inputWithLabel.includes('rooms') ? styles.label : styles.noLabel}>Anzahl Zimmer</label>
                                            <input className={invalidInputs.includes('rooms') ? styles.invalidShortInput : styles.inputShort} ref={roomRef} onChange={displayLabel.bind(this)} type="text" id="rooms" placeholder="Anzahl Zimmer" />
                                        </div>
                                    </div>
                                    <div className={styles.questionBox}>
                                        <p className={styles.question}>Bis wann muss die Immobilie geräumt werden?</p>
                                        <div className={styles.inputLabelWrapper}>
                                            <label className={inputWithLabel.includes('date') ? styles.label : styles.noLabel}>Monat/Jahr</label>
                                            <input className={invalidInputs.includes('date') ? styles.invalidShortInput : styles.inputShort} ref={dateRef} onChange={displayLabel.bind(this)} type="text" id="date" placeholder="Monat/Jahr" />
                                        </div>
                                    </div>
                                    <div className={styles.btnBoxFirstStep}>
                                        <button className={styles.nextStepBTN} type="button" onClick={changeStep.bind(this, 2)}>weiter</button>
                                    </div>

                                </div>
                            </div>

                            <div className={step !== 2 ? styles.displayNone : ""}>
                                <div className={styles.questionBox}>
                                    <div className={invalidInputs.includes('gender') ? styles.invalidCheckboxes : ""}>
                                        <p className={styles.question}>Anrede</p>
                                        <div className={styles.inputBoxCheckBox}>
                                            <div>
                                                <label htmlFor="genderWoman">Frau</label>
                                                <input id="Frau" type="checkbox" checked={isGender === "Frau"} onChange={selectGender.bind(this)} className={styles.checkBox} />
                                            </div>
                                            <div>
                                                <label htmlFor="genderMan">Herr</label>
                                                <input id="Herr" type="checkbox" checked={isGender === "Herr"} onChange={selectGender.bind(this)} className={styles.checkBox} />
                                            </div>

                                            <div>
                                                <label htmlFor="genderUnkown">An</label>
                                                <input id="An" type="checkbox" checked={isGender === "An"} onChange={selectGender.bind(this)} className={styles.checkBox} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.questionBox}>
                                        <p className={styles.question}>Angebotsanschrift</p>
                                        <div className={styles.inputBox}>
                                            <div className={styles.inputLabelWrapper}>
                                                <label className={inputWithLabel.includes('nameOffer') ? styles.label : styles.noLabel}>Vor- & Nachname</label>
                                                <input className={invalidInputs.includes('nameOffer') ? styles.invalidLongInput : styles.inputLong} ref={nameOfferRef} onChange={displayLabel.bind(this)} type="text" id="nameOffer" placeholder="Vor- & Nachname" />
                                            </div>
                                        </div>
                                        <div className={styles.inputBox}>
                                            <div className={styles.inputLabelWrapper}>
                                                <label className={inputWithLabel.includes('townOffer') ? styles.label : styles.noLabel}>Ort</label>
                                                <input className={invalidInputs.includes('townOffer') ? styles.invalidLongInput : styles.inputLong} onChange={displayLabel.bind(this)} id="townOffer" type="text" ref={townOfferRef} placeholder="Ort" />
                                            </div>
                                            <div className={styles.inputLabelWrapper}>
                                                <label className={inputWithLabel.includes('zipOffer') ? styles.label : styles.noLabel}>Postleitzahl</label>
                                                <input className={invalidInputs.includes('zipOffer') ? styles.invalidShortInput : styles.inputShort} ref={zipOfferRef} id="zipOffer" type="text" onChange={displayLabel.bind(this)} placeholder="Postleitzahl" />
                                            </div>

                                        </div>
                                        <div className={styles.inputBox}>
                                            <div className={styles.inputLabelWrapper}>
                                                <label className={inputWithLabel.includes('streetOffer') ? styles.label : styles.noLabel}>Straße</label>
                                                <input className={invalidInputs.includes('streetOffer') ? styles.invalidLongInput : styles.inputLong} ref={streetOfferRef} onChange={displayLabel.bind(this)} type="text" id="streetOffer" placeholder="Straße" />
                                            </div>
                                            <div className={styles.inputLabelWrapper}>
                                                <label className={inputWithLabel.includes('streetnumberOffer') ? styles.label : styles.noLabel}>Hausnummer</label>
                                                <input className={invalidInputs.includes('streetnumberOffer') ? styles.invalidShortInput : styles.inputShort} ref={streetNumberOfferRef} onChange={displayLabel.bind(this)} type="text" id="streetnumberOffer" placeholder="Hausnummer" />
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
                                                <input className={invalidInputs.includes('email') ? styles.invalidLongInput : styles.inputLong} ref={emailRef} onChange={displayLabel.bind(this)} type="text" id="email" placeholder="E-Mail" />
                                            </div>
                                        </div>
                                        <div className={styles.inputBox}>
                                            <div className={styles.inputLabelWrapper}>
                                                <label className={inputWithLabel.includes('tel') ? styles.label : styles.noLabel}>Telefonnummer</label>
                                                <input className={invalidInputs.includes('tel') ? styles.invalidLongInput : styles.inputLong} ref={phoneRef} onChange={displayLabel.bind(this)} type="text" id="tel" placeholder="Telefonnummer" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.btnBox}>
                                    <button className={styles.backStepBTN} type="button" onClick={setStep.bind(this, 1)}>zurück</button>
                                    <button className={styles.nextStepBTN} type="button" onClick={changeStep.bind(this, 3)}>weiter</button>
                                </div>
                            </div>

                            <div className={step !== 3 ? styles.displayNone : ""}>
                                <p> Laden Sie Videos oder Bilder der Räumlichkeiten hoch & wir senden Ihnen umgehend einen Festpreiskostenvoranschlag zu. </p>
                                <p> Oder senden Sie Ihr Video ganz einfach via <BsWhatsapp className={styles.whatsAppIcon} /> WhatsApp an 0170 - 723 0 385</p>

                                <div>
                                    <div className={styles.exampleVideoWrapper}>
                                        <div>
                                            <label htmlFor="fileupload" className={styles.customFileBTN}>
                                                <AiOutlineVideoCameraAdd /> Dateien hochladen
                                            </label>
                                            <input multiple type="file" id="fileupload" className={styles.inputFile} onChange={handleFileChange} ref={fileRef}></input>

                                            <div className={files.length > 0 ? styles.uploadFormGroup : styles.displayNone}>
                                                <div className={styles.uploadedVideoBox}>
                                                    {files.length === 0 && <p>Noch keine Dateien hochgeladen</p>}
                                                    {files.map(file => <div key={Math.random()} className={styles.uploadFileEntryWrapper}> <div className={styles.iconAndNameVideoWrapper}> <span className={styles.checkIconVideo}><BsCheckCircleFill /></span>
                                                        {file.name}</div> <span className={styles.trashIcon}>
                                                            <BsTrash onClick={deleteFile.bind(this, file.name)} /></span> </div>)}
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <p className={styles.headlineExampleVideo}>Beispielvideo</p>
                                            <video className={styles.exapmpleVideo} width="250" height="230" controls preload="none" poster="/entruempelung_bonn_koeln_thumbnail.webp">
                                                <source src="/Entruemeplung_koeln_bonn_video.mp4" type="video/mp4" />
                                                Dieses Fortmat wird von Ihrem Browser leider nicht unterstützt.
                                            </video>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.btnBoxVideoUpoad}>
                                    <button type="button" className={styles.backStepBTNVideo} onClick={setStep.bind(this, 2)}>zurück</button>
                                    <button type="button" className={files.length === 0 ? styles.backStepBTNVideo : styles.nextStepBTNVideo} onClick={setStep.bind(this, 4)}>{files.length === 0 ? "weiter (ohne Video)" : "weiter"} </button>
                                </div>
                            </div>
                            {step === 4 && <div className={styles.summerizeStepWrapper}>
                                <div>
                                    <h4>Angaben zu Immobilie:</h4>
                                    <p>Anschrift: <span className={styles.summerizeValue}>{streetRef.current.value} {streetNumberRef.current.value} in {zipRef.current.value} {townRef.current.value} </span> </p>
                                    <p>Objektart: <span className={styles.summerizeValue}> {isObject}<span className={isObject === "Wohnung" ? "" : styles.displayNone}>, Etage: {floorRef.current.value} </span> </span> </p>
                                    <p> Anzahl der Zimmer:<span className={styles.summerizeValue}> {roomRef.current.value}</span> </p>
                                    <p>Räumung von Schrankinhalten:<span className={styles.summerizeValue}> {isInventory}</span> </p>
                                    <p>Wunschtermin: <span className={styles.summerizeValue}>{dateRef.current.value}</span> </p>
                                </div>
                                <div>
                                    <h4>Angebotsanschrift & Kontaktinformationen:</h4>
                                    <p>Name: <span className={styles.summerizeValue}> {isGender} {nameOfferRef.current.value}</span> </p>
                                    <p>Anschrift: <span className={styles.summerizeValue}>{streetOfferRef.current.value} {streetNumberRef.current.value} in {zipOfferRef.current.value} {townOfferRef.current.value}</span></p>
                                    <p>E-Mail: <span className={styles.summerizeValue}>{emailRef.current.value} </span></p>
                                    <p>Telefon:<span className={styles.summerizeValue}> {phoneRef.current.value} </span></p>
                                </div>
                                <div>
                                    <h4>Hochgeladene Dateien</h4>
                                    <p> Sie haben {files.length} Dateien hochgeladen. <span className={styles.summerzizeLink} onClick={setStep.bind(this, 3)}>Dateien bearbeiten</span></p>
                                </div>

                                <div className={styles.btnBox}>
                                    <button type="button" className={styles.backStepBTN} onClick={setStep.bind(this, 3)}>zurück</button>
                                    <button className={styles.nextStepBTN} type="submit"> senden </button>
                                </div>
                                {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

                            </div>}
                        </form>
                    </div>
                </div >
            </section >
            {loading && <div className={styles.spinnerContainer}>
                <div className={styles.loadingSpinner}>
                </div>
                <p> Bitte warten...</p>
                <p> Videos & Bilder werden hochgeladen - bitte unterbrechen Sie diesen Vorgang nicht</p>
            </div>}


        </Fragment >
    )
}