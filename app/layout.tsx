import type React from "react"
import "@/app/globals.css"
import { Montserrat, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button"

// Fontes Oficiais Dimarzio Seguros
const montserrat = Montserrat({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800', '900'], // ExtraLight, Regular, Medium, Bold, ExtraBold, Black
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'], // Regular, Medium, SemiBold, Bold, ExtraBold, Black
})

export const metadata = {
  title: "Dimarzio Seguros - Sua segurança é nossa prioridade",
  description:
    "Dimarzio Seguros é uma corretora moderna que oferece as melhores soluções em seguros para você e sua família.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${playfairDisplay.variable} font-montserrat flex flex-col min-h-screen overflow-x-hidden bg-neutral-50 text-institutional-black antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <FloatingWhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}



