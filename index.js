import * as dotenv from 'dotenv'
dotenv.config()
import initApp from './src/modules/init.app.js'

import express from 'express'
const app = express()
const port = 3000
initApp(app, express)

app.listen(port, () => {
   console.log(`server is running...,on port ${port}`)
})


