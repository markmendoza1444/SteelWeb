import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Products</h3>
            <ul>
              <li><Link to="/products">Structural Steel</Link></li>
              <li><Link to="/products">Steel Plates</Link></li>
              <li><Link to="/products">Steel Pipes</Link></li>
              <li><Link to="/products">Reinforcing Steel</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services">Fabrication</Link></li>
              <li><Link to="/services">Welding</Link></li>
              <li><Link to="/services">Cutting</Link></li>
              <li><Link to="/services">Engineering</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><Link to="/resources">Catalogs</Link></li>
              <li><Link to="/resources">Datasheets</Link></li>
              <li><Link to="/resources">Certifications</Link></li>
              <li><Link to="/resources">Documents</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <div className="contact-info">
              <p><Phone size={16} /> +1 (800) 555-STEEL</p>
              <p><Mail size={16} /> sales@steelcore.com</p>
              <p><MapPin size={16} /> Industrial District, Global Hub</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} SteelCore Industries. All Rights Reserved.</p>
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
