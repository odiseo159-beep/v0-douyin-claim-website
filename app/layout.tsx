import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/i18n'
import { Web3Provider } from '@/lib/web3-provider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: '抖领',
  description: '基于 Flap 网络，将抖音流量实时转化为收益。去中心化验证，资金直达钱包。',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
      },
      {
        url: '/logo.png',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh" className="dark">
      <body className={`font-sans antialiased bg-background text-foreground`}>
        <Web3Provider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </Web3Provider>
        <Analytics />
      </body>
    </html>
  )
}
