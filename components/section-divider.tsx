import { cn } from '@/lib/utils'

interface Props {
  className?: string
}

export function SectionDivider({ className }: Props) {
  return (
    <svg viewBox="0 0 1440 80" className={cn('w-full h-10 md:h-16', className)} preserveAspectRatio="none">
      <path
        d="M0 40c120-40 240 40 360 40s240-80 360-80 240 80 360 80 240-40 360-40v80H0z"
        fill="currentColor"
      />
    </svg>
  )
}
