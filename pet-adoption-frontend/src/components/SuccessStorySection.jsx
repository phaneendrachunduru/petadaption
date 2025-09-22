import React from 'react';
import SuccessStoryCard from '../pages/SuccessStoryCard';

// Import images correctly
import success1 from '../assets/images/success1.png';
import success2 from '../assets/images/success2.png';

const SuccessStorySection = () => {
  const stories = [
    {
      name: 'Happy Dog 1',
      story: 'This dog had a life-changing moment after being adopted!',
      image: success1,  // Correctly imported image
    },
    {
      name: 'Happy Dog 2',
      story: 'This dog loves playing fetch in the park.',
      image: success2,  // Correctly imported image
    },
  ];

  return (
    <section className="success-section py-16 bg-light-gray">
      <div className="section-header text-center mb-12">
        <h2 className="section-title text-3xl font-bold text-dark">Success Stories</h2>
        <p className="section-subtitle text-lg text-muted">Happy tales from our adopters</p>
      </div>

      <div className="stories-grid grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
        {stories.map((story, index) => (
          <SuccessStoryCard key={index} story={story} />
        ))}
      </div>
    </section>
  );
};

export default SuccessStorySection;
