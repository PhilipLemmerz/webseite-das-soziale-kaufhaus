import { Fragment } from "react";
import styles from '../styles/karriere.module.css';
import Head from "next/head";

export default function KarrierePage() {
    return (
        <Fragment>
            <Head>
                <title>Karriere & Jobs im Sozialkaufhaus Bonn und Swisttal</title>
                <meta name="description" content="Offene Stellen und Jobs im Sozialkaufhaus Bonn & Swisttal - Wir freuen uns auf Ihrer Bewerbung" />
            </Head>
            <section className={styles.section}>
                <h1> Unsere Stellen-Angebote:</h1>
                <p> Zurzeit haben wir keine offenen Stellen.</p>
            </section>
        </Fragment>
    )
}