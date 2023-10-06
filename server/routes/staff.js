import { add, getAll, get, update, deleteEmployee } from "../controllers/staff.js"
import express from "express"

const router = express.Router()

router.post("/add", add)
router.get("/", getAll)
router.get("/:id", get)
router.patch("/:id", update)
router.delete("/:id", deleteEmployee)

export default router