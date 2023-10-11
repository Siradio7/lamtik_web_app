import { pool } from "../utils/dbPool.js"

export const add = async (req, res) => {
    const provider = req.body

    pool.getConnection((err, connection) => {
        if (err) throw err
        const query = `INSERT INTO providers(name, email, phone, location) VALUES ('${provider.name}', '${provider.email}', '${provider.phone}', '${provider.location}')`
        
        connection.query(query, (err, result) => {
            if (err) throw err
            const { affectedRows } = result

            if(affectedRows === 1) {
                res.status(201).json({
                    message: "Provider added successfully"
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
        const query = "SELECT * FROM providers"
        
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
        const query = `SELECT * FROM providers WHERE id = ${id}`
        
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
    const { ...provider } = req.body

    pool.getConnection((err, connection) => {
        if (err) throw err
        const query = `UPDATE providers SET name = '${provider.name}', email = '${provider.email}', phone = '${provider.phone}', location = '${provider.location}' WHERE id = ${id}`
        
        connection.query(query, (err, result) => {
            if (err) throw err
            const { changedRows } = result

            if(changedRows === 1) {
                res.status(200).json({
                    message: "Provider updated successfully"
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

export const deleteProvider = async (req, res) => {
    const { id } = req.params

    pool.getConnection((err, connection) => {
        if (err) throw err
        const query = `DELETE FROM providers WHERE id = ${id}`
        
        connection.query(query, (err, result) => {
            if (err) throw err
            const { affectedRows } = result

            if(affectedRows === 1) {
                res.status(200).json({
                    message: "Provider deleted successfully"
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