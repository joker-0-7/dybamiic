import Countries from './Countries/page'
import Navbar from './Navbar'
import './globals.css'
import { Cairo_Play } from 'next/font/google'

const berk = Cairo_Play(
  { subsets: ['latin'],
  weight: ['400'] 
})

export const metadata = {
  title: 'Nigeria geo zones',
  description: 'geo political zones in Nigeria',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={berk.className}>
        <main>
          {children}
        {/* <Countries /> */}
        </main>
        </body>
    </html>
  )
}
