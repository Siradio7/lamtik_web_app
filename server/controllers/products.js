import dotenv from "dotenv"
import mysql from "mysql"

dotenv.config()

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

export const add = async (req, res) => {
    const product = req.body

    pool.getConnection((err, connection) => {
        if (err) throw err
        const query = `INSERT INTO products(name, price, quantity, expirationDate, idCategory) VALUES ('${product.name}', ${product.price}, ${product.quantity}, '${product.expirationDate}', ${product.idCategory})`
        
        connection.query(query, (err, result) => {
            if (err) throw err
            const { affectedRows } = result

            if(affectedRows === 1) {
                res.status(201).json({
                    message: "Product added successfully"
                })
            } else {
                res.status(400).json({
                    message: "Invalid credentials"
                })
            }

            connection.release()
        })
    })
}

export const getAll = async (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        const query = "SELECT * FROM products"
        
        connection.query(query, (err, result) => {
            if (err) throw err

            if(result) {
                res.status(201).json({ ...result })
            } else {
                res.status(400).json({
                    message: "Invalid credentials"
                })
            }

            connection.release()
        })
    })
}

export const get = async (req, res) => {
    const { id } = req.params
    pool.getConnection((err, connection) => {
        if (err) throw err
        const query = `SELECT * FROM products WHERE id = ${id}`
        
        connection.query(query, (err, result) => {
            if (err) throw err

            if(result) {
                res.status(201).json({ ...result })
            } else {
                res.status(400).json({
                    message: "Invalid credentials"
                })
            }

            connection.release()
        })
    })
}

export const update = async (req, res) => {
    const { id } = req.params
    const { ...product } = req.body

    pool.getConnection((err, connection) => {
        if (err) throw err
        const query = `UPDATE products SET name = '${product.name}', price = ${product.price}, quantity = ${product.quantity}, expirationDate = '${product.expirationDate}', idCategory = ${product.idCategory} WHERE id = ${id}`
        
        connection.query(query, (err, result) => {
            if (err) throw err
            const { changedRows } = result

            if(changedRows === 1) {
                res.status(201).json({
                    message: "Product updated successfully"
                })
            } else {
                res.status(400).json({
                    message: "Invalid credentials"
                })
            }

            connection.release()
        })
    })
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params

    pool.getConnection((err, connection) => {
        if (err) throw err
        const query = `DELETE FROM products WHERE id = ${id}`
        
        connection.query(query, (err, result) => {
            if (err) throw err
            const { affectedRows } = result

            if(affectedRows === 1) {
                res.status(201).json({
                    message: "Product deleted successfully"
                })
            } else {
                res.status(400).json({
                    message: "Invalid credentials"
                })
            }

            connection.release()
        })
    })
}