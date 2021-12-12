import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Footer.css';
import facebook from './img/Vector.png';
import instagram from './img/Vector-1.png';
import linkedin from './img/Vector-2.png';
import youtube from './img/Vector-3.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
       <footer>
 <Typography sx={{color: "white", fontWeight: "bold"}} variant="h4" gutterBottom component="div">
     Bicycle
      </Typography>
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid  sx={{marginLeft: '20%'}}  xs={4}>
       
        <Typography sx={{color: "white"}} variant="h4" gutterBottom component="div">
     About
      </Typography>
      <Typography sx={{color: "white"}} variant="body2" gutterBottom>
      We are builders and innovators, but we are also a global community
       of cyclists. We are athletes, adventurers and advocates for cycling.
        We are Tour de France racers, singletrack explorers,
         neighbors and friends.

Put it all together, and Bicycle is a complete ecosystem of bikes,
 gear and cycling services, seamlessly connected and always accessible.
  You can find us at our more than 12,000 retail stores
 around the world or connect with us online from wherever you are.
      </Typography>
        </Grid>

        <Grid sx={{marginLeft: "10%"}}  xs={6}>
        <Typography sx={{color: "white"}} variant="h4" gutterBottom component="div">
        Quick Contact
      </Typography>
        <Typography sx={{color: "white"}} variant="h6" gutterBottom component="div">
        +255 255 54 53 52

      </Typography>
        <Typography sx={{color: "white"}} variant="h6" gutterBottom component="div">
     
+255 255 53 52 51
      </Typography>
      <Typography sx={{color: "white"}} variant="h6" gutterBottom component="div">
       Email:
      </Typography>
      <Typography sx={{color: "white"}} variant="body1" gutterBottom>
      support@email.com

      </Typography>
      <Typography sx={{color: "white"}} variant="body1" gutterBottom>
     
company@email.com
      </Typography>
        </Grid>
        <Grid  sx={{marginLeft: '5%'}}  xs={6}>
        <Typography sx={{color: "white"}} variant="h4" gutterBottom component="div">
       Follow us
      </Typography>
 {/* facebook */}
 <Link to="#">  <img width='25px' src={facebook} alt=""/></Link>
     
     {/* youtube */}
            <Link to="#">  <img style={{marginLeft: '5px', marginRight: '5px', width: 25}} src={youtube} alt=""/></Link>
            
    {/* Linkedin */}
             <Link to="#"> <img style={{marginLeft: '5px', marginRight: '5px', width: 25}} src={linkedin} alt=""/>
     </Link>
    
    {/* instagram */}
     <Link to="#">  <img width="25px" src={instagram} alt=""/></Link>
        </Grid>
      </Grid>

    </Box>
    <p style={{textAling: "center", color: "red", fontWeight: "bolder"}}>  2021 &copy; copy right</p>
       </footer>
    );
};

export default Footer;