import { Router } from "express";
import { createNews, getAllNews, getNewsById } from "../controllers/news.js";
import { checkAuth } from "../utils/checkAuth.js";
import { newsValidation, newsValidationResult} from "../validators/newsValidation.js";
import { roleMiddleware} from "../utils/roleMiddleware.js";



const router = new Router();

// Create News
//http://localhost:3002/api/news
router.post("/", roleMiddleware(['Admin']), newsValidation, newsValidationResult, createNews);


// Get All News
//http://localhost:3002/api/news
router.get('/', getAllNews);

//Get News By Id
//http://localhost:3002/api/news/:id
router.get('/:id', getNewsById);

//Get News By Users Id
//http://localhost:3002/api/news/user/my
// router.get('/user/my', roleMiddleware(['Admin']), getMyNews);
export default router;
