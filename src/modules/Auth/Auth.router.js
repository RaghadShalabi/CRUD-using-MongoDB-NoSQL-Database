import express from "express";
const app = express()
import * as authController from "./controller/Auth.controller.js"

app.post('/signUp', authController.signUp)
app.post('/signIn', authController.signIn)

export default app