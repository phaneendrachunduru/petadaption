import React from 'react';
import { Link } from 'react-router-dom';
import SuccessStoryCard from './SuccessStoryCard';
import './Home.css'; // Import the CSS file

// Import images from the assets folder
import heroImage from '../assets/hero-image.jpg';
import searchImage from '../assets/search.png';
import calendarImage from '../assets/calendar.png';
import heartImage from '../assets/heart.png';
import pawPrintImage from '../assets/paw-print.png';

function Home() {
  const successStories = [
    { id: 1, name: "Max & Sarah", image: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa", story: "\"Max changed my life completely. He's not just a pet, he's family.\"" },
    { id: 2, name: "Luna & Mike", image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b", story: "\"The adoption process was smooth, and Luna has brought so much joy to our home.\"" }
  ];

  const stats = [
    { id: 1, number: "1,000+", label: "Pets Adopted" },
    { id: 2, number: "500+", label: "Partner Shelters" },
    { id: 3, number: "50,000+", label: "Happy Families" }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1 className="hero-title">
            Find Your Perfect <span className="highlight-text">Furry Friend</span>
          </h1>
          <p className="hero-description">
            Browse thousands of pets from trusted shelters, and find your new best friend today!
          </p>
          <div className="cta-buttons">
            <Link to="/pets" className="cta-button primary">Find a Pet</Link>
            <Link to="/shelters" className="cta-button secondary">View Shelters</Link>
          </div>
        </div>
        <div className="hero-image-container">
          <img className="hero-image" src={heroImage} alt="Happy person with adopted pet" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-container">
          {stats.map(stat => (
            <div key={stat.id} className="stat-card">
              <p className="stat-number">{stat.number}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2 className="section-title">How It Works</h2>
        <div className="feature-cards">
          <FeatureCard icon={searchImage} title="Browse Pets" description="Search through our database of pets from trusted shelters and rescue organizations." />
          <FeatureCard icon={calendarImage} title="Schedule a Visit" description="Meet your potential new family member in person at a local shelter." />
          <FeatureCard icon={heartImage} title="Complete Adoption" description="Finalize the adoption process and welcome your new pet home." />
        </div>
      </div>

      {/* Success Stories */}
      <div className="success-stories-section">
        <h2 className="section-title">Success Stories</h2>
        <div className="stories-container">
          {successStories.map(story => (
            <SuccessStoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <h2 className="cta-title">Are You Ready for Your New Best Friend?</h2>
        <p className="cta-description">Start your pet adoption journey today and find your furry companion.</p>
        <Link to="/pets" className="cta-button primary">Browse Available Pets <img src={pawPrintImage} alt="paw icon" className="cta-icon" /></Link>
      </div>
    </div>
  );
}

const FeatureCard = ({ icon, title, description }) => (
  <div className="feature-card">
    <div className="feature-icon">
      <img src={icon} alt={title} />
    </div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </div>
);

export default Home;
