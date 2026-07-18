"use client";

import { useEffect, useState } from "react";

type Project = {
  id: string;
  number: string;
  category: string;
  title: string;
  status: string;
  summary: string;
  description: string;
  stack: string;
  cover: string;
  facts: string[];
  gallery: { src: string; alt: string }[];
  video?: string;
};

const projects: Project[] = [
  {
    id: "ember",
    number: "01",
    category: "游戏设计 / 独立开发",
    title: "余烬牌塔",
    status: "◈ 可玩版本持续迭代",
    summary: "从规则原型到完整战斗演出的卡牌爬塔。",
    description: "围绕战斗闭环、随机路线、卡牌与遗物数据结构，建立敌人五姿态、分层场景、卡框、HUD 与 VFX 的完整生产流程。每一次视觉迭代都能回到真实可玩的 Godot 版本。",
    stack: "Godot / Game Design / Art Direction / Content Pipeline",
    cover: "/portfolio/ember-boss-battle.png",
    facts: ["61 张独立卡牌", "20 个遗物", "10 层路线 + Boss", "7 名敌人五姿态"],
    gallery: [
      { src: "/portfolio/ember-boss-battle.png", alt: "余烬牌塔 Boss 对战" },
      { src: "/portfolio/ember-cards.png", alt: "余烬牌塔卡牌总览" },
      { src: "/portfolio/ember-art-direction.png", alt: "余烬牌塔美术方向板" },
    ],
  },
  {
    id: "cs2",
    number: "02",
    category: "产品设计 / 数据内容",
    title: "CS2 Pro Settings",
    status: "◈ 可运行网站",
    summary: "面向中文玩家的职业选手设置数据库。",
    description: "把分散在不同来源的灵敏度、DPI、分辨率、外设与准星信息，整理成可搜索、筛选和横向对比的产品体验，同时建立统一的选手素材与内容采集标准。",
    stack: "React / Product Design / Search / Content System",
    cover: "/portfolio/cs2-page.png",
    facts: ["70+ 选手档案", "搜索与筛选", "设置横向对比", "战队与视频内容"],
    gallery: [
      { src: "/portfolio/cs2-page.png", alt: "CS2 Pro Settings 首页" },
      { src: "/portfolio/cs2-players-page.png", alt: "CS2 职业选手数据库" },
      { src: "/portfolio/cs2-hero.jpg", alt: "CS2 电竞视觉" },
    ],
  },
  {
    id: "relay",
    number: "03",
    category: "AI 产品 / 增长策略",
    title: "Relay Growth",
    status: "◈ 卖家验证阶段",
    summary: "让 TikTok Shop 卖家知道今天该拍什么。",
    description: "围绕真实卖家的内容焦虑，设计商品诊断、趋势雷达、7 天内容计划、脚本工坊与数据复盘，把复杂的增长建议转化为可以直接执行的短视频任务。",
    stack: "AI Product / UX Strategy / Prototyping / TikTok Shop",
    cover: "/portfolio/relay-case.jpg",
    facts: ["商品机会诊断", "7 天内容计划", "逐镜头可拍脚本", "增长复盘闭环"],
    gallery: [
      { src: "/portfolio/relay-case.jpg", alt: "Relay Growth 产品案例" },
      { src: "/portfolio/relay-lamp.png", alt: "Relay 桌面灯内容案例" },
      { src: "/portfolio/relay-pet.png", alt: "Relay 宠物商品内容案例" },
    ],
  },
  {
    id: "ai-drama",
    number: "04",
    category: "AI 影像 / 叙事剪辑",
    title: "AI 漫剧",
    status: "◈ 已完成短片",
    summary: "把生成式画面组织成连续的古风玄幻故事。",
    description: "围绕角色设定、场景氛围、镜头运动与音画节奏，将分散的 AI 画面组织成具有情绪和连续性的短片。制作覆盖视觉方向、镜头生成、素材筛选与剪映后期。",
    stack: "AI Cinema / Storytelling / Visual Direction / Editing",
    cover: "/portfolio/ai-drama-poster.png",
    facts: ["古风玄幻叙事", "角色与场景连续性", "AI 视觉生成", "剪映后期成片"],
    gallery: [{ src: "/portfolio/ai-drama-poster.png", alt: "AI 漫剧古风玄幻场景" }],
    video: "/portfolio/ai-drama-preview.mp4",
  },
];

const tools = ["Product Strategy", "UX / UI", "React", "Godot", "AI Workflow", "Art Direction", "Video Editing", "GitHub"];

export default function Home() {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <main>
      <a className="skip-link" href="#content">跳到主要内容</a>

      <header className="site-header">
        <a className="logo" href="#top">Zhang Pu Universe <i>✦</i></a>
        <nav aria-label="主导航">
          <a className="active" href="#top">首页</a>
          <a href="#work">作品</a>
          <a href="#method">方法</a>
          <a href="#about">关于</a>
          <a className="contact-pill" href="#contact">联系我</a>
        </nav>
      </header>

      <div id="content">
        <section className="hero" id="top">
          <div className="hero-copy" data-reveal>
            <p className="overline"><span /> 产品 / 游戏 / AI 影像</p>
            <h1><b>把想法</b><br />做成作品。</h1>
            <p className="hero-intro">从问题定义、交互与视觉，到真正可以运行的网站、游戏和影像。</p>
            <a className="text-link" href="#work">查看精选作品 <span>↘</span></a>
          </div>

          <div className="code-window" data-reveal>
            <div className="window-bar"><i /><i /><i /><span>zhangpu-build.tsx</span></div>
            <pre><code>{`const focus = [
  "product",
  "game",
  "ai cinema"
];

export function Make(idea) {
  return define(idea)
    .design()
    .build()
    .test()
    .ship();
}`}</code></pre>
            <span className="code-status">● BUILDING IN SHANGHAI</span>
          </div>
        </section>

        <section className="manifesto" data-reveal>
          <p className="section-index">01 / SELECTED WORK</p>
          <h2>让复杂问题成为<br /><em>清楚、可用的体验。</em></h2>
          <p>四个项目跨越不同领域，但使用同一套方法：找到核心闭环，建立内容系统，再持续把原型推进到值得展示的完整版本。</p>
        </section>

        <section className="project-section" id="work">
          <div className="section-heading" data-reveal>
            <h2>精选项目</h2>
            <p>Selected Projects · 2026</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <button className={`project-card card-${project.id}`} type="button" key={project.id} onClick={() => setSelected(project)} data-reveal>
                <div className="project-image"><img src={project.cover} alt="" /></div>
                <div className="project-top"><span>项目 {project.number}</span><span>{project.category}</span></div>
                <div className="project-main">
                  <h3>{project.title}</h3>
                  <p className="status">{project.status}</p>
                  <p>{project.summary}</p>
                </div>
                <div className="project-bottom"><span>{project.stack}</span><i>↗</i></div>
              </button>
            ))}
          </div>
        </section>

        <section className="method" id="method">
          <p className="section-index" data-reveal>02 / HOW I BUILD</p>
          <div className="method-title" data-reveal>
            <h2>从模糊想法到<br /><em>可以运行。</em></h2>
            <p>不是只交付一张页面，而是建立产品如何被理解、被使用并继续生长的系统。</p>
          </div>
          <div className="method-grid">
            <article data-reveal><span>01</span><h3>Define</h3><p>找到真实问题、用户场景和最小完整闭环。</p></article>
            <article data-reveal><span>02</span><h3>Design</h3><p>用结构、交互和视觉建立清楚的体验语言。</p></article>
            <article data-reveal><span>03</span><h3>Build</h3><p>直接实现网站、游戏、AI 产品或影像成片。</p></article>
            <article data-reveal><span>04</span><h3>Iterate</h3><p>通过反馈与验证，让每次迭代回到真实版本。</p></article>
          </div>
        </section>

        <section className="tool-section" data-reveal>
          {tools.map((tool) => <span key={tool}>{tool}</span>)}
        </section>

        <section className="about" id="about" data-reveal>
          <div><p className="section-index">03 / ABOUT</p><h2>张朴。</h2></div>
          <div>
            <p>产品构建者、独立游戏开发者，也在探索生成式影像。</p>
            <p>我喜欢把复杂信息整理成容易理解的结构，再亲手把方案推进成可以体验的真实作品。</p>
          </div>
          <div className="about-stats"><span><b>04</b><small>完整案例</small></span><span><b>END—TO—END</b><small>从定义到实现</small></span><span><b>2026</b><small>持续更新</small></span></div>
        </section>
      </div>

      <footer id="contact">
        <div className="footer-main">
          <div><h2>Zhang Pu Universe<i>.</i></h2><p>设计产品、制作游戏，<br />也用 AI 影像讲故事。</p></div>
          <div className="footer-links"><a href="#work">作品 ↗</a><a href="#method">方法 ↗</a><a href="#about">关于 ↗</a></div>
          <div className="footer-links"><a href="#top">回到顶部 ↑</a><span>Shanghai · China</span><span>欢迎通过当前分享渠道联系</span></div>
        </div>
        <div className="footer-bottom"><span>© 2026 张朴 · 保持好奇，持续构建。</span><span className="exploring">✦ 正在探索 产品 × 游戏 × AI</span></div>
      </footer>

      {selected && (
        <div className="project-modal" role="dialog" aria-modal="true" aria-label={`${selected.title} 项目详情`} onMouseDown={(event) => event.target === event.currentTarget && setSelected(null)}>
          <article className="modal-panel">
            <button className="modal-close" type="button" onClick={() => setSelected(null)} aria-label="关闭项目详情">×</button>
            <div className="modal-heading">
              <p>PROJECT {selected.number} · {selected.category}</p>
              <h2>{selected.title}</h2>
              <h3>{selected.summary}</h3>
              <p>{selected.description}</p>
            </div>
            <div className="modal-facts">{selected.facts.map((fact) => <span key={fact}>{fact}</span>)}</div>
            <div className="modal-gallery">
              {selected.gallery.map((image) => <img src={image.src} alt={image.alt} key={image.src} />)}
            </div>
            {selected.video && <video controls playsInline preload="metadata" poster={selected.cover}><source src={selected.video} type="video/mp4" /></video>}
            <div className="modal-footer"><span>{selected.stack}</span><button type="button" onClick={() => setSelected(null)}>返回项目列表 ↑</button></div>
          </article>
        </div>
      )}
    </main>
  );
}
