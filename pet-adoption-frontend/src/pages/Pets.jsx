import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Pets.css'; // Styling

import pet1 from '../assets/pet1.png';
import pet2 from '../assets/pet2.png';
import pet3 from '../assets/pet3.png';
import pet4 from '../assets/pet4.png';
import pet5 from '../assets/pet5.png';
import pet6 from '../assets/pet6.png';

const defaultPetsData = [
  { 
    name: 'Buddy', 
    image: pet1, 
    description: 'A cheerful puppy who loves to play!', 
    age: 'Puppy', 
    breed: 'Golden Retriever' 
  },
  { 
    name: 'Whiskers', 
    image: pet2, 
    description: 'Loves cuddles and cozy nap spots.', 
    age: 'Adult', 
    breed: 'Cat' 
  },
  { 
    name: 'Rex', 
    image: pet3, 
    description: 'A loyal dog looking for a forever home.', 
    age: 'Adult', 
    breed: 'German Shepherd' 
  },
  { 
    name: 'Misty', 
    image: pet4, 
    description: 'Calm, quiet, and gentle-hearted.', 
    age: 'Senior', 
    breed: 'Shih Tzu' 
  },
  { 
    name: 'Simba', 
    image: pet5, 
    description: 'Curious explorer and always alert.', 
    age: 'Puppy', 
    breed: 'Siamese' 
  },
  { 
    name: 'Luna', 
    image: pet6, 
    description: 'Loves moonlit walks and treats.', 
    age: 'Adult', 
    breed: 'Labrador' 
  },
];

function Pets() {
  const [pets, setPets] = useState(defaultPetsData);
  const [adoptedPets, setAdoptedPets] = useState([]);
  const [newPet, setNewPet] = useState({
    name: '',
    image: '',
    description: '',
    age: '',
    breed: '',
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate login state

  // Handle user login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Handle user logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Handle adoption
  const handleAdopt = (petName) => {
    setAdoptedPets([...adoptedPets, petName]);
    alert(`${petName} has been adopted!`);
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPet({ ...newPet, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle adding a new pet
  const handleAddPet = () => {
    setPets([...pets, newPet]);
    setNewPet({
      name: '',
      image: '',
      description: '',
      age: '',
      breed: '',
    });
  };

  return (
    <div className="pets-container">
      <div className="pets-header">
        <h1>Find Your Perfect Pet</h1>
        <p className="description">Explore various pets available for adoption!</p>
      </div>

      {/* Conditional rendering based on user login */}
      {isLoggedIn ? (
        <div className="add-pet-form">
          <h2>Add a New Pet</h2>
          <input
            type="text"
            placeholder="Pet Name"
            value={newPet.name}
            onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
          />
          <textarea
            placeholder="Pet Description"
            value={newPet.description}
            onChange={(e) => setNewPet({ ...newPet, description: e.target.value })}
          />
          <input
            type="text"
            placeholder="Age"
            value={newPet.age}
            onChange={(e) => setNewPet({ ...newPet, age: e.target.value })}
          />
          <input
            type="text"
            placeholder="Breed"
            value={newPet.breed}
            onChange={(e) => setNewPet({ ...newPet, breed: e.target.value })}
          />
          <input type="file" onChange={handleImageUpload} />
          {newPet.image && (
            <img
              src={newPet.image}
              alt="Uploaded pet preview"
              style={{ width: '150px', height: '150px', objectFit: 'cover', marginTop: '10px' }}
            />
          )}
          <button onClick={handleAddPet}>Add Pet</button>
        </div>
      ) : (
        <div className="login-prompt">
          <p>Please log in to add a pet or buy the pet!</p>
          <Link to="/login">
            <button>Log In</button>
          </Link>
        </div>
      )}

      <div className="pets-list">
        <h2>Available Pets</h2>
        <div className="pet-cards">
          {pets.map((pet, index) => (
            <div key={index} className="pet-card">
              <div className="pet-symbol">❤️</div> {/* Add a symbol at the top corner */}
              <img className="pet-image" src={pet.image} alt={pet.name} />
              <div className="pet-name">{pet.name}</div>
              <div className="pet-description">{pet.description}</div>
              <div className="pet-details">
                <p>Age: {pet.age}</p>
                <p>Breed: {pet.breed}</p>
              </div>
              <button 
                className="adopt-button" 
                onClick={() => handleAdopt(pet.name)}
                disabled={adoptedPets.includes(pet.name)} // Disable the button if already adopted
              >
                {adoptedPets.includes(pet.name) ? 'Adopted' : 'Adopt'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Logout button */}
      {isLoggedIn && (
        <button className="logout-button" onClick={handleLogout}>
          Log Out
        </button>
      )}
    </div>
  );
}

export default Pets;
