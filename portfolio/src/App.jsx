import React from 'react';
import Header from './Header/Header';
import ModelViewer from './ModelViewer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <ModelViewer/>
                <h1 className={"title-box"}>Welcome to my Portfolio</h1>
                <p className={"paragraph-box"}>Hello my name is Ten Wen Shean and I aspire to be a web designer </p>
                <div className={"about-me"}>
                    <h2> About me</h2>
                </div>
            </main>
        </div>

    );
}

export default App;