import '../styles/globals.css'
import type { AppProps } from 'next/app'

const random = Math.random() > 0.5 ? "Hello" : [1, 2];

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
