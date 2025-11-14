import React from 'react';

const BlogSection: React.FC = () => {
  return (
    <section id="blog" aria-labelledby="blog-title">
      <h2 id="blog-title" className="section-title">Blog &amp; poznámky</h2>
      <div className="container posts-grid" role="list">
        <article className="post" role="listitem" aria-labelledby="b1">
          <h4 id="b1">Optimalizace MQTT přenosu</h4>
          <p>Praktické tipy jak snížit latenci a šetřit šířku pásma v IoT sítích.</p>
        </article>

        <article className="post" role="listitem" aria-labelledby="b2">
          <h4 id="b2">ESP32 vs Raspberry Pi Pico</h4>
          <p>Krátké srovnání z hlediska výkonu, spotřeby a vhodnosti do nasazení.</p>
        </article>

        <article className="post" role="listitem" aria-labelledby="b3">
          <h4 id="b3">Bezpečnostní základy pro embedded</h4>
          <p>Nastavení TLS, bezpečné OTA a minimalizace útokových vektorů u IoT zařízení.</p>
        </article>
      </div>
    </section>
  );
};

export default BlogSection;
