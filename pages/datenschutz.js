import { Fragment } from "react";
import Link from "next/link";
import styles from '../styles/datenschutz.module.css';

export default function DatenschutzPage() {
    return (
        <Fragment>
            <section className={styles.section}>
                <h1 className={styles.headline}>
                    Datenschutzerklärungen
                </h1>
                <p>
                    Unsere Sozialkaufhäuser werden von zwei unterschiedlichen Gesellschaften betrieben. Über die unten stehenden Links kommmen Sie zur Datenschutzerklärung der
                    jeweiligen Filiale.
                </p>
                <div className={styles.locationWrapper}>
                    <div className={styles.locationBox}>
                        <h4> Das Soziale Kaufhaus Bonn</h4>
                        <p>Gesellschaft: Das Soziale Kaufhaus gGmbH</p>
                        <Link href="/datenschutz-bonn"><button className={styles.btn}>zur Datenschutzerklärung</button></Link>
                    </div>
                    <div className={styles.locationBox}>
                        <h4> Das Soziale Kaufhaus Swisttal</h4>
                        <p>Gesellschaft: DSK Service gmbH</p>
                        <Link href="/datenschutz-swisttal"><button className={styles.btn}>zur Datenschutzerklärung</button></Link>
                    </div>

                </div>
            </section>
        </Fragment>
    )
}