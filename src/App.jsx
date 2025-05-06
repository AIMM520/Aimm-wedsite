import { useState } from "react";

const translations = {
  zh: {
    title: "AIMM 汇桥集团",
    slogan: "连接信任，跨越国界",
    about: "AIMM 汇桥集团是一家以“链接信任、跨越国界”为理念的商业整合平台，专注于整合中马优质企业资源，推动国际合作、品牌共建、商业落地等战略发展。",
    services: ["设计与装修", "房地产销售", "商业咨询", "平台系统开发", "服务团队管理", "品牌包装与策划"],
    advantages: ["跨国资源整合", "整合式服务模式", "项目实战经验", "多语沟通优势"],
    cases: ["SmartServe 平台建设"],
    news: ["[2025年4月] 成功举办中马企业洽谈对接会"],
    contact: "邮箱：aimm.linkasia@gmail.com"
  },
  en: {
    title: "AIMM Bridge Group",
    slogan: "Connecting Trust, Bridging Nations",
    about: "AIMM is a strategic platform that connects business entities across China and Malaysia. We specialize in project integration, branding, and execution planning.",
    services: ["Design & Renovation", "Real Estate Sales", "Business Consulting", "Platform Development", "Team Management", "Branding & Planning"],
    advantages: ["Cross-Border Integration", "Integrated Services", "Practical Experience", "Multilingual Communication"],
    cases: ["SmartServe App Project"],
    news: ["[Apr 2025] China-Malaysia Business Matching Success"],
    contact: "Email: aimm.linkasia@gmail.com"
  },
  ms: {
    title: "Kumpulan AIMM",
    slogan: "Menghubungkan Kepercayaan, Merentasi Sempadan",
    about: "AIMM ialah platform integrasi perniagaan yang memfokuskan kepada kerjasama antara syarikat dari Malaysia dan China.",
    services: ["Reka Bentuk & Ubahsuai", "Jualan Hartanah", "Perundingan Perniagaan", "Pembangunan Sistem", "Pengurusan Pasukan", "Perancangan Jenama"],
    advantages: ["Jaringan Rentas Negara", "Khidmat Bersepadu", "Pengalaman Projek", "Komunikasi Pelbagai Bahasa"],
    cases: ["Projek Aplikasi SmartServe"],
    news: ["[April 2025] Kejayaan Jaringan Perniagaan Malaysia-China"],
    contact: "E-mel: aimm.linkasia@gmail.com"
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
        <nav>
          <button onClick={() => setLang("zh")}>简体中文</button>
          <button onClick={() => setLang("en")}>English</button>
          <button onClick={() => setLang("ms")}>Bahasa Melayu</button>
        </nav>
      </header>
      <section>
        <h2>关于我们 / About</h2>
        <p>{t.about}</p>
      </section>
      <section>
        <h2>服务项目 / Services</h2>
        {t.services.map((s, i) => <div key={i} className="card">{s}</div>)}
      </section>
      <section>
        <h2>我们的优势 / Strengths</h2>
        {t.advantages.map((s, i) => <div key={i} className="card">{s}</div>)}
      </section>
      <section>
        <h2>合作案例 / Case Studies</h2>
        {t.cases.map((s, i) => <div key={i} className="card">{s}</div>)}
      </section>
      <section>
        <h2>新闻动态 / News</h2>
        {t.news.map((s, i) => <div key={i} className="card">{s}</div>)}
      </section>
      <section>
        <h2>联系我们 / Contact</h2>
        <p>{t.contact}</p>
      </section>
    </>
  );
}
