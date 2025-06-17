'use client'

import { Card } from '@/components/ui/card'
import { Play } from 'lucide-react'
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

          {/* Video Grid */}
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className="overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <div className="p-4">
                      <div className="aspect-video w-full h-48 sm:h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden bg-neutral-100">
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
        </motion.div>
      </motion.div>
    </section>
  )
} 