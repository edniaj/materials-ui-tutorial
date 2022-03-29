import {Button,Typography, Container, makeStyles, Card, CardActionArea,CardMedia, CardContent, CardActions } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10)
    },
    media:{
        height:250,
        // width:"100%",
        backgroundSize: 'contain'

    }
}))

function Post() {
    const classess = useStyles()
    return (
        <Container>
            <Card>
                <CardActionArea>
                    <CardMedia className={classess.media} title="My Post" 
                    image="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"/>
                        
                    <CardContent>
                        <Typography gutterBottom variant="h5">My first post</Typography>
                        <Typography gutterBottom variant="body2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae earum libero autem quia eveniet fuga voluptates consequuntur a, vitae dicta, itaque non neque maiores at quibusdam praesentium blanditiis aliquid ad! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae earum libero autem quia eveniet fuga voluptates consequuntur a, vitae dicta, itaque non neque maiores at quibusdam praesentium blanditiis aliquid ad!</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">Share</Button>
                    <Button></Button>
                </CardActions>
            </Card>
            <Card>
                <CardActionArea>
                    <CardMedia className={classess.media} title="My Post" 
                    image="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"/>
                        
                    <CardContent>
                        <Typography gutterBottom variant="h5">My first post</Typography>
                        <Typography gutterBottom variant="body2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae earum libero autem quia eveniet fuga voluptates consequuntur a, vitae dicta, itaque non neque maiores at quibusdam praesentium blanditiis aliquid ad! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae earum libero autem quia eveniet fuga voluptates consequuntur a, vitae dicta, itaque non neque maiores at quibusdam praesentium blanditiis aliquid ad!</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">Share</Button>
                    <Button></Button>
                </CardActions>
            </Card>
            <Card>
                <CardActionArea>
                    <CardMedia className={classess.media} title="My Post" 
                    image="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"/>
                        
                    <CardContent>
                        <Typography gutterBottom variant="h5">My first post</Typography>
                        <Typography gutterBottom variant="body2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae earum libero autem quia eveniet fuga voluptates consequuntur a, vitae dicta, itaque non neque maiores at quibusdam praesentium blanditiis aliquid ad! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae earum libero autem quia eveniet fuga voluptates consequuntur a, vitae dicta, itaque non neque maiores at quibusdam praesentium blanditiis aliquid ad!</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">Share</Button>
                    <Button></Button>
                </CardActions>
            </Card>
            <Card>
                <CardActionArea>
                    <CardMedia className={classess.media} title="My Post" 
                    image="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"/>
                        
                    <CardContent>
                        <Typography gutterBottom variant="h5">My first post</Typography>
                        <Typography gutterBottom variant="body2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae earum libero autem quia eveniet fuga voluptates consequuntur a, vitae dicta, itaque non neque maiores at quibusdam praesentium blanditiis aliquid ad! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae earum libero autem quia eveniet fuga voluptates consequuntur a, vitae dicta, itaque non neque maiores at quibusdam praesentium blanditiis aliquid ad!</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">Share</Button>
                    <Button></Button>
                </CardActions>
            </Card>
        </Container>
    )
}

export default Post