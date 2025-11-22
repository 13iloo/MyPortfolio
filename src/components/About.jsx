import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img from '../assets/images/about.jpg';

gsap.registerPlugin(ScrollTrigger);

const skills = [
    { name: 'Observation', progress: 90 },
    { name: 'Decision Making', progress: 90 },
    { name: 'Communication', progress: 90 },
    { name: 'Multi-tasking', progress: 90 }
];

const About = () => {
    const imgRef = useRef(null);
    const textRef = useRef(null);
    const skillsRef = useRef([]);

    useEffect(() => {
        // Capture ref.current values for cleanup
        const imgElement = imgRef.current;
        const textElement = textRef.current;
        
        // Use IntersectionObserver for reliable triggering regardless of scroll distance
        const observerOptions = {
            threshold: 0.1, // Trigger when 10% of element is visible
            rootMargin: '0px 0px -10% 0px' // Trigger slightly before element enters viewport
        };

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.fromTo(imgRef.current, 
                        { opacity: 0, x: -50, rotationY: -15 }, 
                        { 
                            opacity: 1, 
                            x: 0, 
                            rotationY: 0,
                            duration: 1, 
                            ease: 'power3.out'
                        }
                    );
                    imageObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const textObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.fromTo(textRef.current, 
                        { opacity: 0, x: 50 }, 
                        { 
                            opacity: 1, 
                            x: 0, 
                            duration: 1, 
                            ease: 'power3.out'
                        }
                    );
                    textObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        if (imgElement) imageObserver.observe(imgElement);
        if (textElement) textObserver.observe(textElement);

        // Skills Animation with IntersectionObserver
        skillsRef.current.forEach((skill, index) => {
            if (skill) {
                const skillObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            gsap.fromTo(skill, 
                                { width: 0, opacity: 0 }, 
                                { 
                                    width: '100%', 
                                    opacity: 1, 
                                    duration: 1, 
                                    ease: 'power2.out',
                                    delay: index * 0.2
                                }
                            );
                            skillObserver.unobserve(entry.target);
                        }
                    });
                }, observerOptions);
                skillObserver.observe(skill);
            }
        });

        return () => {
            // Use captured values in cleanup
            if (imgElement) imageObserver.unobserve(imgElement);
            if (textElement) textObserver.unobserve(textElement);
        };
    }, []);

    return (
        <section id="about" className="py-5">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} style={{ perspective: '1000px' }}>
                        <img ref={imgRef} src={img} alt="About Us" className="img-fluid rounded shadow about-img" />
                    </Col>
                    <Col md={6} className="mt-4 mt-md-0">
                        <div ref={textRef} className="p-4 rounded" style={{ backgroundColor: 'rgba(29, 53, 87, 0.8)', backdropFilter: 'blur(5px)' }}>
                            <h3 className="text-white">About Me</h3>
                            <p className="text-white-50">
                                I'm an aspiring developer passionate about turning ideas into reality through code. Proficient in JS, Python, I'm eager to contribute to innovative projects and collaborate with experienced professionals. Having acquired a skill in global teamwork Skills, I thrive on learning new technologies and methodologies, and I'm committed to delivering high-quality solutions while continuously growing as a developer. Let's build something amazing together!
                            </p>
                        </div>
                        <div className="skills-progress mt-4">
                            {skills.map((skill, index) => (
                                <div key={index} className="mb-3">
                                    <div className="d-flex justify-content-between">
                                        <span className="fw-bold">{skill.name}</span>
                                        <span>{skill.progress}%</span>
                                    </div>
                                    <div ref={el => skillsRef.current[index] = el}>
                                        <ProgressBar now={skill.progress} variant="primary" className="mt-1" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;