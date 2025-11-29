import React, { useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import AddProfile from '../components/AddProfile';
import LikedProfiles from '../components/LikedProfiles';
import UserProfiles from '../components/UserProfiles';

function Home({ navigateTo }) {
  const [activeSection, setActiveSection] = useState(null);

  const showSection = (sectionName) => {
    setActiveSection(sectionName);
  };

  const goHome = () => {
    setActiveSection(null);
  };

  return (
    <div className="content-wrapper">
      <Header />
      
      {!activeSection && (
        <Navigation 
          onStartSwiping={() => navigateTo('swipe')}
          onShowSection={showSection}
        />
      )}

      <main className="main-content">
        {activeSection === 'add' && (
          <AddProfile onGoHome={goHome} />
        )}
        
        {activeSection === 'liked' && (
          <LikedProfiles onGoHome={goHome} />
        )}
        
        {activeSection === 'manage' && (
          <UserProfiles onGoHome={goHome} />
        )}
      </main>

      <div className="footer-div">
        <footer>
          <p>KitiTinder 2025</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;