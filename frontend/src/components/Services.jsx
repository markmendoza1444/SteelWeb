import ServiceCard from './ServiceCard';

export default function Services({ services }) {
  return (
    <section className="services">
      <div className="services-container">
        <div className="section-header">
          <div className="section-eyebrow">Services</div>
          <h2>Engineered to Perform</h2>
          <p>Comprehensive steel solutions from concept to completion</p>
        </div>

        <div className="services-grid">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
