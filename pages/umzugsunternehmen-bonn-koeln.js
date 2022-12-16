import { Fragment } from "react";
import styles from '../styles/umzugsunternehmen.module.css';
import Image from "next/image";
import Autocomplete from "react-google-autocomplete";
import { useState, useRef } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function UmzugsPage() {

    const options = {
        componentRestrictions: { country: 'DE' },
        types: ['address']
    }

    const [mainForm, setMainForm] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const startAdressRef = useRef();
    const endAdressRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const numberRef = useRef();
    const startAdressMainRef = useRef();
    const endAdressMainRef = useRef();
    const messageRef = useRef();

    function openMainForm() {
        setErrorMessage(false)
        if (startAdressRef.current.value.length > 3 && endAdressRef.current.value.length > 3) {
            setMainForm(true)
        } else {
            setErrorMessage('Bitte füllen Sie bei Felder aus')
        }
    }

    function closePopupForm() {
        setMainForm(false)
    }

    function submitHandler(event) {
        event.preventDefault();
        setErrorMessage(false)
        if (nameRef.current.value.length > 3 && emailRef.current.value.length > 3 && numberRef.current.value.length > 3 && startAdressMainRef.current.value.length > 3 && endAdressMainRef.current.value.length > 3) {
            const data = {
                name: nameRef.current.value,
                email: emailRef.current.value,
                number: numberRef.current.value,
                startAdress: startAdressMainRef.current.value,
                endAdress: endAdressMainRef.current.value,
                message: messageRef.current.value
            }
            console.log(data);
        }
        else {
            setErrorMessage('Bitte füllen Sie Felder korrekt aus')
        }
    }

    return (
        <Fragment>
            <section className={styles.aboveFoldSection}>
                <Image src="/umzugsunternehmen-bonn-koeln-headerImage.jpg" alt="umzugsunternehmen koeln bonn header" className={styles.headerImage} width={1500} height={400}></Image>
            </section>
            <div className={styles.formWrapper}>
                <div className={styles.formBackground}>
                    <form className={styles.formLP}>
                        <div className={styles.formGroup}>
                            <label htmlFor="ladeadresse">Auszugsadresse</label>
                            <Autocomplete options={options} id="ladeadresse" ref={startAdressRef} className={styles.input} apiKey={"AIzaSyBXcBLbQlz5-zAwEHfLqD2mQcxghJ8TjOs"} placeholder="Deutschherrenstraße 197, 53179 Bonn" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="ausladeadresse">Einzugsadresse</label>
                            <Autocomplete className={styles.input} options={options} id="ausladeadresse" ref={endAdressRef} apiKey={"AIzaSyBXcBLbQlz5-zAwEHfLqD2mQcxghJ8TjOs"} placeholder="Breniger Straße 3, 53913 Swisttal" />
                        </div>
                        <button type="button" className={styles.lpFormBTN} onClick={openMainForm}>kostenloses Angebot erhalten</button>
                    </form>
                    {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                    <p className={styles.textForm}> Wir beraten Sie kostenfrei & unverbindlich vor Ort und unterbreiten Ihnen ein Festpreis-Angebot </p>
                </div>
            </div>

            {mainForm && <div className={styles.mainFormBackground}>
                <form className={styles.formMain} onSubmit={submitHandler}>
                    <IoIosCloseCircleOutline className={styles.closeBTNPopup} onClick={closePopupForm} />
                    <p className={styles.formHeadlineTop}> Kontaktinformation</p>
                    <div className={styles.formRow}>
                        <div className={styles.formGroupMainForm}>
                            <label htmlFor="name">Ansprechpartner</label>
                            <input ref={nameRef} className={styles.inputMainForm} required id="name" type="text" placeholder="Max Mustermann"></input>
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.formGroupMainForm}>
                            <label htmlFor="email">E-Mail Adresse</label>
                            <input ref={emailRef} className={styles.inputMainForm} required id="email" type="email" placeholder="mustermann@gmail.com"></input>
                        </div>
                        <div className={styles.formGroupMainForm}>
                            <label htmlFor="tel">Telefonnummer</label>
                            <input ref={numberRef} className={styles.inputMainForm} required id="tel" type="tel" placeholder="0228-227 983 49"></input>
                        </div>
                    </div>
                    <p className={styles.formHeadlineBottom}> Umzugsinformation</p>
                    <div className={styles.formRow}>
                        <div className={styles.formGroupMainForm}>
                            <label htmlFor="ladeadresseForm">Auszugsadresse</label>
                            <Autocomplete ref={startAdressMainRef} required className={styles.inputMainForm} defaultValue={startAdressRef.current.value} options={options} id="ladeadresseForm" apiKey={"AIzaSyBXcBLbQlz5-zAwEHfLqD2mQcxghJ8TjOs"} placeholder="Deutschherrenstraße 197, 53179 Bonn" />
                        </div>
                        <div className={styles.formGroupMainForm}>
                            <label htmlFor="tel">Einzugsadresse</label>
                            <Autocomplete ref={endAdressMainRef} required options={options} defaultValue={endAdressRef.current.value} className={styles.inputMainForm} id="ladeadresseForm" apiKey={"AIzaSyBXcBLbQlz5-zAwEHfLqD2mQcxghJ8TjOs"} placeholder="Deutschherrenstraße 197, 53179 Bonn" />
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.formGroupMainForm}>
                            <label htmlFor="message">Hinweise</label>
                            <textarea ref={messageRef} className={styles.textarea} id="message" placeholder="Bitte kontaktieren Sie mich"></textarea>
                        </div>
                    </div>
                    <button type="submit" className={styles.submitBTN}>kostenloses Angebot erhalten</button>
                </form>
            </div>}

        </Fragment>
    )
}