import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MinAI - AI compilation platform',
  openGraph:{
    images: ['../../public/logo.png','./favicon.ico'],
  },
  description: 'Dashboard for MinAI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}
        <svg width="0" height="0">
                <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#159957" offset="0%" />
                    <stop stopColor="#155799" offset="100%" />
                </linearGradient>
            </svg></body>
      </html>
    </ClerkProvider>
  )
}
