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
  return (
    <Link href={`/produtos/${slug}`} className={cn('block group', className)} prefetch>
      <Card className="h-full transition-all hover:-translate-y-2 hover:ring-2 hover:ring-blue-600">
        <CardContent className="p-6 flex flex-col items-center gap-3 text-center">
          <Icon className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <span className="font-semibold text-lg">{title}</span>
          {description && <p className="text-sm text-gray-600">{description}</p>}
          <Button variant="outline" size="sm" className="mt-2">Saiba mais</Button>
        </CardContent>
      </Card>
    </Link>
  )
}
