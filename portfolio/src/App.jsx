import React from 'react';
import Header from './Header/Header';
import ModelViewer from './ModelViewer';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <ModelViewer />
            <MainContent />
            <Footer />
        </div>

    );
}

const MainContent = () => {
    return (
        <div className="title-box">
            <h1>Welcome to my Portfolio</h1>
        </div>
    );


}

const Footer = () => {
    return (
        <div className="footer">
            <p>© 2024 Ten Wen Shean. All rights reserved.</p>
        </div>
    );
}

export default App;