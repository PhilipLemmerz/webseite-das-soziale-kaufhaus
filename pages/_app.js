import '../styles/globals.css'
import HeaderComponent from '../components/header'
import { Fragment } from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <HeaderComponent />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
