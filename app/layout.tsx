import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
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
      <body className={`${inter.className} flex flex-col min-h-screen overflow-x-hidden bg-neutral-50 text-neutral-900 antialiased`}>
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



