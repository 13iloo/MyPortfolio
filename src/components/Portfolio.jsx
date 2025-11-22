import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { gsap } from 'gsap';

const portfolioItems = [
    {
        id: 1,
        category: 'IoT',
        title: 'Altitude-SimulatedDevice',
        description: 'A mobile-related project.',
        repoUrl: 'https://github.com/13iloo/Altitude-SimulatedDevice'
    },
    {
        id: 2,
        category: 'IoT',
        title: 'AltitudeSimulated',
        description: 'A mobile-related project.',
        repoUrl: 'https://github.com/13iloo/AltitudeSimulated'
    },
    {
        id: 3,
        category: 'web',
        title: 'ApiMenus',
        description: 'An API-related web project.',
        repoUrl: 'https://github.com/13iloo/ApiMenus'
    },
    {
        id: 4,
        category: 'web',
        title: 'ApiNotes',
        description: 'An API-related web project.',
        repoUrl: 'https://github.com/13iloo/ApiNotes'
    },
    {
        id: 5,
        category: 'web',
        title: 'azureFunc',
        description: 'An Azure function project.',
        repoUrl: 'https://github.com/13iloo/azureFunc'
    },
    {
        id: 6,
        category: 'game',
        title: 'BGALeaderboard',
        description: 'A game leaderboard project.',
        repoUrl: 'https://github.com/13iloo/BGALeaderboard'
    },
    {
        id: 7,
        category: 'IoT',
        title: 'IoT-Assignment',
        description: 'An IoT assignment project.',
        repoUrl: 'https://github.com/13iloo/IoT-Assignment'
    },
    {
        id: 8,
        category: 'mobile',
        title: 'Mobile-20Development',
        description: 'A mobile development project.',
        repoUrl: 'https://github.com/13iloo/Mobile-20Development'
    },
    {
        id: 10,
        category: 'BigData',
        title: 'personsaca',
        description: 'A web project.',
        repoUrl: 'https://github.com/13iloo/personsaca'
    },
    {
        id: 11,
        category: 'game',
        title: 'PlinkoAI',
        description: 'An AI game project.',
        repoUrl: 'https://github.com/13iloo/PlinkoAI'
    },
    {
        id: 12,
        category: 'IoT',
        title: 'PressureSimulated',
        description: 'A mobile-related project.',
        repoUrl: 'https://github.com/13iloo/PressureSimulated'
    },
    {
        id: 13,
        category: 'web',
        title: 'ProgrammingProject',
        description: 'A programming project.',
        repoUrl: 'https://github.com/13iloo/ProgrammingProject'
    },
    {
        id: 14,
        category: 'web',
        title: 'ProgrammingProject2',
        description: 'A programming project.',
        repoUrl: 'https://github.com/13iloo/ProgrammingProject2'
    },
    {
        id: 15,
        category: 'web',
        title: 'React-app',
        description: 'A React application.',
        repoUrl: 'https://github.com/13iloo/React-app'
    },
    {
        id: 16,
        category: 'web',
        title: 'ReactMenus-20-28Fullstack-20Project-29',
        description: 'A fullstack React project.',
        repoUrl: 'https://github.com/13iloo/ReactMenus-20-28Fullstack-20Project-29'
    },
    {
        id: 17,
        category: 'web',
        title: 'ReactNotes',
        description: 'A React notes application.',
        repoUrl: 'https://github.com/13iloo/ReactNotes'
    },
    {
        id: 18,
        category: 'docker',
        title: 'salute',
        description: 'A web project.',
        repoUrl: 'https://github.com/13iloo/salute'
    },
    {
        id: 19,
        category: 'bigData',
        title: 'stationsaca',
        description: 'A web project.',
        repoUrl: 'https://github.com/13iloo/stationsaca'
    },
    {
        id: 20,
        category: 'web',
        title: 'Webnotes',
        description: 'A web notes project.',
        repoUrl: 'https://github.com/13iloo/Webnotes'
    },
    {
        id: 21,
        category: 'branding',
        title: 'Brand Identity',
        description: 'A branding project concept.',
        repoUrl: 'https://github.com/13iloo/brand-identity'
    },
    {
        id: 22,
        category: 'web',
        title: 'PythonRevision',
        description: 'Python programming revision and practice.',
        repoUrl: 'https://github.com/13iloo/PythonRevision'
    },
    {
        id: 23,
        category: 'web',
        title: 'MyPortfolio',
        description: 'Personal portfolio website (LumiTech).',
        repoUrl: 'https://github.com/13iloo/MyPortfolio'
    }
];

const Portfolio = () => {
    const [filter, setFilter] = useState('all');
    const itemsRef = useRef([]);

    const filteredItems = filter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === filter);

    useEffect(() => {
        // Animate items when filter changes
        gsap.fromTo(itemsRef.current, 
            { opacity: 0, scale: 0.8 }, 
            { opacity: 1, scale: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out' }
        );
    }, [filter]);

    // Reset refs array on render
    itemsRef.current = itemsRef.current.slice(0, filteredItems.length);

    return (
        <section id="portfolio" className="py-5 ">
            <Container>
                <h2 className="text-center mb-5">Portfolio</h2>
                <div className="text-center mb-4">
                    <Button variant="outline-primary" className={`mx-2 rounded-pill ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</Button>
                    <Button variant="outline-primary" className={`mx-2 rounded-pill ${filter === 'web' ? 'active' : ''}`} onClick={() => setFilter('web')}>Web</Button>
                    <Button variant="outline-primary" className={`mx-2 rounded-pill ${filter === 'mobile' ? 'active' : ''}`} onClick={() => setFilter('mobile')}>Mobile</Button>
                    <Button variant="outline-primary" className={`mx-2 rounded-pill ${filter === 'IoT' ? 'active' : ''}`} onClick={() => setFilter('IoT')}>IoT</Button>
                    <Button variant="outline-primary" className={`mx-2 rounded-pill ${filter === 'bigData' ? 'active' : ''}`} onClick={() => setFilter('bigData')}>Big Data</Button>
                    <Button variant="outline-primary" className={`mx-2 rounded-pill ${filter === 'docker' ? 'active' : ''}`} onClick={() => setFilter('docker')}>Docker</Button>
                    <Button variant="outline-primary" className={`mx-2 rounded-pill ${filter === 'game' ? 'active' : ''}`} onClick={() => setFilter('game')}>Game</Button>
                    <Button variant="outline-primary" className={`mx-2 rounded-pill ${filter === 'branding' ? 'active' : ''}`} onClick={() => setFilter('branding')}>Branding</Button>
                </div>
                <Row className="g-4">
                    {filteredItems.map((item, index) => (
                        <Col md={6} lg={4} key={item.id}>
                            <div ref={el => itemsRef.current[index] = el}>
                                <a 
                                    href={item.repoUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="portfolio-link"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Card className="portfolio-item h-100 border-0 shadow-sm">
                                        <div className="portfolio-content">
                                            <Card.Title className="text-white fw-bold mb-2">{item.title}</Card.Title>
                                            <Card.Text className="text-white-50">{item.description}</Card.Text>
                                            <div className="repo-badge mt-3">
                                                <span className="badge">View Repository →</span>
                                            </div>
                                        </div>
                                    </Card>
                                </a>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Portfolio;