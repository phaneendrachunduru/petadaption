import axios from 'axios';

const API_BASE_URL = 'http://localhost:8091/api/users'; // Base URL of your backend API

// API functions to interact with the backend
const userApi = {
  // Register a user
  registerUser: async (formData) => {
    // const formData = new FormData();
    // formData.append('username', username);
    // formData.append('email', email);
    // formData.append('password', password);
    // formData.append('role', role);
    // if (profilePhoto) {
    //   formData.append('profilePhoto', profilePhoto);
    // }
    return axios.post(`${API_BASE_URL}/register`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
  },

  // Login user
  loginUser: async (email, password) => {
    return axios.post(`${API_BASE_URL}/login`, { email, password });
  },

  // Logout user
  logoutUser: async (email) => {
    return axios.post(`${API_BASE_URL}/logout`, null, { params: { email } });
  },

  // Get user details by email
  getUserByEmail: async (email) => {
    return axios.get(`${API_BASE_URL}/user`, { params: { email } });
  },

  // Update user details
  updateUser: async (id, updatedUser) => {
    return axios.put(`${API_BASE_URL}/update/${id}`, updatedUser);
  },

  // Get all users
  getAllUsers: async () => {
    return axios.get(`${API_BASE_URL}/all`);
  },

  // Delete user
  deleteUser: async (id) => {
    return axios.delete(`${API_BASE_URL}/${id}`);
  },
};

export default userApi;
