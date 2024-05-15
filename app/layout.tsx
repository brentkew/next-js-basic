import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'
import AuthProvider from './auth/Provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Js',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.className} p-3`}>
          <AuthProvider>
            <NavBar />
            <main>{children}</main>
          </AuthProvider>
      </body>
    </html>
  );
}
