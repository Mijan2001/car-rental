import React from 'react';
import { useState, useEffect } from 'react';
import { MdDarkMode } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const storedTheme = localStorage.getItem('darkMode');
        return storedTheme === 'true'; // Parse stored theme as boolean
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark'); // Add dark mode class to root
        } else {
            document.documentElement.classList.remove('dark'); // Remove dark mode class
        }
        localStorage.setItem('darkMode', darkMode); // Store user's preference
    }, [darkMode]);

    return (
        <div className="flex items-center justify-center space-x-4">
            {darkMode === true ? (
                <button
                    onClick={() => setDarkMode(false)}
                    className={`p-2 rounded-full ${
                        !darkMode ? 'bg-yellow-500' : 'bg-gray-300'
                    } focus:outline-none`}
                >
                    <MdLightMode className="w-6 h-6 text-white" />
                </button>
            ) : (
                <button
                    onClick={() => setDarkMode(true)}
                    className={`p-2 rounded-full ${
                        darkMode ? 'bg-gray-900' : 'bg-gray-300'
                    } focus:outline-none`}
                >
                    <MdDarkMode className="w-6 h-6 text-white" />
                </button>
            )}
        </div>
    );
};

export default DarkMode;
