import { Request, Response } from 'express'
const client = require('../config/db');
const bcrypt = require("bcrypt");

module.exports.get = (req: Request, res: Response) => {
    const query: string = `SELECT * FROM users ORDER BY userId ASC`
    client.query(query, (err: Error, results: any) => {
        if (err) throw err
        console.log(results)
        res.status(200).json(results)
    })
}

module.exports.findById = (id: number, done: any) => {
    const query: string = `SELECT * FROM users WHERE userId = ? LIMIT 1`
    client.query(query, id, (err: Error, results: any) => {
        if (err) throw err
        done(results[0])
    })
}

module.exports.findByUsername = (username: string, done: any) => {
    const query: string = `SELECT * FROM users WHERE username = ? LIMIT 1`
    client.query(query, username, (err: Error, results: any) => {
        if (err) throw err
        done(results[0])
    })
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