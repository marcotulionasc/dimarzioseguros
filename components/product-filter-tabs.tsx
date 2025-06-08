'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ProductFilterTabsProps {
  filters: string[]
  active: string
  onChange: (value: string) => void
  className?: string
}

export function ProductFilterTabs({ filters, active, onChange, className }: ProductFilterTabsProps) {
  return (
    <div className={cn('flex flex-wrap justify-center gap-2', className)}>
      {filters.map((f) => (
        <Button
          key={f}
          onClick={() => onChange(f)}
          variant={active === f ? 'default' : 'outline'}
          className="rounded-full px-4 py-2 text-sm"
        >
          {f}
        </Button>
      ))}
    </div>
  )
}
