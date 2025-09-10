import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './styles/App.scss';

function App() {
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setIsVisible(true);
  }, 100);

  return () => clearTimeout(timer);
}, []);

return (
  <div className={`app ${isVisible ? 'fade-in' : ''}`}>
    <div className="resume-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  </div>
);
}

export default App;