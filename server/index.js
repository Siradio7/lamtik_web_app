import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import authRoutes from "./routes/users.js"
import customersRoutes from "./routes/customers.js"
import productsRoutes from "./routes/products.js"
import categoriesRoutes from "./routes/categories.js"
import providersRoutes from "./routes/providers.js"
import staffRoutes from "./routes/staff.js"
import jobsRoutes from "./routes/jobs.js"

dotenv.config()

const PORT = process.env.PORT
const server = express()

server.use(cors())
server.use(express.json())

server.use("/auth", authRoutes)
server.use("/customers", customersRoutes)
server.use("/products", productsRoutes)
server.use("/categories", categoriesRoutes)
server.use("/providers", providersRoutes)
server.use("/staff", staffRoutes)
server.use("/jobs", jobsRoutes)

const start_callback = () => { 
    console.log(`Server started on http://localhost:${PORT}`)
}

server.listen(PORT, start_callback)