import { Router } from "express";
import { register, login, getMe, getUsers} from "../controllers/auth.js";
import { userValidation, userValidationResult} from "../validators/userValidation.js";
import { checkAuth} from "../utils/checkAuth.js";
import { roleMiddleware} from "../utils/roleMiddleware.js";

const router = new Router();

// Register
//http://localhost:3002/api/auth/register
router.post("/register", userValidation, userValidationResult, register);


//Login
//http://localhost:3002/api/auth/login
router.post('/login', login);

//Get me
//http://localhost:3002/api/auth/me
router.get('/me', checkAuth, getMe);

//Get users
//http://localhost:3002/api/auth/users
router.get('/users', roleMiddleware(['Admin']), getUsers);


export default router;
