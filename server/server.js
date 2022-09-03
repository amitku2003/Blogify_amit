import express from "express";
import morgan from "morgan";
import path from "path";
import mongoose from "mongoose";
import routes from "./routes/route.js";
import BlogPostSchema from "./models/BlogSchema.js";
import bodyParser from "body-parser";
import multer from "multer";
import ImageSchema from "./models/imageModel.js";


const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

// app.post("upload/image", uploadImage);

// server code goes here

// setting up mongoose

const MONGO_URI = "mongodb+srv://AnshPradhan:3PTazB7tst6VD75@cluster0.meiyxax.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB atlas is succesfully connected!!!");
});

// setting up multer for image upload

const Storage = multer.diskStorage({
  destination: "uploads",
  filename:(req, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload  = multer({
  storage: Storage
}).single("testImage")

app.post("/upload", (req,res) => {
  upload(req,res,(err) => {
    if(err){
      console.log(err);
    }
    else{
      const newImage = new ImageSchema({
        name: req.body.name,
        image: {
          data: data.file.filename,
          contentType: "image/png"
        }
      })
      newImage.save()
      .then(() => res.send("successfully uploaded"))
      .catch((err) =>{
        console.log(err);
      } )
    }
  })
})

// multer setting end

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const BlogPost = mongoose.model("BlogPost", BlogPostSchema)

// creating a dummy database feed

const data = { // dummy data
  userName: "Ansh Pradhan",
  userText: "asdfjb asdfjns hd djb dsfuhasdjb  usadfna gsbhsbfd"
}

const newBlogPost = new BlogPost(data);

  // saving the data to the mongoDB database

newBlogPost.save((error) => {
  if(error){
    console.log("Data not sent");
  }
  else{
    console.log("Data sent successfully");
  }
})

// server code ends here

app.use(morgan("tiny"));
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default BlogPost;
