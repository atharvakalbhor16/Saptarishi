import type { Metadata } from 'next'
import { Open_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Saptrishi Foundation – Your Contribution can change someone\'s life.',
  description: 'Pioneer initiative in India for integrated one stop solution for All types of differently abled people. Saptrishi Foundation provides support services for the differently abled community.',
  keywords: 'Saptrishi Foundation, differently abled, disability support, India, NGO, foundation',
  authors: [{ name: 'Saptrishi Foundation' }],
  openGraph: {
    title: 'Saptrishi Foundation – Your Contribution can change someone\'s life.',
    description: 'Pioneer initiative in India for integrated one stop solution for All types of differently abled people.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Saptrishi Foundation',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${playfair.variable}`}>
      <body className={openSans.className}>
        <Loader />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
