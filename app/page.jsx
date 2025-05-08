import React, { useState } from "react";
import translations from "../lib/i18n.js";

export default function HomePage() {
  const [lang, setLang] = useState("zh");
  const t = translations[lang];
  return (
    <div className="container">
      <header>
        <h1>{t.brand}</h1>
        <p>{t.slogan}</p>
        <div style={{ marginTop: "1rem" }}>
          <button onClick={() => setLang("zh")}>中文</button>
          <button onClick={() => setLang("en")}>EN</button>
          <button onClick={() => setLang("ms")}>BM</button>
        </div>
      </header>
      <main>
        <section>
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutDesc}</p>
        </section>
        <section>
          <h2>{t.contact}</h2>
          <p>Email: aimm.linkasia@gmail.com</p>
        </section>
      </main>
    </div>
  );
}