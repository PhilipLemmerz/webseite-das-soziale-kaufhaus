import { Fragment } from "react";
import styles from '../styles/impressum.module.css'

export default function Impressum() {
    return (
        <Fragment>
            <section className={styles.section}>
                <h3 className={styles.headline}>Verantwortlich für Das Soziale Kaufhaus Bonn:</h3>
                <p>
                    Das Soziale Kaufhaus gemeinnützige gmbH<br></br>
                    Deutschherrenstr. 197-201<br></br>
                    53179 Bonn<br></br>
                    Steuernummer: beantragt<br></br>
                    Amtsgericht Bonn HRB27635<br></br>
                    Geschäftsführer: Philip Lemmerz
                </p>
                <h4 className={styles.headlineContact}>Kontakt:</h4>
                <p>
                    Telefon: +49 228 22798349<br></br>
                    E-Mail: bonn@dsk-nrw.de
                </p>
                <h3 className={styles.headline}>Verantwortlich für Das Soziale Kaufhaus Swisttal:</h3>
                <p>
                    DSK Service gmbH<br></br>
                    Breniger Straße 3<b></b>
                    53913 Swisttal<br></br>
                    Steuernummer:  206/5913/1441<br></br>
                    Amtsgericht Bonn HRB23997<br></br>
                    Geschäftsführer: Jörg Lemmerz
                </p>
                <h4 className={styles.headlineContact}>Kontakt:</h4>
                <p>
                    Telefon: +49 2254 600 480 5<br></br>
                    E-Mail: swisstal@dsk-nrw.de
                </p>
                <h4 className={styles.tdgHeadline}>Haftungsausschluss und Datenschutz (TDG)</h4>
                <p>
                    1. Inhalt des Onlineangebotes Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens des Autors kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Alle Angebote sind freibleibend und unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
                    <br></br><br></br>
                    2. Urheber- und Kennzeichenrecht Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Grafiken, Tondokumente, Videosequenzen und Texte zu beachten, von ihm selbst erstellte Grafiken, Tondokumente, Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken, Tondokumente, Videosequenzen und Texte zurückzugreifen. Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer. Allein aufgrund der bloßen Nennung ist nicht der Schluss zu ziehen, dass Markenzeichen nicht durch Rechte Dritter geschützt sind! Das Copyright für veröffentlichte, vom Autor selbst erstellte Objekte bleibt allein beim Autor der Seiten. Eine Vervielfältigung oder Verwendung solcher Grafiken, Tondokumente, Videosequenzen und Texte in anderen elektronischen oder gedruckten Publikationen ist ohne ausdrückliche Zustimmung des Autors nicht gestattet.
                    <br></br><br></br>
                    3. Rechtswirksamkeit dieses Haftungsausschlusses
                    Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.
                </p>
            </section>
        </Fragment>
    )
}