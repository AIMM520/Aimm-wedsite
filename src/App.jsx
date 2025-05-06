import React, { useState } from 'react'
import './index.css'

const translations = {
  zh: {
    slogan: "连接信任，跨越国界",
    welcome: "欢迎访问 AIMM 官网",
    email: "邮箱：aimm.linkasia@gmail.com"
  },
  en: {
    slogan: "Connecting Trust, Bridging Nations",
    welcome: "Welcome to AIMM Official Website",
    email: "Email: aimm.linkasia@gmail.com"
  },
  ms: {
    slogan: "Menghubungkan Kepercayaan, Merentasi Sempadan",
    welcome: "Selamat Datang ke Laman Rasmi AIMM",
    email: "E-mel: aimm.linkasia@gmail.com"
  }
}

export default function App() {
  const [lang, setLang] = useState("zh")
  const t = translations[lang]

  return (
    <div className="container">
      <header>
        <div className="logo">AIMM 汇桥集团</div>
        <div className="lang-buttons">
          <button onClick={() => setLang("zh")}>中</button>
          <button onClick={() => setLang("en")}>EN</button>
          <button onClick={() => setLang("ms")}>BM</button>
        </div>
      </header>
      <main>
        <h1>{t.slogan}</h1>
        <p>{t.welcome}</p>
        <p>{t.email}</p>
      </main>
    </div>
  )
}