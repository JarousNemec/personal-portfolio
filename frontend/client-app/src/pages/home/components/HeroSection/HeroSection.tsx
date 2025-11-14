import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero" aria-label="Úvodní sekce">
      {/* decorative SVG network in background */}
      <svg
        className="hero-svg"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0" stopColor="#dff6ff" stopOpacity={0.35} />
            <stop offset="1" stopColor="#e6f7ff" stopOpacity={0.15} />
          </linearGradient>
        </defs>
        <rect width="1200" height="700" fill="url(#g1)" />

        {/* subtle network lines and nodes */}
        <g stroke="#cfeffe" strokeOpacity={0.22} strokeWidth={1} fill="none">
          <path d="M80 520 L220 420 L360 480 L560 360 L780 420 L940 360" />
          <path d="M120 220 L260 160 L400 220 L600 140 L820 200 L980 160" />
          <path d="M40 360 L140 300 L260 340 L420 260 L620 320 L820 260" />
        </g>
        <g fill="#dff6ff" fillOpacity={0.28}>
          <circle cx={80} cy={520} r={4} />
          <circle cx={220} cy={420} r={4} />
          <circle cx={360} cy={480} r={4} />
          <circle cx={560} cy={360} r={4} />
          <circle cx={780} cy={420} r={4} />
          <circle cx={940} cy={360} r={4} />

          <circle cx={120} cy={220} r={4} />
          <circle cx={260} cy={160} r={4} />
          <circle cx={400} cy={220} r={4} />
          <circle cx={600} cy={140} r={4} />
          <circle cx={820} cy={200} r={4} />
          <circle cx={980} cy={160} r={4} />
        </g>
      </svg>

      <div className="container">
        <div>
          <h1>Vytvářím chytrá řešení — IoT, embedded &amp; web</h1>
          <p className="lead">
            Jsem vývojář, který propojuje hardware a software. Dělám malé i větší IoT projekty, dashboardy a nástroje pro zpracování dat — čistě, efektivně a s důrazem na použitelnost.
          </p>

          <div className="cta-row" role="group" aria-label="Hlavní akce">
            <a className="btn" href="#projects">Moje projekty</a>
            <a className="btn ghost" href="#contact">Kontakt</a>
          </div>
        </div>

        <aside className="hero-aside" aria-hidden="false">
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
            <div className="avatar" aria-hidden="true">JN</div>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text)' }}>Jaroslav Němec</div>
              <div style={{ color: 'var(--muted)', fontSize: '13px' }}>IoT &amp; Embedded Systems</div>
            </div>
          </div>

          <div className="meta-list" aria-hidden="false">
            <div className="meta"><span className="k">Lokace</span><span className="v">Hradec Králové, ČR</span></div>
            <div className="meta"><span className="k">Specializace</span><span className="v">ESP32, MQTT, Node.js, React</span></div>
            <div className="meta"><span className="k">Poslední update</span><span className="v">listopad 2025</span></div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default HeroSection;
