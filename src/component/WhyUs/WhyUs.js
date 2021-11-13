import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const WhyUs = () => {
    return (
        <Box style={{marginTop:'3%'}}>
            <Typography variant='h4'> Why Us?</Typography>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={6} md={6}>
                        <img src='./banner2.jpg' style={{ height: '400px', width: '400px' }}  alt="" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='body1' style={{marginTop:'5%'}}> ABOUT THE PERFUME SHOP:
                            <br/>
                            For over 25 years we have been selling the widest range of women's perfumes and men's aftershaves at affordable prices. We stock the fragrances of nearly 130 brands including Hugo Boss, Paco Rabanne, Gucci, Ariana Grande and Marc Jacobs both online and across our network of over 250 nationwide stores. We also stock the luxury perfume brands Dior, Viktor & Rolf and Hermès.

                            Not only do we have the experience of selling perfumes, we also have the expertise to match. Our staff are trained and developed so that they are the most knowledgeable sales advisors within the perfume industry and we can even boast about having the largest number of fragrance graduates nationwide.

                            Online we offer FREE standard delivery, click and collect in 1 hour and we've even introduced a “Try Me” option on some of our most popular products where you'll receive a free sample, so if you're choosing a new perfume or aftershave you can smell that before you open your order.</Typography>
                    </Grid>

                </Grid>
            </Box>
        </Box>
    );
};

export default WhyUs;