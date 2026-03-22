import { useState } from "react";

export default function App() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("olalekeajibola93@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #fafaf8;
          --surface: #ffffff;
          --border: #e8e6e0;
          --text: #1a1a18;
          --muted: #8a8880;
          --accent: #1a1a18;
          --tag-bg: #f0ede8;
        }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          font-size: 16px;
          line-height: 1.6;
        }

        .container {
          max-width: 680px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        header {
          padding: 4rem 0 3rem;
          border-bottom: 1px solid var(--border);
          margin-bottom: 4rem;
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 2rem;
        }

        .name {
          font-family: 'Instrument Serif', serif;
          font-size: clamp(2.5rem, 6vw, 3.5rem);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--text);
        }

        .name em {
          font-style: italic;
          color: var(--muted);
        }

        .status-pill {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 100px;
          padding: 0.35rem 0.75rem;
          font-size: 0.72rem;
          color: #166534;
          white-space: nowrap;
          margin-top: 0.5rem;
        }

        .status-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #22c55e;
          animation: pulse 2s ease infinite;
        }

        .tagline {
          margin-top: 1.25rem;
          font-size: 1rem;
          color: var(--muted);
          max-width: 420px;
          line-height: 1.7;
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .nav-link {
          font-size: 0.85rem;
          color: var(--muted);
          text-decoration: none;
          transition: color 0.15s ease;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .nav-link:hover { color: var(--text); }

        .nav-link.primary {
          color: var(--text);
          font-weight: 500;
          border-bottom: 1px solid var(--text);
          padding-bottom: 1px;
        }

        section { margin-bottom: 4rem; }

        .section-label {
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 1.5rem;
        }

        .about-text {
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--text);
        }

        .about-text p + p { margin-top: 1rem; }

        .projects { display: flex; flex-direction: column; gap: 1px; }

        .project-card {
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 1.5rem;
          transition: border-color 0.15s ease;
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .project-card:first-child { border-radius: 8px 8px 0 0; }
        .project-card:last-child { border-radius: 0 0 8px 8px; }
        .project-card:only-child { border-radius: 8px; }
        .project-card:hover { border-color: var(--text); }

        .project-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        .project-name {
          font-family: 'Instrument Serif', serif;
          font-size: 1.2rem;
          font-weight: 400;
          color: var(--text);
        }

        .project-arrow {
          font-size: 0.9rem;
          color: var(--muted);
          transition: transform 0.15s ease, color 0.15s ease;
        }

        .project-card:hover .project-arrow {
          transform: translate(2px, -2px);
          color: var(--text);
        }

        .project-desc {
          font-size: 0.88rem;
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .project-tags {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .tag {
          font-size: 0.68rem;
          letter-spacing: 0.05em;
          background: var(--tag-bg);
          color: var(--muted);
          padding: 0.2rem 0.5rem;
          border-radius: 3px;
          text-transform: uppercase;
        }

        .project-status {
          font-size: 0.68rem;
          letter-spacing: 0.05em;
          padding: 0.2rem 0.5rem;
          border-radius: 3px;
          text-transform: uppercase;
        }

        .status-live {
          background: #f0fdf4;
          color: #166534;
        }

        .status-building {
          background: #fefce8;
          color: #854d0e;
        }

        .contact-block {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 2rem;
        }

        .contact-title {
          font-family: 'Instrument Serif', serif;
          font-size: 1.4rem;
          font-weight: 400;
          margin-bottom: 0.5rem;
        }

        .contact-sub {
          font-size: 0.88rem;
          color: var(--muted);
          margin-bottom: 1.5rem;
        }

        .contact-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex; align-items: center; gap: 0.4rem;
          background: var(--text); color: #fafaf8;
          padding: 0.6rem 1.1rem; border-radius: 5px;
          font-size: 0.82rem; font-weight: 500;
          text-decoration: none; border: none; cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: opacity 0.15s ease;
        }

        .btn-primary:hover { opacity: 0.85; }

        .btn-secondary {
          display: inline-flex; align-items: center; gap: 0.4rem;
          background: transparent; color: var(--text);
          padding: 0.6rem 1.1rem; border-radius: 5px;
          font-size: 0.82rem; font-weight: 500;
          text-decoration: none; border: 1px solid var(--border); cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: border-color 0.15s ease;
        }

        .btn-secondary:hover { border-color: var(--text); }

        footer {
          border-top: 1px solid var(--border);
          padding: 2rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
          color: var(--muted);
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-1 { animation: fadeUp 0.5s ease forwards; }
        .fade-2 { animation: fadeUp 0.5s ease 0.1s forwards; opacity: 0; }
        .fade-3 { animation: fadeUp 0.5s ease 0.2s forwards; opacity: 0; }
        .fade-4 { animation: fadeUp 0.5s ease 0.3s forwards; opacity: 0; }

        @media (max-width: 600px) {
          header { padding: 2.5rem 0 2rem; }
          .header-top { flex-direction: column; gap: 1rem; }
          .contact-actions { flex-direction: column; }
          .btn-primary, .btn-secondary { justify-content: center; }
        }
      `}</style>

      <div className="container">
        <header className="fade-1">
          <div className="header-top">
            <h1 className="name">Ajibola <em>devajibola</em></h1>
            <div className="status-pill">
              <div className="status-dot" />
              Open to opportunities
            </div>
          </div>
          <p className="tagline">
            Building at the intersection of AI and Web3. Self-taught developer shipping real products onchain.
          </p>
          <nav className="nav-links">
            <a href="https://x.com/devajibola" target="_blank" className="nav-link primary">
              @devajibola ↗
            </a>
            <a href="https://github.com/ajibola-dev" target="_blank" className="nav-link">
              GitHub ↗
            </a>
            <button onClick={copyEmail} className="nav-link" style={{background:"none", border:"none", cursor:"pointer", fontFamily:"inherit", fontSize:"inherit"}}>
              {copied ? "Copied!" : "Email ↗"}
            </button>
          </nav>
        </header>

        <section className="fade-2">
          <div className="section-label">About</div>
          <div className="about-text">
            <p>
              I'm Ajibola, a self-taught developer based in Lagos, building at the intersection of AI and Web3.
              I started with smart contracts on Arc and have been shipping in public ever since.
            </p>
            <p>
              I care about building things that actually work — clean code, real users, onchain infrastructure that matters.
            </p>
          </div>
        </section>

        <section className="fade-3">
          <div className="section-label">Projects</div>
          <div className="projects">
            <a href="https://agentvault-9lci.vercel.app" target="_blank" className="project-card">
              <div className="project-top">
                <span className="project-name">AgentVault</span>
                <span className="project-arrow">↗</span>
              </div>
              <p className="project-desc">
                Reputation-gated AI agent marketplace on Arc. Agents register onchain identities via ERC-8004, build portable reputation across DeFi and commerce.
              </p>
              <div className="project-tags">
                <span className="tag">ERC-8004</span>
                <span className="tag">Arc</span>
                <span className="tag">Circle</span>
                <span className="tag">USDC</span>
                <span className="project-status status-building">Building</span>
              </div>
            </a>

            <a href="https://drip-wine-nine.vercel.app" target="_blank" className="project-card">
              <div className="project-top">
                <span className="project-name">Drip</span>
                <span className="project-arrow">↗</span>
              </div>
              <p className="project-desc">
                USDC payment links on Arc. Create a payment link, share it anywhere, get paid instantly in stablecoins. Built on Arc testnet with CCTP crosschain support.
              </p>
              <div className="project-tags">
                <span className="tag">Arc</span>
                <span className="tag">USDC</span>
                <span className="tag">CCTP</span>
                <span className="tag">Solidity</span>
                <span className="project-status status-live">Live</span>
              </div>
            </a>
          </div>
        </section>

        <section className="fade-4">
          <div className="contact-block">
            <div className="contact-title">Let's build together.</div>
            <p className="contact-sub">Open to collaborations, opportunities, and conversations about Web3 and AI infrastructure.</p>
            <div className="contact-actions">
              <a href="https://x.com/devajibola" target="_blank" className="btn-primary">
                Follow on X
              </a>
              <button onClick={copyEmail} className="btn-secondary">
                {copied ? "Copied!" : "Copy email"}
              </button>
              <a href="https://github.com/ajibola-dev" target="_blank" className="btn-secondary">
                GitHub
              </a>
            </div>
          </div>
        </section>

        <footer>
          <span>Ajibola · @devajibola</span>
          <span>Lagos, Nigeria · {new Date().getFullYear()}</span>
        </footer>
      </div>
    </>
  );
}
