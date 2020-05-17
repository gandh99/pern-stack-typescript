import passport from 'passport'
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const Users = require('../models/Users')

passport.serializeUser<any, any>((user, done) => done(null, user.userId))

passport.deserializeUser((userId: number, done) => done(null, Users.findById(userId)))

function initialize(passport: any) {
    const authenticateUser = (username: string, password: string, done: any) => {
        // Match User
        Users
            .findByUsername(username)
            .then((user: any) => {
                if (!user) {
                    return done(null, false, 'Invalid username/password.')
                } else {
                    // Match password
                    bcrypt.compare(password, user.password, (err: Error, isMatch: boolean) => {
                        if (err) throw err

                        if (isMatch) {
                            return done(null, user, { message: 'Login successful.' })
                        } else {
                            return done(null, false, { message: 'Invalid username/password.' })
                        }
                    })
                }
            })
            .catch((err: Error) => {
                return done(null, false, { message: err })
            })
    }

    passport.use(new LocalStrategy({ usernameField: 'username', passwordField: 'password' },
        authenticateUser))
}

module.exports = initialize