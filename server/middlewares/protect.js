import { jwt } from "jsonwebtoken"

export default function protect(req, res, next) {
    const authorization = req.headers.authorization

    if(authorization && authorization.startswith("Bearer")) {
        const token = authorization.split(' ')[1]

        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if(err) {
                res.status(401).json({
                    message: "Not authorized, token failed"
                })
            } else {
                req.user = decoded
                next()
            }
        })
    } else {
        res.status(401).json({
            message: "Not authorized, no token"
        })
    }
}