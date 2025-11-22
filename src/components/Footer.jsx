import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer id="contact" className="py-5" style={{ backgroundColor: 'rgba(29, 53, 87, 0.9)', color: 'var(--color-text-primary)' }}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={4} className="mb-4 mb-md-0 text-center text-md-start">
                        <h5 className="text-uppercase mb-4 fw-bold" style={{ color: 'var(--color-secondary)' }}>Bilal Osman</h5>
                        <p style={{ opacity: 0.8 }}>
                            I am a creative developer dedicated to crafting exceptional digital experiences.
                        </p>
                    </Col>
                    <Col md={2} className="mb-4 mb-md-0 text-center text-md-start">
                        <h5 className="text-uppercase mb-4 fw-bold" style={{ color: 'var(--color-secondary)' }}>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#home" className="text-decoration-none text-white opacity-75 hover-opacity-100">Home</a></li>
                            <li className="mb-2"><a href="#services" className="text-decoration-none text-white opacity-75 hover-opacity-100">Services</a></li>
                            <li className="mb-2"><a href="#portfolio" className="text-decoration-none text-white opacity-75 hover-opacity-100">Portfolio</a></li>
                            <li className="mb-2"><a href="#about" className="text-decoration-none text-white opacity-75 hover-opacity-100">About Me</a></li>
                        </ul>
                    </Col>
                    <Col md={3} className="mb-4 mb-md-0 text-center text-md-start">
                        <h5 className="text-uppercase mb-4 fw-bold" style={{ color: 'var(--color-secondary)' }}>Contact</h5>
                        <ul className="list-unstyled text-white opacity-75">
                            <li className="mb-2">Vuorikatu 14b, 65100 Vaasa</li>
                            <li className="mb-2">Bilalhassen239@gmail.com</li>
                            <li className="mb-2">+358 449191591</li>
                            <li className="mb-2"><a href="https://www.linkedin.com/in/bilal-hassen-osman-2840a6171/" className="text-decoration-none text-white hover-opacity-100" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;