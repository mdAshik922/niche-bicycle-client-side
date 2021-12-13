
import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';

import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, logIn, signInGoogle, isLoading, error } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        logIn(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInGoogle(location, history)
    }
    return (
        <Container>
        <Grid container spacing={2}>
            <Grid item sx={{ mt: 8 }} xs={12} md={8}>
                <Typography variant="body1" gutterBottom>Login</Typography>
                <form onSubmit={handleLoginSubmit}>
                 
            {/* Email Field */}
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Your Email"
                        name="email"
                        onChange={handleOnChange}
                        variant="standard" />

             {/* Password Field */}         
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Your Password"
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                        variant="standard" />

                    <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                    <NavLink
                        style={{ textDecoration: 'none' }}
                        to="/register">
                        <Button variant="text">New User? Please Register</Button>
                    </NavLink>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Login successfully!</Alert>}
                    {error && <Alert severity="error">{error}</Alert>}
                </form>
                                <p>------------------------</p>
  
  {/* Google Singin */}
                <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
            </Grid>
       
        </Grid>
    </Container>
    );
};

export default Login;