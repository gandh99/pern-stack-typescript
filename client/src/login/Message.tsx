import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

export default function Message(props: { mainMessage: string, link: string, linkMessage: string }) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Typography className={classes.message} variant="h6">
                {props.mainMessage} <a className={classes.link} href={props.link}>{props.linkMessage}</a>
            </Typography>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
    },
    message: {
        fontSize: 14,
        fontWeight: 'normal'
    },
    link: {
        color: theme.palette.secondary.light,
        cursor: 'pointer',
        textDecoration: 'none'
    }
}))