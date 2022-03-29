import {Container, makeStyles } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10)
    },

}))


function Rightbar() {
    const classess = useStyles()
    return (
        <Container className={classess.container}>
            a
        </Container>
        
    )
}

export default Rightbar