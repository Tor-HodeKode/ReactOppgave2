import React from "react";
import { Link } from "react-router-dom";
import "./FP.css";

const FP = () => {
  return (
    <div className="fp-container">
      <h1>Veljkømminj To the kaos</h1>

      {/* Seksjon for e-postform */}
      <div className="email-form">
        {/* Venstre-bilde som navigasjonsknapp */}
        <Link to="/cookie-clicker" className="triangle-link">
          <div className="left-triangle"></div>
        </Link>

        {/* Høyre-bilde som navigasjonsknapp */}
        <Link to="/cat-npi" className="triangle-link">
          <div className="right-triangle"></div>
        </Link>

        {/* Nederste bilde som navigasjonsknapp */}
        <Link to="/game3" className="triangle-link">
          <div className="bottom-triangle"></div>
        </Link>
      </div>
    </div>
  );
};

export default FP;

