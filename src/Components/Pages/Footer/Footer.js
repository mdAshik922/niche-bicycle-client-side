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
       
        <Typography sx={{color: "white"}} variant="h6" gutterBottom component="div">
     About
      </Typography>

        <Typography sx={{color: "white"}} variant="h6" gutterBottom component="div">
Contact Us
      </Typography>

        <Typography sx={{color: "white"}} variant="h6" gutterBottom component="div">
        Terms & Conditons

      </Typography>

        <Typography sx={{color: "white"}} variant="h6" gutterBottom component="div">
        shipping & Delivery

      </Typography>
        <Typography sx={{color: "white"}} variant="h6" gutterBottom component="div">
        Privacy Policy

      </Typography>
      
        </Grid>

        <Grid sx={{marginLeft: "10%"}}  xs={6}>
        <Typography sx={{color: "white"}} variant="h5" gutterBottom component="div">
        Quick Contact
      </Typography>
        <Typography sx={{color: "white"}} variant="h6" gutterBottom component="div">
        60,24th Road No #12, Wireless Gate, CA 902945, Mohakhali, Dhaka, Bangladesh


      </Typography>
        <Typography sx={{color: "white"}} variant="h6" gutterBottom component="div">
     
        +01 7779 090 / +91 4447 343

      </Typography>
      <Typography sx={{color: "white"}} variant="h6" gutterBottom component="div">
       Email:
      </Typography>
      <Typography sx={{color: "white"}} variant="body1" gutterBottom>
     bicycle@gmail.com
      </Typography>
   
        </Grid>
        <Grid  sx={{marginLeft: '5%'}}  xs={6}>
        <Typography sx={{color: "white"}} variant="h5" gutterBottom component="div">
       Follow us
      </Typography>
 {/* facebook */}
 <Link to="#">
     <img width='25px' src={facebook} alt=""/></Link>
            
    {/* Linkedin */}
             <Link to="#">
                <img style={{marginLeft: '5px', marginRight: '5px', width: 25}} src={linkedin} alt=""/>
     </Link>
    
    {/* instagram */}
     <Link to="#">
         <img width="25px" style={{ marginRight: '5px', width: 25 }} src={instagram} alt=""/></Link>

         {/* youtube */}
         <Link to="#">
                <img width="30px"  src={youtube} alt=""/></Link>
        </Grid>
      </Grid>

    </Box>
    <p style={{textAling: "center", color: "red", fontWeight: "bolder"}}>  2021 &copy; copy right</p>
       </footer>
    );
};

export default Footer;