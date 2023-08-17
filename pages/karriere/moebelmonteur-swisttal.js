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
                <title>Jobs Swisttal - Möbelmonteur & Auslieferungsfahrer gesucht</title>
                <meta name="description" content="Jobs in Swisttal - Wir suchen dich als Möbelmonteur & Auslieferungsfahrer - Bewirb dich jetzt bei uns" />
            </Head>
            {scrollMenu && <div className={styles.scrollMenu}>
                <Link href="/karriere/bewerbungsformular"><button className={styles.scrollBTN}>jetzt bewerben</button></Link>
            </div>}

            <div className={styles.header}>
                <p className={styles.headerSubheadline}>Ihre neue Herausforderung als</p>
                <h1 className={styles.headerHeadline}>Möbelmonteur & Auslieferungsfahrer in Swisttal</h1>
            </div>
            <section className={styles.ContentWrapper}>
                <section className={styles.ctaSection}>
                    <Link href="/karriere/bewerbungsformular"><button className={styles.ctaBTN}>jetzt bewerben</button></Link>
                </section>
                <section className={styles.aboutUsSection}>
                    <div className={styles.aboutUsContent}>
                        <h2 className={styles.h2}>Über uns:</h2>
                        <p>
                            Seit über 15 Jahren sind wir eines der führenden Second-Hand Kaufhäuser in Swisttal, Bonn und der Region mit 2 Filialen.
                            Mit über 20 Kollegen & Kolleginen versorgen wir die Region mit Gebraucht-Möbeln, Haushaltswaren und Kleidung und unterstützen unsere Kunden
                            bei Haushaltsauflösungen & Umzügen. Der Bedarf an Gebraucht-Möbeln und Haushaltswaren wächst seit Jahren und die Anzahl der
                            Möbelabholungen & Auslieferungen nimmt stetig zu. Aus diesem Grund suchen wir für unser swisttaler Team neue Möbelmonteure und Auslieferungsfahrer
                            die unsere Kollegen unterstützen. Auf unserer "Über Uns" Seite finden Sie weitere Informationen zu unserer Firmengeschichte und unsern Kaufhäusern.
                        </p>
                    </div>
                    <Image alt="Sozialkaufhaus für Möbelmonteur Job in Swisttal" className={styles.heimerzheimImage} width={600} height={300} src="/sozialkaufhaus-swisttal-bei-koeln.webp"></Image>
                </section>
                <section className={styles.benefitSection}>
                    <div className={styles.benefitBox}>
                        <h2>Wir bieten Ihnen</h2>
                        <ul className={styles.benefitList}>
                            <li><BsCheck2Circle className={styles.checkIcon} /> unbefristeten Arbeitsvertrag</li>
                            <li className={styles.highlight}> <BsCheck2Circle className={styles.checkIcon} /> 14,50 € Stundenlohn</li>
                            <li> <BsCheck2Circle className={styles.checkIcon} /> umfangreiche Mitarbeiterrabatte</li>
                            <li><BsCheck2Circle className={styles.checkIcon} /> hochwertiges Arbeitsmaterial</li>
                            <li><BsCheck2Circle className={styles.checkIcon} /> familiäres Team & hilfsbereite Kollegen</li>
                        </ul>
                    </div>
                </section>
                <section className={styles.expectionSection}>
                    <h2>Was wir von Ihnen erwarten</h2>
                    <div>
                        <div className={styles.expectionRow}>
                            <div className={styles.expectionBox}>
                                <p>Spaß an körperlicher Arbeit</p>
                            </div>
                            <div className={styles.expectionBox}>
                                <p>gute Deutschkenntisse</p>
                            </div>
                        </div>
                        <div className={styles.expectionRow}>
                            <div className={styles.expectionBox}>
                                <p>Führerschein für LKWs bis 7,5 Tonnen</p>
                            </div>
                            <div className={styles.expectionBox}>
                                <p>Erfahrung in der Möbeldemontage & Montage</p>
                            </div>
                        </div>
                    </div>
                    <p className={styles.highlightExpections}>Quereinsteiger sind herzlich willkommen!</p>
                </section>
                <section className={styles.ctaSection}>
                    <Link href="/karriere/bewerbungsformular"><button className={styles.ctaBTN}>jetzt bewerben</button></Link>
                </section>
            </section>
        </Fragment>

    )
}