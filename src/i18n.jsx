import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

const I18nContext = createContext({ lang: 'hi', setLang: () => {}, t: (k) => k })

const translations = {
  hi: {
    brand: 'प्रभु श्री राम धार्मिक न्यास',
    topbarLeft: 'धार्मिक न्यास एवं धरोहर',
    nav: {
      home: 'मुखपृष्ठ',
      about: 'हमारे बारे में',
      notices: 'सूचनाएं',
contact: 'संपर्क',
    },
    about: {
      deedLink: 'अधिक जानकारी (विलेख) के लिए यहाँ क्लिक करें',
    },
    langSwitch: 'EN/HI',
  },
  en: {
    brand: 'Prabhu Shri Ram Dharmik Nyas',
    topbarLeft: 'Religious Trusts & Endowments',
    nav: {
      home: 'Home',
      about: 'About',
      notices: 'Notices',
contact: 'Contact',
    },
    about: {
      deedLink: 'For more details (deed) click here',
    },
    langSwitch: 'EN/HI',
  },
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('dn-lang') || 'hi')

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
    localStorage.setItem('dn-lang', lang)
  }, [lang])

  const value = useMemo(() => ({
    lang,
    setLang,
    t: (keyPath) => {
      const parts = String(keyPath).split('.')
      let node = translations[lang]
      for (const p of parts) {
        if (node && Object.hasOwn(node, p)) node = node[p]
        else return keyPath
      }
      return typeof node === 'string' ? node : keyPath
    },
  }), [lang])

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}

I18nProvider.propTypes = {
  children: PropTypes.node,
}


