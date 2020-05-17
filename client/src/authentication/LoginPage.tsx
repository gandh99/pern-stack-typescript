import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LoginForm from './LoginForm'
import Logo from './Logo'
import Background from './Background'
import Message, { MessageProps } from './Message'

export default function LoginPage() {
    const classes = useStyles()
    const messageProps: MessageProps = {
        mainMessage: "Don't have an account?",
        link: '/register',
        linkMessage: 'Register now!'
    }

    return (
        <div className={classes.root}>
            <Background />
            <Logo />
            <LoginForm messageProps={messageProps} />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '4rem'
    },
}))