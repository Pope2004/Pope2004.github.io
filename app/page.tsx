"use client";

import { useEffect, useRef, useState } from "react";

type Project = {
  id: string;
  number: string;
  category: string;
  title: string;
  status: string;
  summary: string;
  description: string;
  stack: string;
  cover?: string;
  facts: string[];
  gallery: { src: string; alt: string; title?: string; note?: string; layout?: "wide" | "half" | "portrait" }[];
  productBrief?: {
    intro: string;
    steps: { number: string; title: string; text: string }[];
  };
  commerceIntelligence?: boolean;
  gameOverview?: boolean;
  characterAssets?: { src: string; name: string; state: string }[];
  environmentAssets?: { src: string; alt: string; title: string; note: string }[];
  video?: string;
  externalUrl?: string;
  externalLabel?: string;
  playUrl?: string;
};

const projects: Project[] = [
  {
    id: "ember",
    number: "01",
    category: "游戏设计 / 独立开发",
    title: "余烬牌塔",
    status: "◈ 完整 MVP · 持续扩展",
    summary: "带着最后一粒火登上废塔，在卡牌、路线与代价之间决定世界的结局。",
    description: "《余烬牌塔》是一款由我独立设计与开发的单人卡牌构筑 Roguelike。玩家扮演最后的“余烬行者”，携带星炉炉心穿过三章高塔，在可预判的回合战斗、随机路线和资源取舍中形成自己的牌组，最终面对被囚禁在塔顶的吞星者，并决定火种应当属于高塔，还是重新回到荒原。",
    stack: "Godot / Game Design / Art Direction / Content Pipeline",
    cover: "/portfolio/ember-update/current-battle.jpg",
    facts: ["61 张独立卡牌", "20 个独立遗物", "10 层路线 + Boss", "10 名敌人与 Boss", "3 章主线故事"],
    gameOverview: true,
    gallery: [
      { src: "/portfolio/ember-update/current-battle.jpg", alt: "余烬行者在余烬门厅迎战荒路盗", title: "余烬门厅", note: "新版主角、完整战斗场景、敌人意图与扇形手牌同屏运行", layout: "wide" },
      { src: "/portfolio/ember-update/story-prologue.jpg", alt: "余烬牌塔序章最后一粒火", title: "最后一粒火", note: "序章、三段楼层章节、Boss 门前对白与双结局组成完整主线", layout: "half" },
      { src: "/portfolio/ember-update/route-map-v2.jpg", alt: "余烬牌塔纵向滚动路线地图", title: "纵向路线地图", note: "三条随机路线连接战斗、精英、商店、工匠、事件与 Boss", layout: "half" },
      { src: "/portfolio/ember-update/cistern-expansion.jpg", alt: "地下蓄水渠场景与三名敌人资产", title: "地下蓄水渠", note: "六层动态环境与淤泥潜伏者、提灯溺魂、沉钟执刑者", layout: "wide" },
      { src: "/portfolio/ember-update/noncombat-rooms.jpg", alt: "奖励房、商店和工匠房的背景与运行界面", title: "非战斗房间", note: "奖励、交易与牌组精修拥有独立场景、NPC 与交互反馈", layout: "wide" },
      { src: "/portfolio/ember-update/star-furnace-event.jpg", alt: "熄灭的星炉事件选择界面", title: "熄灭的星炉", note: "以生命、金币、治疗和遗物构成风险与收益的事件选择", layout: "wide" },
      { src: "/portfolio/ember-update/player-motion.jpg", alt: "余烬行者九种动作姿态实机检查板", title: "余烬行者动作系统", note: "20 个运行姿态覆盖呼吸、移动、攻击、施法、受击、胜利与倒地", layout: "wide" },
      { src: "/portfolio/ember-update/card-catalog.jpg", alt: "余烬牌塔 61 张卡牌独立插画目录", title: "61 张牌，一牌一图", note: "攻击、防御、技能与能力牌全部拥有独立插画和稀有度视觉", layout: "portrait" },
      { src: "/portfolio/ember-update/relic-catalog.jpg", alt: "余烬牌塔 20 个遗物图标", title: "20 个改变规则的遗物", note: "每件遗物拥有独立图标，并与能量、抽牌、战斗节奏形成协同", layout: "portrait" },
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
    category: "电商情报 / AI 产品",
    title: "Relay Growth",
    status: "◈ 卖家验证阶段",
    summary: "把零散平台信号，变成卖家可执行的电商内容情报。",
    description: "Relay Growth 是一套面向 TikTok Shop 中小卖家与内容团队的电商情报系统。它持续整理商品热度、内容缺口、竞品节奏与风险信号，再把情报转译成 7 天拍摄日历、播放预测区间与转化漏斗，让团队知道什么值得拍、何时拍，以及为什么。",
    stack: "Commerce Intelligence / AI Product / UX Strategy / TikTok Shop",
    cover: "/portfolio/relay-case.jpg",
    facts: ["商品热度雷达", "内容机会象限", "竞品视频时间线", "预测与风险信号"],
    commerceIntelligence: true,
    productBrief: {
      intro: "卖家不缺更多数据，缺的是能改变今天拍摄决策的情报。Relay 把热度、竞争、内容机会、预测与风险压缩进同一套判断系统，再输出可以直接执行的拍摄计划。",
      steps: [
        { number: "01", title: "输入商品", text: "补充商品链接、核心卖点、目标市场与现有内容表现。" },
        { number: "02", title: "发现机会", text: "识别可借势的趋势、用户痛点和更值得测试的内容角度。" },
        { number: "03", title: "生成内容", text: "产出 7 天计划、逐镜头脚本、口播文案与拍摄提示。" },
        { number: "04", title: "验证增长", text: "记录发布表现，把有效信号继续反馈给下一轮内容。" },
      ],
    },
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
    facts: ["古风玄幻叙事", "角色定妆与状态设计", "场景氛围资产", "剪映后期成片"],
    gallery: [{ src: "/portfolio/ai-drama-poster.png", alt: "AI 漫剧古风玄幻场景" }],
    characterAssets: [
      { src: "/portfolio/ai-drama-assets/priest.jpg", name: "祭司", state: "角色设定 · 正侧背多视角" },
      { src: "/portfolio/ai-drama-assets/cen-huashang.jpg", name: "岑华裳", state: "角色设定 · 宫廷礼服" },
      { src: "/portfolio/ai-drama-assets/cen-yingxue.jpg", name: "岑映雪", state: "角色设定 · 白衣常态" },
      { src: "/portfolio/ai-drama-assets/xie-zhaotang.jpg", name: "谢照棠", state: "角色设定 · 常态" },
      { src: "/portfolio/ai-drama-assets/xie-zhaotang-corrupted.jpg", name: "谢照棠", state: "状态设计 · 异化形态" },
    ],
    environmentAssets: [
      { src: "/portfolio/ai-drama-assets/ritual-arena.jpg", alt: "AI 漫剧祭坛场景多镜头氛围板", title: "祭坛场景", note: "核心场景 · 多镜头氛围与构图探索" },
    ],
    video: "/portfolio/ai-drama-full.mp4",
  },
  {
    id: "sound-study",
    number: "05",
    category: "声音设计 / 生成式交互",
    title: "SOUND STUDY 001",
    status: "◈ 实时声音可视化",
    summary: "一首原创钢琴曲，以及由声音实时驱动的视觉空间。",
    description: "以张朴原创钢琴曲《Original Piano Instrumental》为核心，通过 Web Audio API 实时分析低频、中频、高频与动态变化，将音乐转译为光环、粒子、章节和空间运动。它不是一段预制动画，而是每次播放都会由真实声音重新生成的视觉现场。",
    stack: "Original Music / Web Audio / Canvas / Interaction Design",
    cover: "/portfolio/sound-study-cover.png",
    facts: ["原创钢琴曲 02:18", "实时频谱分析", "四幕声音旅程", "Canvas 粒子系统"],
    gallery: [{ src: "/portfolio/sound-study-cover.png", alt: "SOUND STUDY 001 声音可视化体验" }],
    externalUrl: "https://zhangpu-sound-study.lush-bard-9036.chatgpt.site",
    externalLabel: "进入声音体验",
  },
  {
    id: "voxel-world",
    number: "06",
    category: "AI 编程 / 3D 游戏",
    title: "像素方块世界",
    status: "◈ Coze 可运行版本",
    summary: "用自然语言搭建一个可以探索、建造与破坏的随机方块世界。",
    description: "《像素方块世界》是在 Coze 编程中完成的 3D 网页游戏。我从玩法目标出发，通过对话把 Three.js 场景、第一人称角色、随机地形、方块交互、物理碰撞与响应式控制逐步组合成可运行版本，并在出生点对面的沙质平地上用方块拼出“COZE”，把生成工具本身写进世界。",
    stack: "Coze Coding / Three.js / Voxel World / Interaction Design",
    facts: ["随机方块世界", "第一人称探索", "放置与破坏方块", "重力与碰撞", "桌面 / 移动端控制"],
    gallery: [],
    playUrl: "https://8rwk9p9g6r.coze.site",
  },
];

const tools = ["Product Strategy", "UX / UI", "React", "Godot", "AI Workflow", "Art Direction", "Video Editing", "GitHub"];

export default function Home() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.volume = 0.32;
      try {
        await audio.play();
      } catch {
        setMusicPlaying(false);
      }
    } else {
      audio.pause();
    }
  };

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
    if (selected?.playUrl) audioRef.current?.pause();
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
          <p>六个项目跨越不同领域，但使用同一套方法：找到核心闭环，建立内容系统，再持续把原型推进到值得展示的完整版本。</p>
        </section>

        <section className="project-section" id="work">
          <div className="section-heading" data-reveal>
            <h2>精选项目</h2>
            <p>Selected Projects · 2026</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <button className={`project-card card-${project.id}`} type="button" key={project.id} onClick={() => setSelected(project)} data-reveal>
                <div className="project-image">
                  {project.cover ? (
                    <img src={project.cover} alt="" />
                  ) : (
                    <div className="voxel-card-art" aria-hidden="true" />
                  )}
                </div>
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
          <div className="about-stats"><span><b>06</b><small>完整案例</small></span><span><b>END—TO—END</b><small>从定义到实现</small></span><span><b>2026</b><small>持续更新</small></span></div>
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

      <audio
        ref={audioRef}
        src="/audio/original-piano-instrumental.mp3"
        preload="metadata"
        loop
        onPlay={() => setMusicPlaying(true)}
        onPause={() => setMusicPlaying(false)}
      />
      <button
        className={`music-control${musicPlaying ? " is-playing" : ""}`}
        type="button"
        onClick={toggleMusic}
        aria-pressed={musicPlaying}
        aria-label={musicPlaying ? "暂停背景音乐：Original Piano Instrumental" : "播放背景音乐：Original Piano Instrumental"}
      >
        <span className="music-visual" aria-hidden="true"><i /><i /><i /></span>
        <span className="music-copy"><small>ORIGINAL MUSIC · 张朴</small><b>{musicPlaying ? "正在播放" : "播放钢琴曲"}</b></span>
        <span className="music-action" aria-hidden="true">{musicPlaying ? "Ⅱ" : "▶"}</span>
      </button>

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
            {selected.playUrl && (
              <section className="voxel-play" aria-labelledby="voxel-play-title">
                <div className="voxel-play-heading">
                  <div>
                    <small>PLAYABLE BUILD · COZE HOSTING</small>
                    <h3 id="voxel-play-title">直接进入方块世界。</h3>
                  </div>
                  <a href={selected.playUrl} target="_blank" rel="noreferrer">全屏试玩 ↗</a>
                </div>
                <div className="voxel-frame">
                  <iframe
                    src={selected.playUrl}
                    title="像素方块世界在线试玩"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-pointer-lock"
                    allowFullScreen
                  />
                </div>
                <div className="voxel-controls">
                  <span><b>移动</b>W A S D</span>
                  <span><b>视角</b>鼠标移动</span>
                  <span><b>跳跃</b>空格</span>
                  <span><b>交互</b>左键放置 · 右键破坏</span>
                </div>
              </section>
            )}
            {selected.gameOverview && (
              <section className="game-overview" aria-labelledby="game-overview-title">
                <div className="game-intro">
                  <p>ROGUELIKE DECKBUILDER</p>
                  <h3 id="game-overview-title">让每一张牌，成为继续向上的理由。</h3>
                  <p>从一套基础卡组出发，在不断变化的高塔中战斗、取舍并重组策略。没有固定答案：更强的卡不一定更适合当前牌组，更危险的路线也可能带来决定胜负的遗物。</p>
                </div>
                <div className="game-loop" aria-label="核心玩法循环">
                  <article><span>01</span><i>路线</i><b>选择下一层</b><p>在战斗、精英、商店、休整与未知事件之间判断风险。</p></article>
                  <article><span>02</span><i>战斗</i><b>读取敌人意图</b><p>观察敌方即将采取的行动，用有限能量规划攻击与防御。</p></article>
                  <article><span>03</span><i>构筑</i><b>重组卡牌协同</b><p>围绕伤害、格挡、能量与状态建立能持续运转的组合。</p></article>
                  <article><span>04</span><i>成长</i><b>获取卡牌与遗物</b><p>让奖励改变下一场战斗，也让牌组逐渐形成独特流派。</p></article>
                </div>
                <div className="game-feature-grid">
                  <article><small>DYNAMIC DECK</small><h4>动态牌组构筑</h4><p>61 张独立卡牌不是简单堆叠数值。每次奖励都要考虑费用曲线、抽牌效率与已有协同，有时拒绝一张牌反而能让牌组更稳定。</p></article>
                  <article><small>CHANGING ROUTE</small><h4>每局不同的高塔</h4><p>10 层路线重新组合战斗、资源与风险。安全路线帮助保存状态，精英路线则用更高压力换取更强成长。</p></article>
                  <article><small>READABLE COMBAT</small><h4>可预判的回合战斗</h4><p>敌人通过意图与五种动作姿态传达攻击、防御和受击状态。玩家需要在伤害、格挡和后续回合之间做出明确判断。</p></article>
                  <article><small>RELIC SYNERGY</small><h4>改变规则的遗物</h4><p>20 个遗物持续影响能量、卡牌和战斗节奏。真正强大的不是单件数值，而是遗物与牌组之间形成的连锁反应。</p></article>
                  <article><small>RISK & REWARD</small><h4>风险就是玩法</h4><p>生命值不仅是容错，也是可以被经营的资源。多打一场精英、提前进入商店或保留金币，都会改变这一次登塔的走向。</p></article>
                  <article><small>FINAL ASCENT</small><h4>走向塔顶 Boss</h4><p>普通敌人逐步检验牌组稳定性，最终 Boss 则要求玩家把整局获得的卡牌、遗物与路线收益转化为完整战斗方案。</p></article>
                </div>
                <div className="game-loop-line"><span>选择路线</span><i>→</i><span>回合战斗</span><i>→</i><span>获得奖励</span><i>→</i><span>调整牌组</span><i>→</i><b>继续登塔</b></div>
                <div className="game-build">
                  <div className="game-build-heading">
                    <div><small>CURRENT BUILD · 2026.07</small><h4>从规则原型，推进到完整冒险。</h4></div>
                    <p>新版把战斗之外的世界、叙事和制作管线补齐，让每一次登塔既有策略差异，也有明确的空间与故事进程。</p>
                  </div>
                  <div className="game-build-stats">
                    <span><strong>61</strong><small>独立卡牌插画</small></span>
                    <span><strong>20</strong><small>遗物与规则协同</small></span>
                    <span><strong>10</strong><small>敌人 / Boss</small></span>
                    <span><strong>20</strong><small>主角运行姿态</small></span>
                  </div>
                </div>
                <div className="game-story">
                  <div className="story-copy">
                    <small>STORY OF THE LAST EMBER</small>
                    <h4>高塔不只是地图，<br />也是一段被掩埋的历史。</h4>
                    <p>星火塔曾把晨光送往荒原，却以囚禁“吞星者”为代价维持燃烧。玩家携带最后一粒火登塔，在 NPC、事件与章节记录中逐步发现真相；最终的目标不再只是击败 Boss，而是决定是否重启旧有秩序。</p>
                    <blockquote>“火不会替人选择道路。它只照亮代价。”</blockquote>
                  </div>
                  <ol className="story-acts">
                    <li><span>ACT I</span><div><b>灰烬之路</b><p>穿过余烬门厅与断链回廊，学习在资源不足时继续前进。</p></div></li>
                    <li><span>ACT II</span><div><b>沉钟之下</b><p>进入地下蓄水渠，面对新的敌人、环境和星火塔的旧债。</p></div></li>
                    <li><span>ACT III</span><div><b>无星长阶</b><p>抵达吞星之池，把整局构筑转化为最终战斗与结局选择。</p></div></li>
                  </ol>
                </div>
                <div className="game-production">
                  <article><span>01</span><div><small>COMBAT STAGE</small><h4>动态战斗舞台</h4><p>主角和敌人以脚底为锚进行呼吸、蓄力、突进、受击与回位；火光、冷光、接触影、场景视差和镜头冲击共同建立角色重量。</p></div></article>
                  <article><span>02</span><div><small>WORLD SYSTEM</small><h4>战斗之外的选择</h4><p>奖励房、商店、工匠和事件房都有独立环境与 NPC。玩家可以购买遗物、强化或删除卡牌，也能用生命换取更激进的成长。</p></div></article>
                  <article><span>03</span><div><small>CONTENT PIPELINE</small><h4>可持续扩展的资产管线</h4><p>卡牌、遗物、角色姿态、受光遮罩、背景分层与 VFX 均以固定规格接入，并配套自动验证与实机检查板，便于继续增加内容。</p></div></article>
                </div>
              </section>
            )}
            {selected.productBrief && (
              <section className="product-brief" aria-labelledby="product-brief-title">
                <div className="brief-intro">
                  <p>WHAT RELAY DOES</p>
                  <h3 id="product-brief-title">这个网站是做什么的？</h3>
                  <p>{selected.productBrief.intro}</p>
                </div>
                <div className="brief-flow">
                  {selected.productBrief.steps.map((step) => (
                    <article key={step.number}>
                      <span>{step.number}</span>
                      <div><h4>{step.title}</h4><p>{step.text}</p></div>
                    </article>
                  ))}
                </div>
              </section>
            )}
            {selected.commerceIntelligence && (
              <section className="relay-intelligence" aria-labelledby="relay-intelligence-title">
                <div className="intel-heading">
                  <div><p>COMMERCE INTELLIGENCE SYSTEM</p><h3 id="relay-intelligence-title">从市场信号到拍摄决策</h3></div>
                  <span>DEMO MODEL · 概念验证数据</span>
                </div>
                <div className="intel-console">
                  <div className="console-bar"><div><i /><i /><i /></div><b>Relay / Product Intelligence</b><span>US · TikTok Shop · UPDATED 12 MIN AGO</span></div>
                  <div className="intel-product"><div><small>TRACKING PRODUCT</small><b>Foldable LED Desk Lamp</b></div><span>热度指数 <strong>82</strong>/100</span><em>7D +18.6%</em></div>
                  <div className="intel-grid">
                    <article className="intel-card heat-card">
                      <header><span>01</span><div><b>商品热度雷达</b><small>PRODUCT HEAT RADAR</small></div><em>LIVE</em></header>
                      <div className="heat-score"><strong>82</strong><span>HIGH<br />MOMENTUM</span></div>
                      <div className="signal-bars"><span>搜索增速<i><b style={{ width: "86%" }} /></i><em>86</em></span><span>内容增速<i><b style={{ width: "74%" }} /></i><em>74</em></span><span>互动质量<i><b style={{ width: "79%" }} /></i><em>79</em></span><span>竞争强度<i><b style={{ width: "63%" }} /></i><em>63</em></span></div>
                    </article>
                    <article className="intel-card quadrant-card">
                      <header><span>02</span><div><b>内容机会象限</b><small>CONTENT OPPORTUNITY</small></div></header>
                      <div className="quadrant"><i className="axis-x">竞争强度 →</i><i className="axis-y">需求热度 →</i><span className="q1">桌面焕新<small>91</small></span><span className="q2">小户型<small>84</small></span><span className="q3">护眼实测<small>73</small></span><span className="q4">普通开箱<small>42</small></span></div>
                    </article>
                    <article className="intel-card timeline-card">
                      <header><span>03</span><div><b>竞品视频时间线</b><small>COMPETITOR VIDEO TIMELINE</small></div><em>48H WINDOW</em></header>
                      <div className="video-timeline"><span><i className="hot" /><b>08:40</b><em>竞品 A · Before / After</em><strong>1.2M</strong></span><span><i className="warm" /><b>13:15</b><em>竞品 B · 小空间桌搭</em><strong>486K</strong></span><span><i className="cool" /><b>20:30</b><em>竞品 C · 护眼对比</em><strong>219K</strong></span></div>
                    </article>
                    <article className="intel-card calendar-card">
                      <header><span>04</span><div><b>7 天拍摄日历</b><small>7-DAY SHOOTING CALENDAR</small></div><em>READY TO SHOOT</em></header>
                      <div className="shoot-calendar">{["一|痛点切入|桌面太暗", "二|场景对比|开灯前后", "三|参数证明|三档色温", "四|趋势借势|Desk Reset", "五|真人口播|租房桌搭", "六|UGC 复刻|评论问答", "日|复盘迭代|胜出角度"].map((day, index) => { const [date, type, idea] = day.split("|"); return <span className={index === 3 ? "featured" : ""} key={day}><small>DAY {date}</small><b>{type}</b><em>{idea}</em></span>; })}</div>
                    </article>
                    <article className="intel-card funnel-card">
                      <header><span>05</span><div><b>播放预测与转化漏斗</b><small>FORECAST FUNNEL</small></div></header>
                      <p className="model-note">基于近 30 天同类内容表现的区间测算</p>
                      <div className="funnel"><span><b>120K—180K</b><small>预计播放</small></span><span><b>5.8—7.4%</b><small>商品点击率</small></span><span><b>3.1—4.6%</b><small>点击转化率</small></span><span><b>220—610</b><small>预计订单</small></span></div>
                    </article>
                    <article className="intel-card risk-card">
                      <header><span>06</span><div><b>红黄绿风险信号</b><small>RISK SIGNALS</small></div></header>
                      <div className="risk-list"><span className="green"><i />需求窗口<b>可进入</b><small>搜索与互动同步上升</small></span><span className="yellow"><i />内容同质化<b>需差异化</b><small>普通开箱已进入拥挤区</small></span><span className="red"><i />功效宣称<b>高风险</b><small>避免未经验证的护眼承诺</small></span></div>
                    </article>
                  </div>
                </div>
              </section>
            )}
            <div className={`modal-gallery${selected.gameOverview ? " game-gallery" : ""}`}>
              {selected.gallery.map((image) => (
                <figure className={image.layout ? `gallery-${image.layout}` : ""} key={image.src}>
                  <img src={image.src} alt={image.alt} />
                  {(image.title || image.note) && <figcaption><b>{image.title}</b><span>{image.note}</span></figcaption>}
                </figure>
              ))}
            </div>
            {selected.characterAssets && (
              <section className="character-assets" aria-labelledby="character-assets-title">
                <div className="asset-heading">
                  <p>CHARACTER ASSETS</p>
                  <h3 id="character-assets-title">角色设定与状态资产</h3>
                  <span>通过定妆、多视角与状态变化，维持角色在连续镜头中的视觉一致性。</span>
                </div>
                <div className="character-grid">
                  {selected.characterAssets.map((asset) => (
                    <figure className="character-card" key={`${asset.name}-${asset.state}`}>
                      <img src={asset.src} alt={`${asset.name} ${asset.state}`} />
                      <figcaption><b>{asset.name}</b><span>{asset.state}</span></figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            )}
            {selected.environmentAssets && (
              <section className="environment-assets" aria-labelledby="environment-assets-title">
                <div className="asset-heading">
                  <p>ENVIRONMENT ASSETS</p>
                  <h3 id="environment-assets-title">核心场景资产</h3>
                  <span>围绕空间结构、光源、法阵和镜头机位，统一关键戏份的环境氛围。</span>
                </div>
                {selected.environmentAssets.map((asset) => (
                  <figure className="environment-card" key={asset.src}>
                    <img src={asset.src} alt={asset.alt} />
                    <figcaption><b>{asset.title}</b><span>{asset.note}</span></figcaption>
                  </figure>
                ))}
              </section>
            )}
            {selected.video && <video controls playsInline preload="metadata" poster={selected.cover} onPlay={() => audioRef.current?.pause()}><source src={selected.video} type="video/mp4" /></video>}
            <div className="modal-footer">
              <span>{selected.stack}</span>
              <div className="modal-actions">
                {selected.externalUrl && <a href={selected.externalUrl} target="_blank" rel="noreferrer">{selected.externalLabel ?? "查看项目"} ↗</a>}
                <button type="button" onClick={() => setSelected(null)}>返回项目列表 ↑</button>
              </div>
            </div>
          </article>
        </div>
      )}
    </main>
  );
}
