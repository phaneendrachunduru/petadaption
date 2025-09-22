import React, { useState } from 'react';
import './Register.css';
import userApi from '../api'; // assuming you have this api helper

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!username || !email || !password || !phoneNumber || !address || !gender || !age) {
      setMessage('Please fill in all required fields.');
      return false;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const handleProfilePhotoChange = (e) => {
    setProfilePhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setMessage('');

    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('role', role);
      formData.append('profilePhoto', profilePhoto);
      formData.append('phoneNumber', phoneNumber);
      formData.append('address', address);
      formData.append('gender', gender);
      formData.append('age', age);

      const newUser = await userApi.registerUser(formData);
      if (newUser && newUser.email) {
        setMessage('Signup successful! Please sign in.');
        // Redirect or update UI for the registered user
      } else {
        setMessage('Signup failed. Try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Create your account</h2>
        <p>
          Already have an account? <span onClick={() => window.location.href = '/login'} className="toggle-btn">Sign in</span>
        </p>

        {message && <p className="status-msg">{message}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              id="username"
              name="username"
              type="text"
              required
              className="form-input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              id="email"
              name="email"
              type="email"
              required
              className="form-input"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              id="password"
              name="password"
              type="password"
              required
              className="form-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <select
              id="role"
              name="role"
              className="form-input"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="adopter">Adopter</option>
              <option value="shelter_owner">Shelter Owner</option>
            </select>
          </div>

          <div className="form-group">
            <input
              id="profilePhoto"
              name="profilePhoto"
              type="file"
              className="form-input"
              onChange={handleProfilePhotoChange}
            />
          </div>

          <div className="form-group">
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              className="form-input"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              id="address"
              name="address"
              type="text"
              className="form-input"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="form-group">
            <select
              id="gender"
              name="gender"
              className="form-input"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <input
              id="age"
              name="age"
              type="number"
              className="form-input"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Processing...' : 'Sign up'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
  