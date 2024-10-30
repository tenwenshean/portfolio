import React, { useEffect } from 'react';
import './Header.css';
import ThemeToggle from '../ThemeToggle';


function Header() {

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 50) { // Adjust this value as needed
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header className="header">
            <h1>Ten Wen Shean</h1>
            <div className="header-right">
                <nav>
                    <a href="#about">About Me</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
                <ThemeToggle />
            </div>
        </header>
    );
}

export default Header;