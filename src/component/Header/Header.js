import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const Header = () => {
    const { user, logout } = useAuth();
    const theme = useTheme();
    const useStyle = makeStyles({
        menuItem: {
            color: 'red'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            },
        },
        navContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            },
            [theme.breakpoints.up('sm')]: {
                display: 'flex',
                flexDirection: 'row'
            },

        }
    })
    const { menuItem, navIcon, navContainer } = useStyle();

    const [state, setState] = React.useState(false);

    // const toggleDrawer = (anchor, open) => (event) => {
    //     if (
    //         event &&
    //         event.type === 'keydown' &&
    //         (event.key === 'Tab' || event.key === 'Shift')
    //     ) {
    //         return;
    //     }

    //     setState({ ...state, [anchor]: open });
    // };

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
        >
            <List style={{ height: '100%' , backgroundColor: 'blue' }}>

                <ListItem button>
                    <ListItemText>

                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/home"><Button color="inherit">Home</Button></Link>

                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/explore"><Button color="inherit">Explore</Button></Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>

                    <ListItemText>
                        {
                            user?.email ?
                                <Box>
                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                        <Button color="inherit">Dashbard</Button>
                                    </NavLink>
                                    {user.displayName && <span style={{ fontSize:'14px', color:'pink' }}>Hello {user.displayName.toUpperCase()}</span>}
                                    <br/>
                                    <Button style={{ textDecoration: 'none', color: 'white' }} onClick={logout}>Logout</Button>
                                </Box>
                                :
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                    <Button>Login</Button>
                                </NavLink>
                        }
                    </ListItemText>
                </ListItem>
            </List>
            <Divider />

        </Box>
    );

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Fragrance For You
                        </Typography>
                        <Box className={navContainer}>
                            <Box>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/home"><Button color="inherit">Home</Button></Link>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/explore"><Button color="inherit">Explore</Button></Link>
                            </Box>
                            {
                                user?.email ?
                                    <Box>
                                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                            <Button color="inherit">Dashbard</Button>
                                        </NavLink>
                                        {user.displayName && <span style={{ color: 'white' }}>Hello <u>{user.displayName.toUpperCase()}</u></span>}
                                        <Button onClick={logout} color="inherit">Logout</Button>
                                    </Box>
                                    :
                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                        <Button color="inherit">Login</Button>
                                    </NavLink>
                            }
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>

                <React.Fragment>
                    <SwipeableDrawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </SwipeableDrawer>
                </React.Fragment>

            </div>
        </>
    );
};
export default Header;