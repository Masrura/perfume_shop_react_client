import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Perfume = (props) => {
    
    const { _id, name, img, price } = props.perfume;
    const { handleDelete } = props;
    console.log('loc', props.loc);
    
    
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                {/* <Typography style={{border:'2px solid black'}} variant='h6'>Name</Typography> */}
                <img style={{ height: '200px', width: '200px' }} src={img} alt="" />
                <Typography variant='h6'>Name: {name}</Typography>
                <Typography variant='h6'>Price: {price}</Typography>
                {
                    props.loc === 'manage' ?
                        <Button style={{ color: 'white' }}
                            onClick={() => handleDelete(_id)}
                            className="btn bg-danger p-2"
                        >
                            Delete
                        </Button>
                        :
                        <Link to={`/perfume/${_id}`}>
                            <Button variant='contained' color="secondary">Buy Now</Button>
                        </Link>
                }
                
            </Grid>
        </>
    );
};

export default Perfume;