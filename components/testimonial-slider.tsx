'use client'
import { useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent } from '@/components/ui/card'

interface Testimonial {
  text: string
  author: string
}

interface TestimonialSliderProps {
  testimonials: Testimonial[]
}

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  )
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-4">
        {testimonials.map((t, i) => (
          <Card key={i} className="min-w-full sm:min-w-[50%] bg-blue-50">
            <CardContent className="p-6 space-y-4">
              <p className="text-base italic text-gray-700">“{t.text}”</p>
              <p className="text-sm font-medium">{t.author}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
