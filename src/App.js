import { useState, useEffect } from "react";
import { checkMatch } from "./logic/matchLogic";

// Сторінки
import Home from "./pages/Home";
import Swipe from "./pages/Swipe";
import Liked from "./pages/Liked";
import MatchScreen from "./pages/MatchScreen";
import Chat from "./pages/Chat";

// Іконки
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faHeart } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [page, setPage] = useState("home");
  const [cats, setCats] = useState([]);
  const [index, setIndex] = useState(0);
  const [liked, setLiked] = useState([]);
  const [matchCat, setMatchCat] = useState(null);
  const [loading, setLoading] = useState(true);

  //загрузка при старті
  useEffect(() => {
    const fetchCats = fetch('http://https://group-project-op-backend-1.onrender.com//api/cats').then(res => res.json());
    const fetchLiked = fetch('http://https://group-project-op-backend-1.onrender.com//api/liked').then(res => res.json());

    Promise.all([fetchCats, fetchLiked])
      .then(([catsData, likedData]) => {
        setCats(catsData);
        setLiked(likedData);
        setLoading(false);
      })
      .catch(err => {
        console.error("Помилка завантаження:", err);
        setLoading(false);
      });
  }, []);

  const handleLike = (cat) => {
    const isAlreadyLiked = liked.find(c => c.id === cat.id);

    if (!isAlreadyLiked) {
      fetch('http://https://group-project-op-backend-1.onrender.com//api/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cat: cat })
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setLiked(prev => [...prev, cat]);
        }
      });
    }

    if (checkMatch()) {
      setMatchCat(cat);
      setPage("match");
    } else {
      setIndex(prev => prev + 1);
    }
  };

  if (loading) return <div className="app"><h2>Завантаження...</h2></div>;

  return (
    <div className="app">
      <header className="header">
        <div className="logo" onClick={() => setPage("home")} style={{cursor: 'pointer'}}>
          <FontAwesomeIcon icon={faPaw} /> KitiTinder
        </div>
        <nav className="nav">
          <button onClick={() => setPage("home")}>Головна</button>
          <button onClick={() => setPage("swipe")}>Свайп</button>
          <button onClick={() => setPage("liked")}>
            <FontAwesomeIcon icon={faHeart} /> {liked.length > 0 && liked.length}
          </button>
        </nav>
      </header>

      <main>
        {page === "home" && <Home go={setPage} />}
        
        {page === "swipe" && (
          <Swipe 
            cats={cats} 
            index={index} 
            setIndex={setIndex} 
            onLike={handleLike} 
          />
        )}

        {page === "liked" && <Liked cats={liked} />}

        {page === "match" && (
          <MatchScreen 
            cat={matchCat} 
            onChat={() => setPage("chat")} 
          />
        )}

        {page === "chat" && <Chat cat={matchCat} />}
      </main>

      <footer>© 2025 KitiTinder</footer>
    </div>
  );
}


export default App;

