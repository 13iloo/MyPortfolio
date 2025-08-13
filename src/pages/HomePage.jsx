import React from 'react';
import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import Portfolio from '../components/Portfolio.jsx';
import About from '../components/About.jsx';
import CallToAction from '../components/CallToAction.jsx';
import Footer from '../components/Footer.jsx';

const HomePage = () => {
    return (
        <>
            <Header />
            <Hero />
            <Services />
            <Portfolio />
            <About />
            <CallToAction />
            <Footer />
        </>
    );
};

export default HomePage;