import { useState, useEffect } from "react";

export default function App() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", {
        hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
      }));
    };
    tick();
    const id = setInterval(tick, 1000);
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
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Bebas+Neue&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root { --black: #0a0a0a; --white: #f0f0e8; --green: #7cfc5e; --gray: #2a2a2a; --mid: #555; }
        html { cursor: crosshair; }
        body { background: var(--black); color: var(--white); font-family: 'Space Mono', monospace; min-height: 100vh; overflow-x: hidden; }
        ::selection { background: var(--green); color: var(--black); }
        .ticker { background: var(--green); color: var(--black); font-size: 0.7rem; font-weight: 700; padding: 0.35rem 0; white-space: nowrap; overflow: hidden; letter-spacing: 0.05em; }
        .ticker-inner { display: inline-block; animation: ticker 20s linear infinite; }
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .page { max-width: 1100px; margin: 0 auto; padding: 0 1.5rem; }
        header { border-bottom: 2px solid var(--white); padding: 1rem 0; display: flex; justify-content: space-between; align-items: center; }
        .logo { font-family: 'Bebas Neue', sans-serif; font-size: 1.4rem; letter-spacing: 0.1em; color: var(--green); }
        .header-right { font-size: 0.65rem; color: var(--mid); letter-spacing: 0.1em; text-align: right; }
        .header-right span { color: var(--green); font-weight: 700; }
        .hero { display: grid; grid-template-columns: 1fr 1fr; border-bottom: 2px solid var(--white); min-height: 70vh; }
        .hero-left { padding: 3rem 0; border-right: 2px solid var(--white); display: flex; flex-direction: column; justify-content: space-between; padding-right: 3rem; }
        .hero-name { font-family: 'Bebas Neue', sans-serif; font-size: clamp(4rem, 10vw, 8rem); line-height: 0.9; letter-spacing: -0.02em; color: var(--white); }
        .hero-name .accent { color: var(--green); }
        .hero-handle { font-size: 0.75rem; color: var(--mid); letter-spacing: 0.2em; text-transform: uppercase; margin-top: 1rem; }
        .hero-tags { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: auto; padding-top: 2rem; }
        .tag { border: 1px solid var(--gray); color: var(--mid); font-size: 0.6rem; letter-spacing: 0.1em; padding: 0.3rem 0.6rem; text-transform: uppercase; transition: all 0.15s; }
        .tag:hover { border-color: var(--green); color: var(--green); }
        .hero-right { padding: 3rem 0 3rem 3rem; display: flex; flex-direction: column; justify-content: space-between; position: relative; }
        .pfp-container { position: relative; width: fit-content; }
        .pfp { width: 200px; height: 200px; object-fit: cover; image-rendering: pixelated; border: 3px solid var(--white); display: block; }
        .pfp-label { position: absolute; bottom: -1px; right: -1px; background: var(--green); color: var(--black); font-size: 0.55rem; font-weight: 700; letter-spacing: 0.1em; padding: 0.2rem 0.4rem; text-transform: uppercase; }
        .hero-bio { font-size: 0.82rem; line-height: 1.8; color: var(--mid); max-width: 340px; }
        .hero-bio strong { color: var(--white); font-weight: 700; }
        .hero-status { display: flex; align-items: center; gap: 0.5rem; font-size: 0.65rem; letter-spacing: 0.1em; color: var(--green); text-transform: uppercase; }
        .status-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green); animation: blink 1.5s ease infinite; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.2; } }
        .section { border-bottom: 2px solid var(--white); }
        .section-header { display: flex; align-items: center; justify-content: space-between; padding: 1rem 0; border-bottom: 1px solid var(--gray); }
        .section-title { font-family: 'Bebas Neue', sans-serif; font-size: 2.5rem; letter-spacing: 0.05em; color: var(--white); }
        .section-num { font-size: 0.65rem; color: var(--mid); letter-spacing: 0.2em; }
        .project-grid { display: grid; grid-template-columns: 1fr 1fr; }
        .project-card { padding: 2rem 0; text-decoration: none; color: inherit; display: block; border-right: 1px solid var(--gray); padding-right: 2rem; transition: background 0.15s; position: relative; overflow: hidden; }
        .project-card:last-child { border-right: none; padding-right: 0; padding-left: 2rem; }
        .project-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: var(--green); transform: scaleX(0); transform-origin: left; transition: transform 0.3s ease; }
        .project-card:hover::before { transform: scaleX(1); }
        .project-num { font-size: 0.6rem; color: var(--mid); letter-spacing: 0.2em; margin-bottom: 1rem; }
        .project-name { font-family: 'Bebas Neue', sans-serif; font-size: 2.8rem; letter-spacing: 0.02em; line-height: 1; color: var(--white); margin-bottom: 0.75rem; transition: color 0.15s; }
        .project-card:hover .project-name { color: var(--green); }
        .project-desc { font-size: 0.75rem; line-height: 1.7; color: var(--mid); margin-bottom: 1.5rem; }
        .project-tags { display: flex; gap: 0.4rem; flex-wrap: wrap; }
        .ptag { font-size: 0.55rem; letter-spacing: 0.1em; text-transform: uppercase; border: 1px solid var(--gray); color: var(--mid); padding: 0.2rem 0.4rem; }
        .ptag.live { border-color: var(--green); color: var(--green); }
        .ptag.building { border-color: #ff6b35; color: #ff6b35; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; min-height: 200px; }
        .contact-left { padding: 3rem 0; border-right: 2px solid var(--white); padding-right: 3rem; }
        .contact-headline { font-family: 'Bebas Neue', sans-serif; font-size: clamp(2.5rem, 6vw, 5rem); line-height: 0.9; color: var(--white); margin-bottom: 2rem; }
        .contact-headline .accent { color: var(--green); }
        .contact-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn-primary { background: var(--green); color: var(--black); font-family: 'Space Mono', monospace; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.8rem 1.5rem; text-decoration: none; border: none; cursor: crosshair; transition: opacity 0.15s; display: inline-block; }
        .btn-primary:hover { opacity: 0.85; }
        .btn-secondary { background: transparent; color: var(--white); font-family: 'Space Mono', monospace; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.8rem 1.5rem; border: 1px solid var(--white); cursor: crosshair; transition: all 0.15s; }
        .btn-secondary:hover { background: var(--white); color: var(--black); }
        .contact-right { padding: 3rem 0 3rem 3rem; display: flex; flex-direction: column; justify-content: space-between; }
        .contact-links { display: flex; flex-direction: column; gap: 1rem; }
        .contact-link { display: flex; justify-content: space-between; align-items: center; text-decoration: none; color: var(--mid); font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; padding-bottom: 1rem; border-bottom: 1px solid var(--gray); transition: color 0.15s; }
        .contact-link:hover { color: var(--green); }
        .contact-link span { font-size: 1rem; }
        footer { padding: 1rem 0; display: flex; justify-content: space-between; align-items: center; font-size: 0.6rem; color: var(--mid); letter-spacing: 0.1em; text-transform: uppercase; }
        @media (max-width: 768px) {
          .hero { grid-template-columns: 1fr; }
          .hero-left { border-right: none; border-bottom: 2px solid var(--white); padding-right: 0; padding-bottom: 2rem; }
          .hero-right { padding-left: 0; padding-top: 2rem; }
          .project-grid { grid-template-columns: 1fr; }
          .project-card { border-right: none; padding-right: 0; padding-left: 0 !important; border-bottom: 1px solid var(--gray); }
          .contact-grid { grid-template-columns: 1fr; }
          .contact-left { border-right: none; border-bottom: 2px solid var(--white); padding-right: 0; }
          .contact-right { padding-left: 0; padding-top: 2rem; }
          .hero-name { font-size: 4rem; }
        }
      `}</style>

      <div className="ticker">
        <span className="ticker-inner">
          {Array(4).fill("AJIBOLA · @DEVAJIBOLA · AI × WEB3 · BUILDING IN PUBLIC · ERC-8004 · ARC TESTNET · CIRCLE · USDC · AGENTVAULT · DRIP · ").join("")}
        </span>
      </div>

      <div className="page">
        <header>
          <div className="logo">DEVAJIBOLA.XYZ</div>
          <div className="header-right">
            <div>SYSTEM TIME <span>{time}</span></div>
            <div>STATUS <span>ONLINE</span></div>
          </div>
        </header>

        <div className="hero">
          <div className="hero-left">
            <div>
              <div className="hero-name">AJI<span className="accent">BO</span>LA</div>
              <div className="hero-handle">@devajibola — builder</div>
            </div>
            <div>
              <div className="hero-tags">
                <span className="tag">AI</span>
                <span className="tag">Web3</span>
                <span className="tag">Onchain</span>
                <span className="tag">ERC-8004</span>
                <span className="tag">USDC</span>
                <span className="tag">Arc</span>
                <span className="tag">Open to work</span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="pfp-container">
              <img src="/pfp.jpg" alt="Ajibola" className="pfp" />
              <div className="pfp-label">devajibola.xyz</div>
            </div>
            <div className="hero-bio">
              <strong>Self-taught.</strong> Building at the intersection of AI and Web3.
              Shipping real products onchain — smart contracts, agent infrastructure, stablecoin payments.
              <br /><br />
              Started from zero. Still going.
            </div>
            <div className="hero-status">
              <div className="status-dot" />
              Currently building AgentVault on Arc
            </div>
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <div className="section-title">PROJECTS</div>
            <div className="section-num">02 WORKS</div>
          </div>
          <div className="project-grid">
            <a href="https://agentvault-9lci.vercel.app" target="_blank" className="project-card">
              <div className="project-num">001 / ACTIVE</div>
              <div className="project-name">AGENT VAULT</div>
              <div className="project-desc">Reputation-gated AI agent marketplace on Arc. Agents register onchain identities via ERC-8004, build portable reputation across DeFi and commerce.</div>
              <div className="project-tags">
                <span className="ptag">ERC-8004</span>
                <span className="ptag">Arc</span>
                <span className="ptag">Circle</span>
                <span className="ptag">USDC</span>
                <span className="ptag building">Building</span>
              </div>
            </a>
            <a href="https://drip-wine-nine.vercel.app" target="_blank" className="project-card">
              <div className="project-num">002 / SHIPPED</div>
              <div className="project-name">DRIP</div>
              <div className="project-desc">USDC payment links on Arc. Create a link, share it anywhere, get paid instantly in stablecoins. CCTP crosschain support built in.</div>
              <div className="project-tags">
                <span className="ptag">Arc</span>
                <span className="ptag">USDC</span>
                <span className="ptag">CCTP</span>
                <span className="ptag">Solidity</span>
                <span className="ptag live">Live</span>
              </div>
            </a>
          </div>
        </div>

        <div className="section">
          <div className="contact-grid">
            <div className="contact-left">
              <div className="contact-headline">LET'S<br /><span className="accent">BUILD.</span></div>
              <div className="contact-actions">
                <a href="https://x.com/devajibola" target="_blank" className="btn-primary">Follow @devajibola</a>
                <button onClick={copyEmail} className="btn-secondary">{copied ? "Copied!" : "Copy email"}</button>
              </div>
            </div>
            <div className="contact-right">
              <div className="contact-links">
                <a href="https://x.com/devajibola" target="_blank" className="contact-link">X / Twitter <span>↗</span></a>
                <a href="https://github.com/ajibola-dev" target="_blank" className="contact-link">GitHub <span>↗</span></a>
                <button onClick={copyEmail} className="contact-link" style={{background:"none", border:"none", borderBottom:"1px solid #2a2a2a", cursor:"crosshair", fontFamily:"inherit", textAlign:"left", width:"100%"}}>
                  Email {copied ? "✓" : <span>↗</span>}
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <span>2026 · Ajibola · @devajibola</span>
          <span>AI × Web3</span>
        </footer>
      </div>
    </>
  );
}
