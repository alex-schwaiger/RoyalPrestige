import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Royal Prestige',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className='h-full'>
      <body className={`${inter.className} relative h-full antialiased`}>
        <main className='relative flex flex-col min-h-screen'>
          <div className="flex-grow flex-1">{children}</div>
        </main>
      </body>
    </html>
  )
}