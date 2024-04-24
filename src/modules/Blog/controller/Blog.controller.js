import blogModel from "../../../../DB/blog.model.js";
import jwt from 'jsonwebtoken'


export const createBlog = async (req, res) => {
    try {
        // const { token } = req.headers;
        // const decoded = jwt.verify(token, process.env.TOKEN);

        // console.log(req)
        // return res.json("r")
        const { title, description } = req.body;
        const blog = await blogModel.create({ title, description, userId: req.id })
        return res.json({ message: "success", blog })
    } catch (error) {
        if (error.keyPattern?.title == 1) {
            return res.json({ message: "title already exists" })
        } else if (error.name == "JsonWebTokenError") {
            return res.json({ message: "user not found" })
        }
        return res.json({ message: "catch error", error: error.stack })
    }
}

// get all blogs of user
export const getBlog = async (req, res) => {
    const blogs = await blogModel.find().select('title -_id').populate({
        path: 'userId',
        select: 'username -_id'
    });

    if (!blogs.length) {
        return res.json({ message: "blog not found" })
    } else {
        return res.json({ message: "success", blogs })
    }
}