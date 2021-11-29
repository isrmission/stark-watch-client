import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://enigmatic-oasis-12833.herokuapp.com/allreviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(data)
            })
        // .finally(() => setIsLoading(false));

    }, [])

    return (
        <div>
            <Box sx={{ flexGrow: 1 }} >
                <Container>
                    <Typography variant="h3" sx={{ fontWeight: 500, pb: 5, fontFamily: 'Monospace' }} gutterBottom component="div">
                        Valuable Feedbacks
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 10 }} columns={{ xs: 12, sm: 8, md: 12 }}>
                        {reviews.map((review) => (
                            <Review
                                key={review._id}
                                review={review}
                            ></Review>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Reviews;