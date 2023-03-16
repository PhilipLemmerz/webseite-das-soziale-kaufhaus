import { Fragment } from "react";
import styles from '../styles/components/footer.module.css';
import Image from "next/image";
import Link from "next/link";
import { IoMailUnreadOutline } from "react-icons/io5";
import { BsWhatsapp, BsInfoCircleFill, BsTelephone, BsFillCursorFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";

export default function FooterComponent() {
    const [menuMobile, setMenuMobile] = useState(false);
    const [menuInfo, setMenuInfo] = useState(false)

    return (
        <Fragment>
            <footer className={styles.footer}>
                <div className={styles.rowTop}>
                    <Link href="/"><Image className={styles.logoImage} src="/Logo Sozialkaufhaus Bonn white.png" alt="logo Footer Sozialkaufhaus Kön Bonn" width={200} height={100} /></Link>
                    <nav className={styles.linkBox}>
                        <h4>Weiterführende Links</h4>
                        <Link href="/gebraucht-moebel"><p className={styles.link}>Sortiment</p></Link>
                        <Link href="/entruempelung-bonn-koeln"><p className={styles.link}>Entrümpelung</p></Link>
                        <Link href="/umzugsunternehmen-bonn-koeln"><p className={styles.link}>Umzüge</p></Link>
                        <Link href="/moebelspende-bonn-koeln"><p className={styles.link}>Möbelabholung</p></Link>
                        <Link href="/kleiderspende-bonn-koeln"><p className={styles.link}>Sach- & Kleiderspende</p></Link>
                        <Link href="/ueber-uns"><p className={styles.link}>Über uns</p></Link>
                        <Link href="/karriere"><p className={styles.link}>Karriere</p></Link>
                    </nav>
                    <GiHamburgerMenu onClick={setMenuMobile.bind(this, true)} className={styles.menuBTN} />
                    <div className={styles.contactBox}>
                        <h4>Kontakt</h4>
                        <Link href="/kontakt"><p className={styles.link}> <BsFillCursorFill /> zum Kontaktformular</p></Link>
                        <p> <IoMailUnreadOutline /> info@dsk-nrw.de</p>
                        <p> <BsWhatsapp /> +49 (0) 151 423 859 89</p>
                        <p className={styles.firstPhoneNumber}><BsTelephone /> Swisttal: +49 (0) 2254 - 600 480 5</p>
                        <p><BsTelephone /> Bonn: +49 (0) 228 - 227 983 49</p>
                    </div>
                    <BsInfoCircleFill onClick={setMenuInfo.bind(this, true)} className={styles.infoBTN} />
                </div>
                <div className={styles.spacer}></div>
                <div className={styles.rowBottom}>
                    <Link href="/impressum"><p className={styles.link}>Impressum</p></Link>
                    <Link href="/datenschutz"><p className={styles.link}>Datenschutz</p></Link>
                </div>
                {menuMobile && <nav className={styles.menuMobile}>
                    <div className={styles.closeBTN} onClick={setMenuMobile.bind(this, false)}>
                        <AiOutlineCloseSquare />
                    </div>
                    <Link href="/"><Image className={styles.logoImage} src="/Logo Sozialkaufhaus Bonn white.png" alt="logo Footer Sozialkaufhaus Kön Bonn" width={200} height={100} /></Link>
                    <h4>Weiterführende Links</h4>
                    <Link href="/gebraucht-moebel"><p className={styles.link}>Sortiment</p></Link>
                    <Link href="/entruempelung-bonn-koeln"><p className={styles.link}>Entrümpelung</p></Link>
                    <Link href="/umzugsunternehmen-bonn-koeln"><p className={styles.link}>Umzüge</p></Link>
                    <Link href="/moebelspende-bonn-koeln"><p className={styles.link}>Möbelabholung</p></Link>
                    <Link href="/kleiderspende-bonn-koeln"><p className={styles.link}>Sach- & Kleiderspende</p></Link>
                    <Link href="/ueber-uns"><p className={styles.link}>Über uns</p></Link>
                    <Link href="/karriere"><p className={styles.link}>Karriere</p></Link>
                </nav>}
                {menuInfo && <div className={styles.infoMenu}>
                    <div className={styles.closeBTN} onClick={setMenuInfo.bind(this, false)}>
                        <AiOutlineCloseSquare />
                    </div>
                    <Link href="/"><Image className={styles.logoImage} src="/Logo Sozialkaufhaus Bonn white.png" alt="logo Footer Sozialkaufhaus Kön Bonn" width={200} height={100} /></Link>
                    <h4>Kontakt</h4>
                    <Link href="/kontakt"><p className={styles.link}> <BsFillCursorFill /> zum Kontaktformular</p></Link>
                    <p> <IoMailUnreadOutline /> info@dsk-nrw.de</p>
                    <p> <BsWhatsapp /> +49 (0) 151 423 859 89</p>
                    <p className={styles.firstPhoneNumber}><BsTelephone /> Swisttal: +49 (0) 2254 - 600 480 5</p>
                    <p><BsTelephone /> Bonn: +49 (0) 227 - 983 49</p>
                </div>}
            </footer>
        </Fragment>
    )
}