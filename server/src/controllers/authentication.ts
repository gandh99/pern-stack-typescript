import { Request, Response, NextFunction } from 'express'
const bcrypt = require('bcrypt')
const Users = require('../models/Users')
const passport = require('passport')
const jwt = require('jsonwebtoken')

module.exports.login = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('local', (err: Error, user: any, message: string) => {
        if (err) throw err

        if (!user) {
            res.status(400).json({
                message,
                data: null
            })
        } else {
            let userData = {
                user_id: user.user_id,
                username: user.username
            }

            // Create the access token and refresh token
            const accessToken = jwt.sign({ userData }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' })
            const refreshToken = jwt.sign({ userData }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' })

            // Send the tokens back
            res.status(200).json({
                message,
                data: {
                    accessToken, refreshToken, userData
                }
            })
        }
    })(req, res, next)
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

module.exports.refresh = (req: Request, res: Response, next: NextFunction) => {
    const { refreshToken } = req.body

    if (!refreshToken) {
        return res.status(400).json({
            data: null,
            message: 'No refresh token provided.'
        })
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err: Error, tokenData: any) => {
        if (err) throw err

        const userData = tokenData.userData
        const accessToken = jwt.sign({ userData }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' })
        res.status(200).json({
            data: accessToken
        })
    })
}

module.exports.checkAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']
    
    if (!token) {
        return res.status(401).json({
            data: null,
            message: 'No token provided. Authorisation denied.'
        })
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: Error, tokenData: any) => {
        if (err) {
            return res.status(401).json({
                data: null,
                message: 'Invalid token provided.'
            })
        }

        // Add the token data to the request. It contains userData: {id, username}
        req.body.tokenData = tokenData
        next()
    })
}