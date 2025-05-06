import React, { useState } from "react";

const translations = {
  zh: {
    title: "AIMM 汇桥集团",
    slogan: "连接信任，跨越国界",
    about: "AIMM 汇桥集团致力于搭建中马之间的跨境合作桥梁。",
    services: ["设计与装修", "房地产销售"],
    contact: "邮箱：aimm.linkasia@gmail.com"
  },
  en: {
    title: "AIMM Bridge Group",
    slogan: "Connecting Trust, Bridging Nations",
    about: "AIMM is a cross-border collaboration hub between Malaysia and China.",
    services: ["Design & Renovation", "Real Estate Sales"],
    contact: "Email: aimm.linkasia@gmail.com"
  },
  ms: {
    title: "Kumpulan AIMM",
    slogan: "Menghubungkan Kepercayaan, Merentasi Sempadan",
    about: "AIMM membina jambatan kerjasama antara Malaysia dan China.",
    services: ["Reka Bentuk & Ubahsuai", "Jualan Hartanah"],
    contact: "E-mel: aimm.linkasia@gmail.com"
  }
};

export default function App() {
  const [lang, setLang] = useState("zh");
  const t = translations[lang];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-blue-900">{t.title}</h1>
        <p className="text-lg text-blue-700 mt-2">{t.slogan}</p>
        <div className="mt-4 space-x-3 text-sm">
          <button onClick={() => setLang("zh")} className="text-gray-600 hover:text-blue-600">简体中文</button>
          <button onClick={() => setLang("en")} className="text-gray-600 hover:text-blue-600">English</button>
          <button onClick={() => setLang("ms")} className="text-gray-600 hover:text-blue-600">Bahasa Melayu</button>
        </div>
      </header>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-800">关于我们 / About Us</h2>
        <p className="text-gray-700 mt-2">{t.about}</p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-800">服务项目 / Services</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          {t.services.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-800">联系方式 / Contact</h2>
        <p className="text-gray-700 mt-2">{t.contact}</p>
      </section>
      <footer className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} AIMM 汇桥集团 | China-Malaysia Cross-Border Bridge
      </footer>
    </div>
  );
}
