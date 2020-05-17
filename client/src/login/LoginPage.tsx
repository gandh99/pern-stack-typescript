import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LoginForm from './LoginForm'
import Logo from './Logo'
import Background from './Background'
import Message from './Message'

export default function LoginPage() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Background />
            <Logo />
            <LoginForm />
            <Message mainMessage={"Don't have an account?"} link={'/register'} linkMessage={'Register now!'} />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '6rem'
    },
}))