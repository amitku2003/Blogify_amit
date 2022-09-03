import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    userName: String,
    date: {
        type: String,
        default: Date.now()
    },
    image: Buffer,
    userText: String
})

export default BlogPostSchema;