import React from 'react';

function Navigation({ onStartSwiping, onShowSection }) {
  return (
    <nav>
      <div className="main-content">
        <div className="nav-img">
          <img src="/Frame 1.png" alt="KitiTinder" />
        </div>
        <div className="nav-buttons">
          <button onClick={onStartSwiping}>Старт</button>
          <button onClick={() => onShowSection('add')}>Додати кота</button>
          <button onClick={() => onShowSection('liked')}>Сподобані</button>
          <button onClick={() => onShowSection('manage')}>Мої анкети</button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;