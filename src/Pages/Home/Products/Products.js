import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Alert, Button, Container, Snackbar, Typography } from '@mui/material';
import Product from '../Product/Product';
import { Link } from "react-router-dom";



const Products = () => {
    const [orderSuccess, setOrderSuccess] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                // console.log(data)
            })
        // .finally(() => setIsLoading(false));

    }, [])


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
        <Box sx={{ flexGrow: 1 }} >
            <Container>
                <Typography variant="h3" sx={{ fontWeight: 500, pb: 5, fontFamily: 'Monospace' }} gutterBottom component="div">
                    A Timepiece for all Ocassions
                </Typography>
                <Grid container spacing={{ xs: 2, md: 10 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {products.slice(0, 6).map((product) => (
                        <Product
                            key={product.product_name}
                            product={product}
                            setOrderSuccess={setOrderSuccess}
                            handleClick={handleClick}
                        ></Product>
                    ))}
                </Grid>
                {orderSuccess && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" style={{ color: 'black' }} sx={{ width: '100%' }}>
                        Booked Successfully!
                    </Alert>
                </Snackbar>}
            </Container>
            <Link style={{ textDecoration: 'none' }} to="/explore">
                <Button sx={{ padding: '10px 20px', my: 6, fontSize: 15, "&:hover": { backgroundColor: 'blue', color: 'white', border: '1px solid black' } }} variant="outlined" size="small">Explore More</Button></Link>
        </Box>
    );
};

export default Products;