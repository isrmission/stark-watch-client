import { Alert, Button, CircularProgress, Container, LinearProgress } from '@mui/material';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Box } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';
import Navigation from '../../Shared/Navigation/Navigation';




const Register = () => {
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();

    const [loginData, setLoginData] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        // console.log(newLoginData);
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            // <Alert severity="warning">Password didn't match — check it out!</Alert>
            alert('Password didnot match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }
    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Box sx={{ border: "1px solid black", borderRadius: '10px', width: '40%', mt: '120px', mx: 'auto' }}>
                    <Typography sx={{ mt: 5 }} variant="h5" gutterBottom component="div">
                        Please Register
                    </Typography>
                    {isLoading ? <Box sx={{ my: 5, display: 'flex', justifyContent: 'center' }}><CircularProgress />
                    </Box> :
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '250px', mt: 1 }}
                                required
                                id="standard-basic"
                                label="Your Name"
                                variant="standard"
                                name="name"
                                onBlur={handleOnBlur}
                            />
                            <br />
                            <TextField
                                sx={{ width: '250px', mt: 1 }}
                                required
                                id="standard-basic"
                                label="Your Email"
                                type="email"
                                defaultValue=""
                                variant="standard"
                                name='email'
                                onBlur={handleOnBlur}
                            />
                            <br />
                            <TextField
                                required
                                sx={{ width: '250px', mt: 1 }}
                                id="standard-password-input"
                                label="Your Password"
                                name="password"
                                onBlur={handleOnBlur}
                                type="password"
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <br />
                            <TextField
                                required
                                sx={{ width: '250px', mt: 1 }}
                                id="standard-password-input"
                                label="Re-type your Password"
                                name="password2"
                                onBlur={handleOnBlur}
                                type="password"
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <br />
                            <Button sx={{ width: '250px', mt: 3 }} type="submit" variant="outlined">Register</Button>
                            <br />
                            {user?.email && <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}> <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                                User Created Successfully!
                            </Alert></Box>
                            }
                            {authError && <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}><Alert severity="error">{authError}</Alert></Box>
                            }
                            <br />

                            <NavLink style={{ textDecoration: "none" }} to="/login">
                                <Button sx={{ width: '250px', mt: 1, mb: 3 }} variant="text">ALREADY REGISTERED? PLEASE LOGIN</Button>
                            </NavLink>
                        </form>
                    }

                </Box>

            </Container>
        </>
    );
};

export default Register;