import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CustomNav from './components/Navbar/page'

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
    <html lang="en">
      <body className={inter.className}>
        <CustomNav />
        {children}
      </body>
    </html>
  )
}
