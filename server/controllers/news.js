import News from "../models/News.js"
import User from "../models/Users.js"
import path, {dirname} from 'path'
import { fileURLToPath } from "url"
//Create News
export const createPost = async (req, res) => {
    try {
        const {title, newsText} = req.body
        const author = await User.findById(req.userId)

        if(req.files) {
            let fileName = Date.now().toString() + req.files.image.name
            const __dirname = dirname(fileURLToPath(import.meta.url ))
            req.files.image.mv(path.join(__dirname, '..', 'uploads', fileName))
            const newNewsWithImage = new News ({
                title,
                newsText,
                image: fileName,
                author: req.userID,
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
            author: req.userID,
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
