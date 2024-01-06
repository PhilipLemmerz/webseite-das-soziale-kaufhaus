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
                        <h3>Verkäufer(in) / Kassierer(in) für Swisttal gesucht</h3>
                        <p><em>Quereinsteiger sind herzlich willkommen</em></p>
                        <Image className={styles.image} src="/sozialkaufhaus-swisttal-bei-koeln.webp" alt="Sozialkauhaus Bonn Lannesdorf" width={300} height={200}></Image>
                        <p> Arbeitsstelle: Breniger Straße 3, 53913 Swisttal </p>
                        <p>
                            Seit über 15 Jahren sind wir eines der führenden Second-Hand Kaufhäuser in Swisttal, Bonn und der Region. Unser familiäres und hilfsbereites
                            Team sucht zum nächstmöglichen Zeitpunkt Unterstützung im Verkauf. Freuen Sie sich auf viele verantwortungsvolle und abwechslungsreiche
                            Aufgaben, ein familiäres und hilfsbereites Team, interessante Produkte und ein faires Gehalt.
                        </p>
                        <p><b>Ihre Aufgaben bei uns umfassen:</b></p>
                        <ul className={styles.list}>
                            <li>Verkauf von second-hand Kleidung & Haushaltswaren.</li>
                            <li>Entgegennahme von Telefonaten & Kundenanfragen</li>
                        </ul>
                        <p><b>Wir bieten Ihnen:</b></p>
                        <ul className={styles.list}>
                            <li>einen unbefristeten Arbeitsvertrag</li>
                            <li>umfangreiche Mitarbeiterrabatte</li>
                            <li>familiäres Team & hilfsbereite Kollegen</li>
                            <li>faire & branchenübliche Vergütung.</li>
                        </ul>
                        <p><b>Was Sie mitbringen sollten:</b></p>
                        <ul className={styles.list}>
                            <li>Sie haben Spaß an Second-Hand Waren & am Umgang mit Menschen</li>
                        </ul>
                        <p>
                            Wenn wir Ihr Interesse geweckt haben freuen wir uns auf Ihre Bewerbung per Email (info@dsk-nrw.de) oder WhatsApp (0151 - 423 859 89).
                            Für Rückfragen steht Ihnen Herr Lemmerz gerne telefonisch unter 0151-11 4444 66 zur Verfügung.
                        </p>

                        <Link href="/karriere/bewerbungsformular"><button className={styles.applyBTN}> jetzt bewerben </button></Link>
                    </div>              
                </div>
            </section>
        </Fragment >
    )
}