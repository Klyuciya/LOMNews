import News from "../models/News.js"
import User from "../models/Users.js"
import path, {dirname} from 'path'
import { fileURLToPath } from "url"
//Create News
export const createPost = async (req, rep) => {
    try {
        const {title, newsText} = req.body
        const author = await User.findById(req.userId)

        if(req.files) {
            let fileName = Date.now().toString() + req.files.image.name
            const __dirnaem = dirname(fileURLToPath(import.meta.url ))
            req.files.image.mv(path.join(__dirname, '..', 'uploads', fileName))
            const newNewsWithImage = new News ({
                title,
                newsText,
                image: fileName,
                author: req.userID,
            })
            await newNewsWithImage.save()
        }
    }catch (error) {
        console.log()
    }
}
