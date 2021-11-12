import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import useAuth from '../../../Hooks/useAuth';
import { useHistory } from 'react-router';
import { Button } from '@mui/material';

const MyOrder = () => {
    const [orders, setOrders]=useState([]);
    const {user, token} = useAuth();
    const history = useHistory();

      useEffect(()=>{
        fetch(`https://nameless-stream-54785.herokuapp.com/order?email=${user.email}`,{
          headers: {
            'authorization' : `Bearer ${(token)}`
        }
      })
        .then(res =>{
            if(res.status === 200){
                return res.json();
            }
            else if (res.status === 401){
history.push('/login');
            };
        })
        .then(data => setOrders(data));

    },[]);
      
//order item DELETE
    const hendelDelete = id =>{
     
      const url = `https://nameless-stream-54785.herokuapp.com/order/${id}`;
      fetch(url, {
          method: 'DELETE',
          headers: {
              'content-type': 'application/json'
          }
      })
      .then(res => res.json())
      .then(data =>{
          if(data.deletedCount){
            window.confirm('are you sure delete order!');
              alert('successfully delete');
              const remaning = orders.filter(order => order._id !== id);
              setOrders(remaning);
             };
      //  console.log(data);
      } );
  };

    return (
       <Box>
            <Typography variant="h4" sx={{ color: 'info.main', mb: 3 }}>YOUR ORDERS:{orders.length}</Typography>
      
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="orders table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
          
            <TableCell align="right">Serivce</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">Bicycle</TableCell>
            <Button onClick={()=>hendelDelete(row._id)}>Delete</Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
       </Box>
    );
};

export default MyOrder;