import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import { Inter } from '@next/font/google'
import { SessionProvider } from "next-auth/react"

const inter = Inter({ subsets: ['latin'] })
const MyApp = ({ Component, pageProps }) => {

  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
