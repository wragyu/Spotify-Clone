import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }) {
  return (
    <s
    <Component {...pageProps} />
  )

}

export default MyApp
