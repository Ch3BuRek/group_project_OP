import React, { useState, useEffect } from 'react';
import ProfileCard from '../components/ProfileCard';
import { defaultProfiles } from '../data/profiles';
import { useLocalStorage } from '../hooks/useLocalStorage';

function Swipe({ navigateTo }) {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [profiles, setProfiles] = useState([]);
  const [likedProfiles, setLikedProfiles] = useLocalStorage('likedProfiles', []);
  const [userProfiles] = useLocalStorage('userProfiles', []);

  useEffect(() => {
    // Об'єднуємо стандартні профілі з користувацькими
    setProfiles([...defaultProfiles, ...userProfiles]);
  }, [userProfiles]);

  const likeProfile = () => {
    const currentProfile = profiles[currentProfileIndex];
    
    if (!likedProfiles.some(profile => 
      profile.name === currentProfile.name && profile.age === currentProfile.age
    )) {
      setLikedProfiles([...likedProfiles, currentProfile]);
    }
    
    nextProfile();
  };

  const dislikeProfile = () => {
    nextProfile();
  };

  const nextProfile = () => {
    setCurrentProfileIndex(prev => prev + 1);
  };

  const currentProfile = profiles[currentProfileIndex];

  return (
    <div className="content-wrapper">
      <header>
        <h1>Перегляд анкет</h1>
        <button onClick={() => navigateTo('home')}>На головну</button>
      </header>

      <div className="profile-container">
        {currentProfile ? (
          <ProfileCard 
            profile={currentProfile}
            onLike={likeProfile}
            onDislike={dislikeProfile}
          />
        ) : (
          <div className="profile-card">
            <p>{profiles.length === 0 ? 'Немає анкет для перегляду' : 'Це всі анкети!'}</p>
          </div>
        )}
      </div>

      <div className="footer-div">
        <footer>
          <p>KitiTinder 2025</p>
        </footer>
      </div>
    </div>
  );
}

export default Swipe;