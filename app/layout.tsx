import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alpha Kyla Bangachon - Full Stack Developer',
  description: 'Full Stack Developer specializing in React, Laravel, PHP, and modern web technologies. BSIT student at University of the Cordilleras.',
  keywords: 'Full Stack Developer, React, Laravel, PHP, Next.js, Web Development, Baguio',
  authors: [{ name: 'Alpha Kyla Bangachon' }],
  creator: 'Alpha Kyla Bangachon',
  openGraph: {
    title: 'Alpha Kyla Bangachon - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Laravel, PHP, and modern web technologies.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
