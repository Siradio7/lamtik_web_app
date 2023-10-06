import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import authRoutes from "./routes/users.js"
import customersRoutes from "./routes/customers.js"
import productsRoutes from "./routes/customers.js"

dotenv.config()

const PORT = process.env.PORT
const server = express()
server.use(cors())
server.use(express.json())

server.use("/auth", authRoutes)
server.use("/customers", customersRoutes)
server.use("/products", productsRoutes)

const start_callback = () => { 
    console.log(`Server started on http://localhost:${PORT}`)
}

server.listen(PORT, start_callback)