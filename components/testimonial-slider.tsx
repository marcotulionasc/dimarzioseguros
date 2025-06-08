'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Card } from '@/components/ui/card'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Testimonial {
  text: string
  author: string
  role: string
  image: string
}

interface TestimonialSliderProps {
  testimonials: Testimonial[]
}

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, skipSnaps: false },
    [autoplay.current]
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl bg-white shadow-xl" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative flex-[0_0_100%] min-w-0 pl-4"
            >
              <Card className="m-4 overflow-hidden bg-white">
                <div className="grid md:grid-cols-5 gap-8 p-8">
                  {/* Image Column */}
                  <div className="md:col-span-2 flex items-center justify-center">
                    <div className="relative w-32 h-32 md:w-full md:h-64">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover rounded-2xl"
                        sizes="(max-width: 768px) 128px, 384px"
                      />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="md:col-span-3 flex flex-col justify-center">
                    <Quote className="w-12 h-12 text-primary/20 mb-4" />
                    <p className="text-lg md:text-xl text-neutral-700 italic mb-6">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-semibold text-lg text-neutral-900">
                        {testimonial.author}
                      </p>
                      <p className="text-neutral-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
          className="rounded-sm hover:bg-primary hover:text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-sm transition-all ${
                index === selectedIndex
                  ? 'bg-primary w-6'
                  : 'bg-primary/20'
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
          className="rounded-sm hover:bg-primary hover:text-white transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}
