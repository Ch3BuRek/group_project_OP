import React, { useState } from 'react';

function ProfileCard({ profile, onLike, onDislike }) {
  const [isSwiping, setIsSwiping] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState('');

  const handleLike = () => {
    setIsSwiping(true);
    setSwipeDirection('right');
    setTimeout(() => {
      onLike();
      setIsSwiping(false);
      setSwipeDirection('');
    }, 300);
  };

  const handleDislike = () => {
    setIsSwiping(true);
    setSwipeDirection('left');
    setTimeout(() => {
      onDislike();
      setIsSwiping(false);
      setSwipeDirection('');
    }, 300);
  };

  const cardClass = `profile-card ${isSwiping ? `swipe-${swipeDirection}` : ''}`;

  return (
    <div className={cardClass}>
      <img 
        className="profile-image" 
        src={profile.image} 
        alt={profile.name}
        onError={(e) => {
          e.target.src = 'https://placekitten.com/400/400';
        }}
      />
      <h2 className="profile-name">{profile.name}</h2>
      <p className="profile-age">{profile.age}</p>
      <p className="profile-description">{profile.description}</p>
      <div className="card-buttons">
        <button className="dislike-btn" onClick={handleDislike}>👎</button>
        <button className="like-btn" onClick={handleLike}>❤️</button>
      </div>
    </div>
  );
}

export default ProfileCard;