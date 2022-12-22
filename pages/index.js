import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { Fragment } from 'react'
import styles from '../styles/Home.module.css';
import { BsCheck2, BsWhatsapp, BsTelephone } from "react-icons/bs";
import { IoMailUnreadOutline } from "react-icons/io5";

export default function HomePage() {
  return (
    <Fragment>
      <section className={styles.aboveFoldSection}>
        <div className={styles.aboveFoldRow}>
          <div className={styles.aboveFoldleftQuadratTop}>
            <Link className={styles.aboveFoldContent} href="/gebraucht-moebel">Sortiment & Möbel</Link>
          </div>
          <div className={styles.aboveFoldRightQuadratTop}>
            <Link className={styles.aboveFoldContent} href="/umzugsunternehmen-bonn-koeln">Umzug</Link>
          </div>
        </div>
        <div className={styles.aboveFoldRow}>
          <div className={styles.aboveFoldleftQuadratBottom}>
            <Link className={styles.aboveFoldContent} href="/entruempelung-bonn-koeln">Entrümpelung</Link>
          </div>
          <div className={styles.aboveFoldRightQuadratBottom}>
            <Link className={styles.aboveFoldContent} href="/moebelspende-bonn-koeln">Möbelabholung</Link>
          </div>
        </div>
      </section>
      <section className={styles.introductionSection}>
        <div className={styles.introductionSectionContent}>
          <h1 className={styles.headline}> Ihr Sozialkaufhaus für Bonn & Köln</h1>
          <p className={styles.subheadline}> alles second-hand & günstig</p>
          <p>
            Im Sozialkaufhaus bei Köln und Bonn finden Sie Gebraucht-Möbel, Haushaltswaren, second-hand Kleidung und viele weitere Artikel rund um Haus und Haushalt -
            alles second-hand & günstig. Auch haben wir immer ein großes Angebot an Deko-Artikeln, Gläsern, Vasen, Porzellan & besonderen antiquarischen Artkieln. Unser gesamtes
            Sortiment beziehen wir durch Haushaltsauflösungen & Möbelabholungen im Raum Köln & Bonn sowie durch Sachspenden die im Sozialkaufhaus abgegeben werden. Auf diesem Weg
            können wir Mobiliar Haushaltswaren und Kleidung wiederverwerten das anderenfalls entsorgt werden müsste. Seit über 15 Jahren können wir mit unserem Konzept nachhaltig
            bedürftige Personen untersützen.
          </p>
        </div>
      </section>
      <section className={styles.productsSection}>
        <div className={styles.products}>
          <div>
            <Image height={400} width={800} className={styles.productsImage} alt="sortiment Sozialkaufhaus Koeln Bonn" src="/sozialkaufhaus-bonn-koeln-moebel-header.jpg"></Image>
          </div>
          <div className={styles.productsContent}>
            <h3 className={styles.productsHeadline}>Möbel & mehr</h3>
            <p className={styles.productsText}>Sortiment unserer Sozialkaufhäuser</p>
            <Link href="/gebraucht-moebel"><button className={styles.productsBTN}> jetzt entdecken </button></Link>
          </div>
        </div>
      </section>
      <section className={styles.serviceSection}>
        <div className={styles.serviceSectionContent}>
          <h2 className={styles.servicesHeadline}>Unsere Leistungen im Überblick</h2>
          <p className={styles.serviceParagraph}>
            Ob Entrümpelung, Umzug oder die kostenfreie Abholung Ihres Mobiliars. Ihr Sozialkaufhaus Köln/Bonn unterstützt Sie gerne mit über 15 Jahre Erfahrung.
            Persönlich vor Ort oder kontaktfrei & digital - Wir beraten Sie kostenfrei und unverbindlich bei Ihrem Umzug oder Ihrer Entrümpelung.
          </p>
          <div className={styles.servicesBox}>
            <div className={styles.clearingService}>
              <Image className={styles.serviceImage} src="/entrümpelung-sozialkaufhaus-koeln-bonn-header.jpg" alt="Entrümpelung mit Sozialkaufhaus Köln Bonn" width={300} height={200}></Image>
              <div className={styles.cardContent}>
                <h3>Entrümpelung</h3>
                <ul className={styles.serviceList}>
                  <li><BsCheck2 className={styles.checkIcon} /> kostenfreie Beratung</li>
                  <li><BsCheck2 className={styles.checkIcon} /> Entrümpelung zum Festpreis</li>
                  <li><BsCheck2 className={styles.checkIcon} /> Wiederverwertung Ihres Mobiliars</li>
                </ul>
                <Link href="/entruempelung-bonn-koeln"><button className={styles.serviceBTN}>jetzt informieren </button></Link>
              </div>
            </div>
            <div className={styles.clearingService}>
              <Image className={styles.serviceImage} src="/moebelspende-koeln-bonn-header.jpg" alt="Möbelspende Köln und Bonn" width={300} height={200}></Image>
              <div className={styles.cardContent}>
                <h3>kostenfreie Möbelabholung</h3>
                <ul className={styles.serviceList}>
                  <li><BsCheck2 className={styles.checkIcon} /> Bedürftige Menschen profitieren</li>
                  <li><BsCheck2 className={styles.checkIcon} /> 100% kostenfrei</li>
                  <li><BsCheck2 className={styles.checkIcon} /> professionell & versichert</li>
                </ul>
                <button className={styles.serviceBTN}>jetzt informieren </button>
              </div>
            </div>
            <div className={styles.clearingService}>
              <Image className={styles.serviceImage} src="/sozialkaufhaus-umzugsunternehmen-koeln-bonn.jpg" alt="Umzugsunternehmen Köln & Bonn" width={300} height={200}></Image>
              <div className={styles.cardContent}>
                <h3>Umzug & Transport</h3>
                <ul className={styles.serviceList}>
                  <li><BsCheck2 className={styles.checkIcon} /> kostenfreie Beratung</li>
                  <li><BsCheck2 className={styles.checkIcon} /> Umzug zum Festpreis</li>
                  <li><BsCheck2 className={styles.checkIcon} /> professionell & versichert</li>
                </ul>
                <button className={styles.serviceBTN}>jetzt informieren </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.donatesSection}>
        <div className={styles.donate}>
          <div className={styles.donateContent}>
            <h3 className={styles.donateHeadline}>Kleiderspenden & Sachspenden</h3>
            <p className={styles.donateText}>wir nehmen Ihre Spenden an & Bedürftige aus unserer Region profitieren</p>
            <button className={styles.donateBTN}> jetzt informieren </button>
          </div>
          <div>
            <Image height={400} width={800} className={styles.donateImage} alt="Kleiderspenden & Sachspenden in Bonn und Swisttal" src="/kleider-spenden-sachspenden-bonn-swisttal.jpg"></Image>
          </div>
        </div>
      </section>
      <section className={styles.storeSection}>
        <h2>Unser Sozialkaufhaus in Bonn & Swisttal</h2>
        <div className={styles.locationBox}>
          <div className={styles.locationContent}>
            <h3 className={styles.headlineStore}> Sozialkaufhaus Swisttal bei Köln</h3>
            <p>
              Im Sozialkaufhaus Swisttal bei Köln versorgen wir mittlerweile seit über 15 Jahren bedürftige Menschen mit Gebraucht-Möbel Haushaltswaren & Kleidung.
              Angefangen mit einer 800 Quadratmeter großen Austellungsfläche, konnten wir das Sozialkaufhaus Swisttal aufgrund des hohen Bedarf an Gebraucht-Möbel
              auf mittelerweile auf über 3000 Quadratmeter ausbauen. Mittlerweile ist das Sozialkaufhaus in Swisttal bei Köln eines der größten Second-Hand Kaufhäuser
              in Deutschland.
            </p>
            <ul className={styles.storeItemList}>
              <li><BsCheck2 className={styles.checkIcon} /> 3000+ Quadratmeter</li>
              <li><BsCheck2 className={styles.checkIcon} /> zwischen Köln & Bonn gelegen</li>
              <li><BsCheck2 className={styles.checkIcon} /> 1000+ Möbelstücke täglich verfügbar</li>
              <li><BsCheck2 className={styles.checkIcon} /> große Kleiderabteilung & Haushaltswarenabteilung</li>
            </ul>
            <div className={styles.contactBox}>
              <h4> Kontaktinformation</h4>
              <ul className={styles.contactList}>
                <li className={styles.contactListItem}>< BsTelephone className={styles.test} /> +49 (0) 2254 - 600 485 5</li>
                <li className={styles.contactListItem}><IoMailUnreadOutline className={styles.test} /> info@dsk-nrw.de</li>
                <li className={styles.contactListItem}><BsWhatsapp className={styles.test} /> +49 (0) 151 423 859 89</li>
              </ul>
            </div>
          </div>
          <Image className={styles.storeImageHeimerzheim} src="/sozialkaufhaus-swisttal-bei-koeln.jpg" alt="Sozialkaufhaus Swisttal bei Koeln" width={500} height={350}></Image>
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.locationBox}>
          <Image className={styles.storeImageLannesdorf} src="/sozialkaufhaus-bonn.jpg" alt="Sozialkaufhaus Swisttal bei Koeln" width={500} height={350}></Image>
          <div className={styles.locationContent}>
            <h3 className={styles.headlineStore}> Sozialkaufhaus Bonn</h3>
            <p>
              Das Sozialkaufhaus Bonn ist etwas kleiner als das Sozialkaufhaus in Swisttal. Trotzdem finden Sie auf 1800 Quadratmetern eine große Auswahl an Gebraucht-Möbel
              und vor allem Second-Hand Kleidung und Haushaltswaren. Denn hier hat das Bonner Sozialkaufhaus eine besonders umfangreiche Auswahl.
              Insbesondere die knapp 500 Quadratmeter große Kleiderabteilung bietet eine große Auswahl an Second-Hand Kleidung an.
              Ob Pullover, Jacken, Schuhe oder Hemden. Hier ist für jeden etwas dabei. Aber auch Dekoration und Haushaltswaren wie Pfannen, Töpfe und Elektrogeräte
              finden Sie in Bonn in großer Anzahl.
            </p>
            <ul className={styles.storeItemList}>
              <li><BsCheck2 className={styles.checkIcon} /> 1800+ Quadratmeter</li>
              <li><BsCheck2 className={styles.checkIcon} /> in Bonn Lannesdorf</li>
              <li><BsCheck2 className={styles.checkIcon} /> 500+ Möbelstücke täglich verfügbar</li>
              <li><BsCheck2 className={styles.checkIcon} /> große Kleiderabteilung & Haushaltswarenabteilung</li>
            </ul>
            <div className={styles.contactBox}>
              <h4> Kontaktinformation</h4>
              <ul className={styles.contactList}>
                <li className={styles.contactListItem}>< BsTelephone className={styles.test} /> +49 (0) 228 - 227 983 47</li>
                <li className={styles.contactListItem}><IoMailUnreadOutline className={styles.test} /> info@dsk-nrw.de</li>
                <li className={styles.contactListItem}><BsWhatsapp className={styles.test} /> +49 (0) 151 423 859 89</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
