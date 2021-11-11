import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
const Header = () => {
    const {user, logOut}=useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bicycle
          </Typography>
          <NavLink to="/"><Button style={{color: 'whitesmoke'}}>Home</Button></NavLink>
        
          <NavLink to="/explore"><Button style={{color: 'whitesmoke'}}>Bicycle</Button></NavLink>
        
          {user.email?
   <Box>
     <NavLink to="/dashbord"><Button style={{color: 'red'}} >Dash-Bord</Button></NavLink>
              <NavLink to="/purches"><Button style={{color: 'whitesmoke'}}>My-Order</Button></NavLink>
            <Button onClick={logOut} color="inherit">Logout</Button>
   </Box>
          :
          <NavLink to="/login"><Button style={{color: 'whitesmoke'}} >Login</Button></NavLink>

         }
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Header;