import { getProduct } from '@/lib/products'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface Props {
  params: { slug: string }
}

export default function ProdutoPage({ params }: Props) {
  const product = getProduct(params.slug)
  if (!product) return notFound()
  return (
    <main className="container py-16 space-y-8">
      <h1 className="text-4xl font-bold gradient-text">{product.title}</h1>
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">O que é</h2>
        <p>{product.description}</p>
      </section>
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Quem deve contratar</h2>
        <p>{product.who}</p>
      </section>
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Benefícios</h2>
        <ul className="list-disc pl-5 space-y-1">
          {product.benefits.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </section>
      <Link href="/#contato">
        <Button className="primary-button mt-6">Agendar análise gratuita</Button>
      </Link>
    </main>
  )
}
