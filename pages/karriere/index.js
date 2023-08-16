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
                        <h3>Möbelmonteur / Auslieferungsfahrer in Vollzeit gesucht - Quereinsteiger willkommen!</h3>
                        <Image className={styles.image} src="/sozialkaufhaus-swisttal-bei-koeln.webp" alt="Sozialkauhaus Bonn Lannesdorf" width={300} height={200}></Image>
                        <p> Arbeitsstelle: Breniger Straße 3, 53913 Swisttal </p>
                        <p>
                            Seit über 15 Jahren sind wir eines der führenden Second-Hand Kaufhäuser in Swisttal, Bonn und der Region. 
                            Unser familiäres und hilfsbereites Team sucht zum nächstmöglichen Zeitpunkt Möbelmonteure und Auslieferungsfahrer. 
                            Freuen Sie sich auf viele verantwortungsvolle und abwechslungsreiche Aufgaben, ein familiäres und hilfsbereites Team und ein faires Gehalt.
                        </p>

                        <p><b>Ihre Aufgaben bei uns umfassen:</b></p>
                        <ul className={styles.list}>
                            <li>Möbelauslieferungen & Abholungen</li>
                            <li>Durchführung von Umzügen & Haushaltsauflösungen</li>
                            <li>De- & Montage von Möbeln</li>
                        </ul>
                        <p><b>Was Sie mitbringen sollten:</b></p>
                        <ul className={styles.list}>
                            <li>Füherschein für LKWs bis 7,5 Tonnen</li>
                            <li>Spaß an körperlicher Arbeit</li>
                            <li>Grundkenntnisse in der deutschen Sprache</li>
                            <li>Handwerkliches Geschick</li>
                        </ul>
                        <p>
                            Wenn wir Ihr Interesse geweckt haben freuen wir uns auf Ihre Bewerbung per Email (info@dsk-nrw.de) oder WhatsApp (0151 - 423 859 89).
                            Für Rückfragen steht Ihnen Herr Lemmerz gerne telefonisch unter 0160-92 654 321 zur Verfügung.
                        </p>
                        <p> Arbeitsstelle: Breniger Straße 3 in 53913 Swisttal</p>
                        <Link href="/karriere/moebelmonteur-swisttal"><button className={styles.applyBTN}> jetzt bewerben </button></Link>
                    </div>
                </div>
            </section>
        </Fragment >
    )
}