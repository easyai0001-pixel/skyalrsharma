import { useState } from "react";
import "./App.css";

const CATEGORIES = [
  "All", "Text", "Graphics", "Overlays", "Logos", "Social Media",
  "Charts & Data", "Money", "App & Website", "UI Elements", "Launch Videos",
];

const TEMPLATES = [
  { title: "Instagram profile", desc: "Please create an animation of this", bg: "#f0f0f2", cat: "Social Media" },
  { title: "ON-OFF Toggle", desc: "Social media animation", bg: "#eef0ee", cat: "UI Elements" },
  { title: "Upwork Ad", desc: "Create this upwork animation", bg: "linear-gradient(180deg,#0a0f0a,#1f7a3d)", cat: "Social Media" },
  { title: "Photobooth animation", desc: "Social media animation", bg: "#e9c5cf", cat: "Social Media" },
  { title: "Concert animation", desc: "Graphic animation", bg: "#14202b", cat: "Graphics" },
  { title: "Logo Reveal", desc: "Brand animation", bg: "#101014", cat: "Logos" },
  { title: "Data Chart", desc: "Charts & data animation", bg: "#dff0e8", cat: "Charts & Data" },
  { title: "Text Pop", desc: "Kinetic typography", bg: "#f3e9c5", cat: "Text" },
];

export default function App() {
  const [activeCat, setActiveCat] = useState("Social Media");
  const [prompt, setPrompt] = useState("");

  const filtered =
    activeCat === "All"
      ? TEMPLATES
      : TEMPLATES.filter((t) => t.cat === activeCat);

  const handleCreate = () => {
    if (!prompt.trim()) return;
    alert(`Creating animation for: "${prompt}"`);
  };

  return (
    <div className="app">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="logo">
          <span className="logo-mark">✦</span> Swishy
        </div>

        <button className="create-btn">✦ Create Animation</button>

        <nav className="nav">
          <a className="nav-item">▦ Templates</a>
          <a className="nav-item">🗂 My Projects</a>
          <a className="nav-item">👥 Community</a>
          <a className="nav-item">📖 Tutorials &amp; Help</a>
        </nav>
      </aside>

      {/* MAIN */}
      <main className="main">
        {/* TOPBAR */}
        <header className="topbar">
          <div className="user-chip">
            <span className="user-icon">◎</span> skylar sharma{" "}
            <span className="chev">▾</span>
          </div>
          <div className="social-icons">
            <span>◉</span>
            <span>𝕏</span>
          </div>
          <div className="top-right">
            <a className="top-link">Feedback</a>
            <a className="top-link">Changelog</a>
            <button className="upgrade-btn">Upgrade</button>
            <div className="avatar">S</div>
          </div>
        </header>

        {/* HERO */}
        <section className="hero">
          <h1>What can I help animate?</h1>
          <p className="hero-sub">
            Your AI motion designer for stunning animations and typefaces
          </p>

          <div className="prompt-box">
            <input
              className="prompt-input"
              placeholder="What will you imagine?"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCreate()}
            />
            <div className="prompt-footer">
              <div className="prompt-tools">
                <button className="tool-btn">🖼</button>
                <button className="tool-btn">🎥</button>
                <span className="divider" />
                <button className="model-btn">◉ Mini ▾</button>
              </div>
              <button className="create-cta" onClick={handleCreate}>
                Create
              </button>
            </div>
          </div>
        </section>

        {/* TABS */}
        <div className="tabs">
          <button className="tab-search">🔍</button>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`tab ${c === activeCat ? "active" : ""}`}
              onClick={() => setActiveCat(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid">
          {filtered.length === 0 ? (
            <p className="empty">No templates in this category yet.</p>
          ) : (
            filtered.map((t, i) => (
              <div className="card" key={i}>
                <div className="card-thumb" style={{ background: t.bg }} />
                <h3 className="card-title">{t.title}</h3>
                <p className="card-desc">{t.desc}</p>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
