import userModel from "../../../../DB/user.model.js"
import jwt from 'jsonwebtoken'
// get users by find

export const getUsers = async (req, res) => {
    try {
        const { gender, age } = req.query;
        //const users = await userModel.find({ age: { $gt: age } });
        // const users = await userModel.find({ $or: [{ gender }, { age: { $gt: age } }] });
        //const users = await userModel.find({ gender, age: { $gt: age } });
        const users = await userModel.find();
        if (!users.length) {
            return res.json({ message: "user not found" })
        } else {
            return res.json({ message: "success", users })
        }
    } catch (error) {
        return res.json({ message: "catch error", error: error.stack })
    }
}


//get user by findOne

// export const getUsers = async (req, res) => {
//     try {
//         const { username, email } = req.body;
//         const users = await userModel.findOne({ username, email });
//         if (!users) {
//             return res.json({ message: "user not found" })
//         }
//         return res.json({ message: "success", users })
//     } catch (error) {
//         return res.json({ message: "catch error", error: error.stack })
//     }
// }

//get user by findById

// export const getUsers = async (req, res) => {
//     try {
//         const { id } = req.body;
//         const users = await userModel.findById(id);
//         if (!users) {
//             return res.json({ message: "user not found" })
//         }
//         return res.json({ message: "success", users })
//     } catch (error) {
//         return res.json({ message: "catch error", error: error.stack })
//     }
// }

//update user by updateOne

// export const updateUser = async (req, res) => {
//     try {
//         const { id } = req.params
//         const { age } = req.body
//         const user = await userModel.updateOne({ _id: id }, { age, username: "heba" })
//         if (user.modifiedCount == 0) {
//             return res.json({ message: "user not found" })
//         }
//         return res.json({ message: "success", user })
//     } catch (error) {
//         return res.json({ message: "catch error", error: error.stack })
//     }
// }

//update users by updateMany

// export const updateUser = async (req, res) => {
//     try {
//         const { id } = req.params
//         const { age } = req.body
//         const user = await userModel.updateMany({ confirmEmail: true }, { age })
//         if (user.modifiedCount == 0) {
//             return res.json({ message: "user not found" })
//         }
//         return res.json({ message: "success", user })
//     } catch (error) {
//         return res.json({ message: "catch error", error: error.stack })
//     }
// }

//update user by findOneAndUpdate

// export const updateUser = async (req, res) => {
//     try {
//         const { id } = req.params
//         const { age } = req.body
//         const user = await userModel.findOneAndUpdate({ password: 123456 }, { age }, { new: true })
//         if (!user) {
//             return res.json({ message: "user not found" })
//         }
//         return res.json({ message: "success", user })
//     } catch (error) {
//         return res.json({ message: "catch error", error: error.stack })
//     }
// }

//update user by findByIdAndUpdate

export const updateUser = async (req, res) => {
    try {
        //const { id } = req.params;
        const { age } = req.body;
        // const { token } = req.headers;
        // const decoded = jwt.verify(token, process.env.TOKEN);
        const user = await userModel.findByIdAndUpdate({ _id: req.id }, { age }, { new: true })
        if (!user) {
            return res.json({ message: "user not found" })
        }
        return res.json({ message: "success", user })
    } catch (err) {
        return res.json({ message: "catch error", error: err.stack })
    }
}

//update user by findOneAndReplace

// export const updateUser = async (req, res) => {
//     try {
//         const { id } = req.params
//         const { age } = req.body
//         const user = await userModel.findOneAndReplace({ _id: req.id }, { age }, { new: true })
//         if (!user) {
//             return res.json({ message: "user not found" })
//         }
//         return res.json({ message: "success", user })
//     } catch (error) {
//         return res.json({ message: "catch error", error: err.stack })
//     }
// }

//delete user by deleteOne

// export const deleteUser = async (req, res) => {
//     try {
//         const { id } = req.body;
//         const user = await userModel.deleteOne({ _id: req.id });
//         if (user.deletedCount == 0) {
//             return res.json({ message: "user not found" });
//         }
//         return res.json({ message: 'success', user });
//     } catch (error) {
//         return res.json({ message: "catch error", error: err.stack })
//     }
// }

//delete user by deleteMany

// export const deleteUser = async (req, res) => {
//     try {
//         const user = await userModel.deleteMany({ age: 22 });
//         if (user.deletedCount == 0) {
//             return res.json({ message: "user not found" });
//         }
//         return res.json({ message: 'success', user });
//     } catch (error) {
//         return res.json({ message: "catch error", error: err.stack })
//     }
// }

//delete user by findByIdAndDelete

export const deleteUser = async (req, res) => {
    try {
        //const { token } = req.headers;
        // const decoded = jwt.verify(token, process.env.TOKEN);
        const user = await userModel.findByIdAndDelete({ _id: req.id });
        if (!user) {
            return res.json({ message: "user not found" });
        }
        return res.json({ message: 'success', user });
    } catch (err) {
        return res.json({ message: "catch error", error: err.stack })
    }
}




