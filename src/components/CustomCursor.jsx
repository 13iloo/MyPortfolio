import React, { useEffect, useRef } from 'react';
import '../assets/css/style.css'; // Ensure styles are available

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        
        const moveCursor = (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        };

        const handleHover = () => {
            cursor.classList.add('hovered');
        };

        const handleLeave = () => {
            cursor.classList.remove('hovered');
        };

        window.addEventListener('mousemove', moveCursor);

        const links = document.querySelectorAll('a, button, .service-card, .portfolio-item');
        links.forEach(link => {
            link.addEventListener('mouseenter', handleHover);
            link.addEventListener('mouseleave', handleLeave);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            links.forEach(link => {
                link.removeEventListener('mouseenter', handleHover);
                link.removeEventListener('mouseleave', handleLeave);
            });
        };
    }, []);

    return <div className="custom-cursor" ref={cursorRef}></div>;
};

export default CustomCursor;
