import { Fragment } from "react";
import styles from '../../styles/karriere/karriere.module.css'
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


export default function KarrierePage() {
    return (
        <Fragment>
            <Head>
                <title>Karriere & Jobs im Sozialkaufhaus Bonn-Lannesdorf</title>
                <meta name="description" content="Offene Stellen und Jobs im Sozialkaufhaus Bonn & Swisttal - Wir freuen uns auf Ihrer Bewerbung" />
            </Head>
            <section className={styles.section}>
                <h1 className={styles.headline}> Unsere Stellen-Angebote:</h1>
                <div className={styles.workOfferWrapper}>
                    <div className={styles.workOfferBox}>
                        <h3>Unterstützung für Auspreisung / Warenverräumung in Bonn-Lannesdorf gesucht</h3>
                        <p><em>Quereinsteiger sind herzlich willkommen</em></p>
                        <Image className={styles.image} src="/sozialkaufhaus-bonn.webp" alt="Sozialkauhaus Bonn Lannesdorf" width={300} height={200}></Image>
                        <p> Arbeitsstelle: Deutschherrenstraße 197 - 201 in 53179 Bonn </p>
                        <p>
                            Seit über 15 Jahren sind wir eines der größten Second-Hand Kaufhäuser in Bonn und der Region. Unser familiäres und hilfsbereites
                            Team sucht zum nächstmöglichen Zeitpunkt Unterstützung in der Warenauspreisung und Verräumung. 
                        </p>
                        <p><b>Ihre Aufgaben bei uns umfassen:</b></p>
                        <ul className={styles.list}>
                            <li>Sortieren & Auspreisung von Haushaltswaren & Second-Hand Waren aller Art</li>
                            <li>Verräumung der Waren im Ladengeschäft</li>
                            <li>Verpacken & Sortieren von Schrankinhalten auf Haushaltsauflösungen</li>
                        </ul>
                        <p><b>Wir bieten Ihnen:</b></p>
                        <ul className={styles.list}>
                            <li>einen unbefristeten Arbeitsvertrag</li>
                            <li>umfangreiche Mitarbeiterrabatte</li>
                            <li>familiäres Team & hilfsbereite Kollegen</li>
                            <li>und viele interessante und unterschiedliche Produkte</li>
                        </ul>
                        <p><b>Was Sie mitbringen sollten:</b></p>
                        <ul className={styles.list}>
                            <li>Sie haben Spaß an der Arbeit mit Second Hand Waren </li>
                            <li>Kartons & Säcke mit Warenspenden zu tragen ist für Sie kein Problem</li>
                            <li>Sie besitzen einen Führerschein für PKW (Klasse B)</li>
                        </ul>
                        <p><b>Arbeitszeiten & Gehalt</b></p>
                        <ul className={styles.list}>
                            <li>Mo-Fr: 9:00 bis 15:00 Uhr</li>
                            <li>14,00 € / Stunde (ab 2026)</li>
                        </ul>
                        <p>
                            Wenn wir Ihr Interesse geweckt haben freuen wir uns auf Ihre Bewerbung per Email (info@dsk-nrw.de), WhatsApp (0170 - 723 0 385) oder über den Link unten.
                            Für Rückfragen steht Ihnen Frau Michalewicz gerne telefonisch unter 0151-11 4444 68 zur Verfügung.
                        </p>

                        <Link href="/karriere/sozialkaufhaus-bonn-jobs"><button className={styles.applyBTN}> jetzt bewerben </button></Link>
                    </div>
                </div>
            </section>
        </Fragment >
    )
}