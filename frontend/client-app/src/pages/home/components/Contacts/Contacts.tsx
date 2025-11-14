import React from 'react';

const Contacts: React.FC = () => {
  return (
    <section id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title" className="section-title">Kontakt</h2>
      <div className="container">
        <div className="contact-card" role="region" aria-label="Kontaktní informace">
          <p style={{ margin: 0, color: 'var(--muted)' }}>
            Chceš spolupracovat nebo máš dotaz? Napiš mi — rád se ozvu.
          </p>
          <p style={{ marginTop: '12px', fontWeight: 700, color: 'var(--text)' }}>
            <a href="mailto:jarous.nemec@gmail.com">
              jarous.nemec@gmail.com
            </a>
          </p>

          <div className="contact-links">
            <a href="mailto:jarous.nemec@gmail.com" className="contact-btn email">
              {/* Email icon */}
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M4 4h16v16H4z"/>
                <path d="m4 4 8 8 8-8"/>
              </svg>
              E-mail
            </a>

            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="contact-btn github">
              {/* GitHub icon */}
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.58 2 12.3c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.9-.64.07-.63.07-.63 1 .07 1.52 1.05 1.52 1.05.9 1.56 2.37 1.11 2.95.85.09-.67.36-1.11.65-1.37-2.22-.26-4.56-1.15-4.56-5.1 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.8c.85 0 1.7.12 2.5.35 1.9-1.34 2.75-1.06 2.75-1.06.55 1.4.2 2.44.1 2.7.64.72 1.03 1.64 1.03 2.77 0 3.96-2.35 4.84-4.58 5.09.37.33.7.96.7 1.95v2.89c0 .27.18.6.7.49A10.33 10.33 0 0 0 22 12.3C22 6.58 17.52 2 12 2z"/>
              </svg>
              GitHub
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="contact-btn linkedin">
              {/* LinkedIn icon */}
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3A2.02 2.02 0 0 0 3 5.02c0 1.1.9 1.98 2.02 1.98A2 2 0 0 0 7 5.02C7 3.9 6.1 3 4.98 3zM3.5 8h3v12h-3zM10 8h3v1.7h.04c.42-.8 1.44-1.64 2.96-1.64 3.17 0 3.75 2.08 3.75 4.8V20h-3v-6.5c0-1.54-.03-3.52-2.15-3.52-2.15 0-2.48 1.67-2.48 3.4V20h-3z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;