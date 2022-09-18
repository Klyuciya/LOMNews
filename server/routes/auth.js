import { Router } from "express";
import { register } from "../controllers/auth.js";

const router = new Router();

// Register
//http://localhost:3002/api/auth/register
router.post("/register", register);

//Login

export default router;
