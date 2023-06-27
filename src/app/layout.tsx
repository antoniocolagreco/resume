'use client'
import { Inter } from 'next/font/google'
import { useContext } from 'react'
import LocaleProvider, { LocaleContext } from '../context/Locale'
import { Layout } from '../types/next'
import './globals.css'

const font = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Antonio Colagreco',
  description: 'Generated by create next app',
}

const RootLayout: Layout = async (props) => {
  const { children } = props
  const locale = useContext(LocaleContext).locale

  return (
    <LocaleProvider>
      <html className={font.className} lang={locale.language}>
        <body className=''>{children}</body>
      </html>
    </LocaleProvider>
  )
}

export default RootLayout

