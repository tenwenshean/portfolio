import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <button
            onClick={toggleTheme}
            style={{
                padding: '8px 16px',
                cursor: 'pointer',
                backgroundColor: theme === 'dark' ? '#fff' : '#282c34',
                color: theme === 'dark' ? '#282c34' : '#fff',
                border: 'none',
                borderRadius: '4px',
                marginLeft: '20px'
            }}
        >
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
    );
};

export default ThemeToggle;