import jwt from 'jsonwebtoken'

export const auth = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization?.startsWith(process.env.BEARER_TOKEN)) {
            return res.json({ message: "Invalid authorization" })
        }
        const token = authorization.split('BEARER__')[1];
        if (!token) {
            return res.json({ message: "token is required" })
        }
        const decoded = jwt.verify(token, process.env.TOKEN)
        req.id = decoded.id;
        next();
    } catch (error) {
        return res.json({ message: "catch error", error: error.stack })
    }
}
