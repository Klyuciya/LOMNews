import { Router } from "express";
import { createNews, getAllNews, getNewsById, getMyNews, deleteMyNews, editMyNews,getNewsComments } from "../controllers/news.js";
import { checkAuth } from "../utils/checkAuth.js";
import { newsValidation, newsValidationResult} from "../validators/newsValidation.js";
import { roleMiddleware} from "../utils/roleMiddleware.js";



const router = new Router();

// Create News
//http://localhost:3002/api/news
// router.post("/", checkAuth,  newsValidation, newsValidationResult, createNews);
router.post("/", checkAuth, roleMiddleware(['Editor']), newsValidation, newsValidationResult, createNews);



// roleMiddleware(['Editor']),
// Get All News
//http://localhost:3002/api/news
router.get('/', getAllNews);

//Get News By Id
//http://localhost:3002/api/news/:id
router.get('/:id', getNewsById);

//Get News By Users Id
//http://localhost:3002/api/news/user/my
router.get('/user/my', checkAuth, getMyNews);

//Delete News By Users Id and News Id
//http://localhost:3002/api/news/user/my/delete/:id
router.delete('/user/my/delete/:id', checkAuth, deleteMyNews);

//Edit News By Users Id and News Id
//http://localhost:3002/api/news/user/my/edit/:id
router.put('/user/my/edit/:id', checkAuth, editMyNews);

//Get News Comments
//http://localhost:3002/api/news/comments/:id
router.get('/comments/:id', getNewsComments);

export default router;

