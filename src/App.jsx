import React, { useState } from 'react';
import translations from './i18n';

const App = () => {
  const [lang, setLang] = useState('zh');
  const t = translations[lang];

  return (
    <div className="container">
      <header>
        <h1>{t.brand}</h1>
        <p className="slogan">{t.slogan}</p>
        <div className="lang-buttons">
          <button onClick={() => setLang('zh')}>中文</button>
          <button onClick={() => setLang('en')}>EN</button>
          <button onClick={() => setLang('ms')}>BM</button>
        </div>
      </header>
      <main>
        <h2>{t.aboutTitle}</h2>
        <p>{t.aboutDesc}</p>
        <h3>{t.contact}</h3>
        <p>Email: aimm.linkasia@gmail.com</p>
      </main>
    </div>
  );
};

export default App;
