import { Fragment } from "react";
import styles from '../styles/karriere.module.css';
import Head from "next/head";
import Image from "next/image";

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
                        <h3>Möbelmonteure / Auslieferungsfahrer (m/w/d) gesucht </h3>
                        <Image className={styles.image} src="/sozialkaufhaus-swisttal-bei-koeln.webp" alt="Sozialkauhaus Bonn Lannesdorf" width={300} height={200}></Image>
                        <p> Arbeitsstelle: Breniger Straße 3, 53913 Swisttal </p>
                        <p>
                            Wir suchen Auslieferungsfahrer / Möbelmonteure und Umzugshelfer in Swisttal Heimerzheim. Seit über 15 Jahren unterstützen wir mit unserem
                            Second-Hand Kaufhaus in Swisttal bedürftige Menschen aus der Region mit Kleidung, Haushaltswaren und Möbeln.
                            Unser familiäres und hilfsbereites Team sucht zum nächstmöglichen Zeitpunkt.
                            Freuen Sie sich auf viele verantwortungsvolle und abwechslungsreiche Aufgaben, faire & branchenübliche Gehälter und eine familiäre Arbeitsatmosphäre & hilfsbereite
                            Kollegen.
                        </p>

                        <p><b>Ihre Aufgaben bei uns umfassen:</b></p>
                        <ul className={styles.list}>
                            <li>Ausliefern & Abholen von Möbeln & Küchen</li>
                            <li>Durchführung von Umzügen & Haushaltsauflösungen</li>
                            <li>De- & Montage von Möbeln</li>
                        </ul>
                        <p><b>Was Sie mitbringen sollten:</b></p>
                        <ul className={styles.list}>
                            <li>Füherschein: Klasse B (PKW)</li>
                            <li>Spaß an körperlicher Arbeit</li>
                            <li>Grundkenntnisse in der deutschen Sprache</li>
                        </ul>
                        <p>
                            Wenn wir Ihr Interesse geweckt haben freuen wir uns auf Ihre Bewerbung per Email (info@dsk-nrw.de) oder WhatsApp (0151 - 423 859 89). 
                            Für Rückfragen steht Ihnen Herr Lemmerz gerne telefonisch unter der 02254-600 480 5 zur Verfügung.
                        </p>
                        <p> Arbeitsstelle: Breniger Straße 3 in 53913 Swisttal</p>
                    </div>
                </div>
            </section>
        </Fragment >
    )
}