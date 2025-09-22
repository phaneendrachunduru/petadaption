// PetList.jsx
import React from 'react';

function PetList({ pets }) {
  return (
    <div className="pet-cards">
      {pets.map((pet, index) => (
        <div key={index} className="pet-card">
          <img src={pet.image} alt={pet.name} className="pet-image" />
          <h3 className="pet-name">{pet.name}</h3>
          <p className="pet-description">{pet.description}</p>
          <button className="adopt-button">Adopt</button>
        </div>
      ))}
    </div>
  );
}

export default PetList;
