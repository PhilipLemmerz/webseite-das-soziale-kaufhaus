import { Fragment } from "react";
import styles from '../styles/umzugsunternehmen.module.css';
import Image from "next/image";
import Autocomplete from "react-google-autocomplete";
import { useState, useRef, useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BsCheckCircleFill } from "react-icons/bs";
import { HiCursorClick } from "react-icons/hi";

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
    const [scrollBTN, setScrollBTN] = useState(false);
    const [scrolledY, setScrolled] = useState(0);

    function openMainForm() {
        setErrorMessage(false)
        if (startAdressRef.current.value.length > 3 && endAdressRef.current.value.length > 3) {
            setMainForm(true)
        } else {
            setErrorMessage('Bitte füllen Sie bei Felder aus')
        }
    }

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

    function closePopupForm() {
        setMainForm('closed')
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
            {scrollBTN && <button onClick={setMainForm.bind(this, true)} className={styles.scrollCTAButton}>{mainForm === 'closed' ? 'Anfrage fotzsetzen' : 'kostenloses Angebot'}</button>}
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
                        <button type="button" className={styles.lpFormBTN} onClick={openMainForm}>{mainForm === 'closed' ? 'Anfrage fortsetzten' : 'kostenloses Angebot erhalten' }</button>
                    </form>
                    {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                    <p className={styles.textForm}> Wir beraten Sie kostenfrei & unverbindlich vor Ort und unterbreiten Ihnen ein Festpreis-Angebot </p>
                </div>
            </div>

           <div className={mainForm === true ? styles.mainFormBackground : styles.hideMainForm}>
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
                            <Autocomplete ref={startAdressMainRef} required className={styles.inputMainForm} defaultValue={mainForm !== false ? startAdressRef.current.value : ''} options={options} id="ladeadresseForm" apiKey={"AIzaSyBXcBLbQlz5-zAwEHfLqD2mQcxghJ8TjOs"} placeholder="Deutschherrenstraße 197, 53179 Bonn" />
                        </div>
                        <div className={styles.formGroupMainForm}>
                            <label htmlFor="tel">Einzugsadresse</label>
                            <Autocomplete ref={endAdressMainRef} required options={options} defaultValue={mainForm ? endAdressRef.current.value : ''} className={styles.inputMainForm} id="ladeadresseForm" apiKey={"AIzaSyBXcBLbQlz5-zAwEHfLqD2mQcxghJ8TjOs"} placeholder="Deutschherrenstraße 197, 53179 Bonn" />
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
            </div>

            <section className={styles.introductionSection}>
                <h1 className={styles.headline}>Ihr Umzugsunternehmen für Köln & Bonn</h1>
                <p className={styles.introductionSectionText}>
                    Professionell, transparent und zuverlässig – Das Soziale Kaufhaus Umzugsunternehmen.
                    Wir beraten Sie kostenfrei bei Ihnen vor Ort und und führen Ihren Umzug genau nach Ihren
                    Wünschen zum Festpreis durch. Jetzt ganz einfach Angebot erhalten und beraten lassen
                </p>
                <div className={styles.workFlowWrapper}>
                    <div className={styles.stepBox}>
                        <span className={styles.stepIcon}>1</span>
                        <h3>kostenfreie Beratung</h3>
                        <p>
                            kostenfreie & unverbindliche Beratung bei Ihnen vor Ort. Einer unserer 5 Umzugsexperten kommt zu Ihnen, besichtigt das Umzugsvolument und berät Sie unverbindlich und kostenfrei.
                        </p>
                    </div>
                    <div className={styles.stepBox}>
                        <span className={styles.stepIcon}>2</span>
                        <h3>Angebot mit Festpreisbindung</h3>
                        <p>
                            Bei uns wissen Sie vorab zu 100% was Ihr Umzug kostet. Auf Basis der Besichtigung kalkulieren wir den
                            Aufwand und unterbreiten Ihnen ein Angebot mit Festpreisbindung. Anschließend können Sie in Ruhe entscheiden, ob Sie unser Umzugsunternehmen beauftragen möchten.
                        </p>
                    </div>
                    <div className={styles.stepBox}>
                        <span className={styles.stepIcon}>3</span>
                        <h3>professioneller Umzug </h3>
                        <p>
                            Nach verbindlicher Terminvereinbarung führen wir Ihren Umzug professionell durch. Ihr persönlicher Umzugsberater ist beim Umzug mit vor
                            Ort und Sie haben einen Ansprechpartner von A-Z. Selbstverständlich ist unser Umzugsunternehmen unfangreich versichert.
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.umzugAndEntrümpelungSection}>
                <div className={styles.umzugAndEntrümpelungContentWrapper}>
                    <h2 className={styles.umzugEntrümpelungHeadline}>Umzug & Entrümpelung aus einer Hand</h2>
                    <p>
                        Sie möchten nicht Ihr gesamtes Mobiliar mit umziehen. Unser Umzugsunternehmen übernimmt Ihrern Umzug
                        und die Resträumung der alten Immobilie. Häufig können wir die zurückgebliebenen Möbel
                        in unseren Sozialkaufhäusern sogar wieder bedürftigen Personen zur Verfügung stellen. Gerne führen wir Umzug und
                        Entrümpelung direkt nacheinander durch. Sprechen Sie unseren Umzugsexperten bei der Besichtigung einfach auf die
                        Resträumung an.
                    </p>
                </div>
                <Image className={styles.umzugAndEntrümpelungImage} src="/moebelspende-koeln-bonn-header.jpg" alt="Umzugsunternehmen Köln und Bonn - Resträumung" width={400} height={250}></Image>
            </section>
            <section className={styles.advantageSection}>
                <h2 className={styles.advantageSectionSubheadline}>Entrümpelung mit Ihrem Sozialkaufhaus</h2>
                <p className={styles.advantageSectionHeadline}>Ihre Vorteile auf einen Blick</p>
                <div className={styles.advantageBoxWrapper}>
                    <div className={styles.advantage}>
                        <span className={styles.checkIconVideo}><BsCheckCircleFill /></span>
                        kostenfreie & uverbindliche Beratung
                    </div>
                    <div className={styles.advantage}>
                        <span className={styles.checkIconVideo}><BsCheckCircleFill /></span>
                        Angebot mit 100% Festpreisbindung
                    </div>
                    <div className={styles.advantage}>
                        <span className={styles.checkIconVideo}><BsCheckCircleFill /></span>
                        versicherte & professioneller Umzug
                    </div>
                    <div className={styles.advantage}>
                        <span className={styles.checkIconVideo}><BsCheckCircleFill /></span>
                        Umzug & Resträumung aus einer Hand
                    </div>
                    <div className={styles.advantage}>
                        <span className={styles.checkIconVideo}><BsCheckCircleFill /></span>
                        über 15 Jahre Erfahrung für Ihren Umzug
                    </div>
                </div>
            </section>
            <section className={styles.callToActionSection}>
                <button onClick={openMainForm} className={styles.ctaBTN}>{mainForm === 'closed' ? 'Anfrage fotzsetzen' : 'kostenloses Angebot erhalten'} <HiCursorClick /></button>
            </section>
            <section className={styles.faqSection}>
                <h2 className={styles.headlineFAQ}>Häufig gestellte Fragen</h2>
                <div className={styles.faqBox}>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>Wann sollte ich anfangen meinen Umzug zu organisieren und wie viel Vorlaufzeit benötigt Ihr Umzugs-unternehmen?</h3>
                        <p>
                            Grundsätzlich gilt je früher desto besser.  In der Regel hat unser Umzugsunternehmen für Köln
                            und Bonn eine Vorlaufzeit von 4-6 Wochen.
                            Je nach Auslastung und Umfang, findet unser Umzugsunternehmen für Köln und Bonn auch
                            kurzfristig eine Lösung. Wenn Sie kurzfristig umziehen wollen, nehmen Sie schnellstmöglich
                            Kontakt zu uns auf.
                            Wir prüfen gerne, ob wir Sie bei Ihrem Umzug unterstützen können.
                            Wir empfehlen jedoch, dass Sie wir die kostenfreie Beratung 2-3 Monte vor
                            Umzugsbeginn durchführen. Dann haben wir ausreichend Zeit alles für Ihren Umzug zu organisieren.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Muss ich die Kartons selber einpacken und bestellen oder übernehmen Sie das?
                        </h3>
                        <p>
                            Dies ist eine von vielen Fragen, die wir individuell mit Ihnen im Beratungsgespräch
                            besprechen. Gerne liefert unser Umzugsunternehmen Ihnen die Umzugskartons und
                            übernimmt auch das Verpacken der Schrankinhalte.
                            Wie viele Umzugskartons Sie benötigen und wie unser Umzugsunternehmen für Köln und Bonn
                            Sie beim einpacken der Umzugskartons unterstützt besprechen wir gerne mit Ihnen bei
                            der kostenfreien Erstberatung.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Was geschieht mit dem Mobiliar, welches ich nicht mit umziehen möchte?
                        </h3>
                        <p>
                            Gerne kümmert sich unser Umzugsunternehmen um das verwertbare Mobiliar. Ihr Vorteil – Sie müssen Möbel, welche Sie bis zum Umzugstag
                            noch benötigen nicht vorher abgeben. Unser Umzugsunternehmen für Köln und Bonn
                            nimmt die Möbel direkt am Umzugstag mit.
                            Zudem helfen Sie mit Ihrem Mobiliar bedürfitgen Personen, welche die Möbel im Sozialkaufhaus bei
                            Köln und Bonn zu kleinen Preisen erstehen können.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Kann ich Umzugshelfer auch einzeln und oder stundenweise buchen?
                        </h3>
                        <p>
                            Ja – das ist selbstverständlich auch möglich. Sie sagen uns telefonisch Ort, Datum und Uhrzeit.
                            Wir stellen Ihnen gerne Umzugshelfer zur Verfügung. Häufig ist diese Lösung jedoch nicht die
                            sinnvollste, denn der Aufwand für den Umzug wird häufig unterschätzt.
                            Wir raten Ihnen: Nehmen Sie das Angebot unseres Umzugsunternehmen an und lassen Sie sich
                            vorab kostenfrei beraten. Gerne stellen wir Ihnen anschließend so viele Umzugshelfer zur
                            Verfügung wie Sie möchten. Unser Umzugsunternehmen kann Ihnen jedoch bestimmt den ein oder
                            anderen Tipp geben der Zeit und Kosten spart.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Ist der Besichtigungstermin auch kostenfrei, wenn ich das Angebot nicht beanspruche ?
                        </h3>
                        <p>
                            Ja, der Besichtigungstermin ist kostenfrei und unverbindlich. Auch, wenn Sie Ihren Umzug nicht mit uns durchführen,
                            bleibt die Besichtigung eine kostenfreie Leistung.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Ist Ihr Umzugsunternehmen versichert?
                        </h3>
                        <p>
                            Ja. Unser Umzugsunternehmen in Köln und Bonn ist über die Ergo Transportversicherung
                            versichert. Das gesamte Umzugsgut und auch mögliche Schäden an Treppenhäusern,
                            Bodenbelägen usw. sind in voller Höhe versichert. Damit unsere Versicherung
                            für Schäden an Kartoninhalten haftet, muss der Kartoninhalt fachgerecht verpackt
                            und durch ausreichend Papier gesichert werden. Gerne übernimmt unser
                            Umzugsunternehmen für Köln und Bonn das Einpacken der Kartonagen für Sie.
                            Möchten Sie die Umzugskartons lieber selber selber einpacken, beraten
                            Sie unsere Umzugsexperten gerne.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Muss ich mich um Parkmöglichkeiten selber kümmern?
                        </h3>
                        <p>
                            Hier gibt es verschiedene Möglichkeiten, welche wir bei der kostenfreien
                            Erstberatung mit Ihnen zusammen besprechen. Sollte die Parksituation sehr schlecht
                            sein, ist es sinnvoll, dass unser Umzugsunternehmen in Köln und Bonn eine
                            Halteverbotszone einrichtet. Dies ist zwar im Verhältnis zur Absperrung durch
                            <em>Flatterband</em> oder <em>Mülltonnen</em> aufwendiger, wir haben jedoch die
                            Möglichkeit falsch parkende Fahrzeuge abschleppen zu lassen und können somit für
                            ausreichende Parkflächen garantieren. Sie können selbstverständlich selbst entnscheiden,
                            ob Sie selber Parkflächen zur Verfügung stellen möchten oder uns mit der Einrichtung
                            einer Halteverbotszone beauftragen möchten.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Führen Sie auch Umzüge durch die von Ämtern übernommen werden? Wie ist der Ablauf?
                        </h3>
                        <p>
                            Ja – wir führen auch Umzüge durch die von Ämtern übernommen werden.
                            Der Ablauf ist bei unserem Umzugsunternehmen immer der selbe.
                            Wir besprechen Ihren Umzug bei der kostenfreien Erstberatung.
                            Anschließend erhalten Sie einen Kostenvoranschlag, welchen Sie beim zuständigen Amt
                            einreichen müssen. Sobald wir die Kostenübernahme seitens des Amts erhalten haben,
                            vereinbaren Sie mit unserem Umzugsunternehmen für Köln und Bonn den genauen
                            Umzugstermin.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Führt Ihr Umzugsunternehmen auch Fernumzüge durch?
                        </h3>
                        <p>
                            Ja – unser Umzugsunternehmen führt auch regelmäßig Fernumzüge durch.
                            Auch hierfür unterbreiten wir Ihnen einen Kostenvoranschlag mit Festpreis-Garantie.
                            Wenn Sie den Umzug mit unserem Umzugsunternehmen durchführen möchten,
                            sollte sich die Ladeadresse im Raum Köln Bonn befinden.
                        </p>
                    </div>
                </div>
            </section>

        </Fragment>
    )
}