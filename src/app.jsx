import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './app.css';
import './home/home.css';
import './navigation_bar/abouth/abouth.css';
import './navigation_bar/blog/blog.css';
import './navigation_bar/contact/contact.css';
import './navigation_bar/download/download.css';
import './navigation_bar/log_in/login.css';
import './navigation_bar/pages/page.css';
import './navigation_bar/pricing/Pricing.css'
import Home from './home/home';
import Pricing from './navigation_bar/pricing/Pricing';
import Abouth from './navigation_bar/abouth/Abouth';
import Pages from './navigation_bar/pages/Pages';
import Blog from './navigation_bar/blog/Blog';
import Contact from './navigation_bar/contact/Contact';
import Log_in from './navigation_bar/log_in/Log_in';

export default function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Pricing" element={<Pricing />} />
                <Route path="/Abouth" element={<Abouth />} />
                <Route path="/Pages" element={<Pages />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Log_in" element={<Log_in />} />
            </Routes>
        </Router>
    );
}

const NavBar = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    return (
        <header className="header">
            <div className="header_content">
                <div className="logo">
                    <img src="https://xtratheme.com/elementor/app-2/wp-content/uploads/sites/107/2023/04/xtra-app-logo.png" alt="Logo" />
                </div>
                <nav>
                    <Link to="/" className={activeLink === '/' ? 'active' : ''}>Home</Link>
                    <Link to="/Pricing" className={activeLink === '/Pricing' ? 'active' : ''}>Pricing</Link>
                    <Link to="/Abouth" className={activeLink === '/Abouth' ? 'active' : ''}>About</Link>
                    <Link to="/Pages" className={activeLink === '/Pages' ? 'active' : ''}>Pages</Link>
                    <Link to="/Blog" className={activeLink === '/Blog' ? 'active' : ''}>Blog</Link>
                    <Link to="/Contact" className={activeLink === '/Contact' ? 'active' : ''}>Contact</Link>
                </nav>
                <div className="register">
                    <Link to="/Log_in"><button className="btn-1">Log in</button></Link>
                    <Link to="/Download"><button className="btn-2">Download</button></Link>
                </div>
            </div>
        </header>
    );
}


