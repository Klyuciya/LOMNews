import mongoose from "mongoose"

const newsSchema = new mongoose.Schema({
    title: { type:String, required: true},
    newsText: {type:String, required: true},
    image: {type:String, default: ''},
    viewsQty: {type:Number, default: 0 },
    createDate: {type:Date,default: Date.now},
    tags: {type: Array,default: []},
    author: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
    comments: {type: mongoose.Schema.Types.ObjectId, ref: "comments"},
    category: {type: mongoose.Schema.Types.ObjectId, ref: "categories"},
},
{timestamps:true},
)
export default mongoose.model('News', PostSchema)