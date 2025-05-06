import React from "react";
import "./index.css";

const translations = {
  zh: {
    title: "AIMM 汇桥集团",
    slogan: "连接信任，跨越国界",
    about: "AIMM 汇桥集团是一家以“连接信任、跨越国界”为理念的商业整合平台，专注于整合中马优质企业资源，推动国际合作、品牌共建、商业落地与战略发展。",
    services: ["设计与装修", "房地产销售"],
    contact: "邮箱：aimm.linkasia@gmail.com",
  },
};

export default function App() {
  const t = translations.zh;

  return (
    <div className="container">
      <h1>{t.title}</h1>
      <h2>{t.slogan}</h2>

      <section>
        <h3>关于我们</h3>
        <p>{t.about}</p>
      </section>

      <section>
        <h3>服务项目</h3>
        <ul>
          {t.services.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>联系方式</h3>
        <p>{t.contact}</p>
      </section>
    </div>
  );
}
