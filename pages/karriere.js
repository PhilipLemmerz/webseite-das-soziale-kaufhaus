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
                        <h3> Kundenberater / Verkäufer (m/w/d) in Bonn gesucht</h3>
                        <Image className={styles.image} src="/sozialkaufhaus-bonn.webp" alt="Sozialkauhaus Bonn Lannesdorf" width={300} height={200}></Image>
                        <p> Arbeitsstelle: Deutschherrenstraße 197-201, 53179 Bonn</p>
                        <p>
                            Ihre neue Herausforderung als Kundenberater / Verkäufer (m/w/d) in unserem gemeinnützigen Sozialkaufhaus in Bonn Lannesdorf.
                            Seit über 10 Jahren unterstützen wir mit unserem Second-Hand Kaufhaus bedürftige Menschen aus der Region mit Kleidung, Haushaltswaren und Möbeln.
                            Unser familiäres und hilfsbereites Team sucht zum nächstmöglichen Zeitpunkt einen Verkäufer / Kundenberater (m/w/d) mit dem Schwerpunkt Möbelverkauf.
                            Freuen Sie sich auf viele verantwortungsvolle und abwechslungsreiche Aufgaben, faire & branchenübliche Gehälter, eine familiäre Arbeitsatmosphäre und hilfsbereite
                            Kollegen.
                        </p>

                        <p><b>Ihre Aufgaben bei uns umfassen:</b></p>
                        <ul className={styles.list}>
                            <li>Unterstützung im Verkauf unserer Second-Hand Waren.</li>
                            <li>Präsentation und Einstellung unser Möbel in den gängigen Second-Hand Waren Portalen (wie z.B. eBay Kleinanzeigen).</li>
                            <li>Beratung unserer Kunden beim Möbelkauf.</li>
                            <li>Terminierung von Möbel-Auslieferungen & Abholungen.</li>
                            <li>Annahme von Sach- & Kleiderspenden im Sozialkaufhaus.</li>
                        </ul>
                        <p><b>Was Sie mitbringen sollten:</b></p>
                        <ul className={styles.list}>
                            <li>Spaß am Umgang mit Menschen.</li>
                            <li>Interesse an Second-Hand Waren und Möbeln.</li>
                            <li>Sicherer Umgang mit Computern & Zahlen.</li>
                            <li>Sichere Deutschkentnisse in Wort & Schrift.</li>
                        </ul>
                        <p>
                            Wenn wir Ihr Interesse geweckt haben freuen wir uns auf Ihre Bewerbungsunterlagen per Email oder postalisch.
                            Für Rückfragen steht Ihnen Herr Lemmerz gerne telefonisch unter der 0228-227 983 47 zur Verfügung.
                        </p>

                    </div>
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