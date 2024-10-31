// Header.jsx
import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [theme, setTheme] = useState(() => {
        // Get saved theme from localStorage or default to 'dark'
        return localStorage.getItem('theme') || 'dark';
    });

    useEffect(() => {
        // Handle scroll
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Apply theme to document
        document.documentElement.setAttribute('data-theme', theme);
        // Save theme to localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <h1>Your Logo</h1>
            <div className="header-right">
                <nav>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                    <button
                        onClick={toggleTheme}
                        className="theme-toggle"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default Header;