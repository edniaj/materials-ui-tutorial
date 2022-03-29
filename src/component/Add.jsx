import { TextField, Modal, Tooltip, Fab, Container, makeStyles } from '@material-ui/core'
import { Add as AddIcon } from '@material-ui/icons'
import React, { useState } from 'react'



const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: 10,
        right: 10
    },
    container: {
        width: 500,
        height: 550,
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto"
    }
}))

function Add() {
    const classess = useStyles()
    const [open, setOpen] = useState(false)

    return (
        <>
            <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}  >
                <Fab color="primary" className={classess.fab}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Container className={classess.container}>
                    <form className={classess.form} autoComplete="off">
                        <div className={classess.item}>
                            <TextField id="standard-basic" label="Standard" variant="standard" size="small" style={{ width: "100%" }} />
                            <TextField
                                id="outlined-multiline-static"
                                label="Multiline"
                                multiline
                                rows={4}
                                defaultValue="Default Value"/>
                            
                        </div>
                    </form>
                </Container>
            </Modal>


        </>


    )
}

export default Add