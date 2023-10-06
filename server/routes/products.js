import { add, getAll, get, update, deleteProduct } from "../controllers/products.js"
import express from "express"

const router = express.Router()

router.post("/add", add)
router.get("/", getAll)
router.get("/:id", get)
router.patch("/:id", update)
router.delete("/:id", deleteProduct)

export default router