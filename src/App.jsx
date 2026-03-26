import './App.css'
import Header from './components/Header/Header.jsx'
import HeroSection from './components/HeroSection/HeroSection.jsx'
import PortfolioSection from './components/PortfolioSection/PortfolioSection.jsx'
import AboutSection from './components/AboutSection/AboutSection.jsx'
import ContactSection from './components/ContactSection/ContactSection.jsx'
import ModalSection from './components/ModalSection/ModalSection.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      </main>
      <ModalSection/>
    </>
  )
}

export default App
