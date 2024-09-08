import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'
import { UserProvider } from '@auth0/nextjs-auth0/client'

import '@/styles/globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <div className={`${montserrat.className}`}>
        <Component {...pageProps} />
      </div>
    </UserProvider>
  )
}
