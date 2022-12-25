import { Fragment } from "react";
import styles from '../styles/about.module.css';
import Image from "next/image";

export default function AboutPage() {
    return (
        <Fragment>
            <section className={styles.aboveTheFoldSection}>
                <div className={styles.aboveFoldContent}>
                    <h1 className={styles.headline}>Über unser Sozialkaufhaus für Köln/Bonn</h1>
                    <div className={styles.headerContentBox}>
                        Wir verwerten gut erhaltene Gebraucht-Möbel, Haushaltswaren, Kleidung und
                        Second-Hand Artikel und unterstützen hiermit Studenten, Rentner und bedürftigen
                        Personen in unserer Region.
                    </div>
                </div>
                <Image className={styles.headerImage} src="/sozialkaufhaus-koeln-bonn-team.jpg" alt="Sozialkaufhaus Köln Bonn Team" width={500} height={350}></Image>
            </section>
            <section className={styles.historySection}>
                <h2 className={styles.headlineHistory}>Geschichte der Sozialkaufhäuser bei Köln und Bonn</h2>
                <p className={styles.historyP}>
                    Seit über 15 Jahren sind wir mittlerweile im Bereich Entrümpelung  für Sie unterwegs.
                    Kurze Zeit später haben wir das erste privatrechtliche Sozialkaufhaus im Kreis Bonn Rhein
                    Sieg gegründet. Bis heute versorgen wir mit unseren Sozialkaufhaus bei Köln und Bonn viele
                    bedürftige Menschen aus der Region mit Gebraucht-Möbeln und Haushaltswaren.
                </p>
                <div className={styles.historyWrapper}>
                    <h3 className={styles.historyH3First}>2006 – Gründung Dienstleistungsunternehmen für Entrümpelung und Haushaltsauflösungen</h3>
                    <p>
                        2006 haben wir mit der Durchführung von Entrümpelungen und Haushaltsauflösungen
                        begonnen. Die Nachfrage war hoch und schnell wurde uns eine Tatsache bewusst.
                        Bei fast jeder Entrümpelung in Köln und Bonn mussten wir schöne, gepflegte und
                        gut erhaltene Möbel entsorgen. Gebraucht-Möbel, über welche sich viele bedürftige
                        Menschen freuen würden. Je mehr Haushaltsauflösungen wir durchführten, umso mehr
                        wurde uns dieser Umstand bewusst. Also machten wir uns auf die Suche nach einer
                        Lösung, um die Möbel zu recyceln und bedürftigen Menschen damit zu helfen.
                    </p>
                    <h3 className={styles.historyH3}>2007 bis 2009 – Aufbau des ersten Sozialkaufhaus in Swistal bei Köln</h3>
                    <p>
                        gut erhaltene Möbel zu recyclen und bedürftigen Menschen zur Verfügung zu stellen –
                        Das war unsere Mission, mit welcher wir das erste unserer Sozialkaufhäuser 2007 in Swisttal
                        bei Köln eröffnet hatten. Fast ein ganzes Jahr hat es gedauert, bis wir 2008 unser erstes
                        Sozialkaufhaus eröffnen konnten. Auf ca. 1500 Quadratmeter Ladenfläche boten wir Gebraucht-Möbel,
                        Haushaltswaren und Second-Hand Kleidung an. Artikel mit einem grünen Punkt durften die Kunden
                        gratis mitnehmen. Wir haben gehofft, dass möglichst viele Kunden den Weg nach Heimerzheim
                        finden und genügend Nachfrage an unserem neuen Angebot besteht. Natürlich mussten erstmal
                        Menschen auf uns und unser Angebot aufmerksam werden. Das Kunden Aufkommen wuchs und wir merkten,
                        dass der Bedarf an günstigen Gebraucht-Möbeln und Haushaltswaren in Köln und Bonn sehr groß ist.
                        Zudem konnten wir durch die Verwertung der Gebraucht-Möbel Entsorgungskosten einsparen und eine
                        Entrümpelung aus diesem Grund günstiger anbieten. So konnten wir mehr Mobiliar für unser
                        Sozialkaufhaus sammeln.
                    </p>
                    <h3 className={styles.historyH3}>2009 – Start unseres Umzugsunternehmen für Köln und Bonn</h3>
                    <p>
                        Häufig benötigten unsere Kunden nicht nur Hilfe bei Ihrer Entrümpelung in Köln
                        und Bonn, sondern auch bei der Durchführung des Umzugs. Aus diesem Grund
                        erweiterten wir unser Angebot 2009 um die Durchführung von Umzügen. Häufig
                        sind bei einem Umzug auch Möbel zu verschenken, da nicht das gesamte Mobiliar
                        in die neue Wohnung mitgenommen werden kann. Hier kommt unser  Sozialkaufhaus
                        bei Köln wieder ins Spiel. Da bei Umzügen vermehrt sehr moderne Möbel abgegeben
                        werden, konnten wir unser Angebot im Sozialkaufhaus weiter ausbauen und
                        neue Kunden gewinnen.
                    </p>
                    <h3 className={styles.historyH3}>2009 – kostenfreie Abholung Ihrer Möbelspende</h3>
                    <p>
                        Insbesondere an modernen Schränken, Sofas und Betten bestand eine enorme Nachfrage.
                        Diese konnten wir mit den vorhandenen Mobiliar in unserem Sozialkaufhaus gar nicht
                        decken. Zudem möchten viele Menschen gerne Ihr gut erhaltenes Sofa oder Ihren
                        Schrank aufgrund einer Neuanschaffung abgeben. Der alte Schrank wird dann häufig
                        leider auf den Sperrmüll gestellt oder entsorgt. Um die Nachfrage an Möbeln in
                        unserem Sozialkaufhaus zu decken, holen wir Ihre Möbelspende bis heute kostenfrei ab.
                        Der Spender profitiert, da er den Schrank nicht demontieren und auf die Straße stellen
                        muss und wir haben neues Mobiliar für unsere Kunden.
                    </p>
                    <h3 className={styles.historyH3}>2010 – Eröffnung des zweiten Sozialkaufhaus in Bonn Beuel</h3>
                    <p>
                        Einen großen Nachteil hatte unser Swisttaler Sozialkaufhaus –
                        Ohne Auto ist das Sozialkaufhaus schwierig zu erreichen. Zudem erhielten wir mehr
                        Anfragen von Kunden, welche Ihre Möbel zu verschenken hatten.
                        Um auch auch den Gebraucht-Möbel Bedarf in Bonn zu decken, eröffneten wir unser
                        zweites Sozialkauhaus in Bonn-Beuel.
                    </p>
                    <h3 className={styles.historyH3}>2012 – Unser Sozialkaufhaus zieht um nach Lannesdorf</h3>
                    <p>
                        Seit 2012 sind wir nun in Bonn Lannesdorf für Sie da. Viele Bonner Studenten und
                        Rentner profitieren von unserem günstigen Gebraucht-Möbel und Haushaltswaren
                        Angebot in Lannesdorf. Auch unser Sortiment an Kleidung und Porzellan haben wir
                        aufgrund der hohen Nachfrage in Lannesdorf weiter ausbauen können.
                    </p>
                    <h3 className={styles.historyH3}>2012 – Sozialkaufhaus Swistal wird doppelt so groß</h3>
                    <p>
                        2012 hatten wir zudem die Möglichkeit unser Sozialkaufhaus in Swisttal bei
                        Köln um nochmals 1500 Quadratmeter zu vergrößern.
                        Heute haben wir in Swisttal mehr als 400 Gebraucht-Möbel täglich im Angebot.
                        Aufgrund diesem umfassenden Angebot finden mittlerweile Kunden aus dem gesamten
                        Rhein Sieg- & Erft Kreis den Weg nach Swistal Heimerzheim.
                    </p>
                    <h3 className={styles.historyH3}>2023 – Sozialkaufhaus Bonn wird gemeinnützig</h3>
                    <p>
                        Ab dem 01.01.2023 wird unser Sozialkaufhaus in Bonn gemeinnützig. Wir werden unser
                        Angebot in 2023 weiter ausbauen und hoffen mithilfe der Gemeinützigkeit unsere Kunden
                        noch besser mit Möbeln, Haushaltswaren und Kleidung unterstützen zu können.
                    </p>
                </div>
            </section>
        </Fragment>
    )
}