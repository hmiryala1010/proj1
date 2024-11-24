import axios from "axios";

// Create Axios instance with dynamic baseURL
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
});

// Add token to request headers for authorization
API.interceptors.request.use(
  (req) => {
    try {
      const token = localStorage.getItem("authToken");
      if (token) {
        req.headers.Authorization = `Bearer ${token}`;
      } else {
        console.warn("No auth token found in localStorage.");
      }
      console.debug("Outgoing request headers:", req.headers); // Debugging log
      return req;
    } catch (error) {
      console.error("Error in request interceptor:", error);
      return Promise.reject(error);
    }
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Interceptor to handle responses globally
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("Response error details:", error.response);

      // Handle 401 Unauthorized
      if (error.response.status === 401) {
        localStorage.removeItem("authToken"); // Remove invalid token
        alert("Your session has expired. Please log in again.");
        window.location.href = "/login"; // Redirect to login page
      }
    } else {
      console.error("Network or server error:", error.message);
    }
    return Promise.reject(error);
  }
);

// Story APIs

// Create a new story
export const createStory = (storyData, authToken) => {
  return API.post("/stories", storyData, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
};

// Fetch all stories
export const fetchStories = () => API.get("/stories");

// Fetch a single story by ID
export const fetchStoryById = (id) => API.get(`/stories/${id}`);

// Update a story by ID
export const updateStory = (id, updatedData) =>
  API.patch(`/stories/${id}`, updatedData);

// Delete a story by ID
export const deleteStory = (id) => API.delete(`/stories/${id}`);

// Add a contribution to a story
export const contributeToStory = (id, contributionData) =>
  API.post(`/stories/${id}/contribute`, contributionData);

// Upvote a contribution in a story
export const upvoteContribution = (storyId, contributionId) =>
  API.patch(`/stories/${storyId}/contribution/${contributionId}/upvote`);

export default API;
