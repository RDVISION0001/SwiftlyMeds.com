// src/utils/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://your-api-base-url.com/api', // replace with your actual base URL
  timeout: 10000, // optional timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor (optional)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // or from cookies, context, etc.
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor (optional)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors here (e.g. 401 redirects, logging)
    if (error.response?.status === 401) {
      console.error('Unauthorized! Redirecting to login...');
      // Example: window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
