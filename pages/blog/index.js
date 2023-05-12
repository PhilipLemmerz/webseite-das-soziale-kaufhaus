import { Fragment } from "react"
import styles from '../../styles/blog/index.module.css'
import Head from "next/head"
import Image from "next/image"
import Link from 'next/link';

export default function BlogPage() {
    return (
        <Fragment>
            <Head>
                <title>Blog mit Tipps und Tricks rund um das Thema Entrümpelung & Umzug im Raum Köln Bonn</title>
                <meta name="description" content="Wir unterstützen Sie bei Ihrer Entrümpelung und Ihrem Umzug im Raum Köln und Bonn - Informieren Sie sich gerne in unseren Ratgeberartikeln" />
            </Head>
            <section className={styles.pageWrapper}>
                <h1>Artikelübersicht</h1>
                <div className={styles.articleRow}>
                    <Link href="/blog/entruempelung-koeln-bonn">
                        <div className={styles.article}>
                            <Image className={styles.articleImage} src="/entruempelung-bonn-koeln-artikel.webp" alt="gebraucht-moebel Sozialkaufhaus Köln Bonn" width={600} height={300}></Image>
                            <div className={styles.textWrapper}>
                                <h3 className={styles.articleHeadline}>Leitfaden für Ihre Entrümpelung</h3>
                                <p>In diesem Artikel informieren wir Sie wie Sie Ihre Entrümpelung in Köln Bonn erfolgreich durchführen und auf welche Schritte Sie achten müssen</p>
                            </div>
                        </div>
                    </Link>

                </div>


            </section>
        </Fragment>
    )

}