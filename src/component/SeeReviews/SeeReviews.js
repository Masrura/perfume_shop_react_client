import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Grid, Container} from '@mui/material';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';

import { Divider, Typography } from '@mui/material';
import { textAlign } from '@mui/system';
const SeeReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://niche-website-server-side-masrura-masrura.vercel.app/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Container style={{ padding: '1%', marginTop: '3%', backgroundImage: 'linear-gradient(to right, #DECBA4, #3E5151)'}}>
            <Divider />
            <Typography variant='h3' sx={{ width: '100%', marginTop: '2%' }}> Review </Typography>
            <Box sx={{ width: '100%', marginTop:'5%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems="center" justifyContent="center">
                    {
                        reviews.map(review =>
                            <Grid item xs={12} sm={3} md={3} style={{margin:'2%', padding:'2%', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',backgroundColor:'white' }}>
                                <Typography mb={3} variant='body1'>Name: {review?.name}</Typography>
                                <Typography mb={3} variant='body1'>Email: {review?.email}</Typography>
                                <Typography mb={3} variant='body1'>Review: {review?.review}</Typography>
                                
                                    <Rating name="half-rating-read" defaultValue={review?.rating} precision={0.5} readOnly />
                                
                            </Grid>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default SeeReviews;