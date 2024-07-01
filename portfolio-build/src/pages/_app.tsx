import Navbar from '@/components/Navbar'
import '@/app/globals.css'

export default function MyApp({ Component, pageProps }: any) {
  return <>
  <Navbar />
  <Component {...pageProps} />
  </>
}