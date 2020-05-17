import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BackgroundImage from '../images/background.jpeg'

export default function Background() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        // background: 'linear-gradient(326deg, rgba(113,106,154,1) 15%, rgba(137,128,185,1) 78%)', 
        // backgroundImage: `url(${BackgroundImage})`,
        // backgroundSize: 'cover',
        backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
        opacity: 1,
        position: 'fixed',
        top: 0,
        height: '100vh',
        width: '100vw',
        zIndex: -5
    },
}))