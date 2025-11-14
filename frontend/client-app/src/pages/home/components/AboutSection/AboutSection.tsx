import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" aria-labelledby="about-title">
      <h2 id="about-title" className="section-title">O mně</h2>
      <div className="container about">
        <p className="bio">
          Jmenuji se Jarda a věnuji se vývoji IoT zařízení a webových rozhraní pro jejich správu. Mám zkušenosti s návrhem elektroniky, firmwarem pro mikrokontroléry a tvorbou dashboardů pro vizualizaci dat. Ve svých projektech kladu důraz na spolehlivost, energetickou účinnost a jednoduché uživatelské rozhraní.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
