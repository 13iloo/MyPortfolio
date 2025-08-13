import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import img from '../assets/images/about.jpg';


const skills = [
    { name: 'Observation', progress: 90 },
    { name: 'Decision Making', progress: 90 },
    { name: 'Communication', progress: 90 },
    { name: 'Multi-tasking', progress: 90 }
];

const About = () => {
    return (
        <section id="about" className="py-5">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="animate__animated animate__fadeInLeft">
                        <img src={img} alt="About Us" className="img-fluid rounded shadow about-img" />
                    </Col>
                    <Col md={6} className="mt-4 mt-md-0 animate__animated animate__fadeInRight">
                        <h3>About Me</h3>
                        <p className="text-muted">
                            I'm an aspiring developer passionate about turning ideas into reality through code. Proficient in JS, Python, I'm eager to contribute to innovative projects and collaborate with experienced professionals. Having acquired a skill in global teamwork Skills, I thrive on learning new technologies and methodologies, and I'm committed to delivering high-quality solutions while continuously growing as a developer. Let's build something amazing together!
                        </p>
                        <div className="skills-progress mt-4">
                            {skills.map((skill, index) => (
                                <div key={index} className="mb-3">
                                    <div className="d-flex justify-content-between">
                                        <span className="fw-bold">{skill.name}</span>
                                        <span>{skill.progress}%</span>
                                    </div>
                                    <ProgressBar now={skill.progress} variant="primary" className="mt-1" />
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