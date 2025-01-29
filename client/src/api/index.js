import axios from 'axios';

// Create an axios instance with the base URL
const API = axios.create({ baseURL: 'http://localhost:5000' });

// Define API calls
export const fetchPosts = () => API.get('/posts'); // GET request to '/posts'
export const createPost = (newPost) => API.post('/posts', newPost); // POST request to '/posts' with newPost as payload
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost); // PATCH request to update a post by ID
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);