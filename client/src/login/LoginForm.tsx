import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button } from '@material-ui/core'

export default function LoginForm() {
    const classes = useStyles()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className={classes.root}>
            <TextField
                className={classes.textInput}
                onChange={event => setUsername(event.target.value)}
                required
                placeholder={'Username'}
                value={username}
            />
            <TextField
                className={classes.textInput}
                onChange={event => setPassword(event.target.value)}
                required
                placeholder={'Password'}
                type='password'
                value={password}
            />
            <Button
                className={classes.button}
                type='submit'
                variant="contained"
                color="primary">
                Login
            </Button>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem'
    },
    textInput: {
        margin: '1.5rem 0 0 0'
    },
    button: {
        margin: '4rem 0 0 0',
        borderRadius: '30px',
        padding: '0.7rem 0'
    }
}))