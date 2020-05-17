import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import LogoImage from '../images/logo.png'

export default function Logo() {
    const classes = useStyles()

    return (
        <div>
            <img className={classes.logoImage} src={LogoImage} />
            <Typography className={classes.logoText} variant="h5" component="h2">
                Scribbler
            </Typography>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    logoImage: {
        width: '5rem',
        height: '5rem'
    },
    logoText: {
        color: 'white',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        fontWeight: 800
    },
}))