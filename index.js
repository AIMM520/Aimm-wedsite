import React, { useState } from "react";

const translations = {
  zh: {
    brand: "AIMM 汇桥集团",
    heroTitle: "连接信任，跨越国界",
    heroDesc: "AIMM 汇桥集团致力于搭建中马之间的跨境合作桥梁，推动企业合作与跨境资源整合，助力商业生态协同与升级。",
    aboutTitle: "关于我们",
    aboutDesc: "AIMM 汇桥集团是一家以“链接信任、跨越国界”为理念的商业整合平台，专注于整合中马优质企业资源，推动国际合作、品牌共建、商业落地等战略发展。我们致力于成为企业间沟通的桥梁，提供一站式解决方案，实现共赢发展。",
    servicesTitle: "服务项目",
    services: [
      { title: "设计与装修", desc: "提供商业与住宅空间的高端设计与装修服务，涵盖概念规划、项目施工及整体软装搭配。" },
      { title: "房地产销售", desc: "连接中马两地资源，协助客户进行房地产投资、销售策划与案场支持。" },
      { title: "商业咨询", desc: "提供市场进入策略、品牌定位、跨境对接等咨询服务，助力企业拓展亚洲市场。" },
      { title: "平台系统开发", desc: "专注于SaaS系统与移动App开发，打造企业自有服务平台，实现智能化管理。" },
      { title: "服务团队管理", desc: "建立金字塔式多层级团队系统，助力服务类企业建立稳定高效的团队架构。" },
      { title: "品牌包装与策划", desc: "为企业量身定制品牌视觉识别系统（VIS），策划线上线下整合营销路径。" }
    ],
    advantagesTitle: "我们的优势",
    advantages: [
      { title: "跨国资源整合", desc: "拥有中马两地深厚人脉网络，能够快速协调资源、落地合作，提升企业对接效率。" },
      { title: "整合式服务模式", desc: "从品牌定位到系统开发，我们提供一站式协同方案，减少客户多方对接压力。" },
      { title: "项目实战经验", desc: "团队具备丰富的地产、设计、营运等实操经验，深度理解本地与国际客户需求。" },
      { title: "多语沟通优势", desc: "支持中文、英文、马来文三语沟通，确保跨文化交流顺畅，避免误解与阻碍。" }
    ],
    casesTitle: "合作案例",
    caseList: [
      { title: "SmartServe 平台建设", desc: "从App开发到服务订单系统、分层级团队管理与钱包提现机制，全方位支持平台落地。" }
    ],
    newsTitle: "新闻与动态",
    news: [
      { title: "[2025年4月] 成功举办中马企业洽谈对接会", desc: "邀请多方机构参与，搭建中马企业沟通平台，推动意向项目落地。" }
    ],
    contactTitle: "联系我们",
    emailLabel: "邮箱"
  }
};

export default function HomePage() {
  const [lang, setLang] = useState("zh");
  const t = translations[lang];

  return (
    <div>
      <h1>{t.brand}</h1>
    </div>
  );
}