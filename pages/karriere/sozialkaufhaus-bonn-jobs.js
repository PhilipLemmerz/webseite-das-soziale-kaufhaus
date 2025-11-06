import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from '../../styles/karriere/moebelmonteur-swisttal.module.css';
import { BsCheck2Circle } from "react-icons/bs";
import { useState, useEffect } from "react";


export default function MöbelmonteurSwisttal() {

    const [scrollMenu, setScrollMenu] = useState(false);
    const [scrolledY, setScrolled] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY)
        }
        window.addEventListener("scroll", handleScroll);

        if (scrolledY > 800) {
            activateScrollMenu()
        } else {
            deactivateScrollMenu()
        }
    });


    function deactivateScrollMenu() {
        setScrollMenu(false);
    }

    function activateScrollMenu() {
        setScrollMenu(true);
    }


    return (
        <Fragment>
            <Head>
                <title>Jobs Bonn - Warenauszeichung- & Verräumung Sozialkaufhaus Bonn</title>
                <meta name="description" content="Jobs in Bonn - Wir suchen dich für unsere Warenauszeichnung & Verräumung in Bonn - Bewirb dich jetzt bei uns" />
            </Head>

            <div className={styles.header}>
                <p className={styles.headerSubheadline}>Wir suchen Sie für unser Second-Hand Kaufhaus</p>
                <h1 className={styles.headerHeadline}>in der Warenverräumung und Auspreisung</h1>
            </div>
            <section className={styles.ContentWrapper}>
                <section className={styles.aboutUsSection}>
                    <div className={styles.aboutUsContent}>
                        <Link href="#apply"><button className={styles.ctaBTN}> jetzt bewerben</button> </Link>
                        <h2 className={styles.h2}>Über uns:</h2>
                        <p>
                            Seit über 15 Jahren sind wir eines der größten Second-Hand Kaufhäuser in Bonn, Swisttal und der Region mit 2 Filialen.
                            Mit über 20 Kollegen & Kolleginen versorgen wir die Region mit Gebraucht-Möbeln, Haushaltswaren und second-hand Kleidung und unterstützen unsere Kunden
                            bei Haushaltsauflösungen. Täglich erhalten wir Warenspenden aus den Bereichen Kleidung, Haushaltswaren, Porzellan etc. Aus diesem Grund suchen wir für unsere Bonner Filiale Unterstützung in der Spendenannahme, Warenauspreisung- & Verräumung.
                        </p>
                    </div>
                    <Image alt="Sozialkaufhaus Bonn - Job Spendenannahme" className={styles.heimerzheimImage} width={600} height={300} src="/entrümpelung-sozialkaufhaus-koeln-bonn-header.webp"></Image>
                </section>
                <section className={styles.benefitSection}>
                    <div className={styles.benefitBox}>
                        <h2>Wir bieten Ihnen</h2>
                        <ul className={styles.benefitList}>
                            <li><BsCheck2Circle className={styles.checkIcon} /> einen unbefristeten Arbeitsvertrag</li>
                            <li> <BsCheck2Circle className={styles.checkIcon} /> umfangreiche Mitarbeiterrabatte</li>
                            <li><BsCheck2Circle className={styles.checkIcon} /> viele interessante und unterschiedliche Produkte</li>
                            <li><BsCheck2Circle className={styles.checkIcon} /> familiäres Team & hilfsbereite Kollegen</li>
                        </ul>
                    </div>
                </section>
                <section className={styles.expectionSection}>
                    <h2>Was wir von Ihnen erwarten</h2>
                    <div>
                        <div className={styles.expectionRow}>
                            <div className={styles.expectionBox}>
                                <p>Sie haben Spaß an der Arbeit mit Second Hand Waren</p>
                            </div>
                            <div className={styles.expectionBox}>
                                <p>Grundkenntnisse in der deutschen Sprache</p>
                            </div>
                        </div>
                        <div className={styles.expectionRow}>
                            <div className={styles.expectionBox}>
                                <p>Kartons & Säcke mit Warenspenden zu tragen ist für Sie kein Problem</p>
                            </div>
                        </div>
                        <div className={styles.expectionRow}>
                            <div className={styles.expectionBox}>
                                <p>Sie besitzen einen Führerschein für PKW (Klasse B)</p>
                            </div>
                        </div>
                    </div>
                    <p className={styles.highlightExpections}>Quereinsteiger sind herzlich willkommen!</p>
                </section>
                <section className={styles.benefitSection}>
                    <div className={styles.benefitBox}>
                        <h2>Eckdaten zur Stelle</h2>
                        <ul className={styles.benefitList}>
                            <li><BsCheck2Circle className={styles.checkIcon} /> Arbeitszeit: Mo-Fr von 9:00 bis 15:00 Uhr</li>
                            <li> <BsCheck2Circle className={styles.checkIcon} />zusätzlich ein Samstag/Monat von 9:00 bis 16:00 Uhr</li>
                            <li><BsCheck2Circle className={styles.checkIcon} /> Gehalt: 14,00 € / Stunde (ab 2026)</li>
                            <li><BsCheck2Circle className={styles.checkIcon} /> Quereinsteigergeeignet (Keine Vorerfahrung notwendig)</li>
                        </ul>
                    </div>
                </section>
                <section id="apply" className={styles.applySection}>
                    <div className={styles.applyBox}>
                        <h2>Bewerbungen nehmen wir gerne entgenen:</h2>
                        <ul className={styles.applyList}>
                            <li><BsCheck2Circle className={styles.checkIcon} /> per Email an: info@dsk-nrw.de</li>
                            <li> <BsCheck2Circle className={styles.checkIcon} /> per WhatsApp an: 0170 - 723 0 385</li>
                            <li><BsCheck2Circle className={styles.checkIcon} /> postalisch: Das Soziale Kaufhaus, Deutschherrenstraße 197 in 53179 Bonn</li>
                        </ul>
                        <p> Für Rückfragen steht Ihnen Frau Michalewicz gerne zur Verfügung unter 0151 - 11 44 44 68</p>
                    </div>
                </section>
            </section>
        </Fragment>

    )
}