import React from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import { Analytics } from "@vercel/analytics/react"
import { useTranslation } from "react-i18next"
import './config/i18n'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <GlobalStyle />
      
      {/* Boutons pour changer de langue */}
      <div style={{ position: "fixed", top: 10, right: 10 }}>
        <button onClick={() => changeLanguage("fr")}>FR</button>
        <button onClick={() => changeLanguage("en")}>EN</button>
      </div>
      <Header />
      <Main />
      <Analytics />
      <Footer />
    </>
  )
}

export default App
