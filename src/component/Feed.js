import { Container, makeStyles } from '@material-ui/core'
import React from 'react'
import Post from './Post'

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10)
    }
}))

function Feed() {
    const classess=useStyles()
    return (
        <Container className={classess.container}>
            <Post/>
        </Container>
    )
}

export default Feed