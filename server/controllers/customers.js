import { pool } from "./users.js"

export const add = async (req, res) => {
    const customer = req.body

    pool.getConnection((err, connection) => {
        if (err) throw err
        const query = `INSERT INTO customers(last_name, first_name, email, phone, location) VALUES ('${customer.last_name}', '${customer.first_name}', '${customer.email}', '${customer.phone}', '${customer.location}')`
        
        connection.query(query, (err, result) => {
            if (err) throw err
            const { affectedRows } = result

            if(affectedRows === 1) {
                res.status(201).json({
                    message: "Customer added successfully"
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
        const query = "SELECT * FROM customers"
        
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
        const query = `SELECT * FROM customers WHERE id = ${id}`
        
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
    const { ...customer } = req.body

    pool.getConnection((err, connection) => {
        if (err) throw err
        const query = `UPDATE customers SET last_name = '${customer.last_name}', first_name = '${customer.first_name}', email = '${customer.email}', phone = '${customer.phone}', location = '${customer.location}' WHERE id = ${id}`
        
        connection.query(query, (err, result) => {
            if (err) throw err
            const { changedRows } = result

            if(changedRows === 1) {
                res.status(200).json({
                    message: "Customer updated successfully"
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

export const deleteCustomer = async (req, res) => {
    const { id } = req.params

    pool.getConnection((err, connection) => {
        if (err) throw err
        const query = `DELETE FROM customers WHERE id = ${id}`
        
        connection.query(query, (err, result) => {
            if (err) throw err
            const { affectedRows } = result

            if(affectedRows === 1) {
                res.status(200).json({
                    message: "Customer deleted successfully"
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