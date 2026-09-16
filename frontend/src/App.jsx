import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetails from './pages/ProductDetails';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetails from './pages/ProjectDetails';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RequestQuote from './pages/RequestQuote';
import Resources from './pages/Resources';
import AdminPage from './pages/AdminPage';

const DEFAULT_COMPANY = {
  name: 'SteelCore Industries',
  tagline: 'Strength engineered for tomorrow.',
  email: 'sales@steelcore.com',
  phone: '+1 (800) 555-0123',
  location: 'Dubai, United Arab Emirates',
  years: '24+'
};

export default function App() {
  const [company, setCompany] = useState(DEFAULT_COMPANY);
  const [submissions, setSubmissions] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [submitState, setSubmitState] = useState({ message: '', type: '' });

  useEffect(() => {
    fetch('/api/company-info')
      .then(res => res.ok ? res.json() : DEFAULT_COMPANY)
      .then(data => setCompany(data))
      .catch(() => setCompany(DEFAULT_COMPANY));

    fetch('/api/contact-submissions')
      .then(res => res.ok ? res.json() : [])
      .then(data => setSubmissions(data))
      .catch(() => setSubmissions([]));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitState({ message: '', type: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitState({
          message: data.message || 'Thank you. Our sales team will contact you shortly.',
          type: 'success'
        });
        setFormData({ name: '', company: '', email: '', message: '' });
        setSubmissions(prev => [data.submitted, ...prev].filter(Boolean));
      } else {
        setSubmitState({
          message: data.message || 'Something went wrong. Please try again.',
          type: 'error'
        });
      }
    } catch (err) {
      setSubmitState({
        message: 'Network error. Please try again later.',
        type: 'error'
      });
    }
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/contact"
          element={
            <ContactPage
              company={company}
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              submitState={submitState}
            />
          }
        />
        <Route path="/request-quote" element={<RequestQuote />} />
        <Route path="/resources" element={<Resources />} />
        <Route
          path="/admin"
          element={<AdminPage submissions={submissions} company={company} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
