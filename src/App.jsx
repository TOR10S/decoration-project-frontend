import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import MainPage from './pages/MainPage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
function App() {
  return (
     <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
      <Footer />
    </div>
    
      
  )
}

export default App
