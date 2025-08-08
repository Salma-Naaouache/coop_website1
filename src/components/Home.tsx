import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section
        className="position-relative vh-100 d-flex align-items-center overflow-hidden text-white"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0) 30%, rgba(0,64,0,0.7) 100%)'
        }}
      >
        <Container className="position-relative z-3">
          <Row className="align-items-center">
            <Col md={7}>
              <div
                className="placeholder-image large"
                style={{ height: '400px' }}
              >
                Image Placeholder
              </div>
            </Col>
            <Col md={5}>
              <h1 className="display-4 fw-bold mb-4" style={{ fontFamily: 'Montserrat' }}>
                Bio Salim — Ensemble, nous cultivons l'avenir
              </h1>
              <p className="fs-5 mb-4 opacity-75" style={{ fontFamily: 'Open Sans' }}>
                Dans les montagnes verdoyantes de Chefchaouen, plus de 30 femmes rurales unissent leur savoir-faire pour produire des aliments sains à base de sorgho.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Button variant="success" size="lg">
                  Découvrir notre histoire
                </Button>
                <Button variant="outline-light" size="lg">
                  Voir nos produits
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

     {/* Notre Mission - Version exacte comme l'image */}
<section className="py-5" style={{ backgroundColor: '#F5F0E1' }}>
  <Container>
    <h1 
      className="text-center mb-4"
      style={{ 
        fontFamily: 'Montserrat', 
        color: '#6B8E23',
        fontWeight: 'bold',
        fontSize: '2.5rem',
        textDecoration: 'none'
      }}
    >
      Notre Mission
    </h1>
    
    <p
      className="text-center fs-5 mb-5 mx-auto"
      style={{ 
        maxWidth: '700px', 
        color: '#8B5A2B',
        fontFamily: 'Open Sans',
        fontWeight: 'normal'
      }}
    >
      Chez Bio Salim, notre mission dépasse la simple production agricole. Nous œuvrons pour :
    </p>
    
    <div className="mx-auto" style={{ maxWidth: '800px' }}>
      {/* Premier point de mission */}
      <h2
        className="mb-2"
        style={{
          fontFamily: 'Montserrat',
          color: '#6B8E23',
          fontWeight: 'bold',
          fontSize: '1.5rem'
        }}
      >
        Autonomiser économiquement
      </h2>
      <p 
        className="mb-4"
        style={{
          fontFamily: 'Open Sans',
          color: '#8B5A2B',
          fontSize: '1.1rem',
          marginLeft: '1rem'
        }}
      >
        les femmes rurales en leur offrant des opportunités d'indépendance financière et de développement personnel.
      </p>
      
      {/* Deuxième point de mission */}
      <h2
        className="mb-2"
        style={{
          fontFamily: 'Montserrat',
          color: '#6B8E23',
          fontWeight: 'bold',
          fontSize: '1.5rem'
        }}
      >
        Préserver la biodiversité
      </h2>
      <p 
        style={{
          fontFamily: 'Open Sans',
          color: '#8B5A2B',
          fontSize: '1.1rem',
          marginLeft: '1rem'
        }}
      >
        en cultivant le sorgho, céréale locale résistante à la sécheresse et respectueuse de l'environnement.
      </p>
    </div>
  </Container>
</section>

      {/* Al Moutmir */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={6}>
              <div className="placeholder-image" style={{ height: '300px' }}>
                Image Placeholder
              </div>
            </Col>
            <Col lg={6}>
              <h2 className="fw-bold mb-3" style={{ color: '#6B8E23', fontFamily: 'Montserrat' }}>
                Al Moutmir, catalyseur de notre réussite
              </h2>
              <p style={{ color: '#8B5A2B' }}>
                Le chemin vers le succès n'a pas été facile...
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">✓ De formations techniques...</li>
                <li className="mb-2">✓ D'un accompagnement...</li>
                <li>✓ D'un soutien en marketing...</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Produits */}
      <section className="py-5" style={{ backgroundColor: '#DCE3D5' }}>
        <Container>
          <h2 className="text-center fw-bold mb-4" style={{ color: '#6B8E23', fontFamily: 'Montserrat' }}>
            Nos Produits
          </h2>
          <Row className="g-4">
            {[
              { name: 'Farine de sorgho', desc: 'Farine pure et nutritive...', icon: '🌾' },
              { name: 'Couscous de sorgho', desc: 'Alternative saine...', icon: '🍽️' },
              { name: 'Pâtes artisanales', desc: 'Pâtes fabriquées à la main...', icon: '🍝' }
            ].map((prod, i) => (
              <Col md={4} key={i}>
                <Card className="h-100 shadow-sm">
                  <div
                    className="placeholder-image"
                    style={{ height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}
                  >
                    {prod.icon}
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title style={{ color: '#6B8E23', fontFamily: 'Montserrat' }}>{prod.name}</Card.Title>
                    <Card.Text style={{ color: '#8B5A2B', fontFamily: 'Open Sans' }}>{prod.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section
        className="py-5 text-center text-white position-relative"
        style={{ backgroundColor: '#4A5A2B' }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2
          }}
        >
          {/* Background image placeholder */}
        </div>
        <Container className="position-relative z-3">
          <h2 className="fw-bold mb-4" style={{ fontFamily: 'Montserrat' }}>
            Rejoignez-nous dans cette aventure humaine et durable
          </h2>
          <p className="fs-5 mb-4" style={{ fontFamily: 'Open Sans' }}>
            Soutenez notre mission...
          </p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <Button variant="light" size="lg" className="text-success fw-bold">
              Commander nos produits
            </Button>
            <Button variant="outline-light" size="lg" className="fw-bold">
              Nous contacter
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
