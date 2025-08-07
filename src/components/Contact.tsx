import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="contact">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Get in touch with Biosalim - We'd love to hear from you!</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <div className="info-grid">
            <div className="info-item">
              <div className="info-icon">📍</div>
              <h4>Visit Our Farm</h4>
              <p>123 Organic Valley Road<br />Fes, Morocco</p>
            </div>
            <div className="info-item">
              <div className="info-icon">📞</div>
              <h4>Call Us</h4>
              <p>+212 123 456 789<br />Mon-Fri: 8AM-6PM</p>
            </div>
            <div className="info-item">
              <div className="info-icon">✉️</div>
              <h4>Email Us</h4>
              <p>info@biosalim.ma<br />orders@biosalim.ma</p>
            </div>
            <div className="info-item">
              <div className="info-icon">🕒</div>
              <h4>Business Hours</h4>
              <p>Monday - Friday: 8AM - 6PM<br />Saturday: 9AM - 4PM<br />Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </section>

      <section className="map-section">
        <h2>Find Us</h2>
        <div className="map-placeholder">
          <div className="map-content">
            🗺️
            <p>Interactive Map Coming Soon</p>
            <p>Located in the heart of Fes organic farming district</p>
          </div>
        </div>
      </section>

      <section className="social-section">
        <h2>Follow Us</h2>
        <div className="social-links">
          <div className="social-item">
            <span className="social-icon">📘</span>
            <span>Facebook: @biosalim</span>
          </div>
          <div className="social-item">
            <span className="social-icon">📷</span>
            <span>Instagram: @biosalim_organic</span>
          </div>
          <div className="social-item">
            <span className="social-icon">🐦</span>
            <span>Twitter: @biosalim</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact