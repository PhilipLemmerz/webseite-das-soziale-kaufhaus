import { Fragment } from "react";
import styles from "../styles/entruempelung.module.css";
import { useState, useEffect } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaCheck, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { HiCursorClick } from "react-icons/hi";
import Head from "next/head";

export default function EntrümpelungPage() {
    const [scrollBTN, setScrollBTN] = useState(false);
    const [scrolledY, setScrolled] = useState(0);

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

    return (
        <Fragment>
            <Head>
                <title>Entrümpelung & Haushhaltsauflösung in Bonn & Köln mit Ihrem Sozialkaufhaus</title>
                <meta name="description" content="Entrümpelung in Bonn & Köln - Haushaltsauflösung mit Verwertung Ihrer Möbel zugunsten bedürftiger Menschen aus Bonn & Köln." />
            </Head>
            {scrollBTN && <Link href="/angebotsanfrage-entruempelung"><button className={styles.scrollCTAButton}>kostenfreies Angebot</button></Link>}

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

                    <Link href="/angebotsanfrage-entruempelung"><button className={styles.offerButton}>kostenfreies Angebot <FaArrowRight className={styles.arrowRightOfferBTN} /> </button></Link>
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
                <h2 className={styles.howSectionHeadline}>Ablauf für eine optimale Entrümpelung in Bonn & Köln</h2>
                <p className={styles.howSectionSubheadline}>Über 15 Jahre Erfahrung !</p>
                <div className={styles.workFlowWrapper}>
                    <div className={styles.stepBox}>
                        <span className={styles.stepIcon}>1</span>
                        <h3>Kostenfreie Beratung</h3>
                        <p>
                            Wir beraten Sie gerne unverbindlich und kostenfrei. Auf der Basis von Bildern oder Videos der Räumlichkeiten können wir Ihnen eine
                            genaue Einschätzung zum Aufwand, der Verwertbarkeit des Hausstandes & zu den Kosten geben.
                        </p>
                    </div>
                    <div className={styles.stepBox}>
                        <span className={styles.stepIcon}>2</span>
                        <h3>Angebot mit Festpreisbindung</h3>
                        <p>
                            Bei uns wissen Sie vorab zu 100% was die Entrümpelung in Bonn & Köln kostet. Auf Basis des Bild- & Videomaterial der Räumlichkeiten kalkulieren wir den
                            Aufwand und unterbreiten Ihnen ein Angebot mit Festpreisbindung. Anschließend können Sie in Ruhe entscheiden, ob Sie uns mit Ihrer Entrümpelung in Bonn oder Köln beauftragen möchten.
                        </p>
                    </div>
                    <div className={styles.stepBox}>
                        <span className={styles.stepIcon}>3</span>
                        <h3>Professionelle & versicherte Entrümpelung</h3>
                        <p>
                            Nach verbindlicher Terminvereinbarung führen wir Ihre Entrümpelung am vereinbarten Termin durch. Gut erhaltenes Mobiliar, Kleidung & Haushaltswaren werden in unseren
                            Sozialkaufhäusern bei Köln & Bonn bedürftigen Menschen zur Verfügung gestellt. Der restliche Hausstand wird umweltschonend bei einem zertifizierten Entsorgungsbetrieb
                            entsorgt. Sie erhalten Ihre Immmobilie besenrein entrümpelt zurück.
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.imagedskSection}>
                <Image className={styles.imageDSK} src="/entrümpelung-sozialkaufhaus-koeln-bonn-header.webp" alt="Entrümpelung Köln Bonn in Aktion" width={500} height={350}></Image>
            </section>

            <section className={styles.callToActionSection}>
                <Link href="/angebotsanfrage-entruempelung"><button className={styles.ctaBTN}>kostenloses Angebot erhalten<HiCursorClick /></button> </Link>
            </section>
            <section className={styles.faqSection}>
                <h2 className={styles.headlineFAQ}>Häufig gestellte Fragen</h2>
                <div className={styles.faqBox}>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>Wie lange dauert eine Entrümpelung ?</h3>
                        <p>
                            90% der Entrümpelungen in Bonn & Köln führen wir binnen 2 Werktagen durch. Bei umfangreicheren Entrümpelungen ab 200 Quadratmetern kann eine weiterer
                            Arbeitstag erforderlich werden. Wenn Sie besonderen Wert auf eine schnelle Druchführung der Entrümpelung legen, können wir dies mit zusätzlichen Teams gerne ermöglichen.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Kann es trotz der Entrümpelung zum Festpreis zu Mehrkosten kommen?
                        </h3>
                        <p>
                            Nein, sie zahlen nur den im Kostenvoranschlag veranschlagten Betrag für die Entrümpelung in Bonn oder Köln. Für unsere Kalkulation ist es wichtig, dass auf den Bildern & Videos
                            der Entrümpelung alle Räumlichkeiten abgebildet sind.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Ist die Entrümpelung versichert?
                        </h3>
                        <p>
                            Alle unsere Leistungen und damit auch Ihre Entrümpelung sind bei der Ergo Versicherungsgruppe umfangreich versichert. Gerne weisen wir Ihnen dies auf Nachfrage durch Vorlage
                            der Versicherungspolice vor.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Was passiert mit dem Mobiliar aus der Entrümpelung welches verwertet wird?
                        </h3>
                        <p>
                            Alle Möbel, Haushaltswaren und die Kleidung aus der Entrümpelung die gut erhalten und für uns verwertbar ist kommt in unser gemeinnütziges
                            Sozialkaufhaus in Bonn oder das Sozialkaufhaus in Swisttal-Heimerzheim. Dort können einkommensschwache und hilfsbedürftige Menschen alle Waren
                            aus Ihrer Entrümpelung zu kleinen Preisen erwerben. Unsere Sozialkaufhäuser befinden sich in der Deutschherrenstraße 197 in 53179 Bonn und in 53913 Swisttal
                            Heimerzheim in der Breniger Straße 3.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Warum ist es am besten wenn Sie Videos oder Bildmaterial von den Räumlichkeiten bei einer Entrümpelung erhalten?
                        </h3>
                        <p>
                            Bei der Kalkulation einer Entrümpelung sind bei uns mehrere Abteilungen & verantwortliche eingebunden. Unsere Kollegen aus der Kleider- & Haushaltswarenabteilung
                            müssen die Verwertbarkeit der zu entrümpelnden Schrankinhalte einschätzen und den Verpackungsaufwand kalkulieren. Unsere Möbelberater müssen entscheiden, welche
                            Möbel wiederverwertbar sind und in welchem Sozialkaufhaus genügt Platz für die Ausstellung der Möbel vorhanden ist. Zudem müssen unsere Monteure welche die
                            Entrümpelung in Bonn oder Köln durchführen den Arbeitsaufwand insgesamt beurteilen. Natürlich ist es uns wichtig Ihnen neben einer nachhaltigen Entrümpelung auch ein
                            kostengünstiges Angebot zu unterbreiten. Hierfür müssen wir die Angebotserstellung so effizient wie möglich gestalten. Für uns ist es am besten, wenn wir Ihre
                            Entrümpelung anhand von einem oder mehreren Videos mit allen Beteiligten besprechen und kalkulieren können.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            In welchem Umkreis führen Sie Entrümpelungen durch ?
                        </h3>
                        <p>
                            Entrümpelungen, Haushaltsauflösungen und Wohnungsauflösungen führen wir im gesamten Raum Köln/Bonn und dem Rhein-Sieg Kreis gerne für Sie durch.
                            Auch der gesamte swisttaler Raum, Euskirchen, Erftstadt, Kerpen bis hin nach Bad-Münstereifel und die Eifel zählt zu unserem Leistungsgebiet.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Führen Sie die Entrümpelung bzw. Haushaltsauflösung mit Containern durch ?
                        </h3>
                        <p>
                            Nein. Wir führen jede Entrümpelung in Bonn oder Köln ausschließlich mit Transportern durch. Dies hat für Sie sehr viele Vorteile. Wir sind zeitlich viel flexibler,
                            schneller & unabhängig von Subunternehmern und können auch bei schwer erreichbaren Immobilien zuverlässig & schnell entrümpeln.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Welche Vorlaufzeiten benötigen Sie für die Entrümpelung ?
                        </h3>
                        <p>
                            Leider sind die Vorlaufszeiten immer sehr unterschiedlich. Häufig können wir eine Entrümpelung binnen 2 bis 3 Wochen durchführen. Wir hatten jedoch
                            in der Vergangenheit auch bereits Vorlaufzeiten von bis zu 10 Wochen. Die Vorlaufszeit hängt auch immer vom Umfang der Entrümpelung in Bonn oder Köln ab.
                            Gerne können wir Ihnen vorab eine telefonische Terminauskunft geben. Im besten Fall fragen Sie Ihre Entrümpelung inkl. einen Video von den Räumunlichkeiten
                            über unsere Webseite an. Wir können Ihnen dann binnen maximal 2 Werktagen einen genauen Terminvorschalag inklusive Kostenvoranschlag zusenden.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Können Sie auch die Entrümpelung auch vorab besichtigen ?
                        </h3>
                        <p>
                            In Ausnahmefällen können wir bei großen Entrümpelungen auch Besichtigungen anbieten. Wir bitte um Verständnis, dass wir bei der Vielzahl von Anfragen nicht jede
                            Wohnung vorab besichtigen können. Zudem ist für uns die Kalkulation der Entrümpelung in Bonn oder Köln mit einem Video einfacher, da mehrere Mitarbeiter
                            in die Angebotserstellung und Verwertbarkeitsprüfung eingebunden sind.
                        </p>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}