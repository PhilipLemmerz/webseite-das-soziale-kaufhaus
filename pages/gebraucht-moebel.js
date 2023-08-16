import { Fragment } from "react";
import styles from '../styles/sortiment.module.css';
import { HiCursorClick } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";


export default function SortimentPage() {
    return (
        <Fragment>
            <Head>
                <title>Gebraucht-Möbel in Bonn & Köln bei Ihren Sozialkaufhäusern</title>
                <meta name="description" content="Gebraucht-Möbel in Bonn & Köln - Große Auswahl an second-hand Möbeln, Kleidung & Haushhaltswaren." />
            </Head>
            <section className={styles.aboveTheFoldSection}>
                <div className={styles.rowProducts}>
                    <div className={styles.productFurniture}>
                        <p className={styles.productsText}>Möbel</p>
                    </div>
                    <div className={styles.productArticles}>
                        <p className={styles.productsText}>Kleinwaren</p>
                    </div>
                    <div className={styles.productClothes}>
                        <p className={styles.productsText}>Kleidung</p>
                    </div>
                </div>
                <div className={styles.rowProducts}>
                    <div className={styles.productEletricity}>
                        <p className={styles.productsText}>Großgeräte</p>
                    </div>
                    <div className={styles.productLamps}>
                        <p className={styles.productsText}>E-Geräte</p>
                    </div>
                    <div className={styles.productSpecials}>
                        <p className={styles.productsText}>Besonderes</p>
                    </div>
                </div>
            </section>
            <section className={styles.introductionSection}>
                <h1> Gebraucht-Möbel & mehr...</h1>
                <p className={styles.subheadline}> alles second-hand und günstig ! </p>
                <p>
                    Sie suchen Gebraucht-Möbel, Kleidung, eine neue Waschmaschine oder neue Pfannen und Töpfe. Wir bieten alles rund ums Haus – second-hand und günstig.
                    Egal, ob Sie sich mit gebrauchten Möbeln neu einrichten möchten oder ob Sie einfach nach schöner Dekoration schauen.
                    Das Sozialkaufhaus bei Köln und Bonn hat für jeden etwas passendes im Sortiment.
                </p>
            </section>
            <section className={styles.ebaySection}>
                <h2 className={styles.ebayHeadline}>Möbel-Angebote</h2>
                <p> In unserem Shop finden Sie alle Möbel die wir aktuell im Bestand haben</p>
                <Link target="_blank" href="https://shop.das-soziale-kaufhaus.de"><button className={styles.ebayBTN}>zum Möbelsortiment<HiCursorClick /></button></Link>
            </section>
            <section className={styles.discountSection}>
                <p className={styles.discountText}>Bedürftige Personen erhalten <span className={styles.percentText}>20% Nachlass</span> auf den gesamten Einkauf.</p>
                <Image className={styles.discountImage} src="/sozialkaufhaus-bonn-koeln-moebel-header.webp" alt="gebraucht-moebel Sozialkaufhaus Köln Bonn" width={500} height={300}></Image>
            </section>
            <section className={styles.deliverySection}>
                <Image className={styles.discountImage} src="/moebelspende-koeln-bonn-header.webp" alt="gebraucht-moebel Sozialkaufhaus Köln Bonn" width={500} height={300}></Image>
                <p className={styles.discountText}>Lieferung bereits <span className={styles.percentText}>ab 25 Euro.</span> Montageservice & Lieferung in den Wohnraum gegen Aufpreis möglich.</p>
            </section>

            <section className={styles.faqSection}>
                <h2 className={styles.headlineFAQ}>Häufig gestellte Fragen</h2>
                <div className={styles.faqBox}>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>Wer darf im Sozialkaufhaus bei Köln und Bonn einkaufen?</h3>
                        <p>
                            Bei uns ist jeder Kunde herzlich willkommen. In unserem Sozialkaufhaus bei Köln und Bonn darf jeder Gebraucht-Möbel und Haushaltswaren einkaufen.
                            Bedürftige Personen erhalten jedoch zusätzlich 20 % Nachlass auf alle Artikel.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>Liefern Sie meinen Gebraucht-Möbel Einkauf auch an? </h3>
                        <p>
                            Ja, wir liefern Ihren Gebraucht-Möbel Einkauf auch zu Ihnen nach Hause. Die Lieferung ist ab 25 € möglich und berechnet sich aus der Entferung und dem Lieferaufwand an der Lieferadresse.
                            Die genauen Lieferkosten teilen wir Ihnen bei Ihrem Einkauf mit. Gerne helfen wir Ihnen auch bei der Montage Ihres Gebraucht-Möbel Einkauf.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>Wann erhält man den Bedürftigen-Rabatt in Höhe von 20 % ?</h3>
                        <p>
                            Jeder Kunde, der bedürftig ist und ein sehr geringes Einkommen hat, erhält 20 % Nachlass auf den gesamten Gebraucht-Möbel und Haushaltswaren Einkauf
                            in unserem Sozialkaufhaus bei Köln und Bonn. Um den Nachlass zu gewähren benötigen wir z.B. einen Arge-Bescheid, Bonn-Ausweis, Köln Pass, Studentenausweis.
                            Auch akzeptieren wir selbstverständlich andere Nachweise, die Ihre Bedürftigkeit dokumentieren.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>Reservieren Sie Gebraucht-Möbel und können Sie mich informieren wenn ein bestimmtes Möbelstück vorrätig ist? </h3>
                        <p>
                            Leider können wir keine Gebraucht-Möbel reservieren. Gerne informieren wir Sie telefonisch, wenn Sie etwas bestimmtes suchen.
                            Rufen Sie gerne in der Filiale Ihrer Nähe an. Unsere Telefonnummer finden Sie auf unserer Homepage ganz oben.
                        </p>
                    </div>
                    <div className={styles.questionBox}>
                        <h3 className={styles.question}>Kann ich die Gebraucht-Möbel auch online kaufen und versenden lassen?</h3>
                        <p>
                            zurzeit haben wir keinen Online Shop und können Gebraucht-Möbel nur nach vorheriger Besichtigung in unserem Sozialkaufhaus verkaufen. Da jedes Möbelstück
                            individuell & gebraucht ist, sollten Sie sich vor Ort auch einen Eindruck vom Zustand des gewünschten Möbelstücks machen.
                        </p>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}