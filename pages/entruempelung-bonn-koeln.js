import { Fragment } from "react";
import styles from "../styles/entruempelung.module.css";
import { useRef, useState } from "react";
import { BsFillHouseFill, BsCheckLg, BsInfoCircle, BsCheckCircleFill, BsTrash, BsWhatsapp } from "react-icons/bs";
import Autocomplete from "react-google-autocomplete";
import { FaWalking } from "react-icons/fa";
import { AiOutlineVideoCameraAdd, AiOutlineCloseCircle, AiOutlineEdit } from "react-icons/ai";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BiArrowBack } from "react-icons/bi";
import router from 'next/router';


export default function EntrümpelungPage() {
    const [files, setFiles] = useState([]);
    const [formPopup, setFormPopup] = useState(false);
    const [whatsAppHint, setWhatsAppHint] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [categoryRef, setCategoryRef] = useState('');
    const [contactInformationStep, setContactInformationStep] = useState(false);
    const [qm, setqm] = useState('90');
    const [infoSlider, setInfoSlider] = useState(false);
    const [loading, setLoading] = useState(false);

    const options = {
        componentRestrictions: { country: 'DE' },
        types: ['address']
    }

    const adressRefViewing = useRef();
    const dateRefViewing = useRef();
    const qmRefViewing = useRef();
    const nameRefViewing = useRef();
    const emailRefViewing = useRef();
    const telRefViewing = useRef();
    const adressRef = useRef();
    const dateRef = useRef();
    const qmRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const telRef = useRef();
    const fileRef = useRef();

    function setQm() {
        setqm(qmRef.current.value)
    }

    function openPopupForm() {
        if (adressRef.current.value.length > 5 && dateRef.current.value.length > 5 && qmRef.current.value > 1) {
            setFormPopup(true);
            setErrorMessage(false)
        }
        else {
            setErrorMessage('Bitte füllen Sie alle Felder gültig aus');
        }
    }

    function selectCategory(kind) {
        setCategoryRef(kind);
        setContactInformationStep(kind);
    }

    function whatsAppHandler() {
        setContactInformationStep('appointment');
        setWhatsAppHint(true);
    }

    function closePopupForm() {
        setFormPopup('closed');
        setContactInformationStep(false);
        setWhatsAppHint(false);
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

    function stepBack() {
        if (contactInformationStep === "appointment" || contactInformationStep === "video") {
            setContactInformationStep(false);
        }
        if (contactInformationStep === "videoContact") {
            setContactInformationStep("video");
        }
    }

    async function submitHandler(event) {
        setLoading(true)
        event.preventDefault();
        if (contactInformationStep === "appointment") {
            sendEmailViewing();
        }
        if (contactInformationStep === "videoContact") {
            sendEmailVideo();
        }
    }

    async function sendEmailViewing() {
        if (nameRefViewing.current.value.length > 3 || emailRefViewing.current.value.length > 3 || telRefViewing.current.value.length > 3 || adressRefViewing.current.value.length > 3
            || dateRefViewing.current.value.length > 3 || qmRefViewing.current.value.length > 1) {
            setErrorMessage(false);
            const data = {
                name: nameRefViewing.current.value,
                email: emailRefViewing.current.value,
                phone: telRefViewing.current.value,
                adress: adressRefViewing.current.value,
                date: dateRefViewing.current.value,
                qm: qmRefViewing.current.value,
            }
            const response = await fetch('http://localhost:3030/dsk-website/entruempelungForm', {
                method: "POST",
                body: JSON.stringify({ ...data }),
                headers: { "Content-Type": "application/json" }
            });
            if (response.ok) {
                setLoading(false);
                router.replace('anfrage-entruempelung-erhalten');
            } else {
                setLoading(false)
                setErrorMessage('Ups - Leider ist ein Fehler aufgetreten - Bitte versuchen Sie es erneut');
            }
        } else {
            setLoading(false)
            setErrorMessage('Bitte füllen Sie alle Felder gültig aus');
        }
    }

    async function sendEmailVideo() {
        if (files.length === 0) {
            setLoading(false)
            return setErrorMessage('Bitte laden Sie ein Video der Immobilie hoch');
        }

        if (nameRef.current.value.length < 3 || emailRef.current.value.length < 3 || telRef.current.value.length < 3 || adressRef.current.value.length < 3
            || dateRef.current.value.length < 3 || qmRef.current.value.length < 1) {
            setLoading(false)
            setErrorMessage('Bitte füllen Sie alle Felder gültig aus');
        } else {
            setErrorMessage(false);
            const data = {
                name: nameRef.current.value,
                email: emailRef.current.value,
                phone: telRef.current.value,
                adress: adressRef.current.value,
                date: dateRef.current.value,
                qm: qmRef.current.value,
                category: categoryRef,
            }
            const fileNameArray = await uploadFiles(data.name);
            const sendEmail = await sendNewEmail(fileNameArray, data);
        }
    }

    async function sendNewEmail(filenameArray, data) {
        const videoUrl = `localhost:3000/admin/videos/${filenameArray.join('+++')}`;
        const response = await fetch('http://localhost:3030/dsk-website/entruempelungForm', {
            method: "POST",
            body: JSON.stringify({ ...data, link: videoUrl }),
            headers: { "Content-Type": "application/json" }
        });
        if (response.ok) {
            setLoading(false);
            router.replace('anfrage-entruempelung-erhalten');
        } else {
            setLoading(false)
            setErrorMessage('Ups - Leider ist ein Fehler aufgetreten - Bitte versuchen Sie es erneut');
        }
    }

    async function uploadFiles(clientName) {
        const fileNameArray = [];
        for await (let file of files) {
            const filename = `${file.name}-${clientName}-${Math.floor(1000 + Math.random() * 9000)}`;
            fileNameArray.push(filename);
            const response = await fetch('http://localhost:3030/dsk-website/getSignedURL', {
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

    return (
        <Fragment>
            <section className={styles.aboveTheFold}>
                <div className={styles.imageOverlay}></div>
                <div className={styles.headerContent}>
                    <h1 className={styles.headline}>Entrümpelung für Köln & Bonn</h1>
                    <p className={styles.subheadline}>über 15 Jahre Erfahrung</p>

                    {/* LandingPage Form */}
                    <div className={styles.form}>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="address">
                                Adresse der Immobilie:
                            </label>
                            <Autocomplete options={options} className={styles.input} ref={adressRef} apiKey={"AIzaSyBXcBLbQlz5-zAwEHfLqD2mQcxghJ8TjOs"} placeholder="Deutschherrenstraße 197, 53179 Bonn" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="date">
                                gewünschter Räumungstermin:
                            </label>
                            <input required type="date" ref={dateRef} className={styles.dateInput}></input>
                        </div>
                        <div className={styles.formGroupQM}>
                            <label htmlFor="qm">
                                Quadratmeter:
                            </label>
                            <div className={styles.qmInputBox}>
                                <BsFillHouseFill className={styles.qmIcon} />
                                <input required className={styles.rangeInput} ref={qmRef} id="qm" type="range" min="10" max="1000" defaultValue={90} onChange={setQm}></input>
                                <p className={styles.qmText}>{qm} Quadratmeter</p>
                            </div>
                        </div>
                        <button type="button" className={styles.formBTN} onClick={openPopupForm}>{formPopup === 'closed' ? 'Anfrage fotzsetzen' : 'kostenloses Angebot erhalten'}</button>
                        {errorMessage && !formPopup && <p className={styles.errorMessage}>{errorMessage}</p>}
                    </div>

                    {/* PopUp Form */}
                    {formPopup === true &&
                        <div className={styles.backgroundMainForm}>
                            <form className={styles.mainForm} onSubmit={submitHandler}>
                                <div className={styles.navigationBox}>
                                    <BiArrowBack className={contactInformationStep ? styles.stepBack : styles.stepBackNone} onClick={stepBack}></BiArrowBack>
                                    <IoIosCloseCircleOutline className={styles.closeBTNPopup} onClick={closePopupForm} />
                                </div>
                                {!contactInformationStep &&
                                    <div className={styles.categoryStepWrapper}>
                                        <p><em>Schritt 1 von 2</em></p>
                                        <h3>Wie soll die Immobilie besichtigt werden ?</h3>
                                        <div className={styles.boxesWrapper}>
                                            <div className={styles.appointment} onClick={selectCategory.bind(this, "appointment")}>
                                                <FaWalking className={styles.iconCalculationCategory} />
                                                <p>kostenfreier Termin vor Ort</p>
                                            </div>
                                            <div className={styles.videoUpload} onClick={selectCategory.bind(this, "video")}>
                                                <AiOutlineVideoCameraAdd className={styles.iconCalculationCategory} />
                                                <p>Video hochladen & Angebot erhalten</p>
                                            </div>
                                        </div>
                                        <div className={styles.infoBox}>
                                            <BsInfoCircle className={styles.infoIcon} onClick={setInfoSlider.bind(this, true)} />
                                            <p className={styles.hint}>weitere Informationen</p>
                                        </div>
                                    </div>
                                }

                                <div className={contactInformationStep === "appointment" ? styles.stepTwoAppointment : styles.hideStep}>
                                    <p className={styles.stepTracker}><em>Schritt 2 von 2</em></p>
                                    <h3 className={styles.contactHeadline}>Kontaktinformation:</h3>
                                    <div className={styles.formGroupContact}>
                                        <label className={styles.label}>Ansprechpartner</label>
                                        <input placeholder="Herr Max Mustermann" ref={nameRefViewing} className={styles.inputContact} type="text"></input>
                                    </div>
                                    <div className={styles.contactFormRow}>
                                        <div className={styles.formGroupContact}>
                                            <label className={styles.label}>E-Mail Adresse</label>
                                            <input placeholder="maxmustermann@gmail.com" ref={emailRefViewing} className={styles.inputContact} type="email"></input>
                                        </div>
                                        <div className={styles.formGroupContact}>
                                            <label className={styles.label}>Telefonnummer</label>
                                            <input placeholder="0228-227 983 49" ref={telRefViewing} className={styles.inputContact} type="tel"></input>
                                        </div>
                                    </div>
                                    <h3 className={styles.contactHeadlineProperty}>Ihre Angaben zu der Immobilie:</h3>
                                    <div className={styles.formGroupContact}>
                                        <label className={styles.label}>Anschrift:</label>
                                        <Autocomplete options={options} className={styles.inputContact} ref={adressRefViewing} apiKey={"AIzaSyBXcBLbQlz5-zAwEHfLqD2mQcxghJ8TjOs"} defaultValue={adressRef.current.value} />
                                    </div>
                                    <div className={styles.contactFormRow}>
                                        <div className={styles.formGroupContact}>
                                            <label className={styles.label}>spätester Räumungstermin:</label>
                                            <input required className={styles.inputContact} ref={dateRefViewing} defaultValue={dateRef.current.value} type="date"></input>
                                        </div>
                                        <div className={styles.formGroupContact}>
                                            <label className={styles.label}>Quadratmeter:</label>
                                            <input required className={styles.inputContact} ref={qmRefViewing} defaultValue={qmRef.current.value} type="number"></input>
                                        </div>
                                    </div>
                                    {whatsAppHint && <p className={styles.whatsAppHint}>Video & Namen einfach per WhatsApp an folgende Telefonnummer senden: +49 (0) 151 423 859 89</p>}
                                    <button className={styles.finalFormBTNAppointment} type="submit">kostenlos anfragen</button>
                                    {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                                </div>


                                <div className={contactInformationStep === "video" ? styles.stepTwoVideo : styles.hideStep}>
                                    <p className={styles.stepTracker}><em>Schritt 2 von 3</em></p>
                                    <h3 className={styles.videoHeadline}>Bitte laden Sie Ihr Video hoch </h3>
                                    <p>(Es können auch mehrere Videos hochgeladen werden)</p>
                                    <div className={styles.uploadFormGroup}>
                                        <label htmlFor="fileupload" className={styles.customFileBTN}>
                                            <AiOutlineVideoCameraAdd /> Video hochladen
                                        </label>
                                        <input multiple type="file" id="fileupload" className={styles.inputFile} onChange={handleFileChange} ref={fileRef}></input>
                                        {files.length === 0 && <p onClick={whatsAppHandler} className={styles.whatsAppText}> <BsWhatsapp className={styles.whatsAppIcon} /> Video per WhatsApp senden </p>}
                                        {files.length > 0 && <div className={styles.uploadedVideoBox}>
                                            <p className={styles.videoBoxP}>hochgeladen:</p>
                                            {files.map(file => <div key={Math.random()} className={styles.videoName}><span className={styles.checkIconVideo}><BsCheckCircleFill /></span>
                                                {file.name} <span className={styles.trashIcon}>
                                                    <BsTrash onClick={deleteFile.bind(this, file.name)} /></span> </div>)}
                                        </div>}
                                    </div>
                                    {files.length > 0 && <button className={styles.forwardBTNVideoUpload} onClick={setContactInformationStep.bind(this, "videoContact")} type="button">weiter</button>}
                                </div>


                                <div className={contactInformationStep === "videoContact" ? styles.stepTwoAppointment : styles.hideStep}>
                                    <p className={styles.stepTracker}><em>Schritt 3 von 3</em></p>
                                    <h3 className={styles.contactHeadline}>Kontaktinformation:</h3>
                                    <div className={styles.formGroupContact}>
                                        <label className={styles.label}>Ansprechpartner</label>
                                        <input placeholder="Herr Max Mustermann" ref={nameRef} className={styles.inputContact} type="text"></input>
                                    </div>
                                    <div className={styles.contactFormRow}>
                                        <div className={styles.formGroupContact}>
                                            <label className={styles.label}>E-Mail Adresse</label>
                                            <input placeholder="maxmustermann@gmail.com" ref={emailRef} className={styles.inputContact} type="email"></input>
                                        </div>
                                        <div className={styles.formGroupContact}>
                                            <label className={styles.label}>Telefonnummer</label>
                                            <input placeholder="0228-227 983 49" ref={telRef} className={styles.inputContact} type="tel"></input>
                                        </div>
                                    </div>
                                    <h3 className={styles.contactHeadlineProperty}>Ihre Angaben zu der Immobilie:</h3>
                                    <div className={styles.formGroupContact}>
                                        <label className={styles.label}>Anschrift:</label>
                                        <Autocomplete options={options} className={styles.inputContact} ref={adressRef} apiKey={"AIzaSyBXcBLbQlz5-zAwEHfLqD2mQcxghJ8TjOs"} defaultValue={adressRef.current.value} />
                                    </div>
                                    <div className={styles.contactFormRow}>
                                        <div className={styles.formGroupContact}>
                                            <label className={styles.label}>spätester Räumungstermin:</label>
                                            <input required className={styles.inputContact} defaultValue={dateRef.current.value} type="date"></input>
                                        </div>
                                        <div className={styles.formGroupContact}>
                                            <label className={styles.label}>Quadratmeter:</label>
                                            <input required className={styles.inputContact} defaultValue={qmRef.current.value} type="number"></input>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className={styles.contactHeadlineProperty}>hochgeladenes Video:</h3>
                                        {files.length === 1 ? files.map(file => <div key={Math.random()} className={styles.videoBox}><span className={styles.checkIconVideo}><BsCheckCircleFill /></span>
                                            {file.name} <span onClick={setContactInformationStep.bind(this, 'video')} className={styles.editVideo}>
                                                <AiOutlineEdit />bearbeiten</span> </div>) : <div className={styles.videoBox}><span className={styles.checkIconVideo}><BsCheckCircleFill /></span>
                                            {files.length} Videos hochgeladen <span onClick={setContactInformationStep.bind(this, 'video')} className={styles.editVideo}>
                                                <AiOutlineEdit />bearbeiten</span> </div>}
                                    </div>
                                    <button className={styles.finalFormBTNAppointment} type="submit">kostenfreies Angebot anfordern</button>
                                    {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                                </div>
                            </form>
                        </div>}
                </div>
                <div className={styles.trustElementBox}>
                    <p> <BsCheckLg className={styles.checkIcon} /> kostenfreie Beratung</p>
                    <p> <BsCheckLg className={styles.checkIcon} /> Wiederverwertung Ihres Mobiliars</p>
                    <p> <BsCheckLg className={styles.checkIcon} /> versichert & professionell</p>
                </div>
            </section>

            {infoSlider && <section className={styles.infoSlider}>
                <AiOutlineCloseCircle className={styles.closeBTNInfoSlider} onClick={setInfoSlider.bind(this, false)} />
                <h2 className={styles.sliderHeadline}>Kostenfreier vor Ort Termin</h2>
                <ul className={styles.infoSliderList}>
                    <li><span className={styles.numberListIcon}>1</span>Unser Außendienst ruft Sie an und vereinbart mit Ihnen einen kostenfreien Besichtigungstermin.</li>
                    <li><span className={styles.numberListIcon}>2</span>Wir beraten Sie unverbindlich vor Ort.</li>
                    <li><span className={styles.numberListIcon}>3</span>Sie erhalten von uns ein Festpreis-Angebot für die Auflösung der Immobilie</li>
                </ul>
                <div className={styles.spacer}></div>
                <h2 className={styles.sliderHeadline}>Video hochladen & Angebot erhalten</h2>
                <ul className={styles.infoSliderList}>
                    <li><span className={styles.numberListIcon}>1</span>Sie drehen ein Video von den zu räumenden Zimmern der Immobilie</li>
                    <li><span className={styles.numberListIcon}>2</span>Sie laden das Video im nächsten Schritt dieses Formulars hoch oder senden uns dieses via WhatsApp.</li>
                    <li><span className={styles.numberListIcon}>3</span>Wir rufen Sie zurück und beraten Sie auf Basis des zur Verfügung gestellten Videos</li>
                    <li><span className={styles.numberListIcon}>4</span>Sie erhalten von uns ein Festpreis-Angebot für die Auflösung der Immobilie</li>
                </ul>
            </section>
            }
            {loading && <div className={styles.spinnerContainer}>
                <div className={styles.loadingSpinner}>
                </div>
                <p> Bitte warten...</p>
            </div>}
        </Fragment>
    )
}