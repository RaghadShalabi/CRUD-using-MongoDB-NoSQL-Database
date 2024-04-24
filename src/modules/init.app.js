import connectDB from "../../DB/connection.js";
import authRouter from "./Auth/Auth.router.js";
import userRouter from './User/User.router.js';
import blogRouter from './Blog/Blog.router.js';

const initApp = (app, express) => {
    connectDB()
    app.use(express.json());
    app.use('/auth', authRouter);
    app.use('/user', userRouter);
    app.use('/blog', blogRouter);

    app.use('*', (req, res) => {
        return res.json({ message: 'Page not found 404 x_x' });
    })
}
export default initApp;
