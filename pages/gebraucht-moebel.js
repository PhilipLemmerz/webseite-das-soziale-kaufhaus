import { Fragment } from "react";
import styles from '../styles/sortiment.module.css';
import { HiCursorClick } from "react-icons/hi";
import Link from "next/link";


export default function SortimentPage() {
    return (
        <Fragment>
            <section>
                <div className={styles.rowProducts}>
                    <div className={styles.productFurniture}>
                        <p className={styles.productsText}>Möbel</p>
                    </div>
                    <div className={styles.productArticles}>
                        <p className={styles.productsText}>Haushaltswaren</p>
                    </div>
                    <div className={styles.productClothes}>
                        <p className={styles.productsText}>Kleidung</p>
                    </div>
                </div>
                <div className={styles.rowProducts}>
                    <div className={styles.productEletricity}>
                        <p className={styles.productsText}>Haushaltsgroßgeräte</p>
                    </div>
                    <div className={styles.productLamps}>
                        <p className={styles.productsText}>Lampen & E-Geräte</p>
                    </div>
                    <div className={styles.productSpecials}>
                        <p className={styles.productsText}>Antikes & Besonderes</p>
                    </div>
                </div>
            </section>
            <section className={styles.introductionSection}>
                <h1> Gebraucht-Möbel & mehr...</h1>
                <p className={styles.subheadline}> alles second-hand und günstig</p>
                <p>
                    Sie suchen Gebraucht-Möbel , Kleidung, eine neue Waschmaschine oder neue Pfannen und Töpfe. Wir bieten alles rund ums Haus – second-hand und günstig.
                    Egal, ob Sie sich mit gebrauchten Möbeln neu einrichten möchten oder ob Sie einfach nach schöner Dekoration schauen.
                    Das Sozialkaufhaus bei Köln und Bonn hat für jeden etwas passendes im Sortiment.
                </p>
            </section>
            <section className={styles.ebaySection}>
                <h2 className={styles.ebayHeadline}>Möbel-Angebote</h2>
                <p>Auf ebay-kleinanzeigen finden Sie alle Möbel die wir aktuell im Bestand haben</p>
                <Link target="_blank" href="https://www.ebay-kleinanzeigen.de/pro/das-soziale-kaufhaus"><button className={styles.ebayBTN}>zu ebay-kleinanzeigen <HiCursorClick/></button></Link>
            </section>
        </Fragment>
    )
}