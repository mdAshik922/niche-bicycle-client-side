import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
const Header = () => {
    const {user}=useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bicycle
          </Typography>
          <NavLink to="/"><Button style={{color: 'whitesmoke'}}>Home</Button></NavLink>
        
          <NavLink to="/explore"><Button style={{color: 'whitesmoke'}}>Bicycle</Button></NavLink>
        
          {user.email?
   <>
     <NavLink to="/dashboard"><Button style={{color: 'red'}} >Dashboard</Button></NavLink>
             
              <NavLink to="/purches"><Button style={{color: 'whitesmoke'}}>Order</Button></NavLink>
            <NavLink to="#">
              {user.displayName}
            </NavLink>
          
   </>
          :
          <NavLink to="/login"><Button style={{color: 'whitesmoke'}} >Login</Button></NavLink>

         }
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Header;