import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function MatchScreen({ cat, onChat }) {
  return (
    <div className="home">
      <h2 className="match-h"><FontAwesomeIcon icon={faFire} /> MATCH <FontAwesomeIcon icon={faFire} /></h2>
      <img src={cat.image} alt="" className="match-img" />
      <p className="match-text">Ти і {cat.name} сподобались одне одному <FontAwesomeIcon icon={faHeart} /></p>
      <button className="cta" onClick={onChat}>
        Чат з {cat.name}
      </button>
    </div>
  );
}

export default MatchScreen;
