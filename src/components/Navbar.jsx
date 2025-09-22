import { useEffect, useState } from 'react'
import { useI18n } from '../i18n.jsx'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [fontScale, setFontScale] = useState(1)
  const { lang, setLang, t } = useI18n()

  useEffect(() => {
    const saved = Number(localStorage.getItem('dn-font-scale') || '1')
    if (!Number.isNaN(saved)) {
      setFontScale(saved)
      document.documentElement.style.setProperty('--dn-font-scale', String(saved))
    }
  }, [])

  function applyScale(next) {
    const clamped = Math.max(0.85, Math.min(1.3, Number(next)))
    setFontScale(clamped)
    document.documentElement.style.setProperty('--dn-font-scale', String(clamped))
    localStorage.setItem('dn-font-scale', String(clamped))
  }

  return (
    <header className="dn-header">
      <div className="dn-topbar">
        <div className="dn-container">
          <div className="dn-topbar-left">
            <span>{t('topbarLeft')}</span>
          </div>
          <div className="dn-topbar-right">
            <button className="dn-small-btn" aria-label="Decrease text size" onClick={() => applyScale(fontScale - 0.1)}>A-</button>
            <button className="dn-small-btn" aria-label="Default text size" onClick={() => applyScale(1)}>A</button>
            <button className="dn-small-btn" aria-label="Increase text size" onClick={() => applyScale(fontScale + 0.1)}>A+</button>
            <button className="dn-small-btn" aria-label="Switch language" onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}>{t('langSwitch')}</button>
          </div>
        </div>
      </div>
      <div className="dn-navbar">
        <div className="dn-container">
          <div className="dn-brand">{t('brand')}</div>
          <nav className={`dn-nav ${isOpen ? 'open' : ''}`} aria-label="Primary Navigation">
            <a href="#home">{t('nav.home')}</a>
            <a href="#about">{t('nav.about')}</a>
            <a href="#notices">{t('nav.notices')}</a>
            <a href="#gallery">{t('nav.gallery')}</a>
            <a href="#contact">{t('nav.contact')}</a>
          </nav>
          <button className="dn-burger" aria-label="Toggle menu" onClick={() => setIsOpen(v => !v)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar


