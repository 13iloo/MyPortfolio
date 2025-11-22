import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Offcanvas, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/header.css';
import logo from '../assets/images/beeloo.png';



const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }

        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 70; // Adjust for fixed header height
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                setActiveLink(sectionId);
            }
        });
    };

    useEffect(() => {
        handleScroll(); // Call on mount to set initial sticky state
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleCloseOffcanvas = () => setShowOffcanvas(false);
    const handleShowOffcanvas = () => setShowOffcanvas(true);

    return (
        <div className='header'>
            <Navbar expand="lg" className={`py-3 px-0 ${isSticky ? 'navbar-sticky' : ''}`}>
            <a href="#home" className="navbar-brand">
            <div className={`Lumi-tech-brand fw-bold fs-5 ${isSticky ? 'sticky-brand' : ''}`}>
                <img src={logo} alt="Lumi Tech Logo" className="Lumi-logo" />
            </div>
            </a>
            <Container className="px-0 ">
                
                <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShowOffcanvas}>
                    <FontAwesomeIcon icon={faBars} />
                </Navbar.Toggle>
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    show={showOffcanvas}
                    onHide={handleCloseOffcanvas}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">CraftoReplica</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="mx-auto">
                            <Nav.Link href="#home" onClick={handleCloseOffcanvas} className={activeLink === 'home' ? 'active' : ''}>Home</Nav.Link>
                            <Nav.Link href="#services" onClick={handleCloseOffcanvas} className={activeLink === 'services' ? 'active' : ''}>Services</Nav.Link>
                            <Nav.Link href="#portfolio" onClick={handleCloseOffcanvas} className={activeLink === 'portfolio' ? 'active' : ''}>Portfolio</Nav.Link>
                            <Nav.Link href="#visuals" onClick={handleCloseOffcanvas} className={activeLink === 'visuals' ? 'active' : ''}>Visuals</Nav.Link>
                            <Nav.Link href="#about" onClick={handleCloseOffcanvas} className={activeLink === 'about' ? 'active' : ''}>About</Nav.Link>
                            <Nav.Link href="#contact" onClick={handleCloseOffcanvas}>Contact</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;