import { Fragment } from "react";
import styles from '../styles/contact.module.css';
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import Head from "next/head";

export default function ContactPage(props) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const router = useRouter();
    const firstnameRef = useRef();
    const lastnameRef = useRef()
    const emailRef = useRef();
    const telRef = useRef();
    const messageRef = useRef();

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

        const response = await fetch('https://api.einsatzplaner.com/dsk-website/kontakt', {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        });
        if (response.ok) {
            setLoading(false)
            router.replace('anfrage-kontakt-erhalten')
        } else {
            setError(true);
            setLoading(false)
        }
    }

    return (
        <Fragment>
            <Head>
                <title>Kontakt - Sozialkaufhaus Bonn & Swisttal</title>
                <meta name="description" content="Kontakt mit dem Sozialkaufhaus Bonn & Swisttal - Wir sind gerne für Sie da." />
            </Head>
            <section className={styles.contactSection}>
                <h1 className={styles.headline}> Kontaktformular</h1>
                <p className={styles.headlineParagraph}> Wir freuen uns auf Ihre Fragen oder Wünsche und melden uns in Kürze zurück.</p>
                <form className={styles.form} onSubmit={submitHandler}>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="name"> Vorname</label>
                            <input className={styles.input} ref={firstnameRef} type="text" id="name"></input>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="lastname"> Nachname* </label>
                            <input className={styles.input} ref={lastnameRef} type="text" required id="lastname"></input>
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="email"> E-Mail Adresse * </label>
                            <input className={styles.input} ref={emailRef} type="email" id="email" required></input>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="phone"> Telefonnummer </label>
                            <input className={styles.input} ref={telRef} type="tel" id="phone"></input>
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.formGroupTextArea}>
                            <label className={styles.label} htmlFor="message"> Ihre Nachricht * </label>
                            <textarea required rows={10} ref={messageRef} className={styles.textArea} id="message" />
                        </div>
                    </div>
                    <button type="submit" className={styles.submitBTN} onClick={props.onSubmit}> senden </button>
                </form>
            </section>
            {loading && <div className={styles.spinnerContainer}>
                <div className={styles.loadingSpinner}>
                </div>
            </div>}
            {error && <p className={styles.error}> Leider ist ein Fehler aufgetreten - Bitte versuchen Sie es noch einmal oder kontaktieren Sie den Support </p>}
        </Fragment>
    )
}