import React, { useState, useEffect } from "react";

const CatNPI = () => {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [catImage, setCatImage] = useState("");

  // Fetch cat facts
  const fetchCatFacts = async () => {
    console.log("Fetching new cat facts...");
    setLoading(true);
    try {
      const response = await fetch(`https://catfact.ninja/facts?limit=5&rand=${Math.random()}`);
      const data = await response.json();

      // Fjern duplikater ved å sammenligne med tidligere fakta
      const uniqueFacts = data.data.filter(fact => !facts.some(existing => existing.fact === fact.fact));

      console.log("New unique facts received:", uniqueFacts);
      setFacts(uniqueFacts.length > 0 ? uniqueFacts : data.data); // Bruker ny liste hvis mulig
      setLoading(false);
    } catch (error) {
      setError("Something went wrong while fetching cat facts.");
      setLoading(false);
    }
  };

  // Fetch a random cat image
  const fetchCatImage = async () => {
    console.log("Fetching new cat image...");
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await response.json();
      console.log("New image URL:", data[0].url);
      setCatImage(data[0].url);
    } catch (error) {
      console.error("Error fetching cat image:", error);
    }
  };

  // Fetch both facts and image when component mounts
  useEffect(() => {
    fetchCatFacts();
    fetchCatImage();
  }, []);

  // Function to refresh both facts and image
  const handleRefresh = () => {
    fetchCatFacts();
    fetchCatImage();
  };

  return (
    <div className="cat-npi-container">
      <h1>Cat Facts!</h1>

      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      <div className="cat-facts">
        {facts.map((fact, index) => (
          <div key={index} className="cat-fact">
            <p>{fact.fact}</p>
          </div>
        ))}
      </div>

      <div className="cat-image-container">
        <img src={catImage} alt="Random Cat" className="cat-image" />
      </div>

      {/* Button to refresh cat facts and image */}
      <button onClick={handleRefresh}>
        Get New Cat Facts
      </button>
    </div>
  );
};

export default CatNPI;

