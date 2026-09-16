export default function AdminPage({ submissions, company }) {
  const recentLeads = submissions.slice(0, 8);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleDateString('en-US', options);
  };

  const truncateMessage = (message, maxLength = 120) => {
    return message.length > maxLength ? message.substring(0, maxLength) + '...' : message;
  };

  return (
    <main className="page-content">
      <section className="page-section admin-page">
        <div className="section-head centered compact">
          <span className="eyebrow">Administration</span>
          <h2>Lead Management Dashboard</h2>
          <p className="subtitle">Track and manage all sales inquiries and project requests</p>
        </div>

        <div className="admin-summary">
          <div className="admin-stat">
            <span className="stat-label">Total Inquiries</span>
            <strong className="stat-value">{submissions.length}</strong>
          </div>
          <div className="admin-stat">
            <span className="stat-label">Primary Contact</span>
            <strong className="stat-value">Sales Team</strong>
          </div>
          <div className="admin-stat">
            <span className="stat-label">Service Region</span>
            <strong className="stat-value">{company.location}</strong>
          </div>
          <div className="admin-stat">
            <span className="stat-label">Contact Email</span>
            <strong className="stat-value">{company.email}</strong>
          </div>
        </div>

        <div className="admin-panel">
          <div className="admin-panel-head">
            <div>
              <h3>Recent Inquiries</h3>
              <p className="panel-subtitle">Showing latest {recentLeads.length} leads</p>
            </div>
          </div>

          {recentLeads.length === 0 ? (
            <div className="empty-state">
              <p className="empty-state-title">No inquiries yet</p>
              <p className="empty-state-message">All contact form submissions will appear here</p>
            </div>
          ) : (
            <div className="lead-list">
              {recentLeads.map((lead, index) => (
                <article className="lead-card" key={lead.id || `${lead.email}-${lead.createdAt}`}>
                  <div className="lead-card-header">
                    <div className="lead-identifier">
                      <div className="lead-badge">{index + 1}</div>
                      <div className="lead-primary">
                        <h4 className="lead-name">{lead.name}</h4>
                        <p className="lead-company">{lead.company || '(Individual inquiry)'}</p>
                      </div>
                    </div>
                    <time className="lead-date">{formatDate(lead.createdAt)}</time>
                  </div>

                  <p className="lead-message">{truncateMessage(lead.message)}</p>

                  <div className="lead-footer">
                    <div className="lead-contact-info">
                      <span className="contact-item">
                        <strong>Email:</strong> {lead.email}
                      </span>
                      <span className="contact-item">
                        <strong>Phone:</strong> {lead.phone || '—'}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
