import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Perfume from '../Perfume/Perfume';

const Explore = (props) => {
    const [perfumes, setPerfumes] = useState([]);
    const [control, setConrol] = useState(false);
    const { loc } = props;
    useEffect(() => {
        fetch('https://young-river-47789.herokuapp.com/perfumes')
            .then(res => res.json())
            .then(data => setPerfumes(data))
    }, [control])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            fetch(`https://young-river-47789.herokuapp.com/deleteProduct/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        console.log('delete Successfull');
                        setConrol(!control);
                    } else {
                        setConrol(false);
                        console.log('delete UnSuccessfull');
                    }
                });
            console.log(id);
        }
    };
    return (
        <Container style={{ backgroundImage: 'linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)', padding:'1%'}}>
            <Grid container spacing={3} rowSpacing={5}>
                {
                    loc === 'explore' || loc === 'manage' ?
                        perfumes.length === 0 ?
                            <Spinner animation="grow" variant="success" />
                            : perfumes.map(perfume => <Perfume handleDelete={handleDelete} loc={loc} key={perfume._id} perfume={perfume}></Perfume>)
                        :
                        perfumes.length === 0 ?
                            <Spinner animation="grow" variant="success" />
                            : perfumes.slice(0, 6).map(perfume => <Perfume loc={loc} key={perfume._id} perfume={perfume}></Perfume>)
                }
            </Grid>
        </Container>
    );
};

export default Explore;