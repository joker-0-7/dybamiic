

export const metadata = {
  title: 'Nigeria geo zones',
  description: 'geo political zones in Nigeria',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        {/* <Countries /> */}
        </main>
        </body>
    </html>
  )
}
