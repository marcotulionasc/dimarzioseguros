'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Card } from '@/components/ui/card'
import { Play, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

interface VideoTestimonial {
  id: string;
  title: string;
  embedUrl: string;
}

interface VideoTestimonialsProps {
  title: string;
  videos: VideoTestimonial[];
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export function VideoTestimonials({ title, videos }: VideoTestimonialsProps) {
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const autoplay = useRef(
    Autoplay({ delay: 8000, stopOnInteraction: true, stopOnMouseEnter: true })
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, skipSnaps: false},
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

  const progress = videos.length > 0 ? ((selectedIndex + 1) / videos.length) * 100 : 0

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6"
          >
            <Play className="w-8 h-8 text-primary" />
          </motion.div>
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold mb-4"
          >
            {title}
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-neutral-600"
          >
            Veja depoimentos reais de clientes que confiam em nosso trabalho
          </motion.p>
        </div>

        <motion.div
          variants={fadeInUp}
          className="relative"
        >
          {/* Background Elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-xl" />

          {/* Video Carousel */}
          <div className="relative z-10">
            {/* Progress Bar */}
            <div className="w-full h-1 bg-neutral-200 rounded-full mb-8 overflow-hidden">
              <motion.div 
                className="h-full bg-[#0E71B8] rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: 'left' }}
              />
            </div>
            
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl" ref={emblaRef}>
              <div className="flex">
                {videos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex-[0_0_100%] min-w-0"
                  >
                    <Card className="m-4 overflow-hidden bg-white flex justify-center">
                      <div className="p-4">
                        <div className="aspect-video w-96 h-[35rem] rounded-lg overflow-hidden bg-neutral-100 mx-auto">
                          <iframe
                            src={video.embedUrl}
                            title={video.title}
                            className="w-full h-full border-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        <div className="mt-4 text-center">
                          <h3 className="text-lg font-semibold text-neutral-900">
                            {video.title}
                          </h3>
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
                className="rounded-full hover:bg-[#0E71B8] hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === selectedIndex
                        ? 'bg-[#0E71B8] w-6'
                        : 'bg-[#0E71B8]/20'
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
                className="rounded-full hover:bg-[#0E71B8] hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
} 