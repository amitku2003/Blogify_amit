import express from "express";
import BlogPost from "../server.js";

const router = express.Router();

router.get("/", (req, res) => { // this is the home component 
    res.send("This is the home route");
})

router.get("/feed", (req,res)=>{
    res.send("This is the feed route")
})

router.get("/dummy", (req,res)=>{
    BlogPost.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("Data: ", data);
      res.json(error);
    });
})

export default router;