import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface ProductCardProps {
  icon: LucideIcon
  title: string
  slug: string
  description?: string
  className?: string
}

export function ProductCard({ icon: Icon, title, slug, description, className }: ProductCardProps) {
  // Map specific slugs to their correct paths
  const getProductPath = (slug: string) => {
    // Special cases that don't follow the /seguro- pattern
    if (slug === 'consorcio') {
      return '/consorcios'
    }

    const pathMap: Record<string, string> = {
      'automovel': '/seguro-automovel',
      'fianca-locaticia': '/seguro-fianca-locaticia',
      'garantia-fiduciaria': '/seguro-garantia-fiduciaria',
      'portateis': '/seguro-portateis',
      'rc-profissional': '/seguro-rc-profissional',
      'residencial': '/seguro-residencial',
      'rural': '/seguro-rural',
      'saude': '/seguro-saude',
      'viagem': '/seguro-viagem',
      'vida': '/seguro-vida',
      'fiduciario': '/seguro-fiduciario',
      'empresarial': '/seguro-empresarial'
    }
    return pathMap[slug] || `/produtos/${slug}`
  }

  return (
    <Link href={getProductPath(slug)} className={cn('block group', className)} prefetch>
      <Card className="h-full relative transition-transform hover:-translate-y-1 hover:rotate-y-2 hover:shadow-elevate">
        <CardContent className="p-6 flex flex-col items-center gap-3 text-center">
          <Icon className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <span className="font-semibold text-lg">{title}</span>
          {description && <p className="text-sm text-gray-600">{description}</p>}
          <Button 
            variant="outline" 
            size="sm" 
            className="mt-2 relative overflow-hidden transition-all hover:bg-blue-50 after:absolute after:inset-0 after:bg-blue-600/10 after:scale-0 hover:after:scale-100 after:transition-transform after:rounded-full after:origin-center"
          >
            Saiba mais
          </Button>
        </CardContent>
      </Card>
    </Link>
  )
}
