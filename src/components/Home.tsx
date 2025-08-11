import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import chefchaouenImage from '../assets/chefchaouen.jpg';
import './Home.css';

const Home: React.FC = () => {
  useEffect(() => {
    // Add scroll animation triggers
    const animateElements = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-animate', 'in-view');
        }
      });
    }, { threshold: 0.1 });

    animateElements.forEach(el => observer.observe(el));

    return () => animateElements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section 
        className="hero-section position-relative"
        style={{ backgroundImage: `url(${chefchaouenImage})` }}
      >
        <div className="blue-overlay position-absolute top-0 start-0 w-100 h-100"></div>
        <Container className="hero-content position-relative text-center text-white d-flex flex-column justify-content-center">
          <div className="main-title mb-4" data-animate>
            <h1 className="display-3 fw-bold">BioSalim</h1>
            <p className="tagline fs-2">Ensemble, nous cultivons l'avenir</p>
          </div>
          
          <div className="quote-design mx-auto my-4 p-4" data-animate style={{ animationDelay: '0.2s' }}>
            <p className="quote-text fs-5 mb-0">
              "Dans les montagnes verdoyantes de Chefchaouen, plus de 30 femmes rurales unissent leur savoir-faire pour produire des aliments sains à base de sorgho."
            </p>
          </div>
          
          <div className="buttons-container mt-4" data-animate style={{ animationDelay: '0.4s' }}>
            <Button variant="outline-light" size="lg" className="hero-btn hero-btn-outline mx-2 my-1">
              Découvrir notre histoire
            </Button>
            <Button variant="light" size="lg" className="hero-btn hero-btn-solid mx-2 my-1">
              Voir nos produits
            </Button>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="mission-section py-5">
        <Container className="px-5">
          <h2 className="text-center mb-5 section-title" data-animate>
            Notre Mission
          </h2>

          <div className="mission-grid">
            <div className="mission-item fade-in-up" data-animate style={{ animationDelay: '0.2s' }}>
              <div className="mission-icon">👩‍🌾</div>
              <h3>Autonomisation des femmes</h3>
              <p>
                Nous offrons aux femmes rurales des opportunités économiques durables et une voix dans leur communauté. 
                Notre coopérative permet à plus de 30 femmes de Chefchaouen de gagner leur indépendance financière.
              </p>
            </div>

            <div className="mission-item fade-in-up" data-animate style={{ animationDelay: '0.4s' }}>
              <div className="mission-icon">🌱</div>
              <h3>Préservation de la biodiversité</h3>
              <p>
                Nous cultivons le sorgho, une céréale locale résistante qui protège notre écosystème montagneux. 
                Cette culture traditionnelle préserve les sols et nécessite moins d'eau.
              </p>
            </div>

            <div className="mission-item fade-in-up" data-animate style={{ animationDelay: '0.6s' }}>
              <div className="mission-icon">🍽️</div>
              <h3>Alimentation saine</h3>
              <p>
                Nous transformons le sorgho en produits nutritifs 100% naturels. 
                Farine, couscous et pâtes artisanales - des aliments sains, riches en fibres et sans gluten.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Al Moutmir Initiative Section */}
      <section className="al-moutmir-section py-5">
        <div className="wave-top"></div>
        <Container className="px-5">
          <div className="content-wrapper">
            <h2 className="text-center mb-5" data-animate>
              L'initiative Al Moutmir — Un partenaire clé
            </h2>

            <div className="initiative-card" data-animate style={{ animationDelay: '0.2s' }}>
              <p className="intro-text">
                Le chemin vers le succès n'a pas été facile. Au départ, Bio Salim faisait face à de nombreux défis : 
                manque de ressources, d'équipements, et scepticisme de la communauté. 
                Grâce à l'<strong>initiative Al Moutmir</strong>, nous avons pu bénéficier :
              </p>

              <div className="benefits-grid">
                <div className="benefit-item" data-animate style={{ animationDelay: '0.4s' }}>
                  <div className="benefit-icon">📚</div>
                  <h3>Formations techniques</h3>
                  <p>Sur les bonnes pratiques agricoles pour optimiser nos cultures de sorgho.</p>
                </div>

                <div className="benefit-item" data-animate style={{ animationDelay: '0.6s' }}>
                  <div className="benefit-icon">⚙️</div>
                  <h3>Accompagnement qualité</h3>
                  <p>Pour améliorer la qualité et la transformation du sorgho en produits finis.</p>
                </div>

                <div className="benefit-item" data-animate style={{ animationDelay: '0.8s' }}>
                  <div className="benefit-icon">📈</div>
                  <h3>Soutien marketing</h3>
                  <p>En marketing et visibilité pour atteindre de nouveaux marchés.</p>
                </div>
              </div>

              <div className="conclusion" data-animate style={{ animationDelay: '1s' }}>
                <p>
                  Cet appui a été le catalyseur qui nous a permis de passer d'un simple rêve 
                  à une <strong>coopérative prospère et reconnue</strong> dans toute la région.
                </p>
              </div>
            </div>
          </div>
        </Container>
        <div className="wave-bottom"></div>
      </section>

      {/* Nos Produits Section */}
      <section className="products-section py-5">
        <div className="wave-top wave-products"></div>
        <Container className="px-5">
          <div className="content-wrapper">
            <h2 className="text-center mb-5" data-animate>
              Nos Produits
            </h2>

            <p className="intro-text text-center" data-animate style={{ animationDelay: '0.2s' }}>
              Du champ à votre table, nos produits sont transformés avec soin et amour. Découvrez notre gamme :
            </p>

            <div className="products-grid">
              <div className="product-item" data-animate style={{ animationDelay: '0.4s' }}>
                <div className="product-visual">🌾</div>
                <div className="product-label">Nouveau</div>
                <h3>Farine de sorgho</h3>
                <p>
                  Une farine naturelle et nutritive, parfaite pour vos préparations culinaires. 
                  Sans gluten, riche en fibres et au goût authentique de notre terroir.
                </p>
              </div>

              <div className="product-item" data-animate style={{ animationDelay: '0.6s' }}>
                <div className="product-visual">🍚</div>
                <h3>Couscous de sorgho</h3>
                <p>
                  Le couscous traditionnel revisité avec le sorgho local. Une expérience gustative unique 
                  qui allie tradition berbère et innovation nutritionnelle.
                </p>
              </div>

              <div className="product-item" data-animate style={{ animationDelay: '0.8s' }}>
                <div className="product-visual">🍝</div>
                <h3>Pâtes artisanales au sorgho</h3>
                <p>
                  Des pâtes façonnées à la main avec amour. Chaque forme raconte l'histoire de nos artisanes 
                  et apporte une texture unique à vos plats.
                </p>
              </div>
            </div>

            <div className="closing-message" data-animate style={{ animationDelay: '1s' }}>
              <p>
                Chacun de nos produits porte en lui le <strong>goût authentique de Chefchaouen</strong> et la 
                <strong> force des femmes</strong> qui les fabriquent.
              </p>
            </div>
          </div>
        </Container>
        <div className="wave-bottom wave-products"></div>
      </section>

      {/* Notre Impact Section */}
      <section className="impact-section py-5">
        <div className="wave-top"></div>
        <Container className="px-5">
          <div className="content-wrapper">
            <h2 className="text-center mb-5" data-animate>
              Notre Impact
            </h2>

            <div className="impact-grid">
              <div className="impact-text" data-animate style={{ animationDelay: '0.2s' }}>
                <p>
                  Derrière chaque produit Bio Salim, il y a :
                </p>

                <div className="statistics">
                  <div className="stat-item">
                    <div className="stat-number">30+</div>
                    <p><strong>femmes rurales</strong> gagnant leur indépendance financière</p>
                  </div>

                  <div className="stat-item">
                    <div className="stat-number">3</div>
                    <p><strong>produits phares</strong> issus du savoir-faire traditionnel</p>
                  </div>

                  <div className="stat-item">
                    <div className="stat-number">1</div>
                    <p><strong>communauté transformée</strong> à Chefchaouen</p>
                  </div>
                </div>

                <div className="additional-impact">
                  <p>
                    Chaque achat que vous faites contribue directement à améliorer l'<strong>éducation des enfants</strong>, 
                    à faciliter le <strong>transport scolaire</strong> et à soutenir l'<strong>économie locale</strong>.
                  </p>
                </div>
              </div>

              <div className="impact-visual" data-animate style={{ animationDelay: '0.4s' }}>
                <div className="impact-card">
                  <div className="impact-icon">🤝</div>
                  <h3>Ensemble pour l'impact</h3>
                  <div className="impact-icons-grid">
                    <div className="impact-icon-item">
                      <div className="impact-icon-small">👩‍🌾</div>
                      <p>Autonomisation<br/>des femmes</p>
                    </div>
                    <div className="impact-icon-item">
                      <div className="impact-icon-small">📚</div>
                      <p>Transmission<br/>de savoir</p>
                    </div>
                    <div className="impact-icon-item">
                      <div className="impact-icon-small">🏫</div>
                      <p>Éducation<br/>des enfants</p>
                    </div>
                    <div className="impact-icon-item">
                      <div className="impact-icon-small">🌱</div>
                      <p>Culture<br/>traditionnelle</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="impact-highlight" data-animate style={{ animationDelay: '0.6s' }}>
              <h3>Une transmission de savoir-faire aux jeunes générations</h3>
              <p>
                La <strong>préservation d'une culture agricole traditionnelle</strong> menacée par l'oubli. 
                Chaque geste, chaque recette, chaque technique est précieusement transmise pour préserver notre héritage.
              </p>
            </div>
          </div>
        </Container>
        <div className="wave-bottom"></div>
      </section>
    </div>
  );
};

export default Home;