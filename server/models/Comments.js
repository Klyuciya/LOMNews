import mongoose from "mongoose"

const commentsSchema = new mongoose.Schema({
    commentText: {type:String, required: true},
    dtWhen: {type:Date,default: Date.now},
    author: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
    news: {type: mongoose.Schema.Types.ObjectId, ref: "news"},
},
{timestamps:true},
)
export default mongoose.model('Comments', commentsSchema)