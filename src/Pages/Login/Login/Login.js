import { Alert, Button, CircularProgress, Container } from '@mui/material';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Box } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';
import Navigation from '../../Shared/Navigation/Navigation';


const Login = () => {
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();
    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }


    return (<>
        <Navigation></Navigation>
        <Container>
            <Box sx={{ border: "1px solid black", borderRadius: '10px', width: '40%', mt: '100px', mx: 'auto' }}>
                <Typography sx={{ mt: 5 }} variant="h5" gutterBottom component="div">
                    Please Login
                </Typography>
                {isLoading ? <Box sx={{ my: 5, display: 'flex', justifyContent: 'center' }}><CircularProgress />
                </Box> :
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '250px', mt: 1 }}
                            required
                            id="standard-basic"
                            label="Your Email"
                            defaultValue=""
                            variant="standard"
                            type="email"
                            name="email"
                            onBlur={handleOnChange}
                        />
                        <br />
                        <TextField
                            required
                            sx={{ width: '250px', mt: 1 }}
                            id="standard-password-input"
                            label="Your Password"
                            name="password"
                            onBlur={handleOnChange}
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <br />
                        <Button sx={{ width: '250px', mt: 3 }} type="submit" variant="outlined">Login</Button>
                        <br />
                        {user?.email && <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}> <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                            Logged in Successfully!
                        </Alert></Box>
                        }
                        {authError && <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}><Alert severity="error">{authError}</Alert></Box>
                        }
                        <br />
                        <NavLink style={{ textDecoration: "none" }} to="/register">
                            <Button sx={{ width: '250px', mt: 1 }} variant="text">NEW USER? PLEASE REGISTER</Button>
                        </NavLink>
                    </form>}
                <p>--------------------------</p>
                <Button onClick={handleGoogleSignIn} sx={{ mb: 5 }} type="submit" variant="contained">Google Sign In</Button>

            </Box>
        </Container>
    </>

    );
};

export default Login;