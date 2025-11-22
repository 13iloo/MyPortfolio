import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Visuals = () => {
    const videos = [
        {
            id: 1,
            title: 'Trutn or Dare - Short',
            url: 'https://www.youtube.com/embed/Xy5ngQG9u98',
            description: 'Truth  or Dare game developed using typescript and react,capacitor and nodejs. App is released on playstore'
        },
        {
            id: 2,
            title: 'Borderless Game Jam Slice',
            url: 'https://www.youtube.com/embed/a4vg71irkdg',
            description: 'Complete walkthrough of UIs made for the game jam project. Made on Unreal Engine'
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
                                    <h6 className="text-white mb-2">{video.title}</h6>
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
