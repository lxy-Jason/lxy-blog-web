/*
 * @Author: xiangyue_li
 * @Date: 2023-07-15 18:12:06
 * @LastEditors: xiangyue_li
 */
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'lxy-blog-web',
  description: 'lxy-Jason的博客',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
