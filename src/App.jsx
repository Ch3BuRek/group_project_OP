import React, { useState } from 'react';
import Home from './pages/Home';
import Swipe from './pages/Swipe';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {currentPage === 'home' && <Home navigateTo={navigateTo} />}
      {currentPage === 'swipe' && <Swipe navigateTo={navigateTo} />}
    </div>
  );
}

export default App;