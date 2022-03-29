import { Container, makeStyles, Typography } from '@material-ui/core'
import { Home } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        color: 'white',
        paddingTop: theme.spacing(10),
        // backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.up("sm")]: {
            color: '#555',
            border: "1px solid #ece7e7"
        },
        top:0,
        position:'sticky'
    },
    items: {
        display: 'flex',
        alignItems: "center",
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            marginBottom:theme.spacing(10)
        }
    },

    text:{
        [theme.breakpoints.down("sm")]:{
            display: "none"
        },
        fontWeight:500
    },
    icon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            fontSize: "18px"
        }
    }
}))

function Leftbar() {
    const classess = useStyles()
    return (
        <Container className={classess.container}>
            <div className={classess.items}>
                <Home className={classess.icon} />
                <Typography className={classess.text}>Homepage</Typography>
            </div>
            <div className={classess.items}>
                <Home className={classess.icon} />
                <Typography className={classess.text}>Homepage</Typography>
            </div>
            <div className={classess.items}>
                <Home className={classess.icon} />
                <Typography className={classess.text}>Homepage</Typography>
            </div>
            <div className={classess.items}>
                <Home className={classess.icon} />
                <Typography className={classess.text}>Homepage</Typography>
            </div>
            <div className={classess.items}>
                <Home className={classess.icon} />
                <Typography className={classess.text}>Homepage</Typography>
            </div>
            <div className={classess.items}>
                <Home className={classess.icon} />
                <Typography className={classess.text}>Homepage</Typography>
            </div>
        </Container>
    )
}

export default Leftbar