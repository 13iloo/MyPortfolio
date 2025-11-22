import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Visuals = () => {
    const videos = [
        {
            id: 1,
            title: 'InSite Demo - Short',
            url: 'https://www.youtube.com/embed/Xy5ngQG9u98',
            description: 'Quick demonstration of InSite features'
        },
        {
            id: 2,
            title: 'InSite Full Demo',
            url: 'https://www.youtube.com/embed/a4vg71irkdg',
            description: 'Complete walkthrough of InSite application'
        }
    ];

    return (
        <section id="visuals" className="py-5">
            <Container>
                <h2 className="text-center mb-5">Visuals</h2>
                <p className="text-center mb-5 text-white-50">
                    Watch demonstrations of my projects in action
                </p>
                <Row className="g-4">
                    {videos.map((video) => (
                        <Col md={6} key={video.id}>
                            <div className="video-card">
                                <div className="video-container">
                                    <iframe
                                        src={video.url}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="video-info p-3">
                                    <h5 className="text-white mb-2">{video.title}</h5>
                                    <p className="text-white-50 mb-0">{video.description}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Visuals;
