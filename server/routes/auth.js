import { Router } from "express";
import { register, login, getMe, getUsers} from "../controllers/auth.js";
import { userValidation, userValidationResult} from "../validators/userValidation.js";
import { checkAuth } from "../utils/checkAuth.js";

const router = new Router();

// Register
//http://localhost:3002/api/auth/register
router.post("/register", userValidation, userValidationResult, register);


//Login
//http://localhost:3002/api/auth/login
router.post('/login', login);

//Get me
//http://localhost:3002/api/auth/me
router.get('/users', getUsers);



export default router;
