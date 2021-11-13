import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';

import { Divider, Typography } from '@mui/material';
const SeeReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://young-river-47789.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div style={{marginLeft:'5%'}}>
            <Divider />
            <Typography variant='h3' sx={{ width: '100%', marginTop: '2%' }}> Review </Typography>
            <Box sx={{ width: '100%', marginTop:'5%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {
                        reviews.map(review =>
                            <Grid item xs={12} sm={3} md={3} style={{margin:'2%', padding:'2%', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}>
                                <Typography mb={3} variant='h5'>Name: {review?.name}</Typography>
                                <Typography mb={3} variant='h6'>Email: {review?.email}</Typography>
                                <Typography mb={3} variant='h5'>Review: {review?.review}</Typography>
                                
                                    <Rating name="half-rating-read" defaultValue={review?.rating} precision={0.5} readOnly />
                                
                            </Grid>)
                    }
                </Grid>
            </Box>
        </div>
    );
};

export default SeeReviews;