import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

function UserProfiles({ onGoHome }) {
  const [userProfiles, setUserProfiles] = useLocalStorage('userProfiles', []);

  const deleteProfile = (index) => {
    const newProfiles = userProfiles.filter((_, i) => i !== index);
    setUserProfiles(newProfiles);
  };

  return (
    <section id="manage-section">
      <h2>Мої анкети</h2>
      <button onClick={onGoHome}>На головну</button>
      <div className="user-profiles-container">
        {userProfiles.length === 0 ? (
          <p>Ви ще не створили жодної анкети</p>
        ) : (
          userProfiles.map((profile, index) => (
            <div key={profile.id || index}>
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
              <button onClick={() => deleteProfile(index)}>Видалити</button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default UserProfiles;