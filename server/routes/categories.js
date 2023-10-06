import { add, getAll, get, update, deleteCategory } from "../controllers/categories.js"
import express from "express"

const router = express.Router()

router.post("/add", add)
router.get("/", getAll)
router.get("/:id", get)
router.patch("/:id", update)
router.delete("/:id", deleteCategory)

export default router