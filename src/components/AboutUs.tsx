import React from 'react'

const AboutUs: React.FC = () => {
  return (
    <div className="about-us">
      <section className="about-hero">
        <h1>About Biosalim</h1>
        <div className="about-image">
          <div className="placeholder-image large">
            🌾🚜🌱
            <p>Our Organic Farm</p>
          </div>
        </div>
      </section>

      <section className="about-content">
        <div className="about-story">
          <h2>Our Story</h2>
          <p>
            Founded in 2010, Biosalim began as a small family farm with a simple mission: 
            to provide the freshest, most nutritious organic products to our community. 
            What started as a passion project has grown into a trusted name in bio products, 
            serving thousands of families who value health and sustainability.
          </p>
          <p>
            Our commitment to organic farming practices ensures that every product we offer 
            is free from harmful pesticides, synthetic fertilizers, and artificial additives. 
            We believe that nature knows best, and our role is simply to nurture and protect 
            the natural growing process.
          </p>
        </div>

        <div className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">🌿</div>
              <h3>Sustainability</h3>
              <p>We practice regenerative agriculture that enriches the soil and supports biodiversity.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h3>Community</h3>
              <p>Supporting local farmers and building strong relationships with our customers.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">✨</div>
              <h3>Quality</h3>
              <p>Every product meets our rigorous standards for freshness, taste, and nutrition.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🌍</div>
              <h3>Environment</h3>
              <p>Protecting our planet through eco-friendly packaging and sustainable practices.</p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍🌾</div>
              <h4>Ahmed Salim</h4>
              <p>Founder & Head Farmer</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍🔬</div>
              <h4>Dr. Fatima Benali</h4>
              <p>Quality Control Specialist</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍💼</div>
              <h4>Youssef Alami</h4>
              <p>Operations Manager</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs