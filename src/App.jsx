import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero/Hero';

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Easing function
            once: true // Whether animation should happen only once - while scrolling down
        });
    }, []);

    return (
        <>
            <div className="dark:bg-gray-900 dark:text-white">
                <Navbar />
                <Hero />
            </div>
        </>
    );
}

export default App;
