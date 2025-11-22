import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { gsap } from 'gsap';

const Hero = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(titleRef.current, 
            { y: -50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, delay: 0.2 }
        )
        .fromTo(subtitleRef.current, 
            { y: 20, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.8 }, 
            "-=0.5"
        )
        .fromTo(buttonRef.current, 
            { scale: 0.8, opacity: 0 }, 
            { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }, 
            "-=0.3"
        );
    }, []);

    return (
        <section id="home" className="hero-section d-flex align-items-center text-center text-white" style={{
            minHeight: '100vh',
            position: 'relative',
            zIndex: 1
        }}>
            <Container>
                <Row className="justify-content-end align-items-center" style={{ minHeight: '100vh' }}>
                    <Col md={6} lg={5} className="text-start">
                        <h1 ref={titleRef} className="display-2 mb-4 hero-title">
                            IT Engineer
                        </h1>
                        <p ref={subtitleRef} className="lead mb-5 hero-subtitle">
                            An aspiring developer passionate about turning ideas into reality through code.
                        </p>
                        <Button ref={buttonRef} variant="primary" size="lg" className="px-5 py-3 rounded-pill shadow-lg" href="#portfolio">
                            View My Work
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;