import React, { useState } from 'react';
import Header from './header';
import AboutMe from './aboutme';
import Portfolio from './portfolio';
import Contact from './contact';
import Resume from './resume';
import Footer from './footer';
// import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('AboutMe');

  const renderSection = () => {
    switch (currentSection) {
      case 'AboutMe':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div>
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
}

export default App;
