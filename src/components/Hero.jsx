import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import heroPlaceholder from '../assets/images/hero.jpg';

const Hero = () => {
    return (
        <section id="home" className="hero-section d-flex align-items-center text-center text-white" style={{
            backgroundImage: `url(${heroPlaceholder})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh', // Full viewport height
            position: 'relative',
            zIndex: 1
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay for text readability
                zIndex: -1
            }}></div>
            <Container>
                <Row className="justify-content-center">
                    <Col md={10} lg={8}>
                        <h1 className="display-2 fw-bold mb-4 animate__animated animate__fadeInDown">
                            IT ENGINEERING
                        </h1>
                        <p className="lead mb-5 animate__animated animate__fadeInUp">
                            An aspiring developer passionate about turning ideas into reality through code.
                        </p>
                        <Button variant="primary" size="lg" className="animate__animated animate__zoomIn">
                            View My Work
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;