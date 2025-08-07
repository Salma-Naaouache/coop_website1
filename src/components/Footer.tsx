import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>🌱 Biosalim</h3>
          <p>Your trusted partner for organic and bio products. Fresh from our farm to your table.</p>
          <div className="footer-social">
            <span>📘</span>
            <span>📷</span>
            <span>🐦</span>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Products</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Products</h4>
          <ul>
            <li>Fresh Vegetables</li>
            <li>Organic Fruits</li>
            <li>Dairy Products</li>
            <li>Grains & Cereals</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="contact-item">
            <span>📍</span>
            <span>123 Organic Valley Road, Fes</span>
          </div>
          <div className="contact-item">
            <span>📞</span>
            <span>+212 123 456 789</span>
          </div>
          <div className="contact-item">
            <span>✉️</span>
            <span>info@biosalim.ma</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2024 Biosalim. All rights reserved.</p>
          <div className="footer-links">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Organic Certification</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer