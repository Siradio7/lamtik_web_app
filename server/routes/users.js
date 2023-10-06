import { signin, signup } from "../controllers/users.js"
import express from "express"

const router = express.Router()

router.post("/signup", signup)
router.post("/signin", signin)

export default router