import React from 'react';
import './Header.css';

function Header({ currentSection, setCurrentSection }) {
  return (
    <header>
      <h1>Tabitha Ledford</h1>
      <nav>
        <ul>
          <li className={currentSection === 'AboutMe' ? 'active' : ''} onClick={() => setCurrentSection('AboutMe')}>About Me</li>
          <li className={currentSection === 'Portfolio' ? 'active' : ''} onClick={() => setCurrentSection('Portfolio')}>Portfolio</li>
          <li className={currentSection === 'Contact' ? 'active' : ''} onClick={() => setCurrentSection('Contact')}>Contact</li>
          <li className={currentSection === 'Resume' ? 'active' : ''} onClick={() => setCurrentSection('Resume')}>Resume</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
