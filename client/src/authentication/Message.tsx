import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

export interface MessageProps {
    mainMessage: string,
    link: string,
    linkMessage: string
}

export default function Message(props: { messageProps: MessageProps }) {
    const classes = useStyles()
    const { mainMessage, link, linkMessage } = props.messageProps

    return (
        <div className={classes.root}>
            <Typography className={classes.message} variant="h6">
                {mainMessage} <a className={classes.link} href={link}>{linkMessage}</a>
            </Typography>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '2rem'
    },
    message: {
        fontSize: 14,
        fontWeight: 'normal',
        color: theme.palette.grey[800]
    },
    link: {
        color: theme.palette.secondary.main,
        cursor: 'pointer',
        textDecoration: 'none',
        fontWeight: 500
    }
}))