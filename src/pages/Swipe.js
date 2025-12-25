import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartCrack } from '@fortawesome/free-solid-svg-icons';

function Swipe({ cats, index, setIndex, onLike }) {
  const cat = cats[index];

  if (cats.length === 0) return null; 

  if (!cat) {
    return (
      <div className="empty-state">
        <h2>Коти закінчились :(</h2>
        <button className="cta" onClick={() => setIndex(0)}>
          ПОЧАТИ СПОЧАТКУ
        </button>
      </div>
    );
  }

  return (
    <div className="swipe">
      <div className="card">
        <img src={cat.image} alt={cat.name} />
        <div className="card-info">
          <h3>{cat.name}, {cat.age}</h3>
          <p>{cat.breed} • {cat.city}</p>
          <p className="description">{cat.description}</p>
        </div>
      </div>

      <div className="actions">
        <button onClick={() => setIndex(index + 1)}>
          <FontAwesomeIcon icon={faHeartCrack} />
        </button>
        <button onClick={() => onLike(cat)}>
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </div>
  );
}


export default Swipe;

