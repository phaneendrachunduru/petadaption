import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8091/api', // Make sure the backend is running at this address
});

// Login user
const loginUser = (email, password) => {
  return api.post('/users/login', { email, password });
};

// Register user
const registerUser = (formData) => {
  return api.post('/users/register', formData);
};

export default {
  loginUser,
  registerUser,
};
