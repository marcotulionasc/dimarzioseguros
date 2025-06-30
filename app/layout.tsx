import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FloatingWhatsAppButton } from '@/components/floating-whatsapp-button'
import { AnniversaryBanner } from '@/components/anniversary-banner'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Dimarzio Seguros - 20 anos protegendo com clareza',
  description: 'Seguros pensados para você e sua família. Atendimento personalizado e coberturas que realmente fazem sentido.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`}>
      <body className={`${inter.className} antialiased flex flex-col min-h-screen w-full max-w-full overflow-x-hidden`}>
        <Navbar />
        <main className="flex-1 w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <FloatingWhatsAppButton />
        <Toaster />
        {/* <AnniversaryBanner variant="floating" /> */}
      </body>
    </html>
  )
}



