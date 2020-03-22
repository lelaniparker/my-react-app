import React from 'react';

import './Toolbar.css';
import HamburgerButton from '../SideNav/HamburgerButton';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <HamburgerButton />
            </div>
            <div className="toolbar_logo"><a href="/" title="Go to Home page">LOGO</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="about.html" title="Go to About page">About</a></li>
                    <li><a href="projects.html" title="Go to Projects page">Projects</a></li>
                    <li><a href="contact.html" title="Go to Contact page">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

);

export default toolbar;