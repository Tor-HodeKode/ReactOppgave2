import { useState, useEffect } from "react";
import cookieImage from "/Cookie.png";
import "./App.css";

export default function App() {
  const [cookies, setCookies] = useState([]); // State for kjeks
  const [score, setScore] = useState(0); // State for score
  const [gameStarted, setGameStarted] = useState(false); // State for om spillet er startet

  // Funksjon for å legge til en ny kjeks
  const addCookie = () => {
    const newCookie = {
      id: Date.now(),
      left: Math.random() * (window.innerWidth - 50), // Tilfeldig horisontal posisjon
      top: -50, // Starter utenfor toppen av skjermen
    };
    setCookies((prevCookies) => [...prevCookies, newCookie]);
  };

  // Funksjon for å starte spillet
  const startGame = () => {
    setGameStarted(true); // Start spillet
  };

  // Funksjon for å fjerne en kjeks og oppdatere score
  const handleCookieClick = (id) => {
    setCookies((prevCookies) => prevCookies.filter((cookie) => cookie.id !== id));
    setScore((prevScore) => prevScore + 1);
  };

  // Oppdaterer posisjon for kjeksene
  useEffect(() => {
    if (gameStarted) {
      const fallInterval = setInterval(() => {
        setCookies((prevCookies) =>
          prevCookies
            .map((cookie) => ({
              ...cookie,
              top: cookie.top + 5, // Faller 5px per oppdatering
            }))
            .filter((cookie) => cookie.top < window.innerHeight) // Fjerner kjeks som er utenfor skjermen
        );
      }, 50);

      const spawnInterval = setInterval(() => {
        addCookie(); // Spawner nye kjeks automatisk
      }, 1000); // Spawner en ny kjeks hvert sekund

      return () => {
        clearInterval(fallInterval);
        clearInterval(spawnInterval);
      };
    }
  }, [gameStarted]);

  return (
    <div>
      {/* Banner */}
      <div className="banner">
        <h2>Kjækse Klikkær!</h2>
        <p>Klikk på kjæksån såm dætt ne!</p>
      </div>

      {/* Scoreboard */}
      <div id="cookie-counter">Score: {score}</div>

      {/* Startknapp */}
      {!gameStarted && (
        <button className="start-button" onClick={startGame}>
          Play
        </button>
      )}

      {/* Render alle kjeks */}
      <div className="cookies-container">
        {cookies.map((cookie) => (
          <img
            key={cookie.id}
            src={cookieImage}
            alt="Cookie"
            className="cookie"
            style={{
              top: `${cookie.top}px`,
              left: `${cookie.left}px`,
            }}
            onClick={() => handleCookieClick(cookie.id)}
          />
        ))}
      </div>
    </div>
  );
}

