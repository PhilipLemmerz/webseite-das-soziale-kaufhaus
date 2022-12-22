import { Fragment } from "react";
import styles from '../styles/moebelabholung.module.css';
import Image from "next/image";
import { HiCursorClick } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import { IoMailUnreadOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { useState } from "react";

export default function MöbelabholungPage() {

    const [form, setForm] = useState(false);

    return (
        <Fragment>
            <section className={styles.aboveTheFoldSection}>
                <div>
                    <span className={styles.subheadline}>kostenfreie & versicherte Abholung</span>
                    <h1 className={styles.headline}>Möbelspende für Köln & Bonn</h1>
                    <p className={styles.aboveTheFoldText}>
                        Wir verwerten Ihr Mobiliar wieder und helfen bedürftigen Personen aus der Region.
                        Möbel einfach über unser Webseite oder WhatsApp anbieten und Abholtermin vereinbaren.
                    </p>
                    <button className={styles.btnAboveTheFold}> Mobiliar anbieten <HiCursorClick /></button>
                </div>
                <Image className={styles.aboveTheFoldImage} width={500} height={250} src="/moebelspende-koeln-bonn-header.jpg" alt="Möbelspende Köln Bonn - kostenfreie Abholung" />
            </section>
            <section className={styles.introductionSection}>
                <div className={styles.introductionSectionContent}>
                    <h2>Möbel spenden - So geht's </h2>
                    <div className={styles.stepWrapper}>
                        <div className={styles.stepBox}>
                            <span className={styles.stepIcon}>1</span>
                            <h3>Möbelspende anbieten</h3>
                            <p>
                                Möbelspende über unsere Webseite, über WhatsApp oder per Email anbieten und
                                ein Foto der Möbelspende hochladen. Das Foto der Möbelspende benötigen wir
                                um Sicherzustellen das im Raum Köln Bonn zurzeit Bedarf an der Möbelspende besteht.
                            </p>

                        </div>
                        <div className={styles.stepBox}>
                            <span className={styles.stepIcon}>2</span>
                            <h3>Verbindlichen Abholtermin vereibaren</h3>
                            <p>Wir melden uns binnen 42 Stunden telefonisch bei Ihnen zurück und vereinbaren mit
                                Ihnen einen verbindlichen Abholtermin für Ihre Möbelspende. Gerne beantworten
                                wir Ihnen im Telefon alle Fragen zur Abholung Ihrer Möbelspende.
                            </p>
                        </div>
                        <div className={styles.stepBox}>
                            <span className={styles.stepIcon}>3</span>
                            <h3>profesionelle & versicherte Abholung</h3>
                            <p>
                                Unser Servie-Team kommt am vereinbarten Abholtermin zu Ihnen und holt Ihre Möbelspende
                                kostenfrei ab. Wir demontieren das Mobiliar, wenn notwendig bei Ihnen vor Ort und verladen
                                alles eingeständig. Selbstverständlich ist die Abholung versichert.
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
                            <p> WhatsApp: +49 (0) 151 423 859 89</p>
                        </div>
                        <div className={styles.contactBox}>
                            <p className={styles.contactIconWebsite}><CgWebsite /></p>
                            <p> Webseite: <u>Formular öffnen</u></p>
                        </div>
                        <div className={styles.contactBox}>
                            <p className={styles.contactIconEmail}><IoMailUnreadOutline /></p>
                            <p> Email: info@dsk-nrw.de</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.socialSection}>

                <div className={styles.socialSectionContent}>
                    <div className={styles.socialSectionText}>
                        <h2 className={styles.socialSectionHeadline}>Wo kommt Ihre Möbelspende an</h2>
                        Alle Möbelspenden werden in unserem gemeinnützigen
                        Sozialkaufhaus Bonn und unserem Sozialkaufhaus in Swisttal wieder bedürftigen Personen zur Verfügung gestellt.
                        Bei uns haben Studenten, Rentner und Sozialhilfeempfänger aus Köln und Bonn die Möglichkeit Gebraucht-Möbel und Haushaltswaren zu sehr kleinen Preisen zu erhalten.
                        So bieten wir Kleiderschränke und Betten bereits ab 60 Euro, Sofas ab 50 Euro und Küchen ab 150 Euro an. Zudem erhalten bedürftige Personen aus Köln und Bonn nochmals 20 % Nachlass auf Ihren gesamten Einkauf.
                        Insgesamt haben bedürftige Menschen aus Köln und Bonn dank Ihrer Möbelspende die Möglichkeit, sich für wenig Geld neu einzurichten und sich das Mobiliar zusätzlichab 25,00 € nach Hause liefern zu lassen.
                    </div>
                    <div className={styles.socialSectionImages}>
                        <Image className={styles.socialSectionImage} width={200} height={150} src="/sozialkaufhaus-swisttal-bei-koeln.jpg" alt="Möbelspende Bonn & Köln Sozialkaufhaus" />
                        <Image className={styles.socialSectionImage} width={200} height={150} src="/sozialkaufhaus-bonn.jpg" alt="Möbelspende Bonn & Köln Sozialkaufhaus" />
                        <Image className={styles.socialSectionImage} width={200} height={150} src="/gebraucht-möbel-lampen-sozialkaufhaus.jpg" alt="Möbelspende Bonn & Köln Sozialkaufhaus" />
                        <Image className={styles.socialSectionImage} width={200} height={150} src="/gebraucht-moebel-sozialkaufhaus.jpg" alt="Möbelspende Bonn & Köln Sozialkaufhaus" />
                    </div>
                </div>
            </section>
            <section className={styles.callToActionSection}>
                <button onClick={setForm.bind(this, false)} className={styles.ctaBTN}>{form === 'closed' ? 'Anfrage fotzsetzen' : 'Möbelspende anbieten'} <HiCursorClick /></button>
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
                            können teilen wir Ihnen gerne binnen einem Werktag nach Zusendung der Bilder mit.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Erhalte ich einen festen Termin für die Abholung meiner Möbelspende ?
                        </h3>
                        <p>
                            Ja. Wir vereinbaren mit Ihnen telefonisch den Termin für die Möbelabholung in Köln oder Bonn, nachdem wir Ihre Anfrahe erhalten haben.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Nehmen Sie alle Möbelspenden an ?
                        </h3>
                        <p>
                            Nein. Es gibt leider Möbel, für welche wir keine Abnehmer mehr in Köln und Bonn finden.
                            Hierzu zählen z.B. große Eiche-Schrankwände mit Barfach. Da die Bedarfe sehr individuell sind
                            benötigen wir leider vorab immer Bilder der Möbelspende – wir melden uns in jedem Fall binnen 42 Stunden bei Ihnen zurück.
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

        </Fragment>
    )
}