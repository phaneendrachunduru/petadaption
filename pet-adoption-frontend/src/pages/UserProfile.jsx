import React from 'react';
import './UserProfile.css';

function UserProfile({ user }) {
  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Welcome, {user.username}!</h1>
      </div>

      <div className="profile-details">
        {user.profilePhoto && (
          <img src={user.profilePhoto} alt="Profile" className="profile-image" />
        )}
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>Age:</strong> {user.age}</p>
      </div>

      <div className="profile-button">
        <a href="/edit-profile">Edit Profile</a>
      </div>
    </div>
  );
}

export default UserProfile;
