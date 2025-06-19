import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Summary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cards = location.state?.recommendations || [];

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Your Recommended Cards</h2>
      {cards.length === 0 ? (
        <p>No cards matched. Try again.</p>
      ) : (
        cards.map((card, index) => (
          <div key={index} style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0" }}>
            <h3>{card.name} ({card.issuer})</h3>
            <p><strong>Perks:</strong> {card.perks.join(", ")}</p>
            <p>{card.reason}</p>
            <p>{card.estimatedReward}</p>
            <a href={card.applyLink} target="_blank" rel="noreferrer">Apply Now</a>
          </div>
        ))
      )}
      <br />
      <button onClick={() => navigate("/")}>Restart</button>
    </div>
  );
};

export default Summary;
