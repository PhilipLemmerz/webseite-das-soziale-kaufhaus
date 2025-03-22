import { Fragment } from "react";
import styles from "../styles/entruempelung.module.css";
import { useRef, useState, useEffect } from "react";
import { BsFillHouseFill, BsInfoCircle, BsCheckCircleFill, BsTrash, BsWhatsapp } from "react-icons/bs";
import { FaWalking, FaCheck, FaArrowRight } from "react-icons/fa";
import { AiOutlineVideoCameraAdd, AiOutlineCloseCircle, AiOutlineEdit } from "react-icons/ai";
import { IoIosCloseCircleOutline, IoIosArrowRoundForward } from "react-icons/io";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import router from 'next/router';
import Image from "next/image";
import { HiCursorClick } from "react-icons/hi";
import Head from "next/head";

export default function EntrümpelungPage() {
    const [files, setFiles] = useState([]);
    const [formPopup, setFormPopup] = useState(false);
    const [scrollBTN, setScrollBTN] = useState(false);
    const [whatsAppHint, setWhatsAppHint] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [categoryRef, setCategoryRef] = useState('');
    const [contactInformationStep, setContactInformationStep] = useState(false);
    const [qm, setqm] = useState('90');
    const [infoSlider, setInfoSlider] = useState(false);
    const [loading, setLoading] = useState(false);
    const [scrolledY, setScrolled] = useState(0);
    const date = new Date();
    const timeStamp = date.getTime();


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY)
        }
        window.addEventListener("scroll", handleScroll);

        if (scrolledY > 900) {
            activateScrollMenu()
        } else {
            deactivateScrollMenu()
        }
    });

    function activateScrollMenu() {
        setScrollBTN(true);
    }

    function deactivateScrollMenu() {
        setScrollBTN(false);
    }

    const adressRefViewing = useRef();
    const qmRefViewing = useRef();
    const nameRefViewing = useRef();
    const emailRefViewing = useRef();
    const telRefViewing = useRef();
    const adressStreetRef = useRef();
    const adressPLZRef = useRef();
    const adressRefVideo = useRef();
    const qmRefVideo = useRef();
    const qmRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const telRef = useRef();
    const fileRef = useRef();

    function setQm() {
        setqm(qmRef.current.value)
    }

    function openPopupForm() {
        if (adressStreetRef.current.value.length > 5 && adressPLZRef.current.value.length > 2 && qmRef.current.value > 1) {
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
    }

    function openForm() {
        setFormPopup(true)
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
        event.preventDefault();
        if (contactInformationStep === "appointment") {
            sendEmailViewing();
        }
        if (contactInformationStep === "videoContact") {
            sendEmailVideo();
        }
    }
    

    async function sendEmailViewing() {
        setLoading(true)
        try {
            if (nameRefViewing.current.value.length > 3 && emailRefViewing.current.value.length > 3 && telRefViewing.current.value.length > 3 && adressRefViewing.current.value.length > 3
                && qmRefViewing.current.value.length >= 1) {
                setErrorMessage(false);
                const data = {
                    name: nameRefViewing.current.value,
                    email: emailRefViewing.current.value,
                    phone: telRefViewing.current.value,
                    adress: adressRefViewing.current.value,
                    qm: qmRefViewing.current.value,
                }
                const response = await fetch('https://api.einsatzplaner.com/dsk-website/entruempelungForm', {
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
        } catch (err) {
            setLoading(false);
            setErrorMessage('Ups - Leider ist ein Fehler aufgetreten - Bitte versuchen Sie es erneut');
        }

    }

    async function sendEmailVideo() {
        setLoading(true)
        try {
            if (files.length === 0) {
                setLoading(false)
                return setErrorMessage('Bitte laden Sie ein Video der Immobilie hoch');
            }

            if (nameRef.current.value.length < 3 || emailRef.current.value.length < 3 || telRef.current.value.length < 3 || adressRefVideo.current.value.length < 3
                || qmRef.current.value.length < 1) {
                setLoading(false)
                setErrorMessage('Bitte füllen Sie alle Felder gültig aus');
            } else {
                setErrorMessage(false);
                const data = {
                    name: nameRef.current.value,
                    email: emailRef.current.value,
                    phone: telRef.current.value,
                    adress: adressRefVideo.current.value,
                    qm: qmRefVideo.current.value,
                    category: categoryRef,
                }
                const fileNameArray = await uploadFiles(data.name);
                await sendNewEmail(fileNameArray, data);

            }
        } catch (err) {
            setLoading(false)
            setErrorMessage('Ups - Leider ist ein Fehler aufgetreten - Bitte versuchen Sie es erneut');
        }
    }

    async function sendNewEmail(filenameArray, data) {
        try {
            const videoUrl = `https://portal.einsatzplaner.com/dsk-website/entruempelung/${filenameArray.join('+++')}`;
            const response = await fetch('https://api.einsatzplaner.com/dsk-website/entruempelungForm', {
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
        } catch (err) {
            setLoading(false)
            setErrorMessage('Ups - Leider ist ein Fehler aufgetreten - Bitte versuchen Sie es erneut');
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

    return (
        <Fragment>
            <Head>
                <title>Entrümpelung & Haushhaltsauflösung in Bonn & Köln mit Ihrem Sozialkaufhaus</title>
                <meta name="description" content="Entrümpelung in Bonn & Köln - Haushaltsauflösung mit Verwertung Ihrer Möbel zugunsten bedürftiger Menschen aus Bonn & Köln." />
            </Head>
            {scrollBTN && <button onClick={setFormPopup.bind(this, true)} className={styles.scrollCTAButton}>{formPopup === 'closed' ? 'Anfrage fotzsetzen' : 'kostenloses Angebot'}</button>}
            {/* <section>
                <div className={styles.headerContent}>
                    {/* LandingPage Form */}
            {/* <div className={styles.form}>
                        <div className={styles.inputWrapper}>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="address">
                                    Immobilienadresse:
                                </label>
                                <div className={styles.adressInputWrapper}>
                                    <input className={styles.inputAdressStreet} ref={adressStreetRef} type="text" placeholder="Straße & Hausnummer" />
                                    <input className={styles.input} ref={adressPLZRef} type="text" placeholder="Postleitzahl & Ort" />
                                </div>
                            </div>
                        </div>

                        <div className={styles.formGroupQM}>
                            <label htmlFor="qm" className={styles.qmLabel}>
                                Quadratmeter:
                            </label>
                            <div className={styles.qmInputBox}>
                                <BsFillHouseFill className={styles.qmIcon} />
                                <input required className={styles.rangeInput} ref={qmRef} id="qm" type="range" min="10" max="1000" defaultValue={90} onChange={setQm}></input>
                                <p className={styles.qmText}>{qm} Quadratmeter</p>
                            </div>
                        </div>
                        <button type="button" className={styles.formBTN} onClick={openPopupForm}>{formPopup === 'closed' ? 'Anfrage fortsetzen' : 'kostenloses Angebot erhalten'}</button>
                        {errorMessage && !formPopup && <p className={styles.errorMessage}>{errorMessage}</p>}

                    </div> */}
            {/* PopUp Form */}

            {/* <div className={formPopup === true ? styles.backgroundMainForm : styles.hideMainForm}>
                        <div className={styles.mainForm}>
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
                                            <p>Besichtigungstermin vor Ort vereinbaren</p>
                                        </div>
                                        <div className={styles.videoUpload} onClick={selectCategory.bind(this, "video")}>
                                            <AiOutlineVideoCameraAdd className={styles.iconCalculationCategory} />
                                            <p>Bilder oder Video hochladen & Angebot erhalten</p>
                                        </div>
                                    </div>
                                    <div className={styles.infoBox}>
                                        <BsInfoCircle className={styles.infoIcon} onClick={setInfoSlider.bind(this, true)} />
                                        <p className={styles.hint}>weitere Informationen</p>
                                    </div>
                                </div>
                            }

                            <form onSubmit={submitHandler} className={contactInformationStep === "appointment" ? styles.stepTwoAppointment : styles.hideStep}>
                                <p className={styles.stepTracker}><em>Schritt 2 von 2</em></p>
                                <h3 className={styles.contactHeadline}>Kontaktinformation:</h3>
                                <div className={styles.formGroupContact}>
                                    <label htmlFor="name" className={styles.label}>Ansprechpartner</label>
                                    <input required placeholder="Herr Max Mustermann" ref={nameRefViewing} id="name" className={styles.inputContact} type="text" ></input>
                                </div>
                                <div className={styles.contactFormRow}>
                                    <div className={styles.formGroupContact}>
                                        <label htmlFor="email" className={styles.label}>E-Mail Adresse</label>
                                        <input required placeholder="maxmustermann@gmail.com" ref={emailRefViewing} id="email" className={styles.inputContact} type="email"></input>
                                    </div>
                                    <div className={styles.formGroupContact}>
                                        <label htmlFor="phone" className={styles.label}>Telefonnummer</label>
                                        <input required placeholder="0228-227 983 49" id="phone" ref={telRefViewing} className={styles.inputContact} type="tel"></input>
                                    </div>
                                </div>
                                <h3 className={styles.contactHeadlineProperty}>Ihre Angaben zu der Immobilie:</h3>
                                <div className={styles.formGroupContact}>
                                    <label htmlFor="fulladress" className={styles.label}>Anschrift</label>
                                    <input required placeholder="Deutschherrenstraße 197, 53179 Bonn" id="fulladress" className={styles.inputContact} ref={adressRefViewing} defaultValue={formPopup && adressStreetRef.current.value.length > 3 && adressPLZRef.current.value.length > 3 ? `${adressStreetRef.current.value}, ${adressPLZRef.current.value}` : ''} type="text" />
                                </div>
                                <div className={styles.contactFormRow}>
                                    <div className={styles.formGroupContact}>
                                        <label htmlFor="qmmain" className={styles.label}>Quadratmeter</label>
                                        <input required className={styles.inputContact} ref={qmRefViewing} id="qmmain" defaultValue={formPopup && qmRef.current.value.length > 1 ? qmRef.current.value : ''} type="number"></input>
                                    </div>
                                </div>
                                {whatsAppHint && <p className={styles.whatsAppHint}>Video & Namen einfach per WhatsApp an folgende Telefonnummer senden: +49 (0) 151 11 4444 69</p>}
                                <button className={styles.finalFormBTNAppointment} type="submit">kostenlos anfragen</button>
                            </form>


                            <div className={contactInformationStep === "video" ? styles.stepTwoVideo : styles.hideStep}>
                                <p className={styles.stepTracker}><em>Schritt 2 von 3</em></p>
                                <h3 className={styles.videoHeadline}>Bitte laden Sie hier Videos oder Bilder hoch </h3>
                                <p>(Es können auch mehrere Dateien hochgeladen werden)</p>
                                <div className={styles.uploadFormGroup}>
                                    <label htmlFor="fileupload" className={styles.customFileBTN}>
                                        <AiOutlineVideoCameraAdd /> Dateien hochladen
                                    </label>
                                    <input multiple type="file" id="fileupload" className={styles.inputFile} onChange={handleFileChange} ref={fileRef}></input>
                                    {files.length === 0 && <p onClick={whatsAppHandler} className={styles.whatsAppText}> <BsWhatsapp className={styles.whatsAppIcon} /> Video oder Bilder per WhatsApp senden </p>}
                                    {files.length > 0 && <div className={styles.uploadedVideoBox}>
                                        <p className={styles.videoBoxP}>hochgeladen:</p>
                                        {files.map(file => <div key={Math.random()} className={styles.videoName}><span className={styles.checkIconVideo}><BsCheckCircleFill /></span>
                                            {file.name} <span className={styles.trashIcon}>
                                                <BsTrash onClick={deleteFile.bind(this, file.name)} /></span> </div>)}
                                    </div>}
                                </div>
                                {files.length > 0 && <button className={styles.forwardBTNVideoUpload} onClick={setContactInformationStep.bind(this, "videoContact")} type="button">weiter</button>}
                            </div>

                            <form onSubmit={submitHandler} className={contactInformationStep === "videoContact" ? styles.stepTwoAppointment : styles.hideStep}>
                                <p className={styles.stepTracker}><em>Schritt 3 von 3</em></p>
                                <h3 className={styles.contactHeadline}>Kontaktinformation:</h3>
                                <div className={styles.formGroupContact}>
                                    <label htmlFor="videoName" className={styles.label}>Ansprechpartner</label>
                                    <input required placeholder="Herr Max Mustermann" ref={nameRef} id="videoName" className={styles.inputContact} type="text"></input>
                                </div>
                                <div className={styles.contactFormRow}>
                                    <div className={styles.formGroupContact}>
                                        <label htmlFor="emailVideo" className={styles.label}>E-Mail Adresse</label>
                                        <input required id="emailVideo" placeholder="maxmustermann@gmail.com" ref={emailRef} className={styles.inputContact} type="email"></input>
                                    </div>
                                    <div className={styles.formGroupContact}>
                                        <label htmlFor="phoneVideo" className={styles.label}>Telefonnummer</label>
                                        <input required id="phoneVideo" placeholder="0228-227 983 49" ref={telRef} className={styles.inputContact} type="tel"></input>
                                    </div>
                                </div>
                                <h3 className={styles.contactHeadlineProperty}>Ihre Angaben zu der Immobilie:</h3>
                                <div className={styles.formGroupContact}>
                                    <label htmlFor="fulladresssvideo" className={styles.label}>Anschrift</label>
                                    <input required id="fulladresssvideo" placeholder="Deutschherrenstraße 197, 53179 Bonn" className={styles.inputContact} ref={adressRefVideo} type="text" defaultValue={formPopup && adressStreetRef.current.value.length > 3 && adressPLZRef.current.value.length > 3 ? `${adressStreetRef.current.value}, ${adressPLZRef.current.value}` : ''} />
                                </div>
                                <div className={styles.contactFormRow}>
                                    <div className={styles.formGroupContact}>
                                        <label htmlFor="qmVideo" className={styles.label}>Quadratmeter</label>
                                        <input id="qmVideo" ref={qmRefVideo} required className={styles.inputContact} defaultValue={formPopup && qmRef.current.value.length > 1 ? qmRef.current.value : ''} type="number"></input>
                                    </div>
                                </div>
                                <div>
                                    <h3 className={styles.contactHeadlineProperty}>hochgeladene Dateien:</h3>
                                    {files.length === 1 ? files.map(file => <div key={Math.random()} className={styles.videoBox}><span className={styles.checkIconVideo}><BsCheckCircleFill /></span>
                                        {file.name} <span onClick={setContactInformationStep.bind(this, 'video')} className={styles.editVideo}>
                                            <AiOutlineEdit />bearbeiten</span> </div>) : <div className={styles.videoBox}><span className={styles.checkIconVideo}><BsCheckCircleFill /></span>
                                        {files.length} Videos hochgeladen <span onClick={setContactInformationStep.bind(this, 'video')} className={styles.editVideo}>
                                            <AiOutlineEdit />bearbeiten</span> </div>}
                                </div>
                                <button className={styles.finalFormBTNAppointment} type="submit">kostenfreies Angebot anfordern</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

 */}
            <div className={styles.headerBox}>
                <div>
                    <p className={styles.subHeadline}> wiederverwerten statt entsorgen</p>
                    <h1 className={styles.headline}>Entrümpelung Bonn  Köln</h1>
                    <p className={styles.subheadlineText}>Einen Großteil Ihres Hausstandes verwerten wir wieder<br></br> zugunsten bedürftiger Menschen in unseren Sozialkaufhäusern </p>

                    <ul className={styles.listHeader}>
                        <li> <span className={styles.blueCheck}><FaCheck /> </span>besenreine Entrümpelung <b className={styles.markUp}>zum Festpreis</b></li>
                        <li> <span className={styles.blueCheck}><FaCheck /></span> <b className={styles.markUp}>unverbindlicher Kostenvoranschlag</b> binnen 24 Stunden</li>
                        <li> <span className={styles.blueCheck}><FaCheck /></span> durch Wiederverwertung Ihres Inventars <b className={styles.markUp}>nachhaltig & umweltschonend</b> </li>
                    </ul>

                    <Link href="/angebotsanfrage-entruepelung"><button className={styles.offerButton}>kostenfreies Angebot <FaArrowRight className={styles.arrowRightOfferBTN} /> </button></Link>
                </div>
                <Image className={styles.headerImage} src="/sozialkaufhaus-koeln-bonn-team.webp" alt="Entrümpelung Köln Bonn Team" width={750} height={450}></Image>
            </div>
            <section className={styles.advantageSection}>
                <h2 className={styles.advantageSectionSubheadline}>Entrümpelung mit Ihrem Sozialkaufhaus</h2>
                <p className={styles.advantageSectionHeadline}>Ihre Vorteile auf einen Blick</p>
                <div className={styles.advantageBoxWrapper}>
                    <div className={styles.advantage}>
                        <span className={styles.checkIconVideo}><BsCheckCircleFill /></span>
                        Bedürftige profitieren von Ihrem Mobilar
                    </div>
                    <div className={styles.advantage}>
                        <span className={styles.checkIconVideo}><BsCheckCircleFill /></span>
                        Besenreine Entrümpelung zum Festpreis
                    </div>
                    <div className={styles.advantage}>
                        <span className={styles.checkIconVideo}><BsCheckCircleFill /></span>
                        Versicherte & professionelle Entrümpelung
                    </div>
                    <div className={styles.advantage}>
                        <span className={styles.checkIconVideo}><BsCheckCircleFill /></span>
                        Unverbindlicher & kostenfreier Kostenvoranschlag
                    </div>
                    <div className={styles.advantage}>
                        <span className={styles.checkIconVideo}><BsCheckCircleFill /></span>
                        Anrechung des werthaltigen Inventars
                    </div>
                </div>
            </section>
            {/*     {infoSlider && <section className={styles.infoSlider}>
                <AiOutlineCloseCircle className={styles.closeBTNInfoSlider} onClick={setInfoSlider.bind(this, false)} />
                <h2 className={styles.sliderHeadlineTop}>Kostenfreier vor Ort Termin</h2>
                <ul className={styles.infoSliderList}>
                    <li><span className={styles.numberListIcon}>1</span>Unser Außendienst ruft Sie an und vereinbart mit Ihnen einen kostenfreien Besichtigungstermin.</li>
                    <li><span className={styles.numberListIcon}>2</span>Wir beraten Sie unverbindlich vor Ort.</li>
                    <li><span className={styles.numberListIcon}>3</span>Sie erhalten von uns ein Festpreis-Angebot für die Auflösung der Immobilie.</li>
                </ul>
                <div className={styles.spacer}></div>
                <h2 className={styles.sliderHeadline}>Video hochladen & Angebot erhalten</h2>
                <ul className={styles.infoSliderList}>
                    <li><span className={styles.numberListIcon}>1</span>Sie drehen ein Video von den zu räumenden Zimmern der Immobilie.</li>
                    <li><span className={styles.numberListIcon}>2</span>Sie laden das Video im nächsten Schritt dieses Formulars hoch oder senden uns dieses via WhatsApp.</li>
                    <li><span className={styles.numberListIcon}>3</span>Wir rufen Sie zurück und beraten Sie auf Basis des zur Verfügung gestellten Videos.</li>
                    <li><span className={styles.numberListIcon}>4</span>Sie erhalten von uns ein Festpreis-Angebot für die Auflösung der Immobilie.</li>
                </ul>
            </section>
            } */}
            {/*       {loading && <div className={styles.spinnerContainer}>
                <div className={styles.loadingSpinner}>
                </div>
                <p> Bitte warten...</p>
            </div>} */}

            {/* Content */}
            <section className={styles.introductionSection}>
                <div className={styles.introductionWrapper}>
                    <Image className={styles.introductionImage} src="/sozialkaufhaus-bonn-koeln-moebel-header.webp" alt="Sozialkaufhaus Bonn Koeln Entrümpelung" width={500} height={300}></Image>
                    <div className={styles.introductionSectionContent}>
                        <p className={styles.introductionSectionSubheadline}>nachhaltig & umweltschonend</p>
                        <h2 className={styles.introductionSectionHeadline}>Ihre Entrümpelung mit unserem Sozialkaufhaus</h2>
                        <p>Wiederverwerten statt entsorgen - Wenn auch Ihnen am Herzen liegt, dass nicht das gesamte Inventar bei Ihrer Entrümpelung entsorgt wird, dann sind wir
                            genau Ihr richtiger Ansprechpartner. Mit zwei Sozialkaufhäusern bei Köln & Bonn können wir einen Großteil Ihres Mobiliars & Inventars wiederverwerten & bedürftigen
                            Menschen zur Verfügung stellen. Gerne beraten wir Sie kostenfrei & unverbindlich !
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.howSection}>
                <h2 className={styles.howSectionHeadline}>Ablauf für eine optimale Entrümpelung</h2>
                <p className={styles.howSectionSubheadline}>Über 15 Jahre Erfahrung !</p>
                <div className={styles.workFlowWrapper}>
                    <div className={styles.stepBox}>
                        <span className={styles.stepIcon}>1</span>
                        <h3>Kostenfreie Beratung</h3>
                        <p>
                            Ob persönlich vor Ort oder digital - Wir beraten Sie unverbindlich und kostenfrei. Gerne besichtigten wir die
                            Immobilie oder beraten Sie auf Basis eines Videos oder Bildern von der Immobilie kontaktfrei und digital.
                        </p>
                    </div>
                    <div className={styles.stepBox}>
                        <span className={styles.stepIcon}>2</span>
                        <h3>Angebot mit Festpreisbindung</h3>
                        <p>
                            Bei uns wissen Sie vorab zu 100% was die Entrümpelung in Bonn & Köln kostet. Auf Basis der Besichtigung oder des zur Verfügung gestellten Bildmaterial kalkulieren wir den
                            Aufwand und unterbreiten Ihnen ein Angebot mit Festpreisbindung. Anschließend können Sie in Ruhe entscheiden, ob Sie uns mit Ihrer Entrümpelung beauftragen möchten.
                        </p>
                    </div>
                    <div className={styles.stepBox}>
                        <span className={styles.stepIcon}>3</span>
                        <h3>Professionelle Entrümpelung</h3>
                        <p>
                            Nach verbindlicher Terminvereinbarung führen wir Ihre Entrümpelung binnen ein bis drei Tagen durch. Gut erhaltenes & verwertbares Inventar & Mobiliar wird in unseren
                            Sozialkaufhäusern bei Köln & Bonn bedürftigen Menschen zur Verfügung gestellt. Alles weitere wird umweltschonend bei einem zertifizierten Entsorgungsbetrieb
                            entsorgt. Sie erhalten Ihre Immmobilie besenrein entrümpelt zurück. Sie müssen bei der E
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.imagedskSection}>
                <Image className={styles.imageDSK} src="/entrümpelung-sozialkaufhaus-koeln-bonn-header.webp" alt="Entrümpelung Köln Bonn in Aktion" width={500} height={350}></Image>
            </section>

            <section className={styles.callToActionSection}>
                <button onClick={openForm} className={styles.ctaBTN}>{formPopup === 'closed' ? 'Anfrage fortsetzen' : 'kostenloses Angebot erhalten'} <HiCursorClick /></button>
            </section>
            <section className={styles.faqSection}>
                <h2 className={styles.headlineFAQ}>Häufig gestellte Fragen</h2>
                <div className={styles.faqBox}>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>Wie lange dauert eine Entrümpelung ?</h3>
                        <p>
                            Bei 95% der Entrümpelungen können wir Ihnen Ihre Immobilie bereits nach 2 Tagen besenrein entrümpelt übergeben.
                            Den genauen Aufwand können wir Ihnen bei einem kostenfreien Besichtigungstermin oder nach der Zusendung eines Videos nennen.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Kann es trotz der Entrümpelung zum Festpreis zu Mehrkosten kommen?
                        </h3>
                        <p>
                            Nein, sie zahlen nur den im Kostenvoranschlag ausgewiesenen Betrag für die besichtigte und besprochene Entrümpelung.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Ist die Entrümpelung versichert?
                        </h3>
                        <p>
                            Alle unsere Leistungen sind bei der Ergo Versicherungsgruppe umfangreich versichert. Gerne weisen wir Ihnen dies auf Nachfrage durch Vorlage
                            der Versicherungspolice vor.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Profitieren von den werthaltigen Möbeln aus der Entrümpelung wirklich Bedürftige aus dem Raum Köln/Bonn ?
                        </h3>
                        <p>
                            Grundsätzlich darf jeder in den Sozialkaufhäusern in Köln & Bonn einkaufen.
                            Wir führen jedoch nur Second-Hand Artikel und dementsprechend sind 90% unserer Kunden Sozialhilfeempfänger, Renter und Studenten. Bedürftige Menschen
                            erhalten zudem zusätzlich nochnmals 20% Nachlass auf den gesamten Einkauf.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Ist der Besichtigungstermin auch kostenfrei, wenn ich das Angebot nicht beanspruche ?
                        </h3>
                        <p>
                            Ja, der Besichtigungstermin ist kostenfrei und unverbindlich. Auch, wenn Sie die Entrümpelung nicht mit uns durchführen
                            bleibt die Besichtigung eine kostenfreie Leistung.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            In welchem Umkreis führen Sie Entrümpelungen durch ?
                        </h3>
                        <p>
                            Entrümpelungen, Haushaltsauflösungen und Wohnungsauflösungen führen wir im gesamten Raum Köln/Bonn gerne für Sie durch.
                            Auch der gesamte Swisttaler Raum, Euskirchen, Erftstadt, Kerpen bis hin nach Bad-Münstereifel und die Eifel zählt zu unserem Leistungsgebiet.
                            Aber auch auf der Beueler Rheinseite und dem Siebengebirgsraum sind wir gerne für Sie im Einsatz.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Führen Sie die Entrümpelung bzw. Haushaltsauflösung mit Containern durch ?
                        </h3>
                        <p>
                            Nein. Wir führen jede Entrümpelung ausschließlich mit Transportern durch. Dies hat für Sie sehr viele Vorteile. Wir sind zeitlich viel flexibler,
                            schneller & unabhängig von Subunternehmern und können auch bei schwer erreichbaren Immobilien zuverlässig & schnell entrümpeln.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Welche Vorlaufzeiten benötigen Sie für die Entrümpelung ?
                        </h3>
                        <p>
                            Die Besichtigung können wir binnen weniger Tage durchführen und den Kostenvoranschlag erhalten Sie je nach Dringlichkeit auf Nachfrage
                            bereits am Tag nach der Besichtigung. Für die eigentliche Entrümpelung benötigen wir in der Regel eine Vorlaufszeit
                            von ca. 2-3 Wochen. Muss die Entrümpelung sehr kurzfristig durchgeführt werden, rufen Sie uns gerne an. Wir halten für kurzfristige
                            Aufträge i. d. R. immer Kapazitäten frei.
                        </p>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}