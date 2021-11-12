import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Divider, Typography } from '@mui/material';
const SeeReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://young-river-47789.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <Divider/>
            <Box sx={{ width: '100%', marginTop:'5%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {
                        reviews.map(review =>
                            <Grid item xs={4}>
                                <Typography mb={3} variant='h5'>Name: {review?.name}</Typography>
                                <Typography mb={3} variant='h6'>Email: {review?.email}</Typography>
                                <Typography mb={3} variant='h5'>Review: {review?.review}</Typography>
                                <Typography mb={3} variant='h6'>Rating: {review?.rating}</Typography>
                            </Grid>)
                    }
                </Grid>
            </Box>
        </div>
    );
};

export default SeeReviews;