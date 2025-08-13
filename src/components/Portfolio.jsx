import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const portfolioItems = [
    {
        id: 1,
        category: 'mobile',
        title: 'Altitude-SimulatedDevice',
        description: 'A mobile-related project.',
        image: '/images/portfolio-1.jpg'
    },
    {
        id: 2,
        category: 'mobile',
        title: 'AltitudeSimulated',
        description: 'A mobile-related project.',
        image: '/images/portfolio-2.jpg'
    },
    {
        id: 3,
        category: 'web',
        title: 'ApiMenus',
        description: 'An API-related web project.',
        image: '/images/portfolio-3.jpg'
    },
    {
        id: 4,
        category: 'web',
        title: 'ApiNotes',
        description: 'An API-related web project.',
        image: '/images/portfolio-4.jpg'
    },
    {
        id: 5,
        category: 'web',
        title: 'azureFunc',
        description: 'An Azure function project.',
        image: '/images/portfolio-5.jpg'
    },
    {
        id: 6,
        category: 'game',
        title: 'BGALeaderboard',
        description: 'A game leaderboard project.',
        image: '/images/portfolio-6.jpg'
    },
    {
        id: 7,
        category: 'iot',
        title: 'IoT-Assignment',
        description: 'An IoT assignment project.',
        image: '/images/portfolio-1.jpg'
    },
    {
        id: 8,
        category: 'mobile',
        title: 'Mobile-20Development',
        description: 'A mobile development project.',
        image: '/images/portfolio-2.jpg'
    },
    {
        id: 9,
        category: 'web',
        title: 'Osman_Exam_Previous',
        description: 'A web project.',
        image: '/images/portfolio-3.jpg'
    },
    {
        id: 10,
        category: 'web',
        title: 'personsaca',
        description: 'A web project.',
        image: '/images/portfolio-4.jpg'
    },
    {
        id: 11,
        category: 'game',
        title: 'PlinkoAI',
        description: 'An AI game project.',
        image: '/images/portfolio-5.jpg'
    },
    {
        id: 12,
        category: 'mobile',
        title: 'PressureSimulated',
        description: 'A mobile-related project.',
        image: '/images/portfolio-6.jpg'
    },
    {
        id: 13,
        category: 'web',
        title: 'ProgrammingProject',
        description: 'A programming project.',
        image: '/images/portfolio-1.jpg'
    },
    {
        id: 14,
        category: 'web',
        title: 'ProgrammingProject2',
        description: 'A programming project.',
        image: '/images/portfolio-2.jpg'
    },
    {
        id: 15,
        category: 'web',
        title: 'React-app',
        description: 'A React application.',
        image: '/images/portfolio-3.jpg'
    },
    {
        id: 16,
        category: 'web',
        title: 'ReactMenus-20-28Fullstack-20Project-29',
        description: 'A fullstack React project.',
        image: '/images/portfolio-4.jpg'
    },
    {
        id: 17,
        category: 'web',
        title: 'ReactNotes',
        description: 'A React notes application.',
        image: '/images/portfolio-5.jpg'
    },
    {
        id: 18,
        category: 'web',
        title: 'salute',
        description: 'A web project.',
        image: '/images/portfolio-6.jpg'
    },
    {
        id: 19,
        category: 'web',
        title: 'stationsaca',
        description: 'A web project.',
        image: '/images/portfolio-1.jpg'
    },
    {
        id: 20,
        category: 'web',
        title: 'Webnotes',
        description: 'A web notes project.',
        image: '/images/portfolio-2.jpg'
    }
];

const Portfolio = () => {
    const [filter, setFilter] = useState('all');

    const filteredItems = filter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === filter);

    return (
        <section id="portfolio" className="py-5 ">
            <Container>
                <h2 className="text-center mb-5 animate__animated animate__fadeInUp"> Portfolio</h2>
                <div className="text-center mb-4 animate__animated animate__fadeInUp">
                    <Button variant="outline-primary" className={`mx-2 ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</Button>
                    <Button variant="outline-primary" className={`mx-2 ${filter === 'web' ? 'active' : ''}`} onClick={() => setFilter('web')}>Web</Button>
                    <Button variant="outline-primary" className={`mx-2 ${filter === 'mobile' ? 'active' : ''}`} onClick={() => setFilter('mobile')}>Mobile</Button>
                    <Button variant="outline-primary" className={`mx-2 ${filter === 'branding' ? 'active' : ''}`} onClick={() => setFilter('branding')}>Branding</Button>
                </div>
                <Row className="g-4">
                    {filteredItems.map((item, index) => (
                        <Col md={6} lg={4} key={item.id} className="animate__animated animate__zoomIn" style={{ animationDelay: `${index * 0.1}s` }}>
                            <Card className="portfolio-item h-100">
                                <div className="portfolio-img-container">
                                    <Card.Img variant="top" src={item.image} alt={item.title} />
                                    <div className="portfolio-overlay">
                                        <div className="portfolio-info">
                                            <Card.Title className="text-white">{item.title}</Card.Title>
                                            <Card.Text className="text-white-50">{item.description}</Card.Text>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Portfolio;