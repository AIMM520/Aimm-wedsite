// Home page with language switching and dynamic content
import React from "react";

export default function Page() {
  return (
    <div>
      <header>
        <h1>AIMM 汇桥集团</h1>
        <p>连接信任，跨越国界</p>
      </header>
      <main style={{ padding: "2rem" }}>
        <section>
          <h2>关于我们</h2>
          <p>AIMM 汇桥集团是一个连接中马跨境合作的平台，专注于企业资源整合、品牌共建与市场落地。</p>
        </section>
        <section>
          <h2>服务项目</h2>
          <ul>
            <li>设计与装修</li>
            <li>房地产销售</li>
          </ul>
        </section>
        <section>
          <h2>联系方式</h2>
          <p>邮箱: aimm.linkasia@gmail.com</p>
        </section>
      </main>
    </div>
  );
}