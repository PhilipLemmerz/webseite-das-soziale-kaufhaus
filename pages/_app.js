import '../styles/globals.css'
import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'
import Head from 'next/head'
import { Fragment, useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import CookieConsent from '../components/cookieConsent'
import Script from 'next/script';
import { getCookie } from 'cookies-next';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const page = router.pathname;
  const [headerAndFooter, setHeaderAndFooter] = useState(true);

  useEffect(() => {
    if (page.includes('admin')) {
      setHeaderAndFooter(false)
    } else {
      setHeaderAndFooter(true);
    }

    const consentAll = getCookie('localConsent');
    const consentMarketing = getCookie('marketingConsent');
    const consentAnalytics = getCookie('analyticsConsent');

    if (consentAll === true) {
      gtag('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
      });
      dataLayer.push({ event: "gtm.historyChange" });
    }
    if (consentMarketing === true) {
      gtag('consent', 'update', {
        ad_storage: 'granted',
      });
      dataLayer.push({ event: "gtm.historyChange" });
    }
    if (consentAnalytics === true) {
      gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
      dataLayer.push({ event: "gtm.historyChange" });
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconDSK.png" />
      </Head>
      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: ` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'functionality_storage': 'denied',
          });

          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-KSH9RQJ');`,
        }}
      />
      <main>
        {headerAndFooter && <HeaderComponent />}
        <CookieConsent />
        <Component {...pageProps} />
        {headerAndFooter && <FooterComponent />}
      </main>
    </Fragment>
  )
}

export default MyApp
