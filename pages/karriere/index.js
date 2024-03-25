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
                        <h3>Zurzeit haben wir keine offenen Stellen</h3>
                    </div>
                </div>
            </section>
        </Fragment >
    )
}