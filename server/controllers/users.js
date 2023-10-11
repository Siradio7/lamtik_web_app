import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { pool } from "../utils/dbPool.js"

export const signup = async (req, res) => {
    const { password, ...user} = req.body
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)
    const newUser = { hashPassword, ...user }

    pool.getConnection((err, connection) => {
        const query = `INSERT INTO users(last_name, first_name, email, password) VALUES('${newUser.last_name}', '${newUser.first_name}', '${newUser.email}', '${newUser.hashPassword}')`
        
        connection.query(query, (err) => {
            if(err) {
                res.status(401).json({
                    message: "Impossible d'ajouter l'utilisateur"
                })
            } else {
                res.status(201).json({
                    message: "Utilisateur créé avec succès"
                })
            }

            connection.release()
        })
    })
}

export const signin = async (req, res) => {
    const { email, password } = req.body

    pool.getConnection((err, connection) => {
        if(err) throw err

        const query = `SELECT * FROM users WHERE email = '${email}'`
        connection.query(query, async (err, result) => {
            if (err) throw err
            const user = result[0] || null

            if (user !== null) {
                const validPassword = await bcrypt.compare(password, user.password)

                if (validPassword) {
                    const token = jwt.sign({ email }, process.env.SECRET_KEY)
                    
                    res.status(200).json({ token, user })
                } else {
                    res.status(400).json({ message: "Invalid credentials"})
                }
            } else {
                res.status(400).json({ message: "Invalid credentials"})
            }

            connection.release()
        })
    })
}