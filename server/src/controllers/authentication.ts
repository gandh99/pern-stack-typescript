import { Request, Response } from 'express'
const bcrypt = require('bcrypt')
const Users = require('../models/Users')

module.exports.login = (req: Request, res: Response) => {

}

module.exports.register = async (req: Request, res: Response) => {
    const { username, password } = req.body
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await Users.create(username, hashedPassword)
        res.status(200).json({
            message: 'Registration success.',
            data: null
        })
    } catch (error) {
        res.status(401).json({
            message: 'Registration failure.',
            data: null
        })
    }
}