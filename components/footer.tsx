import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-blue-700 text-white mt-16 border-t border-blue-600">
      <div className="container py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Image src="/logo.svg" alt="Dimarzio Seguros" width={40} height={40} />
          <span className="font-medium">Dimarzio Seguros</span>
          <span>20 anos protegendo com clareza</span>
        </div>
        <nav className="flex flex-col items-center md:items-start gap-1">
          <Link href="/">Home</Link>
          <Link href="/#seguros">Produtos</Link>
          <Link href="/contato">Contato</Link>
        </nav>
        <address className="not-italic space-y-1 text-center md:text-left">
          <div>Rua Cumaru, 219 - sala 16, Campinas - SP</div>
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
