import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import styles from '../styles/Home.module.css'

export default function HomePage() {
  return (
    <Fragment>
      <section className={styles.aboveFoldSection}>
        <div className={styles.aboveFoldRow}>
          <div className={styles.aboveFoldleftQuadratTop}>
            <p className={styles.aboveFoldContent}>Sortiment & Möbel</p>
          </div>
          <div className={styles.aboveFoldRightQuadratTop}>
            <p className={styles.aboveFoldContent}> Umzüge & Transporte</p>
          </div>
        </div>
        <div className={styles.aboveFoldRow}>
          <div className={styles.aboveFoldleftQuadratBottom}>
            <p className={styles.aboveFoldContent}>Haushaltsauflösungen</p>
          </div>
          <div className={styles.aboveFoldRightQuadratBottom}>
            <p className={styles.aboveFoldContent}>kotenfreie Möbelabholungen</p>
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
      <section className={styles.serviceSection}>
        <div className={styles.products}>
          <div>
            <Image height={400} width={800} className={styles.productsImage} alt="sortiment Sozialkaufhaus Koeln Bonn" src="/sozialkaufhaus-bonn-koeln-moebel-header.jpg"></Image>
          </div>
          <div className={styles.productsContent}>
            <h3 className={styles.productsHeadline}>Möbel & mehr</h3>
            <p className={styles.productsText}>Sortiment unserer Sozialkaufhäuser</p>
            <button className={styles.productsBTN}> jetzt entdecken </button>
          </div>
        </div>
        <div className={styles.clearing}>
          <div className={styles.clearingContent}>
            <h3 className={styles.productsHeadline}>Entrümpelungen</h3>
            <p className={styles.productsText}>nachhaltig inkl. verwertung Ihres Mobiliars</p>
            <button className={styles.productsBTN}> jetzt informieren </button>
          </div>
          <div>
            <Image height={400} width={800} className={styles.clearingImage} alt="Entrümpelung in Köln und Bonn" src="/entrümpelung-sozialkaufhaus-koeln-bonn-header.jpg"></Image>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
