import express from "express";
const app = express()
import * as userController from "./controller/User.controller.js"
import { auth } from "../../middleware/auth.js";

app.get('/', userController.getUsers)
app.patch('/:id', userController.updateUser)
app.patch('/', auth, userController.updateUser)
app.delete('/', auth, userController.deleteUser)
app.delete('/:id', userController.deleteUser)

export default app;