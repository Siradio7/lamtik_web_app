import { pool } from "../utils/dbPool.js"

export const add = async (req, res) => {
    const category = req.body

    pool.getConnection((err, connection) => {
        if (err) throw err
        const query = `INSERT INTO categories(name, description) VALUES ('${category.name}', '${category.description}')`
        
        connection.query(query, (err, result) => {
            if (err) throw err
            const { affectedRows } = result

            if(affectedRows === 1) {
                res.status(201).json({
                    message: "Category added successfully"
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
        const query = "SELECT * FROM categories"
        
        connection.query(query, (err, result) => {
            if (err) throw err

            if(result) {
                res.status(200).json({ ...result })
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
        const query = `SELECT * FROM categories WHERE id = ${id}`
        
        connection.query(query, (err, result) => {
            if (err) throw err

            if(result) {
                res.status(200).json({ ...result })
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
    const { ...category } = req.body

    pool.getConnection((err, connection) => {
        if (err) throw err
        const query = `UPDATE categories SET name = '${category.name}', description = '${category.description}' WHERE id = ${id}`
        
        connection.query(query, (err, result) => {
            if (err) throw err
            const { changedRows } = result

            if(changedRows === 1) {
                res.status(200).json({
                    message: "Category updated successfully"
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

export const deleteCategory = async (req, res) => {
    const { id } = req.params

    pool.getConnection((err, connection) => {
        if (err) throw err
        const query = `DELETE FROM categories WHERE id = ${id}`
        
        connection.query(query, (err, result) => {
            if (err) throw err
            const { affectedRows } = result

            if(affectedRows === 1) {
                res.status(200).json({
                    message: "Category deleted successfully"
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