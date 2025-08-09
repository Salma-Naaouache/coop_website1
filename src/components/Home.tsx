import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import chefchaouenImage from '../assets/chefchaouen.jpg';
import womenEmpowermentImage from '../assets/image10.webp';
import sorghumFieldImage from '../assets/image10.webp';
import sorghumProductsImage from '../assets/image10.webp';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section 
        className="hero-section position-relative"
        style={{
          backgroundImage: `url(${chefchaouenImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh'
        }}
      >
        <div className="blue-overlay position-absolute top-0 start-0 w-100 h-100"></div>
        <Container className="hero-content position-relative text-center text-white d-flex flex-column justify-content-center" style={{ minHeight: '100vh' }}>
          <div className="main-title mb-4">
            <h1 className="display-3 fw-bold">BioSalim</h1>
            <p className="tagline fs-2">Ensemble, nous cultivons l'avenir</p>
          </div>
          
          <div className="quote-design mx-auto my-4 p-4" style={{ maxWidth: '800px' }}>
            <p className="quote-text fs-5 mb-0">
              "Dans les montagnes verdoyantes de Chefchaouen, plus de 30 femmes rurales unissent leur savoir-faire pour produire des aliments sains à base de sorgho."
            </p>
          </div>
          
          <div className="buttons-container mt-4">
            <Button variant="outline-light" size="lg" className="hero-btn mx-2 my-1">
              Découvrir notre histoire
            </Button>
            <Button variant="light" size="lg" className="hero-btn mx-2 my-1 text-success">
              Voir nos produits
            </Button>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="mission-section py-5" style={{ 
        backgroundColor: '#F5F0E1',
        marginBottom: '4rem'
      }}>
        <Container className="px-5">
          <h2 className="text-center mb-5 section-title fade-in-up" style={{ 
            fontSize: '40px', 
            fontWeight: 'bold',
            color: '#6B8E23',
            textShadow: '2px 2px 4px rgba(107,142,35,0.2)',
            animationDelay: '0s'
          }}>
            Notre Mission
          </h2>

          <div className="mission-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '0 2rem'
          }}>
            <div className="mission-item fade-in-up" style={{
              backgroundColor: '#6B8E23',
              padding: '1.5rem',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(107,142,35,0.3)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              color: '#FFFFFF',
              animationDelay: '0.2s',
              border: '2px solid rgba(139,90,43,0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(107,142,35,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(107,142,35,0.3)';
            }}>
              <div className="mission-icon" style={{ fontSize: '50px', marginBottom: '1rem' }}>👩‍🌾</div>
              <h3 style={{ color: '#FFFFFF', fontWeight: 'bold', marginBottom: '1rem', fontSize: '20px' }}>Autonomisation des femmes</h3>
              <p style={{ color: 'rgba(245,240,225,0.95)', lineHeight: '1.5', fontSize: '14px' }}>
                Nous offrons aux femmes rurales des opportunités économiques durables et une voix dans leur communauté. 
                Notre coopérative permet à plus de 30 femmes de Chefchaouen de gagner leur indépendance financière.
              </p>
            </div>

            {/* Mission 2 - Préservation de la biodiversité */}
            <div className="mission-item fade-in-up" style={{
              backgroundColor: '#8B5A2B',
              padding: '1.5rem',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(139,90,43,0.3)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              color: '#FFFFFF',
              animationDelay: '0.4s',
              border: '2px solid rgba(107,142,35,0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(139,90,43,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(139,90,43,0.3)';
            }}>
              <div className="mission-icon" style={{ fontSize: '50px', marginBottom: '1rem' }}>🌱</div>
              <h3 style={{ color: '#FFFFFF', fontWeight: 'bold', marginBottom: '1rem', fontSize: '20px' }}>Préservation de la biodiversité</h3>
              <p style={{ color: 'rgba(245,240,225,0.95)', lineHeight: '1.5', fontSize: '14px' }}>
                Nous cultivons le sorgho, une céréale locale résistante qui protège notre écosystème montagneux. 
                Cette culture traditionnelle préserve les sols et nécessite moins d'eau.
              </p>
            </div>

            {/* Mission 3 - Alimentation saine */}
            <div className="mission-item fade-in-up" style={{
              backgroundColor: '#9CAF4A',
              padding: '1.5rem',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(156,175,74,0.3)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              color: '#FFFFFF',
              animationDelay: '0.6s',
              border: '2px solid rgba(139,90,43,0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(156,175,74,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(156,175,74,0.3)';
            }}>
              <div className="mission-icon" style={{ fontSize: '50px', marginBottom: '1rem' }}>🍽️</div>
              <h3 style={{ color: '#FFFFFF', fontWeight: 'bold', marginBottom: '1rem', fontSize: '20px' }}>Alimentation saine</h3>
              <p style={{ color: 'rgba(245,240,225,0.95)', lineHeight: '1.5', fontSize: '14px' }}>
                Nous transformons le sorgho en produits nutritifs 100% naturels. 
                Farine, couscous et pâtes artisanales - des aliments sains, riches en fibres et sans gluten.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Al Moutmir Initiative Section */}
      <section className="al-moutmir-section py-5" style={{ 
        backgroundColor: '#FFFFFF',
        marginBottom: '4rem',
        position: 'relative'
      }}>
        {/* Decorative wave transition */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          left: '0',
          width: '100%',
          height: '60px',
          background: 'linear-gradient(135deg, transparent 49%, #FFFFFF 51%)',
          transform: 'skewY(-1deg)'
        }}></div>
        
        <Container className="px-5">
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '0 2rem'
          }}>
            <h2 className="text-center mb-5 fade-in-up" style={{ 
              fontSize: '40px', 
              fontWeight: 'bold',
              color: '#6B8E23',
              textShadow: '2px 2px 4px rgba(107,142,35,0.2)',
              animationDelay: '0s'
            }}>
              L'initiative Al Moutmir — Un partenaire clé
            </h2>

            <div className="fade-in-up" style={{
              backgroundColor: '#F5F0E1',
              borderRadius: '20px',
              padding: '3rem',
              boxShadow: '0 8px 30px rgba(107,142,35,0.15)',
              border: '3px solid rgba(107,142,35,0.2)',
              animationDelay: '0.2s'
            }}>
              {/* Introduction paragraph */}
              <p style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: '#8B5A2B',
                marginBottom: '2.5rem',
                textAlign: 'center',
                fontWeight: '500'
              }}>
                Le chemin vers le succès n'a pas été facile. Au départ, Bio Salim faisait face à de nombreux défis : 
                manque de ressources, d'équipements, et scepticisme de la communauté. 
                Grâce à l'<strong style={{ color: '#6B8E23' }}>initiative Al Moutmir</strong>, nous avons pu bénéficier :
              </p>

              {/* Benefits grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginBottom: '2.5rem'
              }}>
                {/* Benefit 1 */}
                <div className="fade-in-up" style={{
                  backgroundColor: '#6B8E23',
                  padding: '2rem',
                  borderRadius: '15px',
                  textAlign: 'center',
                  color: '#FFFFFF',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 4px 15px rgba(107,142,35,0.3)',
                  animationDelay: '0.4s',
                  border: '2px solid rgba(139,90,43,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(107,142,35,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(107,142,35,0.3)';
                }}>
                  <div style={{ fontSize: '50px', marginBottom: '1rem' }}>📚</div>
                  <h3 style={{ color: '#FFFFFF', fontWeight: 'bold', marginBottom: '1rem', fontSize: '20px' }}>
                    Formations techniques
                  </h3>
                  <p style={{ color: 'rgba(245,240,225,0.95)', lineHeight: '1.5', fontSize: '16px' }}>
                    Sur les bonnes pratiques agricoles pour optimiser nos cultures de sorgho.
                  </p>
                </div>

                {/* Benefit 2 */}
                <div className="fade-in-up" style={{
                  backgroundColor: '#8B5A2B',
                  padding: '2rem',
                  borderRadius: '15px',
                  textAlign: 'center',
                  color: '#FFFFFF',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 4px 15px rgba(139,90,43,0.3)',
                  animationDelay: '0.6s',
                  border: '2px solid rgba(107,142,35,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(139,90,43,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(139,90,43,0.3)';
                }}>
                  <div style={{ fontSize: '50px', marginBottom: '1rem' }}>⚙️</div>
                  <h3 style={{ color: '#FFFFFF', fontWeight: 'bold', marginBottom: '1rem', fontSize: '20px' }}>
                    Accompagnement qualité
                  </h3>
                  <p style={{ color: 'rgba(245,240,225,0.95)', lineHeight: '1.5', fontSize: '16px' }}>
                    Pour améliorer la qualité et la transformation du sorgho en produits finis.
                  </p>
                </div>

                {/* Benefit 3 */}
                <div className="fade-in-up" style={{
                  backgroundColor: '#A0751A',
                  padding: '2rem',
                  borderRadius: '15px',
                  textAlign: 'center',
                  color: '#FFFFFF',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 4px 15px rgba(160,117,26,0.3)',
                  animationDelay: '0.8s',
                  border: '2px solid rgba(107,142,35,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(160,117,26,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(160,117,26,0.3)';
                }}>
                  <div style={{ fontSize: '50px', marginBottom: '1rem' }}>📈</div>
                  <h3 style={{ color: '#FFFFFF', fontWeight: 'bold', marginBottom: '1rem', fontSize: '20px' }}>
                    Soutien marketing
                  </h3>
                  <p style={{ color: 'rgba(245,240,225,0.95)', lineHeight: '1.5', fontSize: '16px' }}>
                    En marketing et visibilité pour atteindre de nouveaux marchés.
                  </p>
                </div>
              </div>

              {/* Conclusion */}
              <div className="fade-in-up" style={{
                backgroundColor: 'rgba(107,142,35,0.1)',
                padding: '2rem',
                borderRadius: '15px',
                textAlign: 'center',
                border: '3px solid rgba(107,142,35,0.3)',
                animationDelay: '1s'
              }}>
                <p style={{
                  fontSize: '18px',
                  lineHeight: '1.8',
                  color: '#8B5A2B',
                  margin: '0',
                  fontWeight: '500',
                  fontStyle: 'italic'
                }}>
                  Cet appui a été le catalyseur qui nous a permis de passer d'un simple rêve 
                  à une <strong style={{ color: '#6B8E23' }}>coopérative prospère et reconnue</strong> dans toute la région.
                </p>
              </div>
            </div>
          </div>
        </Container>

        {/* Decorative wave transition at bottom */}
        <div style={{
          position: 'absolute',
          bottom: '-50px',
          left: '0',
          width: '100%',
          height: '60px',
          background: 'linear-gradient(135deg, #FFFFFF 49%, transparent 51%)',
          transform: 'skewY(-1deg)'
        }}></div>
      </section>
      {/* Nos Produits Section */}
      <section className="products-section py-5" style={{ 
        backgroundColor: '#DCE3D5',
        marginBottom: '4rem',
        position: 'relative'
      }}>
        {/* Decorative wave transition from white */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          left: '0',
          width: '100%',
          height: '60px',
          background: 'linear-gradient(135deg, transparent 49%, #DCE3D5 51%)',
          transform: 'skewY(-1deg)'
        }}></div>
        
        <Container className="px-5">
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem'
          }}>
            <h2 className="text-center mb-5 fade-in-up" style={{ 
              fontSize: '40px', 
              fontWeight: 'bold',
              color: '#6B8E23',
              textShadow: '2px 2px 4px rgba(107,142,35,0.2)',
              animationDelay: '0s'
            }}>
              Nos Produits
            </h2>

            {/* Introduction text */}
            <p className="text-center mb-5 fade-in-up" style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#8B5A2B',
              maxWidth: '800px',
              margin: '0 auto 3rem auto',
              fontWeight: '500',
              animationDelay: '0.2s'
            }}>
              Du champ à votre table, nos produits sont transformés avec soin et amour. Découvrez notre gamme :
            </p>

            {/* Products Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '3rem',
              marginBottom: '3rem'
            }}>
              {/* Product 1 - Farine de sorgho */}
              <div className="product-item fade-in-up" style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '2rem',
                textAlign: 'center',
                boxShadow: '0 6px 20px rgba(107,142,35,0.2)',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                border: '3px solid rgba(107,142,35,0.1)',
                position: 'relative',
                overflow: 'hidden',
                animationDelay: '0.4s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(107,142,35,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(107,142,35,0.2)';
              }}>
                {/* Decorative top accent */}
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  height: '5px',
                  background: 'linear-gradient(90deg, #6B8E23, #8B5A2B)'
                }}></div>
                
                {/* Product visual representation */}
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  backgroundColor: '#F5F0E1',
                  margin: '0 auto 2rem auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '60px',
                  border: '4px solid rgba(107,142,35,0.2)',
                  boxShadow: '0 4px 15px rgba(107,142,35,0.1)'
                }}>
                  🌾
                </div>
                
                <h3 style={{ 
                  color: '#6B8E23', 
                  fontWeight: 'bold', 
                  marginBottom: '1rem', 
                  fontSize: '24px' 
                }}>
                  Farine de sorgho
                </h3>
                
                <p style={{ 
                  color: '#8B5A2B', 
                  lineHeight: '1.6', 
                  fontSize: '16px',
                  margin: '0'
                }}>
                  Une farine naturelle et nutritive, parfaite pour vos préparations culinaires. 
                  Sans gluten, riche en fibres et au goût authentique de notre terroir.
                </p>
              </div>

              {/* Product 2 - Couscous de sorgho */}
              <div className="product-item fade-in-up" style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '2rem',
                textAlign: 'center',
                boxShadow: '0 6px 20px rgba(139,90,43,0.2)',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                border: '3px solid rgba(139,90,43,0.1)',
                position: 'relative',
                overflow: 'hidden',
                animationDelay: '0.6s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(139,90,43,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(139,90,43,0.2)';
              }}>
                {/* Decorative top accent */}
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  height: '5px',
                  background: 'linear-gradient(90deg, #8B5A2B, #6B8E23)'
                }}></div>
                
                {/* Product visual representation */}
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  backgroundColor: '#F5F0E1',
                  margin: '0 auto 2rem auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '60px',
                  border: '4px solid rgba(139,90,43,0.2)',
                  boxShadow: '0 4px 15px rgba(139,90,43,0.1)'
                }}>
                  🍚
                </div>
                
                <h3 style={{ 
                  color: '#8B5A2B', 
                  fontWeight: 'bold', 
                  marginBottom: '1rem', 
                  fontSize: '24px' 
                }}>
                  Couscous de sorgho
                </h3>
                
                <p style={{ 
                  color: '#8B5A2B', 
                  lineHeight: '1.6', 
                  fontSize: '16px',
                  margin: '0'
                }}>
                  Le couscous traditionnel revisité avec le sorgho local. Une expérience gustative unique 
                  qui allie tradition berbère et innovation nutritionnelle.
                </p>
              </div>

              {/* Product 3 - Pâtes artisanales */}
              <div className="product-item fade-in-up" style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '2rem',
                textAlign: 'center',
                boxShadow: '0 6px 20px rgba(156,175,74,0.2)',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                border: '3px solid rgba(156,175,74,0.1)',
                position: 'relative',
                overflow: 'hidden',
                animationDelay: '0.8s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(156,175,74,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(156,175,74,0.2)';
              }}>
                {/* Decorative top accent */}
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  height: '5px',
                  background: 'linear-gradient(90deg, #9CAF4A, #8B5A2B)'
                }}></div>
                
                {/* Product visual representation */}
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  backgroundColor: '#F5F0E1',
                  margin: '0 auto 2rem auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '60px',
                  border: '4px solid rgba(156,175,74,0.2)',
                  boxShadow: '0 4px 15px rgba(156,175,74,0.1)'
                }}>
                  🍝
                </div>
                
                <h3 style={{ 
                  color: '#9CAF4A', 
                  fontWeight: 'bold', 
                  marginBottom: '1rem', 
                  fontSize: '24px' 
                }}>
                  Pâtes artisanales au sorgho
                </h3>
                
                <p style={{ 
                  color: '#8B5A2B', 
                  lineHeight: '1.6', 
                  fontSize: '16px',
                  margin: '0'
                }}>
                  Des pâtes façonnées à la main avec amour. Chaque forme raconte l'histoire de nos artisanes 
                  et apporte une texture unique à vos plats.
                </p>
              </div>
            </div>

            {/* Closing message */}
            <div className="fade-in-up" style={{
              backgroundColor: 'rgba(107,142,35,0.1)',
              padding: '2.5rem',
              borderRadius: '20px',
              textAlign: 'center',
              border: '3px solid rgba(107,142,35,0.2)',
              animationDelay: '1s'
            }}>
              <p style={{
                fontSize: '20px',
                lineHeight: '1.8',
                color: '#8B5A2B',
                margin: '0',
                fontWeight: '600',
                fontStyle: 'italic'
              }}>
                Chacun de nos produits porte en lui le <strong style={{ color: '#6B8E23' }}>goût authentique de Chefchaouen</strong> et la 
                <strong style={{ color: '#6B8E23' }}> force des femmes</strong> qui les fabriquent.
              </p>
            </div>
          </div>
        </Container>

        {/* Decorative wave transition at bottom */}
        <div style={{
          position: 'absolute',
          bottom: '-50px',
          left: '0',
          width: '100%',
          height: '60px',
          background: 'linear-gradient(135deg, #DCE3D5 49%, transparent 51%)',
          transform: 'skewY(-1deg)'
        }}></div>
      </section>

    </div>
  );
};

export default Home;