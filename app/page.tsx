'use client'

import { Hero } from '@/components/hero'
import { AlreadyInsured } from '@/components/already-insured'
import { HowItWorks, Differentials } from '@/components/features'
import { Testimonials } from '@/components/testimonials'
import { WhyWrong } from '@/components/why-wrong'
import { Consultoria } from '@/components/consultoria'
import { ProductGrid } from '@/components/product-grid'
import { WhyChoose } from '@/components/why-choose'
import { PaperQuestion } from '@/components/paper-question'
import { Faq } from '@/components/faq'
import { ContactSection } from '@/components/contact-section'

export default function Home() {
  return (
    <main className="space-y-16">
      <Hero />
      <AlreadyInsured />
      <HowItWorks />
      <Differentials />
      <Testimonials />
      <WhyWrong />
      <Consultoria />
      <ProductGrid />
      <WhyChoose />
      <PaperQuestion />
      <Faq />
      <ContactSection />
    </main>
  )
}
