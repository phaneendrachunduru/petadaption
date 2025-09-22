import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import userApi from '../api'; // assuming you have this api helper

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'user',
    profilePhoto: null,
    zone: '',
    status: 'Active',
    phoneNumber: '',
    address: '',
    gender: '',
    age: '',
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const validateForm = () => {
    const { username, email, password, phoneNumber, address, gender, age } = formData;
    
    if (!username || !password) {
      setMessage('Please enter username and password.');
      return false;
    }

    if (isLogin && !email) {
      setMessage('Please enter your email.');
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (isLogin && !emailRegex.test(email)) {
      setMessage('Please enter a valid email address.');
      return false;
    }

    if (!isLogin && (!email || !phoneNumber || !address || !gender || !age)) {
      setMessage('Please fill in all required fields for signup.');
      return false;
    }

    return true;
  };

  const handleProfilePhotoChange = (e) => {
    setFormData({ ...formData, profilePhoto: e.target.files[0] });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setMessage('');

    try {
      if (isLogin) {
        // Login
        const user = await userApi.loginUser(formData.email, formData.password);
        if (user) {
          setMessage('Login successful!');
          // Save user data to localStorage
          localStorage.setItem('user', JSON.stringify(user));
          // Redirect to UserProfile page after login
          navigate('/user-profile');
        } else {
          setMessage('Invalid email/username or password.');
        }
      } else {
        // Signup
        const { username, email, password, role, profilePhoto, phoneNumber, address, gender, age } = formData;
        const form = new FormData();
        form.append('username', username);
        form.append('email', email);
        form.append('password', password);
        form.append('role', role);
        form.append('profilePhoto', profilePhoto);
        form.append('phoneNumber', phoneNumber);
        form.append('address', address);
        form.append('gender', gender);
        form.append('age', age);

        const newUser = await userApi.registerUser(form);
        if (newUser && newUser.data && newUser.data.email) {
          setMessage('Signup successful! Please sign in.');
          setIsLogin(true);
          // Reset signup fields
          setFormData({
            username: '',
            email: '',
            password: '',
            role: 'user',
            profilePhoto: null,
            phoneNumber: '',
            address: '',
            gender: '',
            age: '',
          });
        } else {
          setMessage('Signup failed. Try again.');
        }
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error);
      setMessage('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isLogin ? 'Sign in to your account' : 'Create your account'}</h2>
        <p>
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <span
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage('');
            }}
            className="toggle-btn"
          >
            {isLogin ? 'Sign up' : 'Sign in'}
          </span>
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
              value={formData.username}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {!isLogin && (
            <>
              <div className="form-group">
                <select
                  id="role"
                  name="role"
                  className="form-input"
                  value={formData.role}
                  onChange={handleChange}
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
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <input
                  id="address"
                  name="address"
                  type="text"
                  className="form-input"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <select
                  id="gender"
                  name="gender"
                  className="form-input"
                  value={formData.gender}
                  onChange={handleChange}
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
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Processing...' : isLogin ? 'Sign in' : 'Sign up'}
          </button>
        </form>

        {isLogin && (
          <div className="forgot-password-link">
            <a href="/forgot-password">Forgot your password?</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
