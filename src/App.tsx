import { useState, useEffect } from "react";

export default function App() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", {
        hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
      }));
      setTick(t => t + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("olalekeajibola93@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --black: #080808;
          --white: #ededE8;
          --green: #7cfc5e;
          --gray: #1c1c1c;
          --border: #242424;
          --mid: #505050;
          --dim: #303030;
        }

        html { cursor: crosshair; scroll-behavior: smooth; }

        body {
          background: var(--black);
          color: var(--white);
          font-family: 'DM Mono', monospace;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* scanline texture */
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.03) 2px,
            rgba(0,0,0,0.03) 4px
          );
          pointer-events: none;
          z-index: 9999;
        }

        ::selection { background: var(--green); color: var(--black); }

        /* ── TICKER ── */
        .ticker {
          background: var(--green);
          color: var(--black);
          font-size: 0.65rem;
          font-weight: 500;
          padding: 0.3rem 0;
          white-space: nowrap;
          overflow: hidden;
          letter-spacing: 0.08em;
          border-bottom: 2px solid var(--black);
        }
        .ticker-track { display: inline-block; animation: tick 30s linear infinite; }
        @keyframes tick { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        /* ── LAYOUT ── */
        .wrap { max-width: 1080px; margin: 0 auto; padding: 0 1.5rem; }

        /* ── NAV ── */
        nav {
          border-bottom: 1px solid var(--border);
          padding: 1rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.3rem;
          letter-spacing: 0.12em;
          color: var(--green);
        }
        .nav-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          font-size: 0.6rem;
          letter-spacing: 0.12em;
          color: var(--mid);
          text-transform: uppercase;
        }
        .nav-right .clock { color: var(--green); font-weight: 500; }
        .nav-link {
          color: var(--mid);
          text-decoration: none;
          transition: color 0.15s;
          border: none;
          background: none;
          cursor: crosshair;
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0;
        }
        .nav-link:hover { color: var(--green); }

        /* ── HERO ── */
        .hero {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 3rem;
          padding: 4rem 0 3rem;
          border-bottom: 1px solid var(--border);
          align-items: end;
        }
        .hero-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(5rem, 14vw, 10rem);
          line-height: 0.85;
          letter-spacing: -0.01em;
          color: var(--white);
        }
        .hero-name .green { color: var(--green); }
        .hero-name .outline {
          color: transparent;
          -webkit-text-stroke: 1px var(--white);
        }
        .hero-name .outline-green {
          color: transparent;
          -webkit-text-stroke: 1px var(--green);
        }
        .hero-sub {
          font-size: 0.7rem;
          color: var(--mid);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-top: 1.5rem;
          line-height: 2;
        }
        .hero-sub span { color: var(--white); }
        .hero-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 1rem;
          padding-bottom: 0.5rem;
        }
        .pfp-wrap { position: relative; width: fit-content; }
        .pfp {
          width: 140px;
          height: 140px;
          object-fit: cover;
          image-rendering: pixelated;
          border: 2px solid var(--border);
          display: block;
          filter: contrast(1.05);
        }
        .pfp-tag {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: var(--green);
          color: var(--black);
          font-size: 0.5rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-align: center;
          padding: 0.2rem;
          text-transform: uppercase;
        }
        .status-pill {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.6rem;
          letter-spacing: 0.12em;
          color: var(--green);
          text-transform: uppercase;
          border: 1px solid rgba(124,252,94,0.25);
          padding: 0.3rem 0.6rem;
        }
        .dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--green);
          animation: blink 1.5s ease infinite;
        }
        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0.15; } }

        /* ── STATS ROW ── */
        .stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-bottom: 1px solid var(--border);
        }
        .stat {
          padding: 1.5rem 0;
          border-right: 1px solid var(--border);
          text-align: center;
        }
        .stat:last-child { border-right: none; }
        .stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.8rem;
          color: var(--white);
          line-height: 1;
        }
        .stat-num.green { color: var(--green); }
        .stat-label {
          font-size: 0.55rem;
          letter-spacing: 0.15em;
          color: var(--mid);
          text-transform: uppercase;
          margin-top: 0.3rem;
        }

        /* ── SECTION ── */
        .section { border-bottom: 1px solid var(--border); }
        .section-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 1.5rem 0 1rem;
        }
        .section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 3rem;
          letter-spacing: 0.05em;
          color: var(--white);
          line-height: 1;
        }
        .section-meta {
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          color: var(--mid);
          text-transform: uppercase;
        }

        /* ── PROJECT CARDS ── */
        .projects { display: flex; flex-direction: column; }
        .project {
          display: grid;
          grid-template-columns: 3rem 1fr auto;
          gap: 1.5rem;
          align-items: start;
          padding: 1.5rem 0;
          border-bottom: 1px solid var(--border);
          text-decoration: none;
          color: inherit;
          position: relative;
          transition: background 0.15s;
          cursor: crosshair;
        }
        .project:last-child { border-bottom: none; }
        .project::after {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 2px;
          background: var(--green);
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.3s ease;
        }
        .project:hover::after { transform: scaleY(1); }
        .project-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          color: var(--dim);
          line-height: 1;
          padding-top: 0.25rem;
        }
        .project:hover .project-num { color: var(--green); }
        .project-body { flex: 1; }
        .project-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.2rem;
          letter-spacing: 0.02em;
          line-height: 1;
          color: var(--white);
          margin-bottom: 0.5rem;
          transition: color 0.15s;
        }
        .project:hover .project-name { color: var(--green); }
        .project-desc {
          font-size: 0.75rem;
          line-height: 1.8;
          color: var(--mid);
          max-width: 560px;
          margin-bottom: 0.75rem;
        }
        .project-tags { display: flex; gap: 0.4rem; flex-wrap: wrap; }
        .ptag {
          font-size: 0.55rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: 1px solid var(--border);
          color: var(--mid);
          padding: 0.2rem 0.5rem;
        }
        .project-side {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.75rem;
          padding-top: 0.25rem;
        }
        .badge {
          font-size: 0.55rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.25rem 0.6rem;
          border: 1px solid;
        }
        .badge.live { color: var(--green); border-color: rgba(124,252,94,0.3); }
        .badge.building { color: #ff9f43; border-color: rgba(255,159,67,0.3); }
        .badge.shipped { color: #74b9ff; border-color: rgba(116,185,255,0.3); }
        .project-link {
          font-size: 0.6rem;
          color: var(--mid);
          text-decoration: none;
          letter-spacing: 0.1em;
          transition: color 0.15s;
        }
        .project-link:hover { color: var(--green); }

        /* ── CONTACT ── */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          padding: 3rem 0;
        }
        .contact-headline {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: 0.9;
          color: var(--white);
          margin-bottom: 2rem;
        }
        .contact-headline .green { color: var(--green); }
        .contact-headline .outline { color: transparent; -webkit-text-stroke: 1px var(--white); }
        .contact-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; }
        .btn {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.75rem 1.25rem;
          cursor: crosshair;
          transition: all 0.15s;
          text-decoration: none;
          display: inline-block;
          border: none;
        }
        .btn-primary { background: var(--green); color: var(--black); }
        .btn-primary:hover { opacity: 0.85; }
        .btn-secondary { background: transparent; color: var(--white); border: 1px solid var(--border); }
        .btn-secondary:hover { border-color: var(--green); color: var(--green); }
        .btn-ghost { background: transparent; color: var(--mid); border: 1px solid var(--dim); }
        .btn-ghost:hover { border-color: var(--white); color: var(--white); }
        .contact-links {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0;
        }
        .clink {
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-decoration: none;
          color: var(--mid);
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 1rem 0;
          border-bottom: 1px solid var(--border);
          transition: color 0.15s;
          cursor: crosshair;
          background: none;
          border-top: none;
          border-left: none;
          border-right: none;
          font-family: 'DM Mono', monospace;
          width: 100%;
          text-align: left;
        }
        .clink:hover { color: var(--green); }
        .clink-arrow { font-size: 1rem; transition: transform 0.15s; }
        .clink:hover .clink-arrow { transform: translate(2px, -2px); }

        /* ── FOOTER ── */
        footer {
          padding: 1rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.58rem;
          color: var(--mid);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        /* ── MOBILE ── */
        @media (max-width: 640px) {
          .hero { grid-template-columns: 1fr; }
          .hero-right { align-items: flex-start; flex-direction: row; align-items: center; }
          .stats { grid-template-columns: repeat(2, 1fr); }
          .stat:nth-child(2) { border-right: none; }
          .project { grid-template-columns: 2rem 1fr; }
          .project-side { display: none; }
          .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
          .hero-name { font-size: clamp(4rem, 18vw, 6rem); }
        }
      `}</style>

      {/* TICKER */}
      <div className="ticker">
        <span className="ticker-track">
          {Array(4).fill(
            "AJIBOLA MALIK · @DEVAJIBOLA · AI × WEB3 · BUILDING IN PUBLIC · ERC-8004 · ARC TESTNET · CIRCLE USDC · AGENTVAULT · INTELLIWORK · GENLAYER · DRIP · PURE MATHEMATICS · ONCHAIN · "
          ).join("")}
        </span>
      </div>

      <div className="wrap">
        <nav>
          <div className="logo">DEVAJIBOLA.XYZ</div>
          <div className="nav-right">
            <span>SYS <span className="clock">{time || "--:--:--"}</span></span>
            <a href="https://github.com/ajibola-dev" target="_blank" className="nav-link">GitHub</a>
            <a href="https://x.com/devajibola" target="_blank" className="nav-link">X</a>
            <a href="/Ajibola_Malik_CV.pdf" download className="nav-link">CV ↓</a>
          </div>
        </nav>

        {/* HERO */}
        <div className="hero">
          <div>
            <div className="hero-name">
              <span className="green">AJI</span><span className="outline">BO</span>LA<br />
              <span className="outline-green">MA</span>LIK
            </div>
            <div className="hero-sub">
              <span>Self-taught</span> · Web3 & AI Developer<br />
              Building at the intersection of <span>AI and Web3</span><br />
              Final year · Pure & Applied Mathematics · LAUTECH
            </div>
          </div>
          <div className="hero-right">
            <div className="pfp-wrap">
              <img src="/pfp.jpg" alt="Ajibola" className="pfp" />
              <div className="pfp-tag">@devajibola</div>
            </div>
            <div className="status-pill">
              <div className="dot" />
              Actively building
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="stats">
          {[
            ["3", "Live products", true],
            ["10+", "Agents onchain", false],
            ["6", "USDC paid out", true],
            ["∞", "Portable rep", false],
          ].map(([n, l, g]) => (
            <div className="stat" key={String(l)}>
              <div className={`stat-num${g ? " green" : ""}`}>{n}</div>
              <div className="stat-label">{l}</div>
            </div>
          ))}
        </div>

        {/* PROJECTS */}
        <div className="section">
          <div className="section-head">
            <div className="section-title">PROJECTS</div>
            <div className="section-meta">03 works · {tick % 2 === 0 ? "●" : "○"} live</div>
          </div>
          <div className="projects">

            {/* AGENTVAULT */}
            <a href="https://agentvault-ecru.vercel.app" target="_blank" className="project">
              <div className="project-num">01</div>
              <div className="project-body">
                <div className="project-name">AGENTVAULT</div>
                <div className="project-desc">
                  Reputation-gated AI agent marketplace on Arc Testnet. Agents register onchain identities via ERC-8004,
                  build portable reputation across tasks, and get paid in USDC through trustless escrow.
                  First confirmed escrow payout: 6 USDC on Arc Testnet, April 2026.
                </div>
                <div className="project-tags">
                  {["ERC-8004", "Arc Testnet", "Circle", "USDC Escrow", "Next.js", "viem", "Supabase"].map(t => (
                    <span className="ptag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-side">
                <span className="badge building">Building</span>
                <span className="project-link">agentvault-ecru.vercel.app ↗</span>
              </div>
            </a>

            {/* INTELLIWORK */}
            <a href="https://github.com/ajibola-dev" target="_blank" className="project">
              <div className="project-num">02</div>
              <div className="project-body">
                <div className="project-name">INTELLIWORK</div>
                <div className="project-desc">
                  Autonomous AI-judged work marketplace with an onchain dispute court for the agent economy.
                  Built on GenLayer's Bradbury testnet — Intelligent Contracts judge work quality,
                  resolve disputes, and release payment without human arbiters.
                </div>
                <div className="project-tags">
                  {["GenLayer", "Intelligent Contracts", "AI Agents", "Onchain Court", "Python"].map(t => (
                    <span className="ptag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-side">
                <span className="badge building">Building</span>
                <span className="project-link">github.com/ajibola-dev ↗</span>
              </div>
            </a>

            {/* DRIP */}
            <a href="https://drip-wine-nine.vercel.app" target="_blank" className="project">
              <div className="project-num">03</div>
              <div className="project-body">
                <div className="project-name">DRIP</div>
                <div className="project-desc">
                  USDC payment links on Arc Testnet. Create a link, share it anywhere,
                  get paid instantly in stablecoins. CCTP crosschain support built in.
                </div>
                <div className="project-tags">
                  {["Arc Testnet", "USDC", "CCTP", "Solidity", "React"].map(t => (
                    <span className="ptag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-side">
                <span className="badge live">Live</span>
                <span className="project-link">drip-wine-nine.vercel.app ↗</span>
              </div>
            </a>

          </div>
        </div>

        {/* CONTACT */}
        <div className="section">
          <div className="contact-grid">
            <div>
              <div className="contact-headline">
                LET'S<br /><span className="green">BUILD</span><br /><span className="outline">TOGETHER.</span>
              </div>
              <div className="contact-actions">
                <a href="https://x.com/devajibola" target="_blank" className="btn btn-primary">
                  Follow @devajibola
                </a>
                <button onClick={copyEmail} className="btn btn-secondary">
                  {copied ? "Copied ✓" : "Copy email"}
                </button>
                <a href="/Ajibola_Malik_CV.pdf" download className="btn btn-ghost">
                  Download CV ↓
                </a>
              </div>
            </div>
            <div className="contact-links">
              <a href="https://x.com/devajibola" target="_blank" className="clink">
                X / Twitter <span className="clink-arrow">↗</span>
              </a>
              <a href="https://github.com/ajibola-dev" target="_blank" className="clink">
                GitHub <span className="clink-arrow">↗</span>
              </a>
              <a href="https://linkedin.com/in/devajibola" target="_blank" className="clink">
                LinkedIn <span className="clink-arrow">↗</span>
              </a>
              <button onClick={copyEmail} className="clink">
                Email {copied ? <span style={{color:"var(--green)"}}>✓ Copied</span> : <span className="clink-arrow">↗</span>}
              </button>
            </div>
          </div>
        </div>

        <footer>
          <span>© 2026 · Ajibola Malik · @devajibola</span>
          <span>AI × Web3 · Building in public</span>
        </footer>
      </div>
    </>
  );
}
