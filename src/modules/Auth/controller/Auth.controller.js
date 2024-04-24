import userModel from "../../../../DB/user.model.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { signupSchema } from "../Auth.validation.js";

//signUp by create

export const signUp = async (req, res) => {
    try {
        const { username, email, password, age } = req.body;
        const validationResult = signupSchema.validate(req.body,{abortEarly:false});
        //return res.json(validationResult);
        var hash = bcrypt.hashSync(password, parseInt(process.env.SALT))
        const user = await userModel.create({ username, email, password: hash, age })
        return res.json({ message: "success", user })
    } catch (error) {
        if (error.keyPattern?.email == 1) {
            return res.json({ message: "email already exists" })
        } else {
            return res.json({ message: "catch error", error: error.stack })
        }
    }
}

//signUp by save

// export const signUp = async (req, res) => {
//     try {
//         const { username, email, password, age } = req.body;
//         var hash = bcrypt.hashSync(password,  parseInt(process.env.SALT))
//         const user = new userModel(req.body)
//         await user.save();
//         return res.json({ message: "success", user })
//     } catch (error) {
//         if (error.keyPattern?.email == 1) {
//             return res.json({ message: "email already exists" })
//         } else {
//             return res.json({ message: "catch error", error: error.stack })
//         }
//     }
// }

//signUp by insertMany

// export const signUp = async (req, res) => {
//     try {
//         const { username, email, password, age } = req.body;
//         var hash = bcrypt.hashSync(password,  parseInt(process.env.SALT)j)
//         const user = await userModel.insertMany(req.body)
//         return res.json({ message: "success", user })
//     } catch (error) {
//         if (error.keyPattern?.email == 1) {
//             return res.json({ message: "email already exists" })
//         } else {
//             return res.json({ message: "catch error", error: error.stack })
//         }
//     }
// }

//signIn by findOne
export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.json({ message: "Invalid email" })
        }
        const match = bcrypt.compareSync(password, user.password)
        if (!match) {
            return res.json({ message: "invalid password" })
        }
        const token = jwt.sign({ id: user._id }, process.env.TOKEN, { expiresIn: 60 * 60 })
        return res.json({ message: "success", token })
    } catch (error) {
        return res.json({ message: "catch error", error: error.stack })
    }
}


