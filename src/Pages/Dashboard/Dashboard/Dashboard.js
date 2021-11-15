import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, CircularProgress } from '@mui/material';
import OrdersList from '../OrdersList/OrdersList';
import useAuth from '../../../hooks/useAuth';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddAProduct from '../AddAProduct/AddAProduct';
import Pay from '../Pay/Pay';
import ManageProducts from './ManageProducts/ManageProducts';
import Review from '../Review/Review';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import AdminRoute from '../../Login/Login/AdminRoute/AdminRoute';

const drawerWidth = 220;


function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const img = 'https://i.ibb.co/8PC2FVD/cover.png';
    const { logOut, admin, user } = useAuth();
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div sx={{ backgroundColor: '#C0C0C0' }}>
            <Toolbar>
                <Link to="/"> <img style={{ width: '100%' }} src={img} alt="logo" /></Link>
            </Toolbar>
            <Divider />
            <List>
                <ListItem sx={{ display: 'flex', flexDirection: 'column', p: 0 }}>
                    {!admin &&
                        <>
                            <Link to={`${url}`} style={{ width: '100%', textDecoration: 'none' }}><Button sx={{ border: '1px solid goldenrod', ":hover": { backgroundColor: 'blue', color: 'white', borderRadius: 0 } }} style={{ width: "100%", margin: "5px 0", padding: "10px 0", fontSize: "16px" }}>My Orders</Button></Link>
                            <Link to={`${url}/review`} style={{ width: '100%', textDecoration: 'none' }}> <Button sx={{ border: '1px solid goldenrod', ":hover": { backgroundColor: 'blue', color: 'white', borderRadius: 0 } }} style={{ width: "100%", margin: "5px 0", fontSize: "16px" }}>Review</Button></Link>
                            <Link to={`${url}/payment`} style={{ width: '100%', textDecoration: 'none' }}><Button sx={{ border: '1px solid goldenrod', ":hover": { backgroundColor: 'blue', color: 'white', borderRadius: 0 } }} style={{ width: "100%", margin: "5px 0", fontSize: "16px" }}>Pay</Button></Link>
                        </>
                    }

                    {
                        admin && <>
                            <Link to={`${url}/manageallorders`} style={{ width: '100%', textDecoration: 'none' }}><Button sx={{ border: '1px solid goldenrod', ":hover": { backgroundColor: 'blue', color: 'white', borderRadius: 0 } }} style={{ width: "100%", margin: "5px 0", padding: "10px 0", fontSize: "16px" }}>Manage All Orders</Button></Link>

                            <Link to={`${url}/addaproduct`} style={{ width: '100%', textDecoration: 'none' }}><Button sx={{ border: '1px solid goldenrod', ":hover": { backgroundColor: 'blue', color: 'white', borderRadius: 0 } }} style={{ width: "100%", margin: "5px 0", padding: "10px 0", fontSize: "16px" }}>Add A Product</Button></Link>

                            <Link to={`${url}/makeadmin`} style={{ width: '100%', textDecoration: 'none' }}><Button sx={{ border: '1px solid goldenrod', ":hover": { backgroundColor: 'blue', color: 'white', borderRadius: 0 } }} style={{ width: "100%", margin: "5px 0", padding: "10px 0", fontSize: "16px" }}>Make Admin</Button></Link>

                            <Link to={`${url}/manageproducts`} style={{ width: '100%', textDecoration: 'none' }}><Button sx={{ border: '1px solid goldenrod', ":hover": { backgroundColor: 'blue', color: 'white', borderRadius: 0 } }} style={{ width: "100%", margin: "5px 0", padding: "10px 0", fontSize: "16px" }}>Manage Products</Button></Link>
                        </>
                    }

                    <Button onClick={logOut} sx={{ border: '1px solid goldenrod', ":hover": { backgroundColor: 'red', color: 'white', borderRadius: 0 } }} style={{ width: "100%", margin: "5px 0", fontSize: "16px" }}>Logout</Button>
                </ListItem>
            </List>
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>{
            !admin ?
                <CircularProgress />

                :
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar
                        position="fixed"
                        sx={{
                            width: { sm: `calc(100% - ${drawerWidth}px)` },
                            ml: { sm: `${drawerWidth}px` },
                        }}
                    >
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>

                            <Box sx={{ width: '70%' }}>
                                <Typography align="left" variant="h6" noWrap component="div">
                                    Dashboard
                                </Typography>
                            </Box>
                            <Box sx={{ flexShrink: 1 }}>
                                <Typography align="right" variant="h6" wrap >
                                    Welcome, {user?.displayName}
                                </Typography>
                            </Box>

                        </Toolbar>
                    </AppBar>
                    <Box
                        component="nav"
                        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
                            <Route exact path={path}>
                                <DashboardHome></DashboardHome>
                            </Route>
                            <AdminRoute path={`${path}/makeadmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <AdminRoute path={`${path}/addaproduct`}>
                                <AddAProduct></AddAProduct>
                            </AdminRoute>
                            <Route path={`${path}/payment`}>
                                <Pay></Pay>
                            </Route>
                            <AdminRoute path={`${path}/manageproducts`}>
                                <ManageProducts></ManageProducts>
                            </AdminRoute>
                            <Route path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <AdminRoute path={`${path}/manageallorders`}>
                                <ManageAllOrders></ManageAllOrders>
                            </AdminRoute>

                        </Switch>
                    </Box>
                </Box>
        }

        </>
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
