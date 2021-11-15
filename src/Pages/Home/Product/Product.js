import { Grid, Rating } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import OrderModal from '../../OrderModal/OrderModal';


const Product = ({ product, setOrderSuccess, handleClick }) => {
    const { product_name, image, price, rating, brand } = product;
    const [openOrder, setOpenOrder] = React.useState(false);
    const handleOrderOpen = () => setOpenOrder(true);
    const handleOrderClose = () => setOpenOrder(false);

    return (
        <>
            <Grid item xs={4} sm={4} md={4}>
                <Card sx={{ minWidth: 275, minHeight: 550 }} style={{ border: '1px solid goldenrod' }}>
                    {/* <img style={{ height: 'auto' }} src={image} alt="" /> */}
                    <CardMedia
                        // sx={{ minHeight: 100 }}
                        component="img"
                        style={{ width: 'auto', height: '250px', margin: '0 auto', paddingTop: '10px' }}
                        image={image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography sx={{ fontSize: 20, color: 'blue' }} gutterBottom>
                            {product_name}
                        </Typography>
                        <Typography variant="h6" component="div">
                            Brand: {brand}
                        </Typography>
                        <Rating
                            name="read-only"
                            value={rating}
                            readOnly
                        />
                        <Typography sx={{ fontSize: 20, paddingTop: 2, fontWeight: 700 }} variant="body2">
                            ${price}
                        </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button onClick={handleOrderOpen} sx={{ padding: '10px 20px', fontSize: 15, "&:hover": { backgroundColor: 'blue', color: 'white', border: '1px solid black' } }} variant="outlined" size="small">Order Now</Button>
                    </CardActions>
                </Card>
            </Grid>
            <OrderModal
                handleOrderClose={handleOrderClose}
                openOrder={openOrder}
                product={product}
                setOrderSuccess={setOrderSuccess}
                handleClick={handleClick}
            ></OrderModal>
        </>
    );
};

export default Product;