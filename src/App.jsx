import { useState } from "react";

const translations = {
  zh: {
    title: "AIMM 汇桥集团",
    slogan: "连接信任，跨越国界",
    about: "AIMM 汇桥集团致力于搭建中马之间的跨境合作桥梁，推动企业合作与跨境资源整合。",
    services: ["设计与装修", "房地产销售", "商业咨询", "平台系统开发", "服务团队管理", "品牌包装与策划"]
  },
  en: {
    title: "AIMM Bridge Group",
    slogan: "Connecting Trust, Bridging Nations",
    about: "AIMM is committed to building a bridge for cross-border cooperation between Malaysia and China.",
    services: ["Design & Renovation", "Real Estate Sales", "Business Consulting", "Platform Development", "Team Structure Management", "Branding & Planning"]
  },
  ms: {
    title: "Kumpulan AIMM",
    slogan: "Menghubungkan Kepercayaan, Merentasi Sempadan",
    about: "AIMM komited dalam membina jambatan kerjasama antara Malaysia dan China.",
    services: ["Reka Bentuk & Ubahsuai", "Jualan Hartanah", "Perundingan Perniagaan", "Pembangunan Sistem", "Pengurusan Pasukan", "Perancangan Jenama"]
  }
};

export default function App() {
  const [lang, setLang] = useState("zh");
  const t = translations[lang];

  return (
    <>
      <header>
        <h1>{t.title}</h1>
        <p>{t.slogan}</p>
        <div style={{ marginTop: "1rem" }}>
          <button onClick={() => setLang("zh")}>简体中文</button>
          <button onClick={() => setLang("en")} style={{ margin: "0 1rem" }}>English</button>
          <button onClick={() => setLang("ms")}>Bahasa Melayu</button>
        </div>
      </header>
      <section>
        <h2>关于我们 / About Us</h2>
        <p>{t.about}</p>
      </section>
      <section>
        <h2>服务项目 / Services</h2>
        {t.services.map((s, i) => (
          <div className="card" key={i}>{s}</div>
        ))}
      </section>
    </>
  );
}
