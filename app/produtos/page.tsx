import Link from 'next/link'
import { products } from '@/lib/products'
import { Button } from '@/components/ui/button'

export default function ProdutosPage() {
  return (
    <main className="container py-16 space-y-8">
      <h1 className="text-3xl text-center">Nossos Produtos</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {products.map((p) => (
          <div key={p.slug} className="p-4 border rounded-md space-y-2">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p>{p.description}</p>
            <Link href={`/produtos/${p.slug}`}>
              <Button variant="link" className="p-0">Saiba mais</Button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}

