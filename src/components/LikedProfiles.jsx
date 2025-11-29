import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

function LikedProfiles({ onGoHome }) {
  const [likedProfiles] = useLocalStorage('likedProfiles', []);

  return (
    <section id="liked-section">
      <h2>Сподобались коти</h2>
      <button onClick={onGoHome}>На головну</button>
      <div className="liked-profiles-container">
        {likedProfiles.length === 0 ? (
          <p>Ще немає сподобаних анкет</p>
        ) : (
          likedProfiles.map((profile, index) => (
            <div key={index}>
              <img 
                src={profile.image} 
                alt={profile.name}
                onError={(e) => {
                  e.target.src = 'https://placekitten.com/400/400';
                }}
              />
              <h3>{profile.name}</h3>
              <p>Вік: {profile.age}</p>
              <p>{profile.description}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default LikedProfiles;