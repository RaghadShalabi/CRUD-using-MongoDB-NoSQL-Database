import { Schema, model, Types } from "mongoose";
const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    userId: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    }
})

const blogModel = model('Blog', blogSchema)

export default blogModel