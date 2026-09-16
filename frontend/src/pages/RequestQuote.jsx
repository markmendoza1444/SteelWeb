import { useEffect, useState } from 'react';

export default function RequestQuotePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    companyName: '',
    fullName: '',
    email: '',
    phone: '',
    projectType: '',
    product: '',
    quantity: '',
    deliveryDate: '',
    projectDetails: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote request submitted:', formData);
    alert('Thank you for your quote request. Our team will contact you shortly.');
    setFormData({
      companyName: '',
      fullName: '',
      email: '',
      phone: '',
      projectType: '',
      product: '',
      quantity: '',
      deliveryDate: '',
      projectDetails: ''
    });
  };

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-content">
          <div className="section-eyebrow">Quote Request</div>
          <h1>Get a Custom Quote</h1>
          <p>Tell us about your project and we'll provide a detailed quote</p>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-container">
          <form className="quote-form" onSubmit={handleSubmit}>
            <h2>Project Information</h2>
            
            <div className="form-row">
              <div className="form-group">
                <label>Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Project Type</label>
                <select name="projectType" value={formData.projectType} onChange={handleChange}>
                  <option value="">-- Select --</option>
                  <option value="commercial">Commercial</option>
                  <option value="infrastructure">Infrastructure</option>
                  <option value="industrial">Industrial</option>
                  <option value="energy">Energy</option>
                </select>
              </div>
              <div className="form-group">
                <label>Product / Service</label>
                <select name="product" value={formData.product} onChange={handleChange}>
                  <option value="">-- Select --</option>
                  <option value="structural">Structural Steel</option>
                  <option value="plates">Steel Plates</option>
                  <option value="pipes">Steel Pipes</option>
                  <option value="reinforcing">Reinforcing Steel</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Estimated Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  placeholder="e.g., 500 tons"
                  value={formData.quantity}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Required Delivery Date</label>
                <input
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label>Project Details</label>
              <textarea
                name="projectDetails"
                rows="6"
                placeholder="Describe your project, specifications, and any special requirements..."
                value={formData.projectDetails}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">REQUEST QUOTE</button>
          </form>
        </div>
      </section>
    </main>
  );
}
