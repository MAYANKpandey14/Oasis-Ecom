import { AuthProvider } from './Providers'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Oasis',
  description: 'E-commerce application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        {children}
        <Footer/>
        </AuthProvider>
      </body>
    </html>
  )
}
