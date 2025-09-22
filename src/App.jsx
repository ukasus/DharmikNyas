import './App.css'
import Navbar from './components/Navbar.jsx'
import HeroSlider from './components/HeroSlider.jsx'
import NoticesMarquee from './components/NoticesMarquee.jsx'
import Sections from './components/Sections.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <HeroSlider />
      <NoticesMarquee />
      <Sections />
      <Footer />
    </div>
  )
}

export default App
