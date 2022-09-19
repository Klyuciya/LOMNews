import { Router } from "express";
import { createPost } from "../controllers/news.js";
import { checkAuth } from "../utils/checkAuth.js";

const router = new Router();

// Create News
//http://localhost:3002/api/news
router.post("/", checkAuth, createPost);


//Login
//http://localhost:3002/api/auth/login
// router.post('/login', login);

//Get me
//http://localhost:3002/api/auth/me
// router.get('/me', checkAuth, getMe);

export default router;
