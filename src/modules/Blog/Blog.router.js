import express from "express";
const app = express()
import * as blogController from "./controller/Blog.controller.js"
import { auth } from "../../middleware/auth.js";

app.post('/createBlog', auth, blogController.createBlog)
app.get('/',auth, blogController.getBlog)

export default app;