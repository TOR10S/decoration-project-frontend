import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection';
import PortfolioSection from '../components/PortfolioSection/PortfolioSection';
import AboutSection from '../components/AboutSection/AboutSection';
import ContactSection from '../components/ContactSection/ContactSection';
export default function MainPage() {
  return (
    <>
      <main>
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      </main>
      
    </>
  )
}
