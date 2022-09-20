import News from "../models/News.js"
import User from "../models/Users.js"
import path, {dirname} from 'path'
import { fileURLToPath } from "url"
// Create News
export const createNews = async (req, res) => {
    try {
        const {title, newsText} = req.body
        // const author = await User.findById(req.userId)
        if(req.files) {
            let fileName = Date.now().toString() + req.files.image.name
            const __dirname = dirname(fileURLToPath(import.meta.url ))
            req.files.image.mv(path.join(__dirname, '..', 'uploads', fileName))
            const newNewsWithImage = new News ({
                title,
                newsText,
                image: fileName,
                tags:req.body.tags,
                author: req.userId,
            })
            await newNewsWithImage.save()
            await User.findByIdAndUpdate(req.userId, {
                $push: {news:newNewsWithImage},
            })

            return res.json(newNewsWithImage)
        }

        const newNewsWithoutImage = new News({
            title,
            newsText,
            image: "",
            tags:req.body.tags,
            author: req.userId,
        })
        await newNewsWithoutImage.save()
        await User.findByIdAndUpdate(req.userId, {
            $push: {news:newNewsWithoutImage},
        })
        res.json(newNewsWithoutImage)
    }catch (error) {
       res.json({
           message: "Something going wrong"
       })
    }
}

// Get All News
export const getAllNews = async (req, res) => {
    try {
        const news = await News.find().sort('-createdAt')
        const popularsNews = await News.find().limit(5).sort('-viewsQty')
        if (!news) {
            return res.json({message: 'No News'})
        }
        res.json ({news, popularsNews})
    } catch (error) {
        res.json({message: "Something going wrong"})
    }
}

// Get News By Id
export const getNewsById = async (req, res) => {
    try {
        const newsId = req.params.id;
        News.findOneAndUpdate ({
            _id: newsId,
        }, {
            $inc: { viewsQty: 1},
        }, {
            returnDocument: 'after',
        },
        (err, doc) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ 
                    message: 'Unable to return news'
                });
            }
            if (!doc) {
                return res.status(404).json({ 
                    message: 'News not found'
                });
            }
            res.json(doc);
        },);
    } catch (err) {
        console.log(err);
        res.status(500).json({ 
            message: 'Failed to retrieve news'});
    }
}
