import mongoose from 'mongoose'
const connectDB = async (req, res) => {
    return await mongoose.connect(process.env.DB)
        .then(() => {
            console.log(`Connected to MongoDB`)
        })
        .catch((err) => {
            console.log(`error to connect db ${err}`)
        })
}
export default connectDB;







