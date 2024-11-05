import React from 'react';
import Header from './Header/Header';
import ModelViewer from './ModelViewer';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <ModelViewer />
            <HeroSection />
            <AboutSection />
            <Footer />
        </div>
    );
}

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="title-box">
                <h1>Welcome to My Portfolio</h1>
            </div>
        </div>
    );
}

const AboutSection = () => {
    return (
        <div className="about-section">
            <h2>About Me</h2>
            <p>Brief description about yourself. You can include your skills, experiences, and what you're passionate about.</p>
        </div>
    );
}

const Footer = () => {
    return (
        <div className="footer">
            <p>© 2024 Your Name. All rights reserved.</p>
            <p>
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
        </div>
    );
}

export default App;