import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

export default function Background() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
        opacity: 1,
        position: 'fixed',
        top: 0,
        height: '100vh',
        width: '100vw',
        zIndex: -5
    },
}))