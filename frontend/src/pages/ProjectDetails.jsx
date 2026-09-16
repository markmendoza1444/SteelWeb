import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div className="page-hero"><h1>Project not found</h1></div>;
  }

  return (
    <main>
      <section className="project-detail">
        <div className="project-detail-hero">
          <img src={project.image} alt={project.name} />
        </div>

        <div className="project-detail-container">
          <div className="project-detail-content">
            <div className="detail-meta">
              <span className="badge">{project.category}</span>
              <span className="location">{project.location}</span>
              <span className="year">Completed: {project.completed}</span>
            </div>

            <h1>{project.name}</h1>
            <p>{project.description}</p>

            <div className="detail-section">
              <h3>Project Scope</h3>
              <p>{project.scope}</p>
            </div>

            <div className="detail-grid">
              <div className="detail-item">
                <h4>Steel Quantity</h4>
                <p>{project.steelQuantity}</p>
              </div>
              <div className="detail-item">
                <h4>Completion</h4>
                <p>{project.completed}</p>
              </div>
              <div className="detail-item">
                <h4>Location</h4>
                <p>{project.location}</p>
              </div>
              <div className="detail-item">
                <h4>Category</h4>
                <p>{project.category}</p>
              </div>
            </div>

            <button className="btn btn-primary">Request Similar Project Quote</button>
          </div>
        </div>
      </section>
    </main>
  );
}
