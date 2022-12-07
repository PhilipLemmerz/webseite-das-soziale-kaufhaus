import '../styles/globals.css'
import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'
import { Fragment } from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <HeaderComponent />
      <Component {...pageProps} />
      <FooterComponent />
    </Fragment>
  )
}

export default MyApp
