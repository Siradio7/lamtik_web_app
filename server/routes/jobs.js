import { add, getAll, get, update, deleteJob } from "../controllers/jobs.js"
import express from "express"

const router = express.Router()

router.post("/add", add)
router.get("/", getAll)
router.get("/:id", get)
router.patch("/:id", update)
router.delete("/:id", deleteJob)

export default router