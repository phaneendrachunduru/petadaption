import React from 'react';

const SuccessStoryCard = ({ story }) => {
  return (
    <div className="success-story-card">
      <img src={story.image} alt={story.name} className="story-image" />
      <h3 className="story-name">{story.name}</h3>
      <p className="story-quote">{story.story}</p>
    </div>
  );
};

export default SuccessStoryCard;
