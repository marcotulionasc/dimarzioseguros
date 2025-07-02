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
              <span className="mobile-small-text !text-white hidden sm:inline">Clique para reproduzir</span>
              <span className="mobile-small-text !text-white sm:hidden">Toque para reproduzir</span>
            </div>
          )}
        </div>

        {/* Card Content - Responsivo para todos os breakpoints */}  
        <div className="card-mobile bg-white video-content-mobile md:video-content-tablet lg:video-content-desktop-md xl:video-content-desktop-lg 2xl:video-content-ultra">
          <div className="text-center space-y-2">
            <h3 className="mobile-title !mb-2 !text-base sm:!text-lg font-bold text-gray-900">
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
            <p className="mobile-small-text font-medium">Cliente satisfeito</p>
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
    <section className="section-padding bg-gray-50">
      <div className="container-mobile">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-blue-600 mb-4 sm:mb-6 shadow-lg">
            <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 md:mb-6 text-left">
            {title}
          </h2>
          
          <p className="mobile-subtitle !text-sm sm:!text-base lg:!text-xl max-w-3xl text-left">
            Veja depoimentos reais de clientes que confiam em nosso trabalho há anos
          </p>
        </motion.div>

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
      </div>
    </section>
  )
} 