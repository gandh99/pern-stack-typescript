import React, { useState, FormEvent } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, InputBase } from '@material-ui/core'
import { usernameIsValid, passwordIsValid } from '../utils/validation/authentication'
import Message from './Message'
import { AuthenticationForm } from './AuthenticationPage'

export default function LoginForm(props: { setForm: any }) {
    const classes = useStyles()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (event: FormEvent, username: string, password: string): void => {
        event.preventDefault()

        if (usernameIsValid(username.trim()) && passwordIsValid(password.trim())) {
        }

        resetForm()
    }

    const resetForm = (): void => {
        setUsername('')
        setPassword('')
    }

    return (
        <form className={classes.root} onSubmit={event => onSubmit(event, username, password)}>
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
                onClick={event => onSubmit(event, username, password)}
                className={classes.button}
                disableElevation
                type='submit'
                variant="contained"
                color="primary">
                Login
            </Button>
            <Message
                mainMessage={"Don't have an account?"}
                linkMessage={'Register now!'}
                setForm={props.setForm}
                link={AuthenticationForm.REGISTER}
            />
        </form>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem 2rem 2rem 2rem',
        backgroundColor: 'white',
        margin: '2.5rem auto 0 auto',
        maxWidth: '35rem',
        borderRadius: '10px'
    },
    textInput: {
        margin: '1.5rem 0 0 0',
        backgroundColor: theme.palette.grey[300],
        opacity: 0.4,
        padding: '0.5rem 1rem',
        borderRadius: '10px'
    },
    button: {
        margin: '1.5rem 0 0 0',
        borderRadius: '10px',
        padding: '0.5rem 0',
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.grey[700],
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
        }
    }
}))