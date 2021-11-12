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

           <Box sx={{  flexGrow: 1 }}>
      <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid  item xs={2} sm={4} md={4} >
        <Typography sx={{marginLeft: '45px', color: 'white'}} variant="h4" component="div" gutterBottom>
            Bicycle
        </Typography>
      
      <Typography sx={{marginLeft: '40%', color: 'white'}} variant="h6" component="div" gutterBottom>
      <i className="fas fa-phone-volume"></i> +8801725456846
      </Typography>
          </Grid>

       {/* Social medial */}
          <Grid sx={{marginLeft: '45px'}}item xs={2} sm={4} md={4} >

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

{/* copy right */}
          <Grid sx={{marginLeft: '40%'}} item xs={2} sm={4} md={4} >
          <Typography sx={{color: 'white'}} variant="h5" component="div" gutterBottom>
            2021 &copy; copy right
        </Typography>
          </Grid>
      </Grid>
    </Box>
       </footer>
    );
};

export default Footer;