import { Fragment } from "react"
import styles from "../styles/components/ctaEntruempelung.module.css"
import { BsFillHouseFill } from "react-icons/bs"
import { useState, useRef } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import router from 'next/router';

export default function CtaEntruempelung() {

    const [qm, setqm] = useState('90');
    const [formPopup, setFormPopup] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [loading, setLoading] = useState(false);


    const qmRef = useRef();
    const qmContactRef = useRef();
    const adressRef = useRef();
    const adressContactRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const telRef = useRef();


    function setQm() {
        setqm(qmRef.current.value)
    }

    function openPopup() {
        console.log(qmRef.current.value, adressRef.current.value)
        if (adressRef.current.value.length > 5 && qmRef.current.value > 1) {
            console.log(qmRef.current.value, adressRef.current.value)
            setFormPopup(true);
            setErrorMessage(false)
        }
        else {
            setErrorMessage('Bitte füllen Sie alle Felder gültig aus');
        }
    }

    async function submitHandler(event) {
        event.preventDefault();
        sendEmail()
    }

    async function sendEmail() {
        console.log('test')
    }

    function closePopupForm() {
        setFormPopup('closed');
    }

    async function sendEmail() {
        setLoading(true)
        try {
            if (nameRef.current.value.length > 3 && emailRef.current.value.length > 3 && telRef.current.value.length > 3 && adressContactRef.current.value.length > 3
                && qmContactRef.current.value.length >= 1) {
                setErrorMessage(false);
                const data = {
                    name: nameRef.current.value,
                    email: emailRef.current.value,
                    phone: telRef.current.value,
                    adress: adressContactRef.current.value,
                    qm: qmContactRef.current.value,
                }
                const response = await fetch('https://api.einsatzplaner.com/dsk-website/entruempelungForm', {
                    method: "POST",
                    body: JSON.stringify({ ...data }),
                    headers: { "Content-Type": "application/json" }
                });
                if (response.ok) {
                    setLoading(false);
                    router.replace('/anfrage-entruempelung-erhalten');
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


    return (
        <Fragment>
            <div className={styles.globalWrapper}>
                <h2 className={styles.h2}> Gerne beraten wir Sie kostenfrei & unverbindlich</h2>
                <p> Vereinbaren Sie jetzt einen Besichtungstermin mit uns</p>
                <div className={styles.formWrapper}>
                    <div className={styles.adressWrapper}>
                        <label htmlFor="adress" className={styles.adresslabel}>Adresse der Immobilie</label>
                        <div>
                            <input id="adress" ref={adressRef} type="text" className={styles.inputAdress} placeholder="Breniger Straße 3, 53111 Swisttal"></input>
                        </div>
                    </div>
                    <div className={styles.qmInputWrapper}>
                        <label htmlFor="qm" className={styles.qmLabel}>
                            Quadratmeter:
                        </label>
                        <div className={styles.qmWrapper}>
                            <BsFillHouseFill className={styles.qmIcon} />
                            <input required className={styles.rangeInput} id="qm" type="range" min="10" max="1000" defaultValue={90} ref={qmRef} onChange={setQm}></input>
                            <p className={styles.qmText}>{qm} QM</p>
                        </div>
                    </div>
                    <div className={styles.btnWrapper}>
                        <button type="button" className={styles.formBTN} onClick={openPopup}>kostenfreie Beratung</button>                        
                    </div>                    
                </div>
                {errorMessage && !formPopup && <p className={styles.errorMessage}>{errorMessage}</p>}
            </div>


            <div className={formPopup === true ? styles.backgroundMainForm : styles.hideMainForm}>
                <form onSubmit={submitHandler} className={styles.mainForm}>
                    <div className={styles.navigationBox}>
                        <IoIosCloseCircleOutline className={styles.closeBTNPopup} onClick={closePopupForm} />
                    </div>
                    <h3 className={styles.contactHeadline}>Kontaktinformation:</h3>
                    <div className={styles.formGroupContact}>
                        <label htmlFor="name" className={styles.label}>Ansprechpartner</label>
                        <input required placeholder="Herr Max Mustermann" ref={nameRef} id="name" className={styles.inputContact} type="text" ></input>
                    </div>
                    <div className={styles.contactFormRow}>
                        <div className={styles.formGroupContact}>
                            <label htmlFor="email" className={styles.label}>E-Mail Adresse</label>
                            <input required placeholder="maxmustermann@gmail.com" ref={emailRef} id="email" className={styles.inputContact} type="email"></input>
                        </div>
                        <div className={styles.formGroupContact}>
                            <label htmlFor="phone" className={styles.label}>Telefonnummer</label>
                            <input required placeholder="0228-227 983 49" id="phone" ref={telRef} className={styles.inputContact} type="tel"></input>
                        </div>
                    </div>
                    <h3 className={styles.contactHeadlineProperty}>Ihre Angaben zu der Immobilie:</h3>
                    <div className={styles.formGroupContact}>
                        <label htmlFor="fulladress" className={styles.label}>Anschrift</label>
                        <input required placeholder="Deutschherrenstraße 197, 53179 Bonn" id="fulladress" className={styles.inputContact} ref={adressContactRef} defaultValue={formPopup && adressRef.current.value.length > 3 ? `${adressRef.current.value}` : ''} type="text" />
                    </div>
                    <div className={styles.contactFormRow}>
                        <div className={styles.formGroupContact}>
                            <label htmlFor="qmmain" className={styles.label}>Quadratmeter</label>
                            <input required className={styles.inputContact} ref={qmContactRef} id="qmmain" defaultValue={formPopup && qmRef.current.value.length > 1 ? qmRef.current.value : ''} type="number"></input>
                        </div>
                    </div>
                    <button className={styles.finalFormBTNAppointment} type="submit">kostenfreie Beratung</button>
                </form>
            </div>

            {loading && <div className={styles.spinnerContainer}>
                <div className={styles.loadingSpinner}>
                </div>
                <p> Bitte warten...</p>
            </div>}

        </Fragment>
    )
}