import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CallToAction = () => {
    return (
        <section id="cta" className="call-to-action-section text-white text-center py-5" style={{
            background: 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-background) 100%)',
            minHeight: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
            borderTop: '1px solid var(--color-primary)'
        }}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={10} lg={8}>
                        <h2 className="display-4 fw-bold mb-4 animate__animated animate__fadeInDown" style={{ color: 'var(--color-text-primary)' }}>
                            Ready to Elevate Your Digital Infrastructure?
                        </h2>
                        <p className="lead mb-5 animate__animated animate__fadeInUp" style={{ color: '#ffffff' }}>
                            From robust backend systems to immersive frontend experiences, I engineer solutions that drive results. Let's discuss your next project.
                        </p>
                        <Button variant="outline-light" size="lg" className="animate__animated animate__zoomIn" href="bilalhassen239@gmail.com" style={{
                            borderColor: 'var(--color-primary)',
                            color: 'var(--color-primary)',
                            borderWidth: '2px',
                            borderRadius: '0'
                        }}>
                            Get in Touch
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CallToAction;