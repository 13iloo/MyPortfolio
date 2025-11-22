import React from 'react';
import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import Portfolio from '../components/Portfolio.jsx';
import Visuals from '../components/Visuals.jsx';
import About from '../components/About.jsx';
import CallToAction from '../components/CallToAction.jsx';
import Footer from '../components/Footer.jsx';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Services />
            <Portfolio />
            <Visuals />
            <About />
            <CallToAction />
            <Footer />
        </div>
    );
};

export default HomePage;