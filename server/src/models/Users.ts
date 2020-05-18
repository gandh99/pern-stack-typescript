import { Request, Response } from 'express'
const client = require('../config/db');

module.exports.findById = async (id: number) => {
    const query: string = `SELECT * FROM users WHERE user_id = ($1) LIMIT 1`
    
    try {
        const res = await client.query(query, [id])
        return res.rows[0]
    } catch (error) {
        console.error(error)
    }
}

module.exports.findByUsername = async (username: string) => {
    const query: string = `SELECT * FROM users WHERE username = ($1) LIMIT 1`

    try {
        const res = await client.query(query, [username])
        return res.rows[0]
    } catch (error) {
        console.error(error)
    }
}

module.exports.create = async (username: string, password: string) => {
    const query: string = `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *`

    try {
        const res = await client.query(query, [username, password])
        return res.rows[0]
    } catch (error) {
        console.error(error)
    }
}