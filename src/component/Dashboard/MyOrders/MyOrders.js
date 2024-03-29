import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import useAuth from '../../../hooks/useAuth';
import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';


const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [control, setConrol] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        const url = `https://perfume-shop-node-server.onrender.com/orders/${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [control, user.email])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            fetch(`https://perfume-shop-node-server.onrender.com/deleteOrder/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        setConrol(!control);
                    } else {
                        setConrol(false);
                    }
                });
            console.log(id);
        }
    };
    const useStyle = makeStyles({
        statusShipped: {
            backgroundColor: 'green',
            color:'white'
        },
        statusPending: {
            backgroundColor: 'red',
            color: 'white'
        },
      
    })
    const { statusPending, statusShipped } = useStyle();
    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {
                        orders.map(order =>
                            <Grid item xs={12} sm={ 4} md={4}>
                                <img style={{ height: '300px', width: '300px' }} src={order?.product?.img} alt="" />
                                <Typography mb={3} variant='h5'>Name: {order?.product?.name}</Typography>
                                <Typography mb={3} variant='h6'>Price: {order?.product?.price}</Typography>
                                <Typography mb={3} variant='h5'>Ordered By: {order?.name}</Typography>
                                <Typography mb={3} variant='h6'>Email: {order?.email}</Typography>
                                <Typography className={order.status ==='pending'? statusPending:statusShipped } mb={3} variant='h6'>{
                                    order?.status
                                }</Typography>
                                <Button style={{ color: 'white' }}
                                    onClick={() => handleDelete(order._id)}
                                    className="btn bg-danger p-2"
                                >
                                    Delete
                                </Button>
                               
                        </Grid>)
                    }
                  
                    
                </Grid>
            </Box>
        </div>
    );
};

export default MyOrders;