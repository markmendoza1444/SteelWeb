import { useEffect } from 'react';
import Services from '../components/Services';
import QuoteCTA from '../components/QuoteCTA';
import { services } from '../data/services';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-content">
          <div className="section-eyebrow">Our Services</div>
          <h1>Full-Service Steel Solutions</h1>
          <p>From design to delivery with world-class quality</p>
        </div>
      </section>

      <Services services={services} />
      <QuoteCTA />
    </main>
  );
}
