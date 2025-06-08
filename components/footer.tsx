import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-100 mt-16">
      <div className="container py-10 text-center space-y-4">
        <div className="flex justify-center">
          <Image src="/logo.svg" alt="Dimarzio Seguros" width={40} height={40} />
        </div>
        <p className="font-medium">Dimarzio Seguros — 20 anos protegendo com clareza</p>
        <address className="not-italic space-y-1 text-sm">
          <div>Rua Cumaru, 219 - sala 16, Edifício Laser, Alphaville, Campinas - SP, 13098-324</div>
          <div>(19) 3294-0655</div>
          <div>
            <a href="mailto:contato@dimarzioseguros.com.br" className="underline">
              contato@dimarzioseguros.com.br
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/dimarzioseguros/" className="underline" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
          <div>CNPJ: 10.894.914/0001-05</div>
        </address>
      </div>
    </footer>
  )
}
