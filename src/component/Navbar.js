import { makeStyles, AppBar, Toolbar, Typography, InputBase, Badge, Avatar } from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { alpha } from "@mui/system";
import { useState } from "react";





const useStyles = makeStyles((theme) => ({
    button: {
        ...theme.myButton
    },
    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    search: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        }, 
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.down("sm")]: {
            display: (props) => props.open ? 'none' : 'flex',
        }
    },
    searchButton:{
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            display: (props) => props.open ? 'inline-block' : 'none',
        }
    },
    icons: {
        display:"flex",
        alignItems:"center",
    },
    badge: {
        marginRight: theme.spacing(2)
    }

}))

function Navbar() {

    const [open, setOpen] = useState(false)
    const classess = useStyles({open})
    return (
        <AppBar position="fixed">
            <Toolbar className={classess.toolbar}>
                <Typography variant="h6" className={classess.logoLg}>
                    Lama Dev
                </Typography>
                <Typography variant="h6" className={classess.logoSm}>
                    LAMA
                </Typography>
                <div className={classess.search}>
                    <Search />
                    <InputBase placeholder="Search" className={classess.input}/>
                    <Cancel onClick ={() => setOpen(!open) } />
                </div>
                <div className={classess.icon}>
                    <Search className={classess.searchButton} onClick ={() => setOpen(!open) }/>
                    <Badge className={classess.badge}badgeContent={4} color="secondary">
                        <Mail />
                    </Badge>
                    <Badge  className={classess.badge}badgeContent={2} color="secondary">
                        <Notifications />
                    </Badge>
                    <Badge className={classess.badge}>
                        <Avatar src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcomicbook.com%2Fnews%2Ffamily-guys-brian-griffin-officially-returns-from-the-dead%2F&psig=AOvVaw3ujd8qtIyTJVfEFbDcJCrh&ust=1648566770436000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNCF1feL6fYCFQAAAAAdAAAAABAN" />

                    </Badge>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
