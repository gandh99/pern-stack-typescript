import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button, Input, InputBase } from '@material-ui/core'

export default function LoginForm() {
    const classes = useStyles()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className={classes.root}>
            <InputBase
                className={classes.textInput}
                onChange={event => setUsername(event.target.value)}
                required
                placeholder={'Username'}
                value={username}
            />
            <InputBase
                className={classes.textInput}
                onChange={event => setPassword(event.target.value)}
                required
                placeholder={'Password'}
                type='password'
                value={password}
            />
            <Button
                className={classes.button}
                disableElevation
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
        margin: '1.5rem 0 0 0',
        backgroundColor: theme.palette.grey[300],
        opacity: 0.4,
        padding: '0.5rem 1rem',
        borderRadius: '10px'
    },
    button: {
        margin: '3rem 0 0 0',
        borderRadius: '10px',
        padding: '0.5rem 0',
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.grey[700],
    }
}))