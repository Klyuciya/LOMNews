import Comment from "../models/Comments.js"
import News from "../models/News.js"
import User from "../models/Users.js"
import path, {dirname} from 'path'
import { fileURLToPath } from "url"
import Comments from "../models/Comments.js"

// Create Comment
export const createComment = async (req, res) => {
    try {
        const {newsId,commentText}= req.body
        if(!commentText) {
            return res.json('Comment cannot be empty'
        )}

            const newComment = new Comment({ commentText })
            await newComment.save()
            try {
                await News.findByIdAndUpdate(newsId, {
                    $push: { comments: newComment._id },
                })
            } catch (error) {
                console.log(error)
            }
            try {
                await User.findByIdAndUpdate(req.userId, {
                    $push: { comments: newComment._id },
                })
            } catch (error) {
                console.log(error)
            }
    
            res.json(newComment)
    }     catch (error) {
       res.json({
           message: "Something going wrong"
       })
    }
}

// Get All 