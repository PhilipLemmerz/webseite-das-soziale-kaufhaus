import { Fragment } from "react";
import styles from '../../styles/karriere/karriere.module.css'
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


export default function KarrierePage() {
    return (
        <Fragment>
            <Head>
                <title>Karriere & Jobs im Sozialkaufhaus Bonn und Swisttal</title>
                <meta name="description" content="Offene Stellen und Jobs im Sozialkaufhaus Bonn & Swisttal - Wir freuen uns auf Ihrer Bewerbung" />
            </Head>
            <section className={styles.section}>
                <h1 className={styles.headline}> Unsere Stellen-Angebote:</h1>
                <div className={styles.workOfferWrapper}>
                    <div className={styles.workOfferBox}>
                        <h3>Unterstützung für Auspreisung / Warenverräumung in Swisttal gesucht</h3>
                        <p><em>Quereinsteiger sind herzlich willkommen</em></p>
                        <Image className={styles.image} src="/sozialkaufhaus-swisttal-bei-koeln.webp" alt="Sozialkauhaus Bonn Lannesdorf" width={300} height={200}></Image>
                        <p> Arbeitsstelle: Breniger Straße 3, 53913 Swisttal </p>
                        <p>
                            Seit über 15 Jahren sind wir eines der führenden Second-Hand Kaufhäuser in Swisttal, Bonn und der Region. Unser familiäres und hilfsbereites
                            Team sucht zum nächstmöglichen Zeitpunkt Unterstützung im Verkauf. Freuen Sie sich auf viele verantwortungsvolle und abwechslungsreiche
                            Aufgaben, ein familiäres und hilfsbereites Team und interessante Produkte.
                        </p>
                        <p><b>Ihre Aufgaben bei uns umfassen:</b></p>
                        <ul className={styles.list}>
                            <li>Sortieren & Auspreisung von Kleidung & Haushaltswaren (Second-Hand)</li>
                            <li>Verräumung der Waren im Ladengeschäft</li>
                            <li>Verpacken & Sortieren von Schrankinhalten auf Haushaltsauflösungen und Umzügen</li>
                        </ul>
                        <p><b>Wir bieten Ihnen:</b></p>
                        <ul className={styles.list}>
                            <li>einen unbefristeten Arbeitsvertrag</li>
                            <li>umfangreiche Mitarbeiterrabatte</li>
                            <li>familiäres Team & hilfsbereite Kollegen</li>
                        </ul>
                        <p><b>Was Sie mitbringen sollten:</b></p>
                        <ul className={styles.list}>
                            <li>Sie haben Spaß an Second-Hand Waren & Kleidung</li>
                            <li>Kartons & Säcke mit Warenspenden zu tragen ist für Sie kein Problem</li>
                            <li>ie besitzen einen Führerschein für PKW (Klasse B)</li>
                        </ul>
                        <p><b>Arbeitszeiten & Gehalt</b></p>
                        <ul className={styles.list}>
                            <li>Vollzeit</li>
                            <li>2.300 bis 2.400 € / Monat</li>
                        </ul>
                        <p>
                            Wenn wir Ihr Interesse geweckt haben freuen wir uns auf Ihre Bewerbung per Email (info@dsk-nrw.de), WhatsApp (0151 - 11 44 44 69) oder über den Link unten.
                            Für Rückfragen steht Ihnen Frau Michalewicz gerne telefonisch unter 0151-11 4444 68 zur Verfügung.
                        </p>

                        <Link href="/karriere/bewerbungsformular"><button className={styles.applyBTN}> jetzt bewerben </button></Link>
                    </div>
                </div>
            </section>
        </Fragment >
    )
}