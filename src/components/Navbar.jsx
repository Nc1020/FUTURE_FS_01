import './Navbar.css';
import { useEffect, useRef, useState } from 'react';

export default function Navbar({ isLightMode, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('home');

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = ['home', 'about', 'skills', 'projects', 'internships', 'contact'];
            const scrollPos = window.scrollY + 100;
            for (let id of sections) {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
                    setActive(id);
                }
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNav = (id) => {
        setMenuOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const links = ['home', 'about', 'skills', 'projects', 'internships', 'contact'];

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
            <div className="container nav-container">
                <a className="logo" onClick={() => handleNav('home')} style={{ cursor: 'pointer' }}>
                    Nensi<span>.</span>
                </a>
                <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
                    {links.map((link) => (
                        <li key={link}>
                            <a
                                className={active === link ? 'active' : ''}
                                onClick={() => handleNav(link)}
                                style={{ cursor: 'pointer' }}
                            >
                                {link.charAt(0).toUpperCase() + link.slice(1)}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button className="theme-toggle" onClick={toggleTheme}>
                            {isLightMode ? '🌙 Dark' : '☀️ Light'}
                        </button>
                    </li>
                    <li>
                        <a onClick={() => handleNav('contact')} className="btn-primary" style={{ cursor: 'pointer' }}>
                            <span>Hire Me</span>
                        </a>
                    </li>
                </ul>
                <div
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span
                        className="bar"
                        style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}}
                    />
                    <span
                        className="bar"
                        style={menuOpen ? { opacity: 0 } : {}}
                    />
                    <span
                        className="bar"
                        style={menuOpen ? { transform: 'rotate(-45deg) translate(7px, -6px)' } : {}}
                    />
                </div>
            </div>
        </nav>
    );
}
