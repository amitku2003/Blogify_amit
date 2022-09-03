// this file will be used to upload images to the mongodb database

import mongoose from "mongoose";

const ImageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    }
})

export default ImageSchema;