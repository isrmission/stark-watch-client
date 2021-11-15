import { Alert, Button, Snackbar, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import CheckIcon from '@mui/icons-material/Check';


const AddAProduct = () => {

    const initialProductInfo = { product_name: '', price: '', brand: '', rating: '', image: '' }
    const [reviewInfo, setReviewInfo] = useState(initialProductInfo);
    const [addProductSuccess, setAddProductSuccess] = useState(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...reviewInfo };
        newInfo[field] = value;
        // console.log(newInfo)
        setReviewInfo(newInfo)
    }

    const handleReviewSubmit = e => {


        const order = {
            ...reviewInfo,
        }



        fetch('https://enigmatic-oasis-12833.herokuapp.com/addproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    setAddProductSuccess(true)
                }
            })
        e.preventDefault();
    }

    const handleClick = e => {

        setAddProductSuccess(false)

        e.preventDefault();
    }


    return (
        <div>
            <h2>
                Add A Product
            </h2>
            {
                addProductSuccess ? <Box sx={{ mx: 'auto', mt: 2, }}> <Alert sx={{ width: '25%', mx: 'auto' }} icon={<CheckIcon fontSize="inherit" />} severity="success">
                    Product Added Successfully
                </Alert>
                    <br />
                    <Button onClick={handleClick} sx={{ mt: 1, py: 1, px: 4, width: '15%' }} variant="contained">Add Another</Button>
                </Box> :
                    <Box sx={{ width: '45%', mx: 'auto' }}>
                        <form onSubmit={handleReviewSubmit}>
                            <TextField fullWidth sx={{ mt: 1 }}
                                required
                                id="demo-helper-text-aligned"
                                label="Product Name"
                                name="product_name"
                                defaultValue=''
                                onBlur={handleOnBlur}
                            />
                            <TextField fullWidth sx={{ mt: 2 }}
                                id="demo-helper-text-aligned"
                                label="Brand"
                                name="brand"
                                defaultValue=''
                                onBlur={handleOnBlur}
                            />
                            <TextField fullWidth sx={{ mt: 2 }}
                                required
                                id="outlined-multiline-static"
                                label="Image Url"
                                onBlur={handleOnBlur}
                                name="image"
                            />
                            <TextField fullWidth sx={{ mt: 2 }}
                                id="outlined-number"
                                label="Price"
                                type="number"
                                name="price"
                                defaultValue="0"
                                InputProps={{ inputProps: { min: 1 } }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={handleOnBlur}
                            />
                            <TextField fullWidth sx={{ mt: 2 }}
                                id="outlined-number"
                                label="Rating"
                                type="number"
                                name="rating"
                                defaultValue="0"
                                InputProps={{ inputProps: { min: 1, max: 5 } }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={handleOnBlur}
                            />
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                                <Button sx={{ mt: 3, py: 1, px: 4 }} type="submit" variant="contained">Submit</Button>
                            </Box>
                        </form>
                    </Box>
            }
        </div>
    );
};

export default AddAProduct;