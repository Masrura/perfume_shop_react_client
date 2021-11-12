import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useRouteMatch
} from "react-router-dom";
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import AdminRoute from '../../AdminRoute/AdminRoute';
import './Dashboard.css'
const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, logout } = useAuth();
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            {admin ?
                <Box className="menu-box">
                    <Link to={`${url}/manage-all-order`}><Button color="inherit">Manage All Order</Button></Link>
                    <Link to={`${url}/manage-product`}><Button color="inherit">Manage Product</Button></Link>
                    <Link to={`${url}/add-product`}><Button color="inherit">Add Product</Button></Link>
                    <Link to={`${url}/make-admin`}><Button color="inherit">Make Admin</Button></Link>
                    <Link to={`${url}/make-admin`}> <Button onClick={logout} color="inherit">Logout</Button></Link>
                </Box>
                :
                <Box className="menu-box">
                    <Link to={`${url}/payment`}><Button color="inherit">Payment</Button></Link>
                    <Link to={`${url}/my-order`}><Button color="inherit">My Order</Button></Link>
                    <Link to={`${url}/review`}><Button color="inherit">Review</Button></Link>
                    <Link to={`${url}/make-admin`}> <Button onClick={logout} color="inherit">Logout</Button></Link>
                </Box>
            }
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar
                   
                >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>

                    {admin ?
                        <AdminRoute exact path={path}>
                            <ManageAllOrders></ManageAllOrders>
                        </AdminRoute>
                        :
                        <Route exact path={path}>
                            <MyOrders></MyOrders>
                        </Route>
                    }

                     
                    <Route exact path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route exact path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route exact path={`${path}/my-order`}>
                        <MyOrders></MyOrders>
                    </Route>
        

                    <AdminRoute path={`${path}/make-admin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/add-product`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manage-product`}>
                        <ManageProduct></ManageProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manage-all-order`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;