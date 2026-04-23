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
    navigator.clipboard.writeText("hello@devajibola.me");
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
          --white: #edede8;
          --green: #7cfc5e;
          --gray: #1c1c1c;
          --border: #222222;
          --mid: #505050;
          --dim: #2a2a2a;
        }

        html { cursor: crosshair; scroll-behavior: smooth; }

        body {
          background: var(--black);
          color: var(--white);
          font-family: 'DM Mono', monospace;
          min-height: 100vh;
          overflow-x: hidden;
        }

        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background: repeating-linear-gradient(
            0deg, transparent, transparent 2px,
            rgba(0,0,0,0.025) 2px, rgba(0,0,0,0.025) 4px
          );
          pointer-events: none;
          z-index: 9999;
        }

        ::selection { background: var(--green); color: var(--black); }

        .ticker {
          background: var(--green);
          color: var(--black);
          font-size: 0.62rem;
          font-weight: 500;
          padding: 0.28rem 0;
          white-space: nowrap;
          overflow: hidden;
          letter-spacing: 0.09em;
        }
        .ticker-track { display: inline-block; animation: scroll 35s linear infinite; }
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        .wrap { max-width: 1080px; margin: 0 auto; padding: 0 1.5rem; }

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
          font-size: 1.25rem;
          letter-spacing: 0.14em;
          color: var(--green);
        }
        .nav-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          font-size: 0.58rem;
          letter-spacing: 0.13em;
          color: var(--mid);
          text-transform: uppercase;
        }
        .clock { color: var(--green); font-weight: 500; }
        .nav-link {
          color: var(--mid); text-decoration: none;
          transition: color 0.15s; border: none; background: none;
          cursor: crosshair; font-family: 'DM Mono', monospace;
          font-size: 0.58rem; letter-spacing: 0.13em; text-transform: uppercase; padding: 0;
        }
        .nav-link:hover { color: var(--green); }

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
          font-size: clamp(4.5rem, 13vw, 9.5rem);
          line-height: 0.85;
          letter-spacing: -0.01em;
        }
        .hero-name .solid { color: var(--white); }
        .hero-name .green { color: var(--green); }
        .hero-name .outline { color: transparent; -webkit-text-stroke: 1px var(--white); }
        .hero-name .outline-g { color: transparent; -webkit-text-stroke: 1px var(--green); }

        .hero-meta {
          margin-top: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .hero-role {
          font-size: 0.72rem;
          color: var(--white);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .hero-sub {
          font-size: 0.68rem;
          color: var(--mid);
          letter-spacing: 0.08em;
          line-height: 1.9;
        }
        .hero-sub span { color: var(--white); }

        .hero-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.9rem;
          padding-bottom: 0.5rem;
        }
        .pfp-wrap { position: relative; width: fit-content; }
        .pfp {
          width: 130px; height: 130px;
          object-fit: cover;
          image-rendering: pixelated;
          border: 1px solid var(--border);
          display: block;
        }
        .pfp-tag {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: var(--green); color: var(--black);
          font-size: 0.48rem; font-weight: 500;
          letter-spacing: 0.12em; text-align: center;
          padding: 0.18rem; text-transform: uppercase;
        }
        .status-pill {
          display: flex; align-items: center; gap: 0.4rem;
          font-size: 0.58rem; letter-spacing: 0.12em;
          color: var(--green); text-transform: uppercase;
          border: 1px solid rgba(124,252,94,0.2);
          padding: 0.28rem 0.6rem;
        }
        .dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: var(--green);
          animation: blink 1.5s ease infinite;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.15} }

        .open-to-work {
          font-size: 0.55rem; letter-spacing: 0.12em; text-transform: uppercase;
          color: #ffd700; border: 1px solid rgba(255,215,0,0.25);
          padding: 0.25rem 0.6rem;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          border-bottom: 1px solid var(--border);
        }
        .stat {
          padding: 1.25rem 0;
          border-right: 1px solid var(--border);
          text-align: center;
        }
        .stat:last-child { border-right: none; }
        .stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.4rem; color: var(--white); line-height: 1;
        }
        .stat-num.g { color: var(--green); }
        .stat-label {
          font-size: 0.5rem; letter-spacing: 0.14em;
          color: var(--mid); text-transform: uppercase; margin-top: 0.25rem;
        }

        .section { border-bottom: 1px solid var(--border); }
        .section-head {
          display: flex; justify-content: space-between;
          align-items: baseline; padding: 1.5rem 0 1rem;
        }
        .section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.8rem; letter-spacing: 0.05em;
          color: var(--white); line-height: 1;
        }
        .section-meta {
          font-size: 0.58rem; letter-spacing: 0.14em;
          color: var(--mid); text-transform: uppercase;
        }

        .projects { display: flex; flex-direction: column; }
        .project {
          display: grid;
          grid-template-columns: 2.5rem 1fr auto;
          gap: 1.5rem; align-items: start;
          padding: 1.5rem 0;
          border-bottom: 1px solid var(--border);
          text-decoration: none; color: inherit;
          position: relative; cursor: crosshair;
        }
        .project:last-child { border-bottom: none; }
        .project::after {
          content: ''; position: absolute;
          left: 0; top: 0; bottom: 0; width: 2px;
          background: var(--green);
          transform: scaleY(0); transform-origin: bottom;
          transition: transform 0.3s ease;
        }
        .project:hover::after { transform: scaleY(1); }
        .project-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.8rem; color: var(--dim); line-height: 1;
          padding-top: 0.3rem; transition: color 0.15s;
        }
        .project:hover .project-num { color: var(--green); }
        .project-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem; letter-spacing: 0.02em;
          line-height: 1; color: var(--white);
          margin-bottom: 0.4rem; transition: color 0.15s;
        }
        .project:hover .project-name { color: var(--green); }
        .project-desc {
          font-size: 0.72rem; line-height: 1.85;
          color: var(--mid); max-width: 540px; margin-bottom: 0.7rem;
        }
        .project-desc strong { color: var(--white); font-weight: 400; }
        .project-tags { display: flex; gap: 0.35rem; flex-wrap: wrap; }
        .ptag {
          font-size: 0.52rem; letter-spacing: 0.1em; text-transform: uppercase;
          border: 1px solid var(--border); color: var(--mid);
          padding: 0.18rem 0.45rem;
        }
        .project-side {
          display: flex; flex-direction: column;
          align-items: flex-end; gap: 0.6rem; padding-top: 0.3rem;
          min-width: 80px;
        }
        .badge {
          font-size: 0.52rem; letter-spacing: 0.12em;
          text-transform: uppercase; padding: 0.22rem 0.55rem; border: 1px solid;
        }
        .badge.live { color: var(--green); border-color: rgba(124,252,94,0.3); }
        .badge.building { color: #ff9f43; border-color: rgba(255,159,67,0.3); }
        .badge.shipped { color: #74b9ff; border-color: rgba(116,185,255,0.3); }
        .project-url {
          font-size: 0.55rem; color: var(--mid); text-decoration: none;
          letter-spacing: 0.08em; transition: color 0.15s; text-align: right;
        }
        .project:hover .project-url { color: var(--green); }

        .contact-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 3rem; padding: 3rem 0;
        }
        .contact-headline {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.8rem, 6.5vw, 5rem);
          line-height: 0.9; color: var(--white); margin-bottom: 1.75rem;
        }
        .contact-headline .g { color: var(--green); }
        .contact-headline .o { color: transparent; -webkit-text-stroke: 1px var(--white); }
        .contact-actions { display: flex; gap: 0.65rem; flex-wrap: wrap; }
        .btn {
          font-family: 'DM Mono', monospace;
          font-size: 0.62rem; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          padding: 0.7rem 1.1rem; cursor: crosshair;
          transition: all 0.15s; text-decoration: none;
          display: inline-block; border: none;
        }
        .btn-primary { background: var(--green); color: var(--black); }
        .btn-primary:hover { opacity: 0.82; }
        .btn-secondary { background: transparent; color: var(--white); border: 1px solid var(--border); }
        .btn-secondary:hover { border-color: var(--green); color: var(--green); }
        .btn-ghost { background: transparent; color: var(--mid); border: 1px solid var(--dim); }
        .btn-ghost:hover { border-color: var(--white); color: var(--white); }

        .contact-links { display: flex; flex-direction: column; justify-content: center; }
        .clink {
          display: flex; justify-content: space-between; align-items: center;
          text-decoration: none; color: var(--mid);
          font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase;
          padding: 0.9rem 0; border-bottom: 1px solid var(--border);
          transition: color 0.15s; cursor: crosshair;
          background: none; border-top: none; border-left: none; border-right: none;
          font-family: 'DM Mono', monospace; width: 100%; text-align: left;
        }
        .clink:last-child { border-bottom: none; }
        .clink:hover { color: var(--green); }
        .arr { transition: transform 0.15s; }
        .clink:hover .arr { transform: translate(2px,-2px); }

        footer {
          padding: 1rem 0;
          display: flex; justify-content: space-between; align-items: center;
          font-size: 0.55rem; color: var(--mid);
          letter-spacing: 0.12em; text-transform: uppercase;
        }

        @media (max-width: 640px) {
          .hero { grid-template-columns: 1fr; }
          .hero-right { flex-direction: row; align-items: center; }
          .stats { grid-template-columns: repeat(3, 1fr); }
          .stat:nth-child(3) { border-right: none; }
          .stat:nth-child(4), .stat:nth-child(5) { border-top: 1px solid var(--border); }
          .project { grid-template-columns: 2rem 1fr; }
          .project-side { display: none; }
          .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
          .hero-name { font-size: clamp(3.5rem, 17vw, 5.5rem); }
        }
      `}</style>

      <div className="ticker">
        <span className="ticker-track">
          {Array(4).fill(
            "AJIBOLA MALIK · @DEVAJIBOLA · WEB3 & AI DEVELOPER · ERC-8004 · ARC TESTNET · CIRCLE USDC · AGENTVAULT · AGENTVAULT SOLANA · INTELLIWORK · GENLAYER · DRIP · ALPHA HUNTER · PURE MATHEMATICS · LAUTECH · COLOSSEUM HACKATHON · OPEN TO INTERNSHIPS · "
          ).join("")}
        </span>
      </div>

      <div className="wrap">
        <nav>
          <div className="logo">DEVAJIBOLA.ME</div>
          <div className="nav-right">
            <span>SYS <span className="clock">{time || "--:--:--"}</span></span>
            <a href="https://github.com/ajibola-dev" target="_blank" className="nav-link">GitHub</a>
            <a href="https://linkedin.com/in/devajibola" target="_blank" className="nav-link">LinkedIn</a>
            <a href="https://x.com/devajibola" target="_blank" className="nav-link">X</a>
            <a href="/Ajibola-Malik-CV.pdf" download className="nav-link">CV ↓</a>
          </div>
        </nav>

        <div className="hero">
          <div>
            <div className="hero-name">
              <span className="green">AJI</span><span className="outline">BO</span>LA<br />
              <span className="outline-g">MA</span><span className="solid">LIK</span>
            </div>
            <div className="hero-meta">
              <div className="hero-role">Web3 & AI Developer · Smart Contracts · Onchain Infrastructure</div>
              <div className="hero-sub">
                <span>Final year</span> · Pure & Applied Mathematics · LAUTECH · Lagos<br />
                <span>236 GitHub contributions</span> · 6 active repos · 4 live products<br />
                Building at the intersection of <span>AI and Web3</span>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="pfp-wrap">
              <img src="/pfp.jpg" alt="Ajibola" className="pfp" />
              <div className="pfp-tag">@devajibola</div>
            </div>
            <div className="open-to-work">Open to internships</div>
            <div className="status-pill">
              <div className="dot" />
              {tick % 2 === 0 ? "Actively building" : "Colosseum · May 11"}
            </div>
          </div>
        </div>

        <div className="stats">
          {[
            ["4", "Live products", true],
            ["236", "GitHub contribs", false],
            ["6", "USDC paid out", true],
            ["3", "Hackathons", false],
            ["∞", "Portable rep", true],
          ].map(([n, l, g]) => (
            <div className="stat" key={String(l)}>
              <div className={`stat-num${g ? " g" : ""}`}>{n}</div>
              <div className="stat-label">{l}</div>
            </div>
          ))}
        </div>

        <div className="section">
          <div className="section-head">
            <div className="section-title">PROJECTS</div>
            <div className="section-meta">04 works · github.com/ajibola-dev</div>
          </div>
          <div className="projects">

            <a href="https://agentvault-ecru.vercel.app" target="_blank" className="project">
              <div className="project-num">01</div>
              <div>
                <div className="project-name">AGENTVAULT</div>
                <div className="project-desc">
                  Reputation-gated AI agent marketplace on Arc Testnet. Agents register onchain identities via ERC-8004,
                  build portable reputation across tasks, and get paid in USDC through trustless escrow.{" "}
                  <strong>First confirmed escrow payout: 6 USDC on Arc Testnet, April 2026.</strong>{" "}
                  54 commits in April 2026. Submitting to Arc Testnet hackathon.
                  Also porting to Solana for Colosseum Frontier (deadline May 11).
                </div>
                <div className="project-tags">
                  {["ERC-8004","Arc Testnet","Circle SCA","USDC Escrow","Next.js 14","viem","Supabase","SIWE","GitHub Actions CI"].map(t => (
                    <span className="ptag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-side">
                <span className="badge building">Building</span>
                <span className="project-url">agentvault-ecru.vercel.app ↗</span>
              </div>
            </a>

            <a href="https://github.com/ajibola-dev/intelliwork" target="_blank" className="project">
              <div className="project-num">02</div>
              <div>
                <div className="project-name">INTELLIWORK</div>
                <div className="project-desc">
                  Autonomous AI-judged work marketplace with an onchain dispute court built on GenLayer's Bradbury testnet.
                  Intelligent Contracts judge task completion and resolve disputes without human arbiters.{" "}
                  <strong>43 commits in April 2026.</strong>
                </div>
                <div className="project-tags">
                  {["GenLayer","Intelligent Contracts","AI Agents","Onchain Court","TypeScript","Next.js"].map(t => (
                    <span className="ptag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-side">
                <span className="badge building">Building</span>
                <span className="project-url">github.com/ajibola-dev ↗</span>
              </div>
            </a>

            <a href="https://drip-wine-nine.vercel.app" target="_blank" className="project">
              <div className="project-num">03</div>
              <div>
                <div className="project-name">DRIP</div>
                <div className="project-desc">
                  Cross-chain USDC payment protocol on Arc Testnet. Create a payment link, share anywhere,
                  get paid instantly in stablecoins across every EVM chain.{" "}
                  <strong>Deployed USDCPayment contract; bridged USDC from Ethereum Sepolia to Arc via CCTP v2.</strong>
                </div>
                <div className="project-tags">
                  {["Arc Testnet","USDC","CCTP v2","Solidity","React","Vite","wagmi"].map(t => (
                    <span className="ptag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-side">
                <span className="badge live">Live</span>
                <span className="project-url">drip-wine-nine.vercel.app ↗</span>
              </div>
            </a>

            <a href="https://github.com/ajibola-dev/abdmalik-alpha-hunter" target="_blank" className="project">
              <div className="project-num">04</div>
              <div>
                <div className="project-name">ALPHA HUNTER</div>
                <div className="project-desc">
                  Autonomous Web3 airdrop intelligence system running 24/7 on Railway.
                  Monitors X alpha callers, DeFiLlama funding databases, and GitHub to surface
                  early-stage crypto projects before they go mainstream.{" "}
                  <strong>Implements Zun Method weighted scoring (0-10), farming templates for FHE, ZK, DePIN, restaking, and AI/ML.</strong>
                </div>
                <div className="project-tags">
                  {["Python","Railway","24/7 Bot","Web3 Intelligence","ZK","DePIN","AI/ML"].map(t => (
                    <span className="ptag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-side">
                <span className="badge shipped">Shipped</span>
                <span className="project-url">github.com/ajibola-dev ↗</span>
              </div>
            </a>

          </div>
        </div>

        <div className="section">
          <div className="contact-grid">
            <div>
              <div className="contact-headline">
                LET'S<br /><span className="g">BUILD</span><br /><span className="o">TOGETHER.</span>
              </div>
              <div className="contact-actions">
                <a href="https://x.com/devajibola" target="_blank" className="btn btn-primary">
                  Follow @devajibola
                </a>
                <button onClick={copyEmail} className="btn btn-secondary">
                  {copied ? "Copied ✓" : "Copy email"}
                </button>
                <a href="/Ajibola-Malik-CV.pdf" download className="btn btn-ghost">
                  Download CV ↓
                </a>
              </div>
            </div>
            <div className="contact-links">
              <a href="https://x.com/devajibola" target="_blank" className="clink">
                X / Twitter <span className="arr">↗</span>
              </a>
              <a href="https://github.com/ajibola-dev" target="_blank" className="clink">
                GitHub <span className="arr">↗</span>
              </a>
              <a href="https://linkedin.com/in/devajibola" target="_blank" className="clink">
                LinkedIn <span className="arr">↗</span>
              </a>
              <a href="mailto:hello@devajibola.me" className="clink">
                hello@devajibola.me <span className="arr">↗</span>
              </a>
              <button onClick={copyEmail} className="clink">
                Copy email {copied ? <span style={{color:"var(--green)"}}>✓</span> : <span className="arr">↗</span>}
              </button>
            </div>
          </div>
        </div>

        <footer>
          <span>© 2026 · Ajibola Malik · devajibola.me</span>
          <span>Web3 & AI · Open to internships & contracts</span>
        </footer>
      </div>
    </>
  );
}
