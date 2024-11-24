import API from '../api'; // Adjust the import path based on your folder structure

// Function to login the user
export const loginUser = async (credentials) => {
  try {
    const response = await API.post('/auth/login', credentials);
    const { token } = response.data;
    localStorage.setItem('authToken', token); // Store the token in localStorage
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

// Function to get the current user from the API
export const getCurrentUser = async () => {
  try {
    const response = await API.get('/auth/me');
    return response.data; // This assumes the backend has a route to get the logged-in user details
  } catch (error) {
    console.error('Failed to fetch current user:', error);
    throw error;
  }
};

// Function to check if the user is logged in
export const isLoggedIn = () => {
  return !!localStorage.getItem('authToken'); // Returns true if token is present
};

// Function to logout the user
export const logoutUser = () => {
  localStorage.removeItem('authToken'); // Remove token from localStorage
};
