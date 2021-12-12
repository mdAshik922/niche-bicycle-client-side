import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import banner from './banner.png';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const Banner = () => {
 
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: 'gray', color: 'whitesmoke' }}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} md={5}>
        <img style={{borderRadius: '25px'}} src={banner} alt=""/>
        </Grid>
        <Grid sx={{marginLeft: 5}} item xs={9} sm={8} md={6}>
         <Typography variant="h2">

         Direct to Consumer Pricing
         </Typography>
         <Typography variant="h4">

         Ride More For Less
         </Typography>
         <Typography variant="h6">

         Why buy from Bikes Online? The bikes in our online bike shop are
          often half the price of comparable bikes in the market, and that
           is due to our direct to consumer business model. We source high-quality 
           bikes from the manufacturer, cut out the middlemen, and pass on the savings
            to you - where they belong. Add to that our free, fast delivery and local support and 
         you can rest assured knowing you are getting the best deal on your new bike.
         </Typography>
         <Button variant="outlined" onClick={handleClickOpen}>
        Open draggable dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Subscribe
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
        </Grid>
        
      </Grid>
    </Box>
    );
};

export default Banner;