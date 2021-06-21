import React from "react";
import {AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, makeStyles} from "@material-ui/core"
import {AccountCircle} from "@material-ui/icons"


function NavBarAdmin(props){
    const classes=useStyles();
    const [auth,setAuth]=React.useState(true);
    const [anchorEl, setAnchorEl]=React.useState(null);
    const open=Boolean(anchorEl);
    const handleClose = () => {
        localStorage.removeItem('room');
        props.setUserState();
        setAnchorEl(null);
    }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    return(
        <div className={classes.root}>
            <AppBar position={"static"} className={classes.menubackground}>
                <Toolbar>
                    <Typography variant={"h6"} className={"classes.title"}>
                        Esplanade Hotel Zagreb
                    </Typography>
                    {auth && (
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem>Profil</MenuItem>
                                <MenuItem onClick={handleClose}>Odjavite se</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}

const useStyles=makeStyles((theme)=>({
    root:{
        flexGrow:1
    },
    menubackground:{
        background:'linear-gradient(45deg, #ada282 30%, #8c7432  90%)'
    },
    title:{
        flexGrow:1
    }
}));

export default NavBarAdmin;