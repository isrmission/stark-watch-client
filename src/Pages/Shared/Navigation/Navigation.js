import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const { user, logOut } = useAuth();
    // const img = 'https://i.ibb.co/6BB77sX/cover-removebg-preview.png';
    return (
        <Box sx={{ flexGrow: 1, }}>
            <AppBar style={{ backgroundColor: '#242424', position: 'fixed', top: 0 }} enableColorOnDark>
                {/* <Toolbar sx={{ width: "30%" }} >
                    <img style={{ width: '30%' }} src={img} alt="logo" />
                </Toolbar> */}
                <Toolbar>
                    <Typography align="left" variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Stark Watch
                        {/* {img} */}
                    </Typography>
                    <NavLink style={{ textDecoration: "none", color: "white" }} to="/"><Button color="inherit">Home</Button></NavLink>
                    <NavLink style={{ textDecoration: "none", color: "white" }} to="/explore"><Button color="inherit">Explore</Button></NavLink>
                    {user?.email ? <>
                        <NavLink style={{ textDecoration: "none", color: "white" }} to="/dashboard"><Button color="inherit">Dashboard</Button></NavLink>
                        <Button onClick={logOut} color="inherit">Logout</Button> </>
                        : <NavLink style={{ textDecoration: "none", color: "white" }} to="/login"><Button color="inherit">Login</Button></NavLink>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;