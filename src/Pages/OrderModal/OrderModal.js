import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import useAuth from '../../hooks/useAuth';
import { Link } from "react-router-dom";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid goldenrod',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
};

const OrderModal = ({ openOrder, handleOrderClose, product, setOrderSuccess, handleClick }) => {
    const { product_name, price } = product;
    const { user } = useAuth();
    const initialOrderInfo = { name: user.displayName, email: user.email, phone: '', address: '', quantity: '' }
    const [orderinfo, setOrderInfo] = useState(initialOrderInfo);
    // const [isUser, setIsUser] = useState(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderinfo };
        newInfo[field] = value;
        // console.log(newInfo)
        setOrderInfo(newInfo)
    }

    // if (user.email) {
    //     setIsUser(true)
    // }

    const handleOrderSubmit = e => {
        const order = {
            ...orderinfo,
            product: product_name,
            price: price
        }

        fetch('https://enigmatic-oasis-12833.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setOrderSuccess(true)
                    handleOrderClose();
                    handleClick();

                }
            })
        e.preventDefault();
    }
    return (
        <Modal
            open={openOrder}
            onClose={handleOrderClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            {/* {
                isUser ? <Box sx={style}>
                    <Typography sx={{ fontSize: 20, color: 'blue', textAlign: 'center' }} id="modal-modal-title" variant="h6" component="h2">
                        {product_name}
                    </Typography>

                    <form onSubmit={handleOrderSubmit}>
                        <TextField fullWidth sx={{ mt: 1 }}
                            id="demo-helper-text-aligned"
                            label="Name"
                            name="name"
                            defaultValue={user.displayName}
                            onBlur={handleOnBlur}
                        />
                        <TextField fullWidth sx={{ mt: 2 }}
                            id="demo-helper-text-aligned"
                            label="Email"
                            name="email"
                            defaultValue={user.email}
                            onBlur={handleOnBlur}

                        />
                        <TextField fullWidth sx={{ mt: 2 }}
                            id="demo-helper-text-aligned"
                            label="Phone Number"
                            name="phone"
                            onBlur={handleOnBlur}

                        />
                        <TextField fullWidth sx={{ mt: 2 }}
                            id="demo-helper-text-aligned"
                            label="Address"
                            onBlur={handleOnBlur}
                            name="address"
                        />
                        <TextField fullWidth sx={{ mt: 2 }}
                            id="outlined-number"
                            label="Quantity"
                            type="number"
                            name="quantity"
                            defaultValue="1"
                            InputProps={{ inputProps: { min: 1, max: 10 } }}
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
                </Box> :
                    <Box sx={style}>
                        <Typography sx={{ fontSize: 20, color: 'blue', textAlign: 'center' }} id="modal-modal-title" variant="h6" component="h2">
                            <h2>
                                Please Login
                            </h2>
                        </Typography>


                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <Link style={{ textDecoration: 'none' }} to="/login">
                                <Button sx={{ mt: 3, py: 1, px: 4 }} variant="contained">Log in</Button>
                            </Link>
                        </Box>
                    </Box>
            } */}
            {user.email ?
                <Box sx={style}>
                    <Typography sx={{ fontSize: 20, color: 'blue', textAlign: 'center' }} id="modal-modal-title" variant="h6" component="h2">
                        {product_name}
                    </Typography>

                    <form onSubmit={handleOrderSubmit}>
                        <TextField fullWidth sx={{ mt: 1 }}
                            required
                            id="demo-helper-text-aligned"
                            label="Name"
                            name="name"
                            defaultValue={user.displayName}
                            onBlur={handleOnBlur}
                        />
                        <TextField fullWidth sx={{ mt: 2 }}
                            required
                            id="demo-helper-text-aligned"
                            label="Email"
                            name="email"
                            defaultValue={user.email}
                            onBlur={handleOnBlur}

                        />
                        <TextField fullWidth sx={{ mt: 2 }}

                            id="demo-helper-text-aligned"
                            label="Phone Number"
                            name="phone"
                            onBlur={handleOnBlur}

                        />
                        <TextField fullWidth sx={{ mt: 2 }}
                            required
                            id="demo-helper-text-aligned"
                            label="Address"
                            onBlur={handleOnBlur}
                            name="address"
                        />
                        <TextField fullWidth sx={{ mt: 2 }}
                            required
                            id="outlined-number"
                            label="Quantity"
                            type="number"
                            name="quantity"
                            defaultValue="1"
                            InputProps={{ inputProps: { min: 1, max: 10 } }}
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
                :
                <Box sx={style}>
                    <Typography sx={{ fontSize: 20, color: 'blue', textAlign: 'center' }} id="modal-modal-title" variant="h6" component="h2">
                        <h2>
                            Please Login
                        </h2>
                    </Typography>


                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <Link style={{ textDecoration: 'none' }} to="/login">
                            <Button sx={{ mt: 3, py: 1, px: 4 }} variant="contained">Log in</Button>
                        </Link>
                    </Box>
                </Box>
            }

        </Modal>
    );
};

export default OrderModal;