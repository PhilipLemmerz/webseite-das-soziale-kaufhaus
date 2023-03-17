import { Fragment } from "react";
import styles from '../styles/spenden.module.css';
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Link from "next/link";

export default function Sachspende() {
    const [popupOpen, setPopupOpen] = useState(false);
    const [scrollBTN, setScrollBTN] = useState(false);
    const [scrolledY, setScrolled] = useState(0);

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

    function activateScrollMenu() {
        setScrollBTN(true);
    }

    function deactivateScrollMenu() {
        setScrollBTN(false);
    }

    return (
        <Fragment>
            <Head>
                <title>Kleiderspende & Sachspende für Bonn & Swisttal</title>
                <meta name="description" content="Sach- & Kleiderspende Bonn - Wir freuen uns über Ihre Kleiderspende und Bedürftige Personen aus der Region profitieren" />
            </Head>
            {scrollBTN && <button onClick={setPopupOpen.bind(this, true)} className={styles.scrollCTAButton}>Waren spenden</button>}
            <section className={styles.aboveTheFoldSection}>
                <div className={styles.aboveTheFoldBox}>
                    <div className={styles.aboveTheFoldTextBox}>
                        <h1 className={styles.headline}>Ihre Sach- & Kleiderspende </h1>
                        <p className={styles.subheadline}>für Bedürftige aus Bonn, Swisttal & der Region</p>
                        <p className={styles.aboveTheFoldText}>
                            Sie haben Kleiderspenden, Haushaltswaren und Sachspenden, die Sie nicht mehr benötigen.
                            Gerne können Sie Ihre Spende jederzeit während unserer Öffnungszeiten im
                            gemeinnützigen Sozialkaufhaus Bonn oder im DSK Swisttal abgeben. Wir freuen uns über Ihre Spende !
                        </p>
                        <button className={styles.donateBTN} onClick={setPopupOpen.bind(this, true)}> Waren spenden</button>
                    </div>
                    <Image className={styles.aboveTheFoldImage} src="/kleiderspenden-sachspenden-header.webp" alt="Kleiderspende & Sachspende Swisttal Bonn" width={900} height={400}></Image>
                </div>
                <div className={styles.howItWorksSection}>
                    <div className={styles.howItWorksSectionContent}>
                        <h2>Waren spenden - So funktionierts</h2>
                        <div className={styles.stepBoxWrapper}>
                            <div className={styles.stepBox}>
                                <span className={styles.numberStep}><em>1</em></span>
                                <h3>Kleidung & Waren sicher verpacken</h3>
                                <p>Verpacken Sie Ihre Kleiderspende oder Haushaltswarenspende am besten in Kartons oder Säcke. Zerbrechliche Artikel
                                    packen Sie diese am besten in Zeitungspapier ein, damit die Ware bei dem Transport nicht beschädigt wird. Wir nehmen Kleidung, Haushaltswaren,
                                    Küchenartikel, Elektrogeräte, Bücher, Spielzeuge und vieles mehr gerne an.
                                </p>
                            </div>
                            <div className={styles.stepBox}>
                                <span className={styles.numberStep}><em>2</em></span>
                                <h3>Sach- & Kleiderspende anliefern</h3>
                                <p> Ihre Kleiderspende oder Haushaltswarenspende können Sie jederzeit während unser Öffnungszeiten bei uns vorbei bringen. Unsere
                                    Sozialkaufhäuser in Bonn Lannesdorf & Swisttal Heimerzheim haben werktags von 9:30 Uhr bis 18 Uhr geöffnet und samstags von 9:30 Uhr bis 16 Uhr. Wir helfen Ihnen gerne beim entladen
                                    Ihrer Kleiderspenden & Sachspenden.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="nichtverwertbareWaren" className={styles.whichGoodsSection}>
                    <h2>Spenden, die wir <span className={styles.notMarker}>nicht</span> annehmen können:</h2>
                    <div className={styles.wrapperWhatWeNotTakeBoxes}>
                        <div className={styles.articleBox}>
                            <Image className={styles.imageWhatWeTake} src="/SpendenKeramik.webp" width={300} height={250} alt="keramik-spende"></Image>
                            <p className={styles.articleDescription}>Keramik Artikel</p>
                        </div>
                        <div className={styles.articleBox}>
                            <Image className={styles.imageWhatWeTake} src="/GlasSpende.webp" width={300} height={250} alt="glas-spende"></Image>
                            <p className={styles.articleDescription}>Einzelne Gläser</p>
                        </div>
                        <div className={styles.articleBox}>
                            <Image className={styles.imageWhatWeTake} src="/TellerSpende.webp" width={300} height={250} alt="teller-spende"></Image>
                            <p className={styles.articleDescription}>Einzelne Teller & Tassen</p>
                        </div>
                        <div className={styles.articleBox}>
                            <Image className={styles.imageWhatWeTake} src="/FernseherSpende.webp" width={300} height={250} alt="fernseher-spende"></Image>
                            <p className={styles.articleDescription}>Alte Fernseher & Monitore</p>
                        </div>
                        <div className={styles.articleBox}>
                            <Image className={styles.imageWhatWeTake} src="/BücherSpende.webp" width={300} height={250} alt="buecher-spende"></Image>
                            <p className={styles.articleDescription}>Bücher (Älter als 10 Jahre)</p>
                        </div>
                        <div className={styles.articleBox}>
                            <Image className={styles.imageWhatWeTake} src="/DruckerSpende.webp" width={300} height={250} alt="durcker-soende"></Image>
                            <p className={styles.articleDescription}>Drucker</p>
                        </div>
                        <div className={styles.articleBox}>
                            <Image className={styles.imageWhatWeTake} src="/BeschädigteSpende.webp" width={300} height={250} alt="beschaedigte-spende"></Image>
                            <p className={styles.articleDescription}>Beschädigte Waren</p>
                        </div>
                    </div>
                    <p className={styles.damageHint}>Bitte geben Sie keine Beschädigten oder nicht funktionstüchtigen Spenden bei uns ab. Vielen Dank!</p>
                </div>


                <div className={styles.locationWrapper}>
                    <h2> Wir freuen uns auf Ihre Sach- & Kleiderspende</h2>
                    <div className={styles.locationBoxWrapper}>
                        <div className={styles.locationBox}>
                            <Image className={styles.locationImage} src="/sozialkaufhaus-bonn.webp" alt="Umzugsunternehmen Köln & Bonn" width={300} height={200}></Image>
                            <div className={styles.cardContent}>
                                <h3 className={styles.headlineLocationBox}>Sach- & Kleiderspende Annahme Bonn</h3>
                                <div>
                                    <p><b>Anschrift:</b></p>
                                    <p>Deutschherrentraße 197-201 in 53179 Bonn</p>
                                </div>
                                <div>
                                    <p><b>Spenden Annahme:</b></p>
                                    <p>Mo. - bis Fr.: 9:30 Uhr bis 18 Uhr</p>
                                    <p>Sa.: 9:30 Uhr bis 16 Uhr</p>
                                </div>
                                <div>
                                    <p><b>Kontakt:</b></p>
                                    <p>Telefon: 0228-227 983 49</p>
                                    <p>Email: info@dsk-nrw.de</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.locationBox}>
                            <Image className={styles.locationImage} src="/sozialkaufhaus-swisttal-bei-koeln.webp" alt="Umzugsunternehmen Köln & Bonn" width={300} height={200}></Image>
                            <div className={styles.cardContent}>
                                <h3 className={styles.headlineLocationBox}>Sach- & Kleiderspende Annahme Swisttal</h3>
                                <div>
                                    <p><b>Anschrift:</b></p>
                                    <p>Breniger Straße 3 in 53913 Swisttal</p>
                                </div>
                                <div>
                                    <p><b>Spenden Annahme:</b></p>
                                    <p>Mo. - bis Fr.: 9:30 Uhr bis 18 Uhr</p>
                                    <p>Sa.: 9:30 Uhr bis 16 Uhr</p>
                                </div>
                                <div>
                                    <p><b>Kontakt:</b></p>
                                    <p>Telefon: 02254-600 480 5</p>
                                    <p>Email: info@dsk-nrw.de</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.whatHappenSection}>
                <h2>Wo Ihre Sach- & Kleiderspende ankommt</h2>
                <div className={styles.whatHappenContentWrapper}>
                    <p>
                        In unserem gemeinützigen Sozialkaufhaus in Bonn und dem Sozialkaufhaus in Swisttal bieten wir Kleidung, Haushaltswaren, Porzellan,
                        Bücher und vieles mehr für wenige Euro an. Von Ihren Kleiderspenden und Sachspenden profitieren
                        bedürftige Menschen aus Bonn, Swisttal und der Region. Wir nehmen Ihre Kleiderspenden und Sachspenden
                        gerne während unserer Öffnungszeiten entgegen. Unser Team sortiert die Kleiderspenden und Sachspenden und
                        bestückt unsere Sozialkaufhäuser bedarfsgerecht mit den second-hand Waren.
                        Zu uns kommen vor allem Sozialleistungsempfänger, Flüchtlinge, Rentner und
                        einkommensschwache Menschen. Unsere Kunden freuen sich sehr über einen Pullover für
                        3,- Euro oder einen neuen Kochtopf für 2,- Euro.
                        Natürlich gibt es auch Kleiderspenden und Sachspenden, welche wir nicht mehr in
                        unseren Sozialkaufhäusern anbieten können. Diese Kleiderspenden und Sachspenden aus
                        Bonn werden gesammelt und zum Beispiel bei einer Spendenaktion in Bonn an
                        bedürftige Menschen verschenkt.
                    </p>
                    <Image className={styles.imageDonateContent} src="/kleider-spenden-sachspenden-bonn-swisttal.webp" alt="Kleiderspende Bonn & Swisttal" width={500} height={250}></Image>
                </div>
            </section>
            <section className={styles.faqSection}>
                <h2 className={styles.headlineFAQ}>Häufig gestellte Fragen</h2>
                <div className={styles.faqBox}>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>Warum holen Sie meine Kleiderspende oder Sachspenden in Bonn nicht ab? </h3>
                        <p>
                            Leider ist für uns die Kleiderspenden & Sachspenden Abholung zu kostenintensiv.
                            Die Kosten für die Kleiderspenden und Sachspenden Abholung in Bonn und Swisttal setzen
                            sich nicht nur aus den Treibstoffkosten zusammen. Es fallen zudem Personalkosten,
                            Wartungskosten und Anschaffungskosten für Papier, Kartons und das Abholfahrzeug an.
                            Aus diesem Grund können wir Kleiderspenden und Sachspenden in Köln und Bonn nicht kostendeckend
                            abholen. Wir hoffen auf Ihr Verständnis.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>Nehmen Sie alle Spenden bedingungslos an?</h3>
                        <p>
                            Leider können wir nicht jede Kleiderspende und Sachspende in unseren Sozialkaufhäusern
                            anbieten. Beschädigte oder verunreinigte Spenden müssen wir zum Beispiel entsorgen.
                            Auch für einzelne Teller, Tassen und Gläser finden wir leider keine Abnehmer mehr.
                            Die Entsorgung der nicht verwertbaren Kleiderspenden und Sachspenden wird leider seit Jahren immer
                            kostenintensiver. Aus diesem Grund können wir keine Spenden annehmen, welche wir entsorgen müssen.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>An welchen Waren besteht ein besonders hoher Bedarf?</h3>
                        <p>
                            Insgesamt ist der Bedarf an Kleiderspenden in Bonn sehr hoch.
                            Besonders in der Winterzeit ist der Bedarf an Winterjacken, warmen Schuhen, Pullovern etc.
                            kaum mit dem second-hand Angebot zu decken.
                            Aber auch der Bedarf an Küchengeräten, Töpfen, Pfannen ist über das ganze Jahr hinweg sehr hoch.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>Wann kann ich Ihnen meine Sachspenden und Kleiderspenden vorbei bringen? </h3>
                        <p>
                            Gerne können Sie uns Ihre Kleiderspenden und Sachspenden jederzeit während unserer
                            Öffnungszeiten vorbei bringen. Unsere Sozialkaufhäuser haben von Montag bis Freitag
                            von 9:30 bis 18 Uhr geöffnet. Samstags von 9:30 bis 16 Uhr.
                            Wir helfen Ihnen selbstverständlich gerne beim entladen der Kleiderspenden und Sachspenden.
                            Sie haben keine Zeit Ihre Kleiderspenden während der Öffnungszeiten vorbei zu bringen –
                            Gerne können Sie Ihre Kleiderspenden jederzeit in die gelben Kleidercontainer direkt vor unseren
                            Sozialkaufhäusern ablegen.
                        </p>
                    </div>
                </div>
            </section>
            {popupOpen && <section className={styles.popUpBackground}>
                <div className={styles.popupBox}>
                    <div className={styles.closeBTN}>
                        <IoIosCloseCircleOutline onClick={setPopupOpen.bind(this, false)} />
                    </div>
                    <h2 className={styles.popupHeadline}>Wir freuen uns auf Ihre Spende</h2>
                    <p className={styles.popupSubheadline}>Ihre Spenden nehmen wir gerne an folgenden Adressen entgehen:</p>
                    <div className={styles.popupLocationWrapper}>
                        <div className={styles.popupLocationWrapper}>
                            <div className={styles.locationBox}>
                                <Image className={styles.locationImage} src="/sozialkaufhaus-bonn.webp" alt="Umzugsunternehmen Köln & Bonn" width={300} height={200}></Image>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.headlineAdressPopup}>DSK Bonn-Lannesdorf</h3>
                                    <div>
                                        <p><b>Anschrift:</b></p>
                                        <p>Deutschherrentraße 197-201 in 53179 Bonn</p>
                                    </div>
                                    <div>
                                        <p><b>Spenden Annahme:</b></p>
                                        <p>Mo. - bis Fr.: 9:30 Uhr bis 18 Uhr</p>
                                        <p>Sa.: 9:30 Uhr bis 16 Uhr</p>
                                    </div>
                                    <div>
                                        <p><b>Kontakt:</b></p>
                                        <p>Telefon: 0228-227 983 49</p>
                                        <p>Email: info@dsk-nrw.de</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.locationBox}>
                                <Image className={styles.locationImage} src="/sozialkaufhaus-swisttal-bei-koeln.webp" alt="Umzugsunternehmen Köln & Bonn" width={300} height={200}></Image>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.headlineAdressPopup}>DSK Swisttal-Heimerzheim:</h3>
                                    <div>
                                        <p><b>Anschrift:</b></p>
                                        <p>Breniger Straße 3 in 53913 Swisttal</p>
                                    </div>
                                    <div>
                                        <p><b>Spenden Annahme:</b></p>
                                        <p>Mo. - bis Fr.: 9:30 Uhr bis 18 Uhr</p>
                                        <p>Sa.: 9:30 Uhr bis 16 Uhr</p>
                                    </div>
                                    <div>
                                        <p><b>Kontakt:</b></p>
                                        <p>Telefon: 02254-600 480 5</p>
                                        <p>Email: info@dsk-nrw.de</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link href="#nichtverwertbareWaren" onClick={setPopupOpen.bind(this, false)}><p className={styles.linkPopup}> Folgende Waren können wir leider nicht annehmen</p></Link>
                </div>
            </section>}
        </Fragment>
    )
}