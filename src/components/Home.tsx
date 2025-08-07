import React from 'react'
import head from '../assets/head.jpeg'
import image1 from '../assets/image1.jpeg'
import image2 from '../assets/image2.jpeg'

const Home: React.FC = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>BIOSALIM</h1>
        <div className="about-image">
          <div className="placeholder-image large">
            🌿🥬🌞
            <p>Valorisons le terroir marocain</p>
          </div>
        </div>
      </section>

      {/* Story Section (Replaces About Story) */}
      <section className="about-content">
        <div className="about-story">
          <h2>Notre Mission</h2>
          <p>
            Coopérative pour la valorisation des produits agricoles située à Chefchaouen, BIOSALIM 
            soutient les femmes rurales à travers des initiatives durables, sociales et économiques.
          </p>
          <p>
            Ensemble, nous mettons en avant le savoir-faire local du Rif marocain, en promouvant 
            des produits bio et naturels dans le respect de l’environnement et des traditions.
          </p>
        </div>

        {/* Values Section (Nos Services) */}
        <div className="values-section">
          <h2>Nos Services</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">
                <img src={image1} alt="Service 1" className="rounded-full w-16 h-16 object-cover" />
              </div>
              <h3>Transformation des produits</h3>
              <p>Des produits agricoles locaux transformés avec soin et savoir-faire.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <img src={image1} alt="Service 2" className="rounded-full w-16 h-16 object-cover" />
              </div>
              <h3>Formation & accompagnement</h3>
              <p>Renforcement des compétences des femmes en milieu rural.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <img src={image1} alt="Service 3" className="rounded-full w-16 h-16 object-cover" />
              </div>
              <h3>Vente de produits bios</h3>
              <p>Distribution de produits issus de l’agriculture durable et responsable.</p>
            </div>
          </div>
        </div>

        {/* Team Section (À propos de Biosalim) */}
        <div className="team-section">
          <h2>À propos de Biosalim</h2>
          <div className="team-grid">
            <div className="team-member col-span-3">
              <img src={image2} alt="À propos" className="rounded-lg shadow-md w-full max-w-md mx-auto" />
              <p className="mt-6 text-center max-w-2xl mx-auto">
                Fondée à Chefchaouen, BIOSALIM est plus qu’une coopérative : c’est un mouvement porté 
                par des femmes déterminées à transformer leur avenir à travers l’agriculture durable, 
                le respect du terroir et la mise en valeur de produits authentiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action (Rejoins notre mouvement) */}
      <section className="about-hero">
        <h1>Rejoignez notre mouvement</h1>
        <div className="about-image">
          <div className="placeholder-image large">
            🤝🌱👩‍🌾
            <p>Chaque produit soutient les femmes rurales marocaines.</p>
            <button className="mt-4 px-6 py-2 border border-green-600 text-green-700 hover:bg-green-600 hover:text-white transition-all">
              Nous soutenir
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
