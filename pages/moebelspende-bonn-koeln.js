import { Fragment } from "react";
import styles from '../styles/moebelabholung.module.css';
import Image from "next/image";
import { HiCursorClick } from "react-icons/hi";
import { BsWhatsapp, BsCheckCircleFill, BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { IoMailUnreadOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { BiImageAdd, BiArrowBack } from "react-icons/bi";
import { useState, useRef, useEffect } from "react";
import router from 'next/router';
import Head from "next/head";

export default function MöbelabholungPage() {

    const [form, setForm] = useState(false);
    const [files, setFiles] = useState([]);
    const [formStep, setFormStep] = useState('fileupload');
    const [errorMessage, setErrorMessage] = useState(false);
    const [scrollBTN, setScrollBTN] = useState(false);
    const [scrolledY, setScrolled] = useState(0);
    const [loading, setLoading] = useState();
    const date = new Date();
    const timeStamp = date.getTime();


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY)
        }
        window.addEventListener("scroll", handleScroll);

        if (scrolledY > 300) {
            activateScrollMenu()
        } else {
            deactivateScrollMenu()
        }
    });


    const nameRef = useRef();
    const adressStreetRef = useRef();
    const adressPLZRef = useRef();
    const emailRef = useRef();
    const telRef = useRef();
    const messageRef = useRef();

    function activateScrollMenu() {
        setScrollBTN(true);
    }

    function deactivateScrollMenu() {
        setScrollBTN(false);
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
        setFormStep('fileupload')
    }

    function closePopupForm() {
        setForm('closed')
    }

    async function submitHandler(event) {
        setLoading(true);
        try {
            event.preventDefault();
            setLoading(true)
            if (files.length > 0 && nameRef.current.value.length > 3 && emailRef.current.value.length > 3 && telRef.current.value.length > 3 && adressStreetRef.current.value.length > 3 && adressPLZRef.current.value.length > 3) {
                setErrorMessage(false)
                const data = {
                    name: nameRef.current.value,
                    email: emailRef.current.value,
                    phone: telRef.current.value,
                    adress: `${adressStreetRef.current.value}, ${adressPLZRef.current.value}`,
                    message: messageRef.current.value
                }
                const fileNameArray = await uploadFiles(data.name);
                await sendNewEmail(fileNameArray, data);
            } else {
                setLoading(false);
                setErrorMessage('Bitte füllen Sie alle Felder gültig aus')
            }
        } catch (err) {
            setLoading(false);
            console.log(err)
            setErrorMessage('Ups! Leider ist etwas schief gelaufen - Bitte versuchen Sie es nocheinmal !')
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

    async function sendNewEmail(filenameArray, data) {
        try {
            const videoUrl = `https://portal.einsatzplaner.com/dsk-website/moebelspende/${filenameArray.join('+++')}`;
            const response = await fetch('https://api.einsatzplaner.com/dsk-website/moebelspendeForm', {
                method: "POST",
                body: JSON.stringify({ ...data, link: videoUrl }),
                headers: { "Content-Type": "application/json" }
            });
            if (response.ok) {
                setLoading(false);
                router.replace('anfrage-moebelspende-erhalten');
            } else {
                setLoading(false)
                setErrorMessage('Ups - Leider ist ein Fehler aufgetreten - Bitte versuchen Sie es erneut');
            }
        } catch (err) {
            setLoading(false)
            setErrorMessage('Ups - Leider ist ein Fehler aufgetreten - Bitte versuchen Sie es erneut');
        }
    }

    return (
        <Fragment>
            <Head>
                <title>Möbelspende in Bonn & Köln - kostenfreie Möbelabholung</title>
                <meta name="description" content="Möbelspende in Bonn & Köln - Wir holen Ihre Möbelspende kostenfrei ab und stellen diese in unseren Sozialkaufhäusern Bedüfrtigen zur Verfügung." />
            </Head>
            {scrollBTN && <button onClick={setForm.bind(this, true)} className={styles.scrollCTAButton}>{form === 'closed' ? 'Anfrage fotzsetzen' : 'Mobiliar anbieten'}</button>}
            <div className={form === true ? styles.formBackground : styles.hideForm}>
                <form className={styles.form} onSubmit={submitHandler}>
                    <div className={styles.navigationBox}>
                        <BiArrowBack className={formStep === 'contactStep' ? styles.stepBack : styles.stepBackNone} onClick={stepBack}></BiArrowBack>
                        <IoIosCloseCircleOutline className={styles.closeBTNPopup} onClick={closePopupForm} />
                    </div>
                    <div className={formStep === "fileupload" ? styles.fileupload : styles.hideFileupload}>
                        <p className={styles.stepTracker}><em>Schritt 1 von 2</em></p>
                        <h3 className={styles.uploadHeadline}>Bitte laden Sie ein Bild Ihrer Möbelspende hoch </h3>
                        <p>(Es können auch mehrere Bilder hochgeladen werden)</p>
                        <div className={styles.uploadFormGroup}>
                            <label htmlFor="fileupload" className={styles.customFileBTN}>
                                <BiImageAdd /> Bild hinzufügen
                            </label>
                            <input multiple type="file" id="fileupload" className={styles.inputFile} onChange={handleFileChange}></input>
                            {files.length === 0 && <p className={styles.whatsAppText}> <BsWhatsapp className={styles.whatsAppIcon} /> Alternativ Bilder per WhatsApp senden (+49 (0) 151 423 859 89) </p>}
                            {files.length > 0 && <div className={styles.uploadedImageBox}>
                                <p className={styles.imageBoxP}>hochgeladen:</p>
                                {files.map(file => <div key={Math.random()} className={styles.imageName}><span className={styles.checkIconImage}><BsCheckCircleFill /></span>
                                    {file.name} <span className={styles.trashIcon}>
                                        <BsTrash onClick={deleteFile.bind(this, file.name)} /></span> </div>)}
                            </div>}
                        </div>
                        {files.length > 0 && <button className={styles.forwardBTNImageUpload} onClick={setFormStep.bind(this, "contactStep")} type="button">weiter</button>}
                    </div>

                    <div className={formStep === "contactStep" ? styles.contactInformation : styles.hideContactInformation}>
                        <p className={styles.stepTracker}><em>Schritt 2 von 2</em></p>
                        <h3 className={styles.contactHeadline}>Kontaktinformation:</h3>
                        <div className={styles.contactFormRow}>
                            <div className={styles.formGroupContact}>
                                <label className={styles.label}>Ansprechpartner</label>
                                <input required placeholder="Herr Max Mustermann" ref={nameRef} className={styles.inputContact} type="text"></input>
                            </div>
                        </div>
                        <div className={styles.contactFormRow}>
                            <div className={styles.formGroupContact}>
                                <label className={styles.label}>Abholadresse:</label>
                                <div className={styles.adressInputWrapper}>
                                    <input type="text" placeholder="Deutschherrenstraße 197" required className={styles.inputAdressStreet} ref={adressStreetRef} />
                                    <input type="text" placeholder="53179 Bonn" required className={styles.inputAdressPLZ} ref={adressPLZRef} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.contactFormRow}>
                            <div className={styles.formGroupContact}>
                                <label className={styles.label}>E-Mail Adresse</label>
                                <input placeholder="maxmustermann@gmail.com" ref={emailRef} required className={styles.inputContact} type="email"></input>
                            </div>
                            <div className={styles.formGroupContact}>
                                <label className={styles.label}>Telefonnummer</label>
                                <input required placeholder="0228-227 983 49" ref={telRef} className={styles.inputContact} type="tel"></input>
                            </div>
                        </div>
                        <div className={styles.contactFormRow}>
                            <div className={styles.formGroupContact}>
                                <label className={styles.label}>zusätzliche Bemerkung</label>
                                <textarea placeholder="zusätzliche Bemerkungen" ref={messageRef} required className={styles.textarea}></textarea>
                            </div>
                        </div>
                        <div>
                            <h3 className={styles.contactHeadlineProperty}>hochgeladene Bilder:</h3>
                            {files.length === 1 ? files.map(file => <div key={Math.random()} className={styles.imageBox}><span className={styles.checkIconImage}><BsCheckCircleFill /></span>
                                {file.name} <span onClick={setFormStep.bind(this, 'fileupload')} className={styles.editImage}>
                                    <AiOutlineEdit />bearbeiten</span> </div>) : <div className={styles.imageBox}><span className={styles.checkIconImage}><BsCheckCircleFill /></span>
                                {files.length} Bilder hochgeladen <span onClick={setFormStep.bind(this, 'fileupload')} className={styles.editImage}>
                                    <AiOutlineEdit />bearbeiten</span> </div>}
                        </div>
                        <div className={styles.finalbtnDiv}>
                            <button className={styles.finalFormBTNAppointment} type="submit">Mobiliar anbieten</button>
                        </div>
                        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                    </div>
                </form>
            </div>


            <section className={styles.aboveTheFoldSection}>
                <div className={styles.aboveTheFoldContent}>
                    <span className={styles.subheadline}>kostenfreie & versicherte Abholung</span>
                    <h1 className={styles.headline}>Möbelspende für Köln & Bonn</h1>
                    <p className={styles.aboveTheFoldText}>
                        Wir verwerten Ihr Mobiliar wieder und helfen bedürftigen Personen aus der Region.
                        Möbel einfach über unsere Webseite oder WhatsApp anbieten und Abholtermin vereinbaren.
                    </p>
                    <button onClick={setForm.bind(this, true)} className={styles.btnAboveTheFold}> Mobiliar anbieten <HiCursorClick /></button>
                </div>
                <Image className={styles.aboveTheFoldImage} width={500} height={250} src="/moebelspende-koeln-bonn-header.webp" alt="Möbelspende Köln Bonn - kostenfreie Abholung" />
            </section>
            <section className={styles.introductionSection}>
                <div className={styles.introductionSectionContent}>
                    <h2>Möbel spenden - So gehts </h2>
                    <div className={styles.stepWrapper}>
                        <div className={styles.stepBox}>
                            <span className={styles.stepIcon}>1</span>
                            <h3>Möbelspende anbieten</h3>
                            <p>
                                Möbelspende über unsere Webseite, über WhatsApp oder per Email anbieten und
                                ein Foto der Möbelspende hochladen. Das Foto der Möbelspende benötigen wir,
                                um sicherzustellen das im Raum Köln Bonn zurzeit Bedarf an der Möbelspende besteht.
                            </p>

                        </div>
                        <div className={styles.stepBox}>
                            <span className={styles.stepIcon}>2</span>
                            <h3>Verbindlichen Abholtermin vereinbaren</h3>
                            <p>
                                Wir melden uns binnen 42 Stunden telefonisch bei Ihnen zurück und vereinbaren mit
                                Ihnen einen verbindlichen Abholtermin für Ihre Möbelspende. Gerne beantworten
                                wir Ihnen im Telefon alle Fragen zur Abholung Ihrer Möbelspende.
                            </p>
                        </div>
                        <div className={styles.stepBox}>
                            <span className={styles.stepIcon}>3</span>
                            <h3>Profesionelle & versicherte Abholung</h3>
                            <p>
                                Unser Service-Team kommt am vereinbarten Abholtermin zu Ihnen und holt Ihre Möbelspende
                                kostenfrei ab. Wir demontieren das Mobiliar, wenn notwendig, bei Ihnen vor Ort und verladen
                                alles eigenständig. Selbstverständlich ist die Abholung versichert.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.contactSection}>
                <div className={styles.contactContent}>
                    <h3 className={styles.contactHeadline}>
                        Bilder der Möbelspende & Abholadresse einfach zusenden über:
                    </h3>
                    <div className={styles.contactWrapper}>
                        <div className={styles.contactBox}>
                            <p className={styles.contactIconWhatsApp}><BsWhatsapp /></p>
                            <div className={styles.contactText}>
                                <p> WhatsApp: </p>
                                <p className={styles.contactP}>+49 (0) 151 423 859 89</p>
                            </div>

                        </div>
                        <div className={styles.contactBox}>
                            <p className={styles.contactIconWebsite}><CgWebsite /></p>
                            <div className={styles.contactText}>
                                <p>Webseite:</p>
                                <p onClick={setForm.bind(this, true)} className={styles.contactP}><u>Formular öffnen</u></p>
                            </div>
                        </div>
                        <div className={styles.contactBox}>
                            <p className={styles.contactIconEmail}><IoMailUnreadOutline /></p>
                            <div className={styles.contactText}>
                                <p>Email:</p>
                                <p className={styles.contactP}>info@dsk-nrw.de</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.socialSection}>

                <div className={styles.socialSectionContent}>
                    <div className={styles.socialSectionText}>
                        <h2 className={styles.socialSectionHeadline}>Wo kommt Ihre Möbelspende an</h2>
                        Alle Möbelspenden werden in unserem gemeinnützigen
                        Sozialkaufhaus Bonn und unserem Sozialkaufhaus in Swisttal bedürftigen Menschen zur Verfügung gestellt.
                        Bei uns haben Studenten, Rentner und Sozialhilfeempfänger aus Köln und Bonn die Möglichkeit Gebraucht-Möbel und Haushaltswaren zu sehr kleinen Preisen zu erhalten.
                        So bieten wir Kleiderschränke und Betten bereits ab 60 Euro, Sofas ab 50 Euro und Küchen ab 150 Euro an. Zudem erhalten bedürftige Menschen aus Köln und Bonn nochmals 20 % Nachlass auf Ihren gesamten Einkauf.
                        Insgesamt haben bedürftige Menschen aus Köln und Bonn dank Ihrer Möbelspende die Möglichkeit, sich für wenig Geld neu einzurichten und sich das Mobiliar zusätzlich ab 25,00 € nach Hause liefern zu lassen.
                    </div>
                    <div className={styles.socialSectionImages}>
                        <Image className={styles.socialSectionImage} width={200} height={150} src="/sozialkaufhaus-swisttal-bei-koeln.webp" alt="Möbelspende Bonn & Köln Sozialkaufhaus" />
                        <Image className={styles.socialSectionImage} width={200} height={150} src="/sozialkaufhaus-bonn.webp" alt="Möbelspende Bonn & Köln Sozialkaufhaus" />
                        <Image className={styles.socialSectionImage} width={200} height={150} src="/gebraucht-möbel-lampen-sozialkaufhaus.webp" alt="Möbelspende Bonn & Köln Sozialkaufhaus" />
                        <Image className={styles.socialSectionImage} width={200} height={150} src="/gebraucht-moebel-sozialkaufhaus.webp" alt="Möbelspende Bonn & Köln Sozialkaufhaus" />
                    </div>
                </div>
            </section>
            <section className={styles.callToActionSection}>
                <button onClick={setForm.bind(this, true)} className={styles.ctaBTN}>{form === 'closed' ? 'Anfrage fortsetzen' : 'Möbelspende anbieten'} <HiCursorClick /></button>
            </section>
            <section className={styles.faqSection}>
                <h2 className={styles.headlineFAQ}>Häufig gestellte Fragen</h2>
                <div className={styles.faqBox}>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>Muss ich die Möbel abbauen oder vor die Tür stellen, wenn Sie meine Möbelspende abholen?</h3>
                        <p>
                            Nein. Wir demontieren Ihre  Möbelspende bei Ihnen vor Ort und transportieren die Möbel vom Wohnraum zum
                            Fahrzeug. Abgebaute Möbel können wir leider nicht abholen, weil die Montage zu kosten- und zeitintensiv
                            ist und leider wichtige Schrauben und Teile in der Vergangenheit gefehlt haben.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Wie kurzfristig können Sie meine Möbelspende aus Köln oder Bonn abholen ?
                        </h3>
                        <p>
                            Leider können wir nicht pauschal beantworten, wie kurzfristig wir die Möbel abholen können.
                            Dies hängt von der Menge und der Abholadresse ab. Häufig können wir Ihre Möbelspende mit anderen Terminen kombinieren und so eine kurzfristige Möbelabholung binnen weniger Tage ermöglichen.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Ist die Möbelabholung in Köln und Bonn versichert ?
                        </h3>
                        <p>
                            Selbstverständlich. Alle unsere Leistungen sind über die Ergo Transportversicherung versichert.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            In welchem Umkreis kommen Sie meine Möbelspende abholen ?
                        </h3>
                        <p>
                            Grundsätzlich holen wir Möbelspenden im gesamten Raum Bonn und Köln ab. Zu unserem Abholgebiet gehört auch
                            der Kreis Ahrweiler, der Kreis Euskirchen, der Rhein-Erft Kreis, der Rhein Sieg Kreis und Teile des Rheinisch-Bergischen Kreis. Ob wir die angebotenen Möbel kostenfrei abholen
                            können teilen wir Ihnen gerne nach Zusendung der Bilder mit.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Erhalte ich einen festen Termin für die Abholung meiner Möbelspende ?
                        </h3>
                        <p>
                            Ja. Wir vereinbaren mit Ihnen telefonisch den Termin für die Möbelabholung in Köln oder Bonn, nachdem wir Ihre Anfrage erhalten haben.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Nehmen Sie alle Möbelspenden an ?
                        </h3>
                        <p>
                            Nein. Es gibt leider Möbel, für die wir keine Abnehmer mehr in Köln und Bonn finden.
                            Hierzu zählen z.B. große Eiche-Schrankwände mit Barfach. Da die Bedarfe sehr individuell sind
                            benötigen wir leider vorab immer Bilder von der Möbelspende – wir melden uns in jedem Fall binnen 42 Stunden bei Ihnen zurück.
                            Wenn wir die Möbelabholung kostendeckend in Köln oder Bonn durchführen können, holen wir Ihre Möbelspende gerne für Sie kostenfrei ab.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Können Sie meine Möbel auch entsorgen, wenn Sie diese nicht verwerten können?
                        </h3>
                        <p>
                            Ja. Senden Sie uns bitte jedoch erstmal ein Bild zu. Häufig können wir viele
                            Möbel doch verwerten und auch kostenfrei abholen. Sollten wir für Ihre Möbelspende
                            keinen Abnehmer finden, teilen wir Ihnen die Entsorgungskosten gerne via E-Mail
                            oder WhatsApp mit. Dann können Sie in Ruhe entscheiden, ob Sie die Möbel durch uns
                            entsorgen lassen möchten. Anschließend vereinbaren wir gerne einen Termin mit Ihnen
                            für die Möbelabholung.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Können Sie eine Möbelspende auch ankaufen?
                        </h3>
                        <p>
                            Nein. Wir können leider keine Möbelspende ankaufen. Wir bieten Ihnen die Möbelabholung und Demontage kostenfrei an.
                            Wir können die meisten Möbelabholungen in Köln und Bonn gerade einmal kostendeckend durchführen.
                            Sie müssen bedenken, dass wir die Kosten für einen LKW, zwei Möbelmonteure, die Miete für das
                            Sozialkaufhaus bei Köln und Bonn und das Beratungspersonal im Sozialkaufhaus mit dem Mobiliar decken
                            müssen. Dies müssen wir anteilig bei der Möbelabholung in Köln und Bonn einkalkulieren.
                            Zudem möchten wir die Möbel auch möglichst günstig den bedürftigen Menschen in der Region anbieten können.
                            Hierfür müssen die Kosten für die Abholung Ihrer Möbelspende gering gehalten werden.
                            Wenn Sie Ihre Möbel verkaufen möchten, können Sie dies am besten über die gängigen Portale
                            wie <em>ebay-kleinanzeigen</em> etc. versuchen.
                        </p>
                    </div>
                </div>
            </section>

            {loading && <div className={styles.spinnerContainer}>
                <div className={styles.loadingSpinner}>
                </div>
                <p> Bitte warten...</p>
            </div>}

        </Fragment>
    )
}