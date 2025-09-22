import React from 'react';
import ShelterCard from '../components/ShelterCard';  // Import the ShelterCard component
import './Shelters.css'; // Correct path depending on your file structure

// Import the images
import shelter1 from '../assets/shelter1.png';
import shelter2 from '../assets/shelter2.png';
import shelter3 from '../assets/shelter3.png';
import shelter4 from '../assets/shelter4.png';
import shelter5 from '../assets/shelter5.png';

const sheltersData = [
  { name: 'Sunny Shelter', location: 'New York, NY', description: 'A place full of love for animals in need.', image: shelter1 },
  { name: 'Happy Paws Shelter', location: 'Los Angeles, CA', description: 'Dedicated to the care and well-being of pets.', image: shelter2 },
  { name: 'Safe Haven Shelter', location: 'Chicago, IL', description: 'A safe space for pets to find their forever homes.', image: shelter3 },
  { name: 'Hopeful Hearts Shelter', location: 'Dallas, TX', description: 'A loving shelter for stray animals.', image: shelter4 },
  { name: 'Animal Rescue Shelter', location: 'Miami, FL', description: 'Providing shelter for abandoned pets.', image: shelter5 },
];

function Shelters() {
  return (
    <div className="shelters-container">
      <h1 className="shelters-header">Shelters Near You</h1>
      <p className="shelters-description">
        Find shelters available for adoption or volunteering opportunities!
      </p>

      <div className="shelters-list">
        {sheltersData.map((shelter, index) => (
          <ShelterCard key={index} shelter={shelter} />
        ))}
      </div>
    </div>
  );
}

export default Shelters;
