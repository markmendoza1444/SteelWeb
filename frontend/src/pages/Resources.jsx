import { useEffect } from 'react';
import { FileText, Download } from 'lucide-react';

export default function Resources() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resources = [
    {
      id: 1,
      title: 'Product Catalog',
      description: 'Complete catalog of all steel products and specifications',
      type: 'PDF',
      icon: FileText
    },
    {
      id: 2,
      title: 'Technical Datasheets',
      description: 'Detailed technical specifications for all materials',
      type: 'PDF',
      icon: FileText
    },
    {
      id: 3,
      title: 'Steel Grade Guide',
      description: 'Comprehensive guide to steel grades and standards',
      type: 'PDF',
      icon: FileText
    },
    {
      id: 4,
      title: 'Certifications',
      description: 'ISO and international certification documentation',
      type: 'PDF',
      icon: FileText
    },
    {
      id: 5,
      title: 'CAD / BIM Files',
      description: 'Download BIM models and CAD files for products',
      type: 'ZIP',
      icon: FileText
    },
    {
      id: 6,
      title: 'Installation Guides',
      description: 'Step-by-step installation and handling guides',
      type: 'PDF',
      icon: FileText
    },
    {
      id: 7,
      title: 'Company Brochure',
      description: 'Company overview and service portfolio',
      type: 'PDF',
      icon: FileText
    },
    {
      id: 8,
      title: 'Quality Documents',
      description: 'Quality assurance and testing certificates',
      type: 'PDF',
      icon: FileText
    }
  ];

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-content">
          <div className="section-eyebrow">Resources</div>
          <h1>Technical Resources & Documents</h1>
          <p>Download datasheets, certifications, and CAD files</p>
        </div>
      </section>

      <section className="resources-section">
        <div className="resources-container">
          <div className="resources-grid">
            {resources.map(resource => (
              <div key={resource.id} className="resource-card">
                <div className="resource-icon">
                  <resource.icon size={32} />
                </div>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <div className="resource-meta">
                  <span className="file-type">{resource.type}</span>
                  <button className="download-btn">
                    <Download size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
