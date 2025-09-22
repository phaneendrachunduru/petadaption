import React from 'react';

function ShelterCard({ shelter }) {
  return (
    <div className="shelter-card">
      <img src={shelter.image} alt={shelter.name} className="shelter-image" /> {/* Added Image */}
      <h3 className="shelter-name">{shelter.name}</h3>
      <p className="shelter-location">{shelter.location}</p>
      <p className="shelter-description">{shelter.description}</p>
      <button className="visit-shelter-button">Visit Shelter</button>
    </div>
  );
}

export default ShelterCard;
