import { Alert, Container, Grid, Snackbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Product from '../Home/Product/Product';
import Navigation from '../Shared/Navigation/Navigation';
import Skeleton from '@mui/material/Skeleton';
import LinearProgress from '@mui/material/LinearProgress';
import Footer from '../Shared/Footer/Footer';

const Explore = () => {
    const [products, setProducts] = useState([]);
    const [orderSuccess, setOrderSuccess] = useState(false);
    const [open, setOpen] = React.useState(false);
    const { user, isLoading } = useAuth();





    useEffect(() => {
        fetch('https://enigmatic-oasis-12833.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
        // .finally(() => setIsLoading(false));

    }, []);

    const handleClick = () => {

        setOpen(true);

    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            <Navigation></Navigation>
            <Box sx={{ flexGrow: 1, pt: 10 }} >
                <Container>
                    <Typography variant="h3" sx={{ pt: 5, fontWeight: 500, pb: 5, fontFamily: 'Monospace' }} gutterBottom component="div">
                        A Timepiece for all Ocassions
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 10 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {isLoading ? <Box sx={{ width: '100%', py: 30 }}>
                            <LinearProgress />
                        </Box> : <>{products.map((product) => (
                            <Product
                                key={product.product_name}
                                product={product}
                                setOrderSuccess={setOrderSuccess}
                                handleClick={handleClick}
                            ></Product>
                        ))}</>}
                    </Grid>
                    {orderSuccess && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" style={{ color: 'black' }} sx={{ width: '100%' }}>
                            Booked Successfully!
                        </Alert>
                    </Snackbar>}
                </Container>
            </Box >
            <Footer></Footer>
        </>
    );
};

export default Explore;