import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

export default function Logo() {
    const classes = useStyles()

    return (
        <div>
            <Typography className={classes.logo} variant="h5" component="h2">
                Scribbler
            </Typography>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    logo: {

    },
}))