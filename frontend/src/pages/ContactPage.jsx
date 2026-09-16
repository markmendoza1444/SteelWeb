export default function ContactPage({ company, formData, handleChange, handleSubmit, submitState }) {
  return (
    <main className="page-content">
      <section className="page-section contact-page">
        <div className="section-head centered compact">
          <span className="eyebrow">Contact</span>
          <h2>Request a quote for your project.</h2>
        </div>

        <div className="contact-card contact-card-page">
          <div className="contact-copy">
            <h2>Let’s build stronger.</h2>
            <p>
              Tell us about your project needs and our team will prepare the right material solution, delivery plan,
              and pricing guidance.
            </p>

            <div className="contact-info">
              <p>{company.email}</p>
              <p>{company.phone}</p>
              <p>{company.location}</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company name"
              value={formData.company}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Project details"
              value={formData.message}
              onChange={handleChange}
              required
            />

            {submitState.message && (
              <div className={`form-status ${submitState.type}`}>{submitState.message}</div>
            )}

            <button type="submit">Send inquiry</button>
          </form>
        </div>
      </section>
    </main>
  );
}
