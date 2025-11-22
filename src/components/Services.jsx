import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faMobileAlt, faChartLine, faCloud, faServer, faWifi, faCube, faGamepad, faDatabase, faRobot, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
    {
        icon: faLaptopCode,
        title: 'FullStack Web App Development (MERN)',
        description: 'Building responsive and high-performance web applications using the MERN stack.'
    },
    {
        icon: faMobileAlt,
        title: 'Mobile App Development',
        description: 'Creating intuitive and engaging mobile applications for various platforms.'
    },
    {
        icon: faChartLine,
        title: 'Data Management',
        description: 'Proficient in managing and organizing data for various applications.'
    },
    {
        icon: faChartLine,
        title: 'Data Visualization',
        description: 'Transforming complex data into clear and insightful visual representations.'
    },
    {
        icon: faCloud,
        title: 'AZURE DevOps and CosmosDB',
        description: 'Experience with cloud development and database solutions on Azure.'
    },
    {
        icon: faServer,
        title: 'Backend Development (Node.js)',
        description: 'Developing robust and scalable backend solutions with Node.js.'
    },
    {
        icon: faWifi,
        title: 'IoT Systems',
        description: 'Designing and implementing solutions for Internet of Things ecosystems.'
    },
    {
        icon: faCube,
        title: '3D Design and Modelling',
        description: 'Creating 3D models and designs for various applications.'
    },
    {
        icon: faGamepad,
        title: '3D Game Engine Programming',
        description: 'Programming and developing interactive experiences with 3D game engines.'
    },
    {
        icon: faChartBar,
        title: 'Business Data Visualization',
        description: 'Visualizing business data to provide actionable insights and support decision-making.'
    },
    {
        icon: faDatabase,
        title: 'Big Data',
        description: 'Handling and processing large volumes of data for analysis and insights.'
    },
    {
        icon: faRobot,
        title: 'AI Programming',
        description: 'Developing and implementing artificial intelligence algorithms and applications.'
    }
];

const Services = () => {
    const cardsRef = useRef([]);

    useEffect(() => {
        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(card, 
                { opacity: 0, y: 50, rotationX: 15 }, 
                { 
                    opacity: 1, 
                    y: 0, 
                    rotationX: 0,
                    duration: 0.8, 
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    },
                    delay: index % 4 * 0.1 // Stagger effect based on column position
                }
            );
        });
    }, []);

    return (
        <section id="services" className="py-5">
            <Container>
                <h2 className="text-center mb-5 services-title">Hard Skills</h2>
                <Row className="g-4">
                    {servicesData.map((service, index) => (
                        <Col md={6} lg={3} key={index}>
                            <div 
                                ref={el => cardsRef.current[index] = el}
                                className="service-card text-center p-4 border rounded shadow-sm h-100"
                                style={{ perspective: '1000px' }}
                            >
                                <div className="icon-box mb-3">
                                    <FontAwesomeIcon icon={service.icon} size="2x" className="text-primary" />
                                </div>
                                <h3 className="h5 mb-3">{service.title}</h3>
                                <p className="text-muted">{service.description}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Services;