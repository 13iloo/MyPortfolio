import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Offcanvas, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/header.css';
import logoWebp from '../assets/images/BeelooW.png';



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
            <div className={`Lumi-tech-brand fw-bold fs-5 ${isSticky ? 'sticky-brand' : ''}`}>
                <img src={logoWebp} alt="Lumi Tech Logo" className="Lumi-logo" />
            </div>
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
                            <NavDropdown title="Pages" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Page 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Page 2</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">Something else</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#portfolio" onClick={handleCloseOffcanvas} className={activeLink === 'portfolio' ? 'active' : ''}>Portfolio</Nav.Link>
                            <Nav.Link href="#about" onClick={handleCloseOffcanvas} className={activeLink === 'about' ? 'active' : ''}>About</Nav.Link>
                            <Nav.Link href="#testimonials" onClick={handleCloseOffcanvas} className={activeLink === 'testimonials' ? 'active' : ''}>Testimonials</Nav.Link>
                            <Nav.Link href="#team" onClick={handleCloseOffcanvas} className={activeLink === 'team' ? 'active' : ''}>Team</Nav.Link>
                            <Nav.Link href="#pricing" onClick={handleCloseOffcanvas}>Pricing</Nav.Link>
                            <Nav.Link href="#blog" onClick={handleCloseOffcanvas}>Blog</Nav.Link>
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