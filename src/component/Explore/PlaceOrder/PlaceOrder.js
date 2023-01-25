import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { Typography } from '@mui/material';
import './PlaceOrder.css'
import useAuth from '../../../hooks/useAuth';
const PlaceOrder = () => {
    const [perfume, setPerfume] = useState({});
    const { pId } = useParams();
    const { user } = useAuth();
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.status = 'pending';
        data.product = perfume;
        console.log(data);
        fetch("https://perfume-shop-node-server.onrender.com/place-order", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert('Order Placed');
                    reset();
                }
            });
        reset();
    }
    useEffect(() => {
        fetch(`https://perfume-shop-node-server.onrender.com/perfume/${pId}`)
            .then(res => res.json())
            .then(data => setPerfume(data))
    }, [pId]);
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md:3 }}>
                <Grid style={{ margin:'2%', textAlign:'left'}} item xs={12} sm={7} md={6}>
                    <img style={{ height: '300px', width: '300px' }} src={perfume?.img} alt="" />
                    <Typography mb={3} variant='h5'>Name: {perfume?.name}</Typography>
                    <Typography mb={3} variant='h6'>Price: {perfume?.price}</Typography>
                    <Typography mb={3} variant='body1'>Description: {perfume?.description}</Typography>
                </Grid>
                <Grid item xs={12} sm={5} md={5}>
                    <div className="detail_form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user?.displayName}
                                {...register("name", { required: true })} />
                            <input defaultValue={user?.email}
                                {...register("email", { required: true })} />
                            <input placeholder="Phone Number"
                                {...register("phone", { required: true })}
                                type="number"
                            />
                            <input placeholder="Address"
                                {...register("address", { required: true })} />
                            
                            {errors.exampleRequired && <span>This field is required</span>}
                            <input className="btn btn-success" type="submit" />
                        </form>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PlaceOrder;