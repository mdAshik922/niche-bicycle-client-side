import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";

import { Button } from '@mui/material';
import Admin from './MakeAdmin/Admin';
import useAuth from '../../../Hooks/useAuth';
import Appointment from './MyAppoinment/Appointment';
import Manage from './Blog/Manage';
import ReviewForm from '../Form/ReviewFrom/ReviewForm';


const drawerWidth = 120;


function DashBord(props) {
    let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
const {admin, logOut}= useAuth()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link to="/"><Button>Home</Button></Link>
      <Link to={`${url}`}><Button>Appointment</Button></Link>
      <Link to={`${url}/reviewform`}><Button>Review-Form</Button></Link>
     <Button  onClick={logOut}>Logout</Button>
      {admin && <Box>
        <Link to={`${url}/admin`}><Button>Make-Admin</Button></Link>
      <Link to={`${url}/manage`}><Button>Manage</Button></Link>
     
      </Box>

      }
     
      <Divider />
   
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
    
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
      <Appointment></Appointment>
        </Route>
        <Route  path={`${path}/manage`}>
   <Manage></Manage>
        </Route>
        <Route  path={`${path}/reviewform`}>
   <ReviewForm></ReviewForm>
        </Route>
 
        <Route path={`${path}/admin`}>
       <Admin></Admin>
        </Route>
      </Switch>
     
      </Box>
    
    </Box>
 
  );
}

DashBord.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,

  
};




export default DashBord;