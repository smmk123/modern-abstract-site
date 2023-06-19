import Footer from './components/footer'
import Navbar from './components/navBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Techn-AI',
  description: 'AI Solutions for your business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><Navbar />{children}<Footer /></body>
    </html>
  )
}
