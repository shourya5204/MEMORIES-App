import express from 'express';
const router = express.Router();
import { getPosts, createPosts ,updatePost ,deletePost, likedPost } from '../controllers/posts.js';

// Define the routes properly
router.get('/', getPosts); // GET request for fetching posts
router.post('/', createPosts); // POST request for creating posts
router.patch('/:id',updatePost);
router.delete('/:id',deletePost);
router.patch('/:id/likePost',likedPost);
export default router;
