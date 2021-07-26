import { AppBar,Button,Container,Drawer, Icon, IconButton, List, ListItem,ListItemIcon,ListItemText, Toolbar, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from '../../theme/useStyles';
import {Link} from 'react-router-dom';

const MenuAppBar = () => {
    const [open,setOpen]=useState(false);
    const classes = useStyles();
    const openToogle =()=>{
        setOpen(true);
    }
    const closeToogle =()=>{
        setOpen(false);
    }
    return (
        <div>
            <AppBar position="static" className={classes.appBar}>
            <Container>
                <Toolbar>
                    <div className={classes.sectionMobile}>
                        <IconButton color ="inherit" onClick={openToogle}>
                            <Icon fontSize="large">menu</Icon>
                        </IconButton>
                    </div>
                    <Drawer open={open} onClose={closeToogle}>
                        <div className={classes.list}>
                            <List>
                                <ListItem button onClick={closeToogle} className={classes.listItem}>
                                    <Link to="/login" color="inherit" className={classes.linkAppBarMobile} underline="none">
                                        <ListItemIcon className={classes.listItemIcon}>
                                            <Icon>
                                                person
                                            </Icon>
                                        </ListItemIcon>
                                        <ListItemText>
                                            Login
                                        </ListItemText>
                                    </Link>
                                </ListItem>
                            </List>
                        </div>
                    </Drawer>
                    <div className={classes.grow} to="/login">
                        <Link color="inherit" underline="none" className={classes.linkAppBarLogo}>
                        <Icon className={classes.mr} fontSize="large">
                            store
                        </Icon>
                        <Typography variant="h5">
                            VAXI SHOP
                        </Typography>
                        </Link>
                    </div>
                    <div className={classes.sectionDesktop}>
                        <Button color="inherit" className={classes.buttonIcon}>
                        <Link to="/login" color="inherit" className={classes.linkAppBarDesktop}>
                            <Icon className={classes.mr}>person</Icon>
                            LOGIN
                        </Link>
                        </Button>
                    </div>

                </Toolbar>
            </Container>
        </AppBar>
        </div>
    );
};

export default MenuAppBar;
