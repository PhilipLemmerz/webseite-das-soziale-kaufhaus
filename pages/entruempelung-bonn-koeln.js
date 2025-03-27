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
                        weniger Entsorgungskosten durch Wiederverwertung
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
                            entsorgt. Sie erhalten Ihre Immobilie besenrein entrümpelt zurück.
                        </p>
                    </div>
                </div>
                <section className={styles.howSectionDetail}>
                    <h2 className={styles.howSectionHeadline}>Detailablauf Entrümpelung & Wohnungsauflösung</h2>
                    <p className={styles.textLeft}> Der Ablauf einer Entrümpelung in Köln und Bonn lässt sich grob in 3 Schritte einteilen. Kalkulation, Angebotserstellung & Terminvereinbarung und
                        Durchführung der Entrümpelung.
                    </p>
                    <div className={styles.howDetailWrapperStep1}>
                        <div className={styles.stepOneTextBox}>
                            <h3>1. Kalkulation Ihrer Entrümpelung oder Wohnungsauflösung</h3>
                            <p>
                                Im ersten Schritt müssen wir Ihre Entrümpelung oder Wohnungsauflösung kalkulieren. Da wir versuchen einen großen Teil des Hausstandes wiederzuverwerten
                                werden bei der Kalkulation Ihrer Entrümpelung oder Wohnungsauflösung in Bonn und Köln mehrere Mitarbeiter mit einbezogen. Unsere verantwortliche
                                Kollegin für die Kleider- & Haushaltswaren Abteilung schätzt die Wiederverwertbarkeit der Schrankinhalte und den Verpackungsaufwand ein. Unsere
                                Kollegen aus der Möbelabteilung müssen die Wiederverwertbarkeit des Mobiliars einschätzen und unsere Monteure, welche die Entrümpelungen täglich
                                durchführen, müssen den Personalaufwand für Ihre Entrümpelung oder Wohnungsauflösung insgesamt einschätzen. Um Ihnen ein kostengünstiges Angebot für
                                die Entrümpelung in Bonn oder Köln zu unterbreiten,  müssen wir die Kalkulation schlank und effizient gestalten. Aus diesem Grund ist es für uns am
                                besten, wenn Sie uns ein ein oder mehrere Videos der Räumlichkeiten über unser Anfrageformular auf dieser Webseite zukommen lassen.   Alternativ
                                können Sie uns das Video Ihrer Entrümpelung oder Wohnungsauflösung auch via WhatsApp zusenden an 0170 – 723 0 385. Gerne können wir die Entrümpelung
                                oder Wohnungsauflösung auch auf der Basis von Fotos kalkulieren. Wichtig ist hierbei, dass alle Räumlichkeiten vollständig abgebildet sind.<br></br><br></br>
                                Rechts oder unten sehen Sie ein Muster-Video, mit dem wir Ihre Entrümpelung oder Wohnungsauflösung zum Festpreis kalkulieren können: <br></br> <br></br>
                                Sollten wir noch Fragen haben oder den Aufwand für die Entrümpelung  oder Wohnungsauflösung nicht genau einschätzen können melden wir uns
                                telefonisch bei Ihnen. Anschließend erstellen wir Ihnen ein Festpreisangebot für Ihre Entrümpelung in Bonn oder Köln.
                            </p>
                        </div>
                        <div>
                            <p className={styles.headlineExampleVideo}>Beispielvideo</p>
                            <video className={styles.exapmpleVideo} width="250" height="300" controls preload="none" poster="/entruempelung_bonn_koeln_thumbnail.webp">
                                <source src="/Entruemeplung_koeln_bonn_video.mp4" type="video/mp4" />
                                Dieses Fortmat wird von Ihrem Browser leider nicht unterstützt.
                            </video>
                        </div>
                    </div>

                    <div className={styles.howDetailWrapperStep2}>
                        <Image className={styles.imageHowToDetail} src="/entruempelung-koeln-bonn-kalkulieren.webp" alt="Entrümpelung Köln Bonn in Aktion" width={500} height={300}></Image>
                        <div className={styles.stepOneTextBox}>
                            <h3>2. Angebotserstellung & Terminvereinbarung für Ihre Entrümpelung</h3>
                            <p>
                                Auf Basis der Videos & Bilder unterbieten wir Ihnen ein Festpreisangebot für Ihre Entrümpelung oder Wohnungsauflösung in Bonn oder Köln.
                                Den Kostenvoranschlag senden wir Ihnen gerne per E-Mail oder, wenn gewünscht, postalisch zu. Gerne bieten wir Ihnen auch das Entfernen von
                                Bodenbelägen (z.B. Teppichböden) oder die Demontage von Wand- & Deckenvertäfelungen zum Festpreis an. Falls einzelne Möbelstücke aus der Entrümpelung
                                oder Wohnungsauflösung an einen anderen Ort transportiert werden sollen, übernehmen wir den Transport ebenfalls gerne für Sie. Wenn Sie unser Angebot
                                für Ihre Entrümpelung oder Wohnungsauflösung annehmen möchten, rufen Sie Ihren Ansprechpartner einfach an oder schreiben Sie ihm eine E-Mail. Die
                                Kontaktdaten Ihres Ansprechpartners stehen auf der ersten Seite rechts oben im Kostenvoranschlag. Wir bestätigen Ihnen den Termin für Ihre Entrümpelung
                                in Bonn oder Köln selbstverständlich schriftlich. Die Rechnungserstellung erfolgt nach Durchführung gemäß dem Kostenvoranschlag für die Entrümpelung bzw.
                                Wohnungsauflösung.
                            </p>
                        </div>
                    </div>
                    <div className={styles.howDetailWrapperStep3}>
                        <div className={styles.stepOneTextBox}>
                            <h3>3.	Durchführung der Entrümpelung oder Wohnungsauflösung</h3>
                            <p>
                                Am Termin für die Entrümpelung oder Wohnungsauflösung ist unser Team morgens je nach Vereinbarung zwischen 8:00 Uhr und 10:00 Uhr vor Ort. Wir führen
                                jede Entrümpelung mit Transportern und LKWs durch und es werden keine Container aufgestellt. Zuerst sortiert unser Team aus der Kleider- &
                                Haushaltswarenabteilung bei einer Entrümpelung die Schrankinhalte. Gut erhaltene Haushaltswaren und Kleidung werden in Kartons verpackt.
                                Beschädigte und nicht verwertbare Waren aus der Entrümpelung oder Wohnungsauflösung werden nach Produktgruppen sortiert, damit diese anschließend
                                umweltschonend und entsprechend den Abfallverordnungen entsorgt werden können. Sobald alle Kleinwaren und Schrankinhalte sortiert und verpackt sind
                                verladen unsere Monteure die Kisten und Tonnen in die Transporter. Anschließend beginnen wir mit der Entrümpelung der Möbel. Gut erhaltene Möbel
                                werden in Decken und Folien verpackt und in unserer Sozialkaufhaus in Bonn oder Köln transportiert. Das restliche Mobiliar aus der Entrümpelung oder
                                Wohnungsauflösung wird ebenfalls nach Material sortiert und umweltschonend entsorgt. Lampen & Gardinen werden auf Wunsch entfernt. Anschließend
                                übergeben wir Ihnen die Immobilie besenrein entrümpelt zurück.  Sie müssen während der gesamten Entrümpelung in Bonn oder Köln nicht vor Ort sein.
                                Gerne können Sie sich mit unserem Team am Starttermin der Entrümpelung vor Ort treffen. Alternativ können Sie uns den Schlüssel auch vorab zukommen
                                lassen und wir senden Ihnen den Schlüssel inkl. Bilddokumentation der entrümpelten Immobilie zurück.
                                Für Fragen steht Ihnen Ihrer Ansprechpartner jederzeit zur Verfügung.
                            </p>
                        </div>
                        <Image className={styles.imageHowToDetail} src="/entrümpelung-sozialkaufhaus-koeln-bonn-header.webp" alt="Entrümpelung Köln Bonn in Aktion" width={500} height={300}></Image>
                    </div>
                </section>
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
                            Arbeitstag erforderlich werden. Wenn Sie besonderen Wert auf eine schnelle Durchführung der Entrümpelung oder Wohnungsauflösung legen, können wir dies mit zusätzlichen Teams gerne ermöglichen.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Kann es trotz der Entrümpelung zum Festpreis zu Mehrkosten kommen?
                        </h3>
                        <p>
                            Nein, sie zahlen nur den im Kostenvoranschlag veranschlagten Betrag für die Entrümpelung oder Wohnungsauflösung in Bonn oder Köln.
                            Für unsere Kalkulation ist es wichtig, dass auf den Bildern & Videos der Entrümpelung alle Räumlichkeiten abgebildet sind.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Warum ist der Wiederverwertungsanteil bei Ihnen höher und was passiert mit dem gut erhaltenen Hausstand?
                        </h3>
                        <p>
                            Alle Möbel, Haushaltswaren und die Kleidung aus der Entrümpelung oder Wohnungsauflösung, die gut erhalten und für uns verwertbar sind, kommen in unser
                            gemeinnütziges Sozialkaufhaus in Bonn oder das Sozialkaufhaus in Swisttal-Heimerzheim. Dort können einkommensschwache und hilfsbedürftige Menschen
                            aus Bonn oder Köln alle Waren aus Ihrer Entrümpelung  zu kleinen Preisen erwerben. Unsere Sozialkaufhäuser befinden sich in der Deutschherrenstraße
                            197 in 53179 Bonn und in 53913 Swisttal  Heimerzheim in der Breniger Straße 3. Insgesamt haben wir durch unsere Sozialkaufhäuser bessere
                            Wiederverwertungsmöglichkeiten. Da es sich bei dem Inventar aus der Entrümpelung oder Wohnungsauflösung um gebrauchte Waren handelt möchten Kunden
                            diese vor Kauf in echt sehen, um den Zustand zu beurteilen. Auch benötigt ein Großteil unserer Kunden eine Anlieferung der Möbel aus der Entrümpelung
                            oder Wohnungsauflösung. Die Lieferung bieten wir ebenfalls in unseren Sozialkaufhäusern in Bonn und bei Köln an. Sicherlich können besonders
                            hochwertige Einrichtungsgestände auch über das Internet angeboten und damit wiederverwertet werden. Den Großteil des wiederverwertbaren Hausstandes
                            bei einer Entrümpelung oder Wohnungsauflösung bilden jedoch Kleinmöbel, Haushaltswaren und Kleidung. Hier haben wir den Vorteil, dass wir auch hierfür
                            wieder Abnehmer in unseren Sozialkaufhäusern finden.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Was kostet eine Entrümpelung oder Wohnungsauflösung in Köln/Bonn?
                        </h3>
                        <p>
                            Die Frage, was eine Entrümpelung oder Wohnungsauflösung kostet, können wir leider nicht pauschal beantworten. Auch eine erste Einschätzung der
                            Kosten anhand von Quadratmetern oder Zimmern ist schwierig, da in einer 80m² Wohnungsauflösung ein Entsorgungsvolumen von 10 Kubikmetern oder
                            auch 30 Kubikmetern anfallen kann. Zudem ist es für uns wichtig die Wiederverwertbarkeit der Möbel vorab zu beurteilen. Denn für diese fallen
                            aufgrund der Wiederverwertung keine Entsorgungskosten an. Eine umfangreichere Entrümpelung oder Wohnungsauflösung mit vielen verwertbaren und
                            gut erhaltenen Möbeln kann entsprechend kostengünstiger sein als eine kleine Entrümpelung, bei der das gesamte Inventar entsorgt werden muss.
                            Einen großen Anteil an den gesamten Kosten für die Entrümpelung in Bonn oder Köln hat neben den Entsorgungskosten der Personalaufwand.
                            Wenn 2 Monteure einen Arbeitstag mit einer Entrümpelung oder Wohnungsauflösung beschäftigt sind, liegen wir bei den Gesamtkosten in der Regel
                            bereits im vierstelligen Bereich. Hierbei müssen Sie berücksichtigen, dass eine Entrümpelung oder Wohnungsauflösung eine schwere körperliche Arbeit
                            ist und die Kollegen hierfür entsprechend entlohnt werden müssen. Mit der Anzahl der Monteure und der Tage, die benötigt werden, steigen die
                            Kosten für die Entrümpelung entsprechend an. Aber auch hier spielt die Verwertbarkeit des Haustandes für die Kosten eine wichtige Rolle. Damit
                            Sie transparent nachvollziehen können, wie sich die Kosten für Ihre Entrümpelung oder Wohnungsauflösung zusammensetzen, weisen wir den kalkulierten
                            Personalaufwand und die Entsorgungskosten separat im Angebot aus. Wenn Sie wissen möchten mit welchen Kosten Sie bei Ihrer Entrümpelung oder
                            Wohnungsauflösung in Köln/Bonn rechnen müssen, schicken Sie uns gerne eine Anfrage über unsere Webseite inklusive einem oder mehreren Videos von
                            Ihrer Entrümpelung. Wir senden Ihnen dann kurzfristig, in der Regel binnen 24 Stunden, einen Festpreis-Kostenvoranschlag für Ihre
                            Entrümpelung / Wohnungsauflösung in Bonn oder Köln zu.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Ist die Entrümpelung oder Wohnungsauflösung versichert?
                        </h3>
                        <p>
                            Alle unsere Leistungen und damit auch Ihre Entrümpelung sind bei der Ergo Versicherungsgruppe umfangreich versichert. Gerne weisen wir Ihnen dies auf Nachfrage durch Vorlage
                            der Versicherungspolice vor.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Warum ist es am besten, wenn Sie Videos oder Bildmaterial von den Räumlichkeiten bei einer Entrümpelung oder Wohnungsauflösung erhalten?
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
                            In welchem Umkreis führen Sie Entrümpelungen und Wohnungsauflösungen durch ?
                        </h3>
                        <p>
                            Entrümpelungen, Haushaltsauflösungen und Wohnungsauflösungen führen wir im gesamten Raum Köln/Bonn und dem Rhein-Sieg Kreis gerne für Sie durch.
                            Auch der gesamte swisttaler Raum, Euskirchen, Erftstadt, Kerpen bis hin nach Bad-Münstereifel und die Eifel zählt zu unserem Leistungsgebiet.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Führen Sie die Entrümpelung bzw. Wohnungsauflösung mit Containern durch ?
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
                            in der Vergangenheit auch bereits Vorlaufzeiten von bis zu 10 Wochen. Die Vorlaufszeit hängt auch immer vom Umfang der Entrümpelung in Bonn oder 
                            Köln ab.Gerne können wir Ihnen vorab eine telefonische Terminauskunft geben. Im besten Fall fragen Sie Ihre Entrümpelung inkl. einen Video 
                            von den Räumlichkeiten über unsere Webseite an. Wir können Ihnen dann binnen maximal 2 Werktagen einen genauen Terminvorschlag 
                            inklusive Kostenvoranschlag zusenden.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>
                            Können Sie auch die Entrümpelung oder Wohnungsauflösung auch vorab besichtigen ?
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