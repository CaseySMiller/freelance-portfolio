import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CustomNav from './components/Navbar/page'
import CustomFooter from './components/Footer/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "codeKase Freelance Web Development",
  description: "codeKase Freelance Web Development",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark bg-zinc-800">
      <body className={inter.className}>
        <CustomNav />
        {children}
        <CustomFooter />
      </body>
    </html>
  )
}
