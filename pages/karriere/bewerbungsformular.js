import { Fragment } from "react";
import styles from "../../styles/karriere/bewerbungsformular.module.css"
import { useState, useRef } from "react";
import { BiImageAdd } from "react-icons/bi";
import { BsCheckCircleFill, BsTrash } from "react-icons/bs";
import router from 'next/router';

export default function Apply(props) {

    const nameRef = useRef();
    const townRef = useRef()
    const emailRef = useRef();
    const telRef = useRef();
    const messageRef = useRef();
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState();
    const [errorMessage, setErrorMessage] = useState(false);
    const date = new Date();
    const timeStamp = date.getTime();


    async function submitHandler(event) {
        event.preventDefault();
        setLoading(true)
        const data = {
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value,
            email: emailRef.current.value,
            phone: telRef.current.value,
            message: messageRef.current.value,
        }
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

    async function submitHandler(event) {
        try {
            setLoading(true)
            event.preventDefault();
            setLoading(true)
            if (files.length > 0 && nameRef.current.value.length > 3 && emailRef.current.value.length > 3 && telRef.current.value.length > 3 && townRef.current.value.length > 3) {
                setErrorMessage(false)
                const data = {
                    name: nameRef.current.value,
                    email: emailRef.current.value,
                    phone: telRef.current.value,
                    adress: `${townRef.current.value}`,
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
                router.replace('bewerbung-erhalten');
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
            <section className={styles.section}>
                <h1 className={styles.headline}>Wir freuen uns auf Ihre Bewerbung</h1>
                <p className={styles.headlineParagraph}>Bitte füllen Sie das Bewerbungsformular aus & laden Sie Ihren Lebenslauf und optional Ihr Anschreiben hoch.
                    Wir melden uns dann schnellstmöglich bei Ihnen zurück
                </p>
                <form className={styles.form} onSubmit={submitHandler}>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="name">Name</label>
                            <input className={styles.input} required ref={nameRef} type="text" id="name"></input>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="town"> Wohnort </label>
                            <input className={styles.input} ref={townRef} type="text" required id="town"></input>
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="email"> E-Mail Adresse</label>
                            <input className={styles.input} ref={emailRef} type="email" id="email" required></input>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="phone"> Telefonnummer </label>
                            <input className={styles.input} ref={telRef} type="tel" id="phone"></input>
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.formGroupTextarea}>
                            <label className={styles.label} htmlFor="message"> Ihre Nachricht * </label>
                            <textarea rows={10} ref={messageRef} className={styles.textarea} id="message" />
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.formGroupFileUpload}>
                            <p>Lebenslauf & Anschreiben (Optional) hochladen:</p>
                            <label htmlFor="fileupload" className={styles.customFileBTN}>
                                <BiImageAdd /> Datei hochladen
                            </label>
                            <input multiple type="file" id="fileupload" className={styles.inputFile} onChange={handleFileChange}></input>
                            {files.length > 0 && <div className={styles.uploadedImageBox}>
                                <p className={styles.imageBoxP}>hochgeladen:</p>
                                {files.map(file => <div key={Math.random()} className={styles.imageName}><span className={styles.checkIconImage}><BsCheckCircleFill /></span>
                                    {file.name} <span className={styles.trashIcon}>
                                        <BsTrash onClick={deleteFile.bind(this, file.name)} /></span> </div>)}
                            </div>}
                        </div>
                    </div>
                    <button type="submit" className={styles.submitBTN} onClick={props.onSubmit}>jetzt bewerben</button>
                    {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                    {loading && <div className={styles.spinnerContainer}>
                <div className={styles.loadingSpinner}>
                </div>
            </div>}
                </form>
            </section>
        </Fragment>
    )
}