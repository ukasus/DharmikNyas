import { useEffect, useState } from 'react'

const slides = [
  { id: 1, title: 'धार्मिक न्यास एवं धरोहर', subtitle: '', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1600&auto=format&fit=crop' },
  { id: 2, title: 'Religious Trusts & Endowments', subtitle: '', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop' },
  { id: 3, title: 'सेवाएं और सूचनाएं', subtitle: 'Services & Notices', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop' }
]

function HeroSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % slides.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  const current = slides[index]

  return (
    <section id="home" className="dn-hero">
      <div className="dn-hero-slide" style={{ backgroundImage: `url(${current.image})` }}>
        <div className="dn-hero-overlay">
          <h1 className="dn-hero-title">{current.title}</h1>
          <p className="dn-hero-subtitle">{current.subtitle}</p>
        </div>
      </div>
      <div className="dn-hero-dots" role="tablist" aria-label="Hero slides">
        {slides.map((s, i) => (
          <button key={s.id} role="tab" aria-selected={i === index} className={`dn-dot ${i === index ? 'active' : ''}`} onClick={() => setIndex(i)}></button>
        ))}
      </div>
    </section>
  )
}

export default HeroSlider


