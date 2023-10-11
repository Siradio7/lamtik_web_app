import dotenv from "dotenv"
import mysql from "mysql"

dotenv.config()

export const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})