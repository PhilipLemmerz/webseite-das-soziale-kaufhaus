import '../styles/globals.css'
import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'
import Head from 'next/head'
import { Fragment, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

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
  }, []);

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {headerAndFooter && <HeaderComponent />}
      <Component {...pageProps} />
      {headerAndFooter && <FooterComponent />}
    </Fragment>
  )
}

export default MyApp
