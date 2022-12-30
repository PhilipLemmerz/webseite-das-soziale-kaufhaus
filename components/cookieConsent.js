import React, { Fragment, useEffect, useState } from 'react';
import { setCookie, hasCookie } from 'cookies-next';
import styles from '../styles/components/cookieConsent.module.css';
import Link from 'next/link';

export default function CookieConsent(props) {
    const [consent, setConsent] = useState(true);
    const [cofigCookies, setConfigCookies] = useState(false)
    const [analyticsCookies, setAnalyticsCookies] = useState(false);
    const [marketingCookies, setMarketingCookies] = useState(false);

    useEffect(() => {
        setConsent(hasCookie('localConsent'));
    }, []);

    async function acceptCookie() {
        setConsent(true);
        setCookie('localConsent', 'true', { maxAge: 60 * 60 * 24 * 365 });
        await gtag('consent', 'update', {
            ad_storage: 'granted',
            analytics_storage: 'granted',
        });
        dataLayer.push({event: "gtm.historyChange"});
    };

    async function configureCookies() {
        setConsent(true);
        if (marketingCookies) {
            setCookie('localConsent', 'false', { maxAge: 60 * 60 * 24 * 365 });
            setCookie('marketingConsent', 'true', { maxAge: 60 * 60 * 24 * 365 });
            await gtag('consent', 'update', {
                ad_storage: 'granted',
            });
            dataLayer.push({event: "gtm.historyChange"});
        };
        if (analyticsCookies) {
            setCookie('localConsent', 'false', { maxAge: 60 * 60 * 24 * 365 });
            setCookie('analyticsConsent', 'true', { maxAge: 60 * 60 * 24 * 365 });
            await gtag('consent', 'update', {
                analytics_storage: 'granted',
            });
            dataLayer.push({event: "gtm.historyChange"});
        }
    }

    function denyCookie() {
        setConsent(true);
        setCookie('localConsent', 'false', { maxAge: 60 * 60 * 24 * 365 });
    };

    function closeConfig() {
        setConfigCookies(false);
    }

    if (consent === true) {
        return null;
    }

    return (
        <Fragment>
            <div className={styles.cookieConsent}>
                <p className={styles.headline}> Wir benutzen Cookies, um unser Webangebot für Sie zu verbessern</p>
                <div className={styles.cookieBanner}>
                    <button onClick={setConfigCookies.bind(this, true)} className={styles.configureBTN} > Einstellungen </button>
                    <button onClick={denyCookie} className={styles.denieBTN}> ablehnen</button>
                    <button onClick={acceptCookie} className={styles.acceptBTN}> Alles akzeptieren </button>
                </div>
            </div>
            {cofigCookies && <form className={styles.cookieConfigBox} onSubmit={configureCookies}>
                <div className={styles.configContentBox}>
                    <h2 className={styles.headlineConfig}> Welche Cookies dürfen wir verwenden?</h2>
                    <p className={styles.text}> Wir nutzen Cookies um unseren Internetauftritt immer weiter zu verbessern. Durch Ihr Feedback können wir auswerten, welche Inhalte für unsere Nutzer interessant
                        sind und unsere Werbebotschaften interessanter und ansprechender gestalten. Alle Informationen zum Datenschutz und zu Cookies
                        finden Sie in unserer <u><Link href="/datenschutzerklärung">Datenschutzerklärung</Link></u>.
                         Vielen Dank für Ihre Hilfe!
                    </p>
                    <div className={styles.settingsController}>
                        <div className={styles.settingBox}>
                            <label className={styles.label} htmlFor='securityCookies'> Sicherheit </label>
                            <input id="securityCookies" className={styles.inputConfig} type="checkbox" defaultChecked disabled></input>
                        </div>
                        <div className={styles.settingBox}>
                            <label className={styles.label} htmlFor='analysisCookie'> Analyse </label>
                            <input className={styles.inputConfig} id="analysisCookie" type="checkbox" onChange={setAnalyticsCookies.bind(this, !analyticsCookies)} />
                        </div>
                        <div className={styles.settingBox}>
                            <label className={styles.label} htmlFor='marketingCookie'> Marketing </label>
                            <input className={styles.inputConfig} id="marketingCookie" type="checkbox" onChange={setMarketingCookies.bind(this, !marketingCookies)} />
                        </div>
                    </div>
                    <div className={styles.buttonBox}>
                        <button className={styles.closeConfig} onClick={closeConfig}>abbrechen</button>
                        <button className={styles.submitSettingsBTN} onClick={props.onSubmit}>speichern</button>
                    </div>
                </div>
            </form>}
        </Fragment>
    );
}