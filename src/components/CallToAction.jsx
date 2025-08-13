import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CallToAction = () => {
    return (
        <section id="cta" className="call-to-action-section text-white text-center py-5" style={{
            backgroundImage: 'url(/images/cta-background.jpg)', // Placeholder image
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed', // Parallax effect
            backgroundPosition: 'center',
            minHeight: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)', // Overlay for text readability
                zIndex: -1
            }}></div>
            <Container>
                <Row className="justify-content-center">
                    <Col md={10} lg={8}>
                        <h2 className="display-4 fw-bold mb-4 animate__animated animate__fadeInDown">
                            Let's Build Something Amazing Together!
                        </h2>
                        <p className="lead mb-5 animate__animated animate__fadeInUp">
                            I'm committed to delivering high-quality solutions while continuously growing as a developer. Contact me to discuss your ideas.
                        </p>
                        <Button variant="light" size="lg" className="animate__animated animate__zoomIn">
                            Contact Me
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CallToAction;