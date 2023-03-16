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
                        <h3> Kollegin Warenauszeichnung / Sortierung in Swisttal gesucht</h3>
                        <Image className={styles.image} src="/sozialkaufhaus-swisttal-bei-koeln.webp" alt="Sozialkauhaus Bonn Lannesdorf" width={300} height={200}></Image>
                        <p> Arbeitsstelle: Breniger Straße 3, 53913 Swisttal </p>
                        <p>
                            Wir suchen Unterstützung in der Warenauszeichnung und Verräumung in Swisttal Heimerzheim. Seit über 15 Jahren unterstützen wir mit unserem
                            Second-Hand Kaufhaus in Swisttal bedürftige Menschen aus der Region mit Kleidung, Haushaltswaren und Möbeln.
                            Unser familiäres und hilfsbereites Team sucht zum nächstmöglichen Zeitpunkt Unterstützung in der Warenauszeichnung und Verräumung.
                            Freuen Sie sich auf viele verantwortungsvolle und abwechslungsreiche Aufgaben, faire & branchenübliche Gehälter und eine familiäre Arbeitsatmosphäre & hilfsbereite
                            Kollegen.
                        </p>

                        <p><b>Ihre Aufgaben bei uns umfassen:</b></p>
                        <ul className={styles.list}>
                            <li>Sortierung & Auszeichnung unserer Sach- & Kleiderspenden</li>
                            <li>Präsentation unserer Waren im Verkauf</li>
                            <li>Verpackung von Schrankinhalten auf Haushaltsauflösugen und Umzügen</li>
                        </ul>
                        <p><b>Was Sie mitbringen sollten:</b></p>
                        <ul className={styles.list}>
                            <li>Interesse an Second Hand Waren und Kleidung</li>
                            <li>Spaß an Bewegung</li>
                            <li>Motivation und freundliches Auftreten</li>
                        </ul>
                        <p>
                            Wenn wir Ihr Interesse geweckt haben freuen wir uns auf Ihre Bewerbungsunterlagen per Email oder postalisch.
                            Für Rückfragen steht Ihnen Frau Michalewicz gerne telefonisch unter der 02254-600 480 5 zur Verfügung.
                        </p>
                        <p> Arbeitsstelle: Breniger Straße 3 in 53913 Swisttal</p>
                    </div>
                </div>
            </section>
        </Fragment >
    )
}