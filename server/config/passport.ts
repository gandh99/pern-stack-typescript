const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const User = require('../models/User')

passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser((id, done) => User.findById(id, (err, user) => done(err, user)))

function initialize(passport) {
    const authenticateUser = (username, password, done) => {
        // Match User
        User.findOne({ username })
            .then(user => {
                if (!user) {
                    return done(null, false, 'Invalid username/password.')
                } else {
                    // Match password
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) throw err

                        if (isMatch) {
                            return done(null, user, 'Login successful.')
                        } else {
                            return done(null, false, 'Invalid username/password.')
                        }
                    })
                }
            })
            .catch(err => {
                return done(null, false, { message: err })
            })
    }

    passport.use(new LocalStrategy({ usernameField: 'username', passwordField: 'password' },
        authenticateUser))
}

module.exports = initialize