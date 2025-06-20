'use client'

import { Card } from '@/components/ui/card'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

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

function VideoCard({ video, index }: { video: VideoTestimonial; index: number }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [showControls, setShowControls] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="group relative"
    >
      {/* Responsividade completa: Mobile | Tablet | Desktop MD | Desktop LG | Ultra */}
      <div className="video-card video-card-mobile md:video-card-tablet lg:video-card-desktop-md xl:video-card-desktop-lg 2xl:video-card-ultra">
        {/* Video Container - Otimizado para vídeos mobile */}
        <div 
          className="video-container"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
          onTouchStart={() => setShowControls(true)}
          onClick={togglePlay}
        >
          {/* Aspect ratio responsivo completo */}
          <div className="video-aspect-mobile-optimized md:video-aspect-mobile lg:video-aspect-mobile xl:video-aspect-mobile">
            {/* Container de altura responsivo para todos os breakpoints */}
            <div className="video-desktop-container sm:video-desktop-container md:video-desktop-container-tablet lg:video-desktop-container-md xl:video-desktop-container-lg 2xl:video-desktop-container-ultra">
              <video
                ref={videoRef}
                src={video.embedUrl}
                className="w-full h-full object-cover"
                muted={isMuted}
                playsInline
                preload="metadata"
                onEnded={handleVideoEnd}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
            </div>
          </div>

          {/* Overlay gradiente para melhor legibilidade */}
          <div className="video-gradient-overlay" />

          {/* Controles customizados - Responsivos para todos os breakpoints */}
          <div className={`video-controls-overlay video-controls-mobile ${
            showControls || !isPlaying ? 'bg-black/20' : 'bg-transparent'
          }`}>
            {/* Play/Pause Button com tamanhos responsivos */}
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: showControls || !isPlaying ? 1 : 0.8, 
                opacity: showControls || !isPlaying ? 1 : 0 
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="video-play-button touch-manipulation lg:video-play-button-desktop-md xl:video-play-button-desktop-lg"
              onClick={(e) => {
                e.stopPropagation()
                togglePlay()
              }}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 sm:w-8 sm:h-8" />
              ) : (
                <Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1" />
              )}
            </motion.button>
          </div>

          {/* Mute/Unmute Button - Mobile otimizado */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: showControls ? 1 : 0 }}
            className="video-mute-button video-mute-mobile touch-manipulation"
            onClick={(e) => {
              e.stopPropagation()
              toggleMute()
            }}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </motion.button>

          {/* Indicador de loading/buffering - Mobile otimizado */}
          {!isPlaying && (
            <div className="video-status-indicator video-status-mobile">
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" />
              <span className="text-xs font-medium hidden sm:inline">Clique para reproduzir</span>
              <span className="text-xs font-medium sm:hidden">Toque para reproduzir</span>
            </div>
          )}
        </div>

        {/* Card Content - Responsivo para todos os breakpoints */}  
        <div className="p-4 sm:p-6 bg-white video-content-mobile md:video-content-tablet lg:video-content-desktop-md xl:video-content-desktop-lg 2xl:video-content-ultra">
          <div className="text-center space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              {video.title}
            </h3>
            <div className="flex items-center justify-center gap-1 video-stars-mobile">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 * i, duration: 0.3 }}
                  className="video-star-rating"
                />
              ))}
            </div>
            <p className="text-sm text-gray-600 font-medium">Cliente satisfeito</p>
          </div>
        </div>

        {/* Accent border */}
        <div className="video-accent-border" />
      </div>
    </motion.div>
  )
}

export function VideoTestimonials({ title, videos }: VideoTestimonialsProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden video-testimonials-mobile md:video-testimonials-tablet lg:video-testimonials-desktop-md xl:video-testimonials-desktop-lg 2xl:video-testimonials-ultra">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="video-testimonials-container container"
      >
        {/* Header Section - Responsivo para todos os breakpoints */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20 video-header-mobile md:video-header-tablet lg:video-header-desktop-md xl:video-header-desktop-lg 2xl:video-header-ultra">
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-600 mb-6 shadow-lg video-icon"
          >
            <Play className="w-8 h-8 text-white ml-1" />
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight"
          >
            {title}
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
          >
            Veja depoimentos reais de clientes que confiam em nosso trabalho há anos
          </motion.p>
        </div>

        {/* Videos Grid */}
        <motion.div
          variants={fadeInUp}
          className="relative"
        >
          {/* Background decorative elements - Responsivos para todos os breakpoints */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl video-bg-mobile xl:video-bg-desktop-lg" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl video-bg-mobile xl:video-bg-desktop-lg" />

          {/* Grid responsivo - Todos os breakpoints padronizados */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto video-grid-mobile md:video-grid-tablet lg:video-grid-desktop-md xl:video-grid-desktop-lg 2xl:video-grid-ultra">
            {videos.map((video, index) => (
              <VideoCard key={video.id} video={video} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
        </motion.div>
      </motion.div>
    </section>
  )
} 