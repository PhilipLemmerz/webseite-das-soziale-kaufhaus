import { Fragment } from "react"
import styles from '../../styles/danke.module.css'

export default function DankePage() {
    return (
        <Fragment>
            <section className={styles.section}>
                <h1> Vielen Dank für Ihre Bewerbung</h1>
                <p> Wir werden uns schnellstmöglich bei Ihnen zurückmelden</p>
            </section>
        </Fragment>
    )
}