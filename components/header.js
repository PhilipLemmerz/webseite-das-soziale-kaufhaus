import { Fragment } from "react";
import Image from "next/image";
import styles from "../styles/components/header.module.css"
import Link from "next/link";
import { GoLocation } from "react-icons/go";
import { BiTimeFive } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoMailUnreadOutline } from "react-icons/io5";
import { BsWhatsapp, BsInfoCircleFill, BsTelephoneForward } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'

export default function HeaderComponent() {
    const [infoSlider, setinfoSlider] = useState(false);
    const [menu, setMenu] = useState(false);
    const [scrollMenu, setScrollMenu] = useState(false);
    const [scrolledY, setScrolled] = useState(0);
    const [callInfo, setCallInfo] = useState(false);

    const router = useRouter();
    const page = router.pathname;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY)
        }
        window.addEventListener("scroll", handleScroll);

        if (page === '/' && scrolledY > 300 || page === '/gebraucht-moebel' && scrolledY > 300 || page === "/entruempelung-bonn-koeln" && scrolledY > 900) {
            activateScrollMenu()
        } else {
            deactivateScrollMenu()
        }
    });

    function activateScrollMenu() {
        setScrollMenu(true);
    }

    function deactivateScrollMenu() {
        setScrollMenu(false);
    }

    return (
        <Fragment>
            <header className={styles.header}>
                <div className={styles.headerHead}>
                    <Link href="/"><Image src="/logo-sozialkaufhaus-bonn-koeln.png" alt="Logo Sozialkaufhaus Koeln Bonn" className={styles.logo} height={100} width={150}></Image></Link>
                    <div className={styles.headerHeadData}>
                        <div className={styles.contentBox}>
                            <GoLocation className={styles.icon} />
                            <div>
                                <p className={styles.headlineBox}>Sozialkaufhaus Swisttal</p>
                                <p>Breniger Straße 3</p>
                                <p>53913 Swisttal</p>
                                <p>Tel: 02254 - 600 480 5</p>
                            </div>
                        </div>
                        <div className={styles.contentBox}>
                            <GoLocation className={styles.icon} />
                            <div>
                                <p className={styles.headlineBox}>Sozialkaufhaus Bonn</p>
                                <p>Deutschherrenstraße 197-201</p>
                                <p>53179 Bonn</p>
                                <p>Tel: 0228 - 227 983 49</p>
                            </div>
                        </div>
                        <div className={styles.contentBoxSecondary}>
                            <BiTimeFive className={styles.icon} />
                            <div>
                                <p className={styles.headlineBox}>Öffnungszeiten:</p>
                                <p>Mo. bis Fr.: 9:30 Uhr bis 18 Uhr</p>
                                <p>Sa.: 9:30 Uhr bis 16 Uhr</p>
                            </div>
                        </div>
                        <div className={styles.contentBoxSecondary}>
                            <TbMessageCircle className={styles.icon} />
                            <div>
                                <p className={styles.headlineBox}>Kontakt</p>
                                <p className={styles.mailP}> <IoMailUnreadOutline className={styles.iconMail} /> info@dsk-nrw.de</p>
                                <p className={styles.mailP}> <BsWhatsapp className={styles.iconWhatsApp} /> +49 (0) 151 423 859 89</p>
                            </div>
                        </div>
                        <div onClick={setinfoSlider.bind(this, true)} className={styles.contentBoxInfoIcon}>
                            <BsInfoCircleFill />
                        </div>
                    </div>
                </div>
                {infoSlider && <div className={styles.infoSlider}>
                    <div className={styles.closeBTN} onClick={setinfoSlider.bind(this, false)}>
                        <AiOutlineCloseSquare />
                    </div>
                    <div className={styles.sliderContentBox}>
                        <BiTimeFive className={styles.icon} />
                        <div>
                            <p className={styles.headlineBox}>Öffnungszeiten:</p>
                            <p>Mo. bis Fr.: 9:30 Uhr bis 18 Uhr</p>
                            <p>Sa.: 9:30 Uhr bis 16 Uhr</p>
                        </div>
                    </div>
                    <div className={styles.sliderContentBox}>
                        <TbMessageCircle className={styles.icon} />
                        <div>
                            <p className={styles.headlineBox}>Kontakt</p>
                            <p className={styles.mailP}> <IoMailUnreadOutline className={styles.iconMail} /> info@dsk-nrw.de</p>
                            <p className={styles.mailP}> <BsWhatsapp className={styles.iconWhatsApp} /> +49 (0) 151 423 859 89</p>
                        </div>
                    </div>
                </div>}
                {menu && <div className={styles.mobileMenu}>
                    <div className={styles.closeBTN} onClick={setMenu.bind(this, false)}>
                        <AiOutlineCloseSquare />
                    </div>
                    <Link href="/gebraucht-moebel" className={styles.navLinkMobile}>Sortiment</Link>
                    <Link href="/entruempelung-bonn-koeln" className={styles.navLinkMobile}>Entrümpelungen</Link>
                    <Link href="/umzugsunternehmen-bonn-koeln" className={styles.navLinkMobile}>Umzüge</Link>
                    <Link href="/" className={styles.navLinkMobile}>Möbelabholungen</Link>
                    <Link href="/" className={styles.navLinkMobile}>Über uns</Link>
                    <Link href="/" className={styles.navLinkMobile}>Kontakt</Link>
                    <Link href="/" className={styles.navLinkMobile}>Karriere</Link>
                </div>
                }
                {scrollMenu && <nav className={styles.navigationScrolledBox}>
                    <div className={styles.navigationScrolled}>
                        <Link href="/gebraucht-moebel" className={styles.navLink}>Sortiment</Link>
                        <Link href="/entruempelung-bonn-koeln" className={styles.navLink}>Entrümpelungen</Link>
                        <Link href="/umzugsunternehmen-bonn-koeln" className={styles.navLink}>Umzüge</Link>
                        <Link href="/" className={styles.navLink}>Möbelabholungen</Link>
                        <Link href="/" className={styles.navLink}>Über uns</Link>
                        <Link href="/" className={styles.navLink}>Kontakt</Link>
                        <Link href="/" className={styles.navLink}>Karriere</Link>
                        <div onClick={setMenu.bind(this, true)} className={styles.menuHamburger}>
                            <GiHamburgerMenu />
                        </div>
                    </div>
                    {page !== '/entruempelung-bonn-koeln' && <button onClick={setCallInfo.bind(this, true)} className={styles.contactBTNscrolledMenu}><BsTelephoneForward /> jetzt anrufen </button>}
                </nav>
                }
                <nav className={styles.navigationBox}>
                    <div className={styles.navigation}>
                        <Link href="/gebraucht-moebel" className={styles.navLink}>Sortiment</Link>
                        <Link href="/entruempelung-bonn-koeln" className={styles.navLink}>Entrümpelungen</Link>
                        <Link href="/umzugsunternehmen-bonn-koeln" className={styles.navLink}>Umzüge</Link>
                        <Link href="/" className={styles.navLink}>Möbelabholungen</Link>
                        <Link href="/" className={styles.navLink}>Über uns</Link>
                        <Link href="/" className={styles.navLink}>Kontakt</Link>
                        <Link href="/" className={styles.navLink}>Karriere</Link>
                        <div onClick={setMenu.bind(this, true)} className={styles.menuHamburger}>
                            <GiHamburgerMenu />
                        </div>
                    </div>
                </nav>
                {callInfo && <div className={styles.callInfoBox}>
                    <div className={styles.closeBTN} onClick={setCallInfo.bind(this, false)}>
                        <AiOutlineCloseSquare />
                    </div>
                    <div>
                        <p>Filiale Swisttal:</p>
                        <p className={styles.phoneNumber}><BsTelephoneForward />  +49 (0) 2254 600 480 5  </p>
                    </div>
                    <div>
                        <p>Filiale Bonn:</p>
                        <p className={styles.phoneNumber}><BsTelephoneForward /> +49 (0) 228 227 983 49 </p>
                    </div>
                </div>}
            </header>
        </Fragment>
    )
}   