import { Alert, Button, Snackbar, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import CheckIcon from '@mui/icons-material/Check';


const Review = () => {
    const { user } = useAuth();
    const initialOrderInfo = { name: user.displayName, email: user.email, comment: '', rating: '' }
    const [reviewInfo, setReviewInfo] = useState(initialOrderInfo);
    const [reviewSuccess, setReviewSuccess] = useState(false);

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



        fetch('http://localhost:5000/reviewes', {
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
                    setReviewSuccess(true)
                }
            })
        e.preventDefault();
    }

    const handleClick = e => {

        setReviewSuccess(false)

        e.preventDefault();
    }

    return (
        <div >
            <h1>
                Please write a Review...
            </h1>
            {
                reviewSuccess ? <Box sx={{ mx: 'auto', mt: 2, }}> <Alert sx={{ width: '25%', mx: 'auto' }} icon={<CheckIcon fontSize="inherit" />} severity="success">
                    Thanks for your review.
                </Alert>
                    <br />
                    <Button onClick={handleClick} sx={{ mt: 1, py: 1, px: 4, width: '15%' }} variant="contained">Add Another</Button>
                </Box>
                    :
                    <Box sx={{ width: '45%', mx: 'auto' }}>
                        <form onSubmit={handleReviewSubmit}>
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
                                required
                                id="outlined-multiline-static"
                                label="Comment Here"
                                multiline
                                rows={4}
                                onBlur={handleOnBlur}
                                name="comment"
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

export default Review;