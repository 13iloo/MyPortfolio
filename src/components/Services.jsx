import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faMobileAlt, faChartLine, faCloud, faServer, faWifi, faCube, faGamepad, faDatabase, faRobot, faChartBar } from '@fortawesome/free-solid-svg-icons';

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
    return (
        <section id="services" className="py-5">
            <Container>
                <h2 className="text-center mb-5 animate__animated animate__fadeInUp">Hard Skills</h2>
                <Row className="g-4">
                    {servicesData.map((service, index) => (
                        <Col md={6} lg={3} key={index} className="animate__animated animate__fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="service-card text-center p-4 border rounded shadow-sm h-100">
                                <div className="icon-box mb-3">
                                    <FontAwesomeIcon icon={service.icon} size="3x" className="text-primary" />
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