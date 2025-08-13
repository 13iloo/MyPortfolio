import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-5">
            <Container>
                <Row>
                    <Col md={4} className="mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">CraftoReplica</h5>
                        <p className="text-muted">
                            We are a creative agency dedicated to crafting exceptional digital experiences.
                        </p>
                        <div className="social-icons mt-3">
                            <a href="#!" className="text-white me-3"><FontAwesomeIcon icon={faFacebookF} size="lg" /></a>
                            <a href="#!" className="text-white me-3"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
                            <a href="#!" className="text-white me-3"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                            <a href="#!" className="text-white me-3"><FontAwesomeIcon icon={faLinkedinIn} size="lg" /></a>
                        </div>
                    </Col>
                    <Col md={2} className="mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#home" className="text-muted text-decoration-none">Home</a></li> {/* eslint-disable-line jsx-a11y/anchor-is-valid */}
                            <li><a href="#services" className="text-muted text-decoration-none">Services</a></li> {/* eslint-disable-line jsx-a11y/anchor-is-valid */}
                            <li><a href="#portfolio" className="text-muted text-decoration-none">Portfolio</a></li> {/* eslint-disable-line jsx-a11y/anchor-is-valid */}
                            <li><a href="#about" className="text-muted text-decoration-none">About Us</a></li> {/* eslint-disable-line jsx-a11y/anchor-is-valid */}
                        </ul>
                    </Col>
                    <Col md={3} className="mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">Contact Us</h5>
                        <ul className="list-unstyled text-muted">
                            <li>Vuorikatu 14b, 65100 Vaasa</li>
                            <li>Bilalhassen239@gmail.com</li>
                            <li>+358 449191591</li>
                            <li><a href="https://www.linkedin.com/in/bilal-hassen-osman-284096171" className="text-muted text-decoration-none" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5 className="text-uppercase mb-4">Newsletter</h5>
                        <p className="text-muted">Subscribe to our newsletter for the latest updates.</p>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Subscribe
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <hr className="my-4 border-secondary" />
                <div className="text-center text-muted">
                    &copy; {new Date().getFullYear()} BILAL OSMAN. All Rights Reserved.
                </div>
            </Container>
        </footer>
    );
};

export default Footer;