import { useEffect } from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import ProductCard from '../components/ProductCard';
import Services from '../components/Services';
import Process from '../components/Process';
import Industries from '../components/Industries';
import ProjectCard from '../components/ProjectCard';
import Certifications from '../components/Certifications';
import QuoteCTA from '../components/QuoteCTA';
import { products } from '../data/products';
import { services } from '../data/services';
import { statistics, manufacturingProcess } from '../data/company';
import { industries } from '../data/industries';
import { certifications } from '../data/certifications';
import { projects } from '../data/projects';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Stats statistics={statistics} />
      <About />
      
      <section className="products-preview">
        <div className="products-container">
          <div className="section-header">
            <div className="section-eyebrow">Products</div>
            <h2>Our Steel Products</h2>
            <p>Premium solutions for every application</p>
          </div>
          <div className="products-grid">
            {products.slice(0, 3).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Services services={services} />
      <Process manufacturingProcess={manufacturingProcess} />
      <Industries industries={industries} />

      <section className="projects-preview">
        <div className="projects-container">
          <div className="section-header">
            <div className="section-eyebrow">Projects</div>
            <h2>Projects That Define Our Capability</h2>
            <p>Successful execution across diverse industries and scales</p>
          </div>
          <div className="projects-grid">
            {projects.slice(0, 3).map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <Certifications certifications={certifications} />
      <QuoteCTA />
    </>
  );
}
