import { pool } from "./users.js"

export const add = async (req, res) => {
    const employee = req.body

    pool.getConnection((err, connection) => {
        if (err) throw err
        const query = `INSERT INTO staff(last_name, first_name, email, phone, location, salary, birthday, hiring_date, id_job) VALUES ('${employee.last_name}', '${employee.first_name}', '${employee.email}', '${employee.phone}', '${employee.location}', ${employee.salary}, '${employee.birthday}', '${employee.hiring_date}', ${employee.id_job})`
        
        connection.query(query, (err, result) => {
            if (err) throw err
            const { affectedRows } = result

            if(affectedRows === 1) {
                res.status(201).json({
                    message: "Employee added successfully"
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
        const query = "SELECT * FROM staff"
        
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
        const query = `SELECT * FROM staff WHERE id = ${id}`
        
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
    const { ...employee } = req.body

    pool.getConnection((err, connection) => {
        if (err) throw err
        const query = `UPDATE staff SET last_name = '${employee.last_name}', first_name = '${employee.first_name}', email = '${employee.email}', phone = '${employee.phone}', location = '${employee.location}', salary = ${employee.salary}, birthday = '${employee.birthday}', hiring_date = '${employee.hiring_date}', id_job = ${employee.id_job} WHERE id = ${id}`
        
        connection.query(query, (err, result) => {
            if (err) throw err
            const { changedRows } = result

            if(changedRows === 1) {
                res.status(200).json({
                    message: "Employee updated successfully"
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

export const deleteEmployee = async (req, res) => {
    const { id } = req.params

    pool.getConnection((err, connection) => {
        if (err) throw err
        const query = `DELETE FROM employee WHERE id = ${id}`
        
        connection.query(query, (err, result) => {
            if (err) throw err
            const { affectedRows } = result

            if(affectedRows === 1) {
                res.status(200).json({
                    message: "Employee deleted successfully"
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