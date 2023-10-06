import { add, getAll, get, update, deleteCustomer } from "../controllers/customers.js"
import express from "express"

const router = express.Router()

router.post("/add", add)
router.get("/", getAll)
router.get("/:id", get)
router.patch("/:id", update)
router.delete("/:id", deleteCustomer)

export default router