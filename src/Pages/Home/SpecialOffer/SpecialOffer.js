import React from 'react';
import { Card, Grid } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { Box, height } from '@mui/system';


const SpecialOffer = () => {
    return (
        // <Grid spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 8, md: 12 }}>
        //     <Box columns={{ md: 6 }} sx={{ height: 300, minWidth: 500 }}>
        //         <img src="https://i.ibb.co/DwygXf4/image.png" alt="" />
        //     </Box>
        //     <Box columns={{ md: 6 }}>
        //         <img src="https://i.ibb.co/C0VhCRj/image.png" alt="" />
        //     </Box>
        // </Grid>
        <Box sx={{ width: '100%' }} sx={{ px: 3, py: 5 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 12, sm: 8, md: 12 }}>
                <Grid item xs={12} md={6} sm={8}>
                    <img width='100%' height="400px" src="https://i.ibb.co/p4tgh58/promo1.jpg" alt="" />

                </Grid>
                <Grid item xs={12} md={6} sm={8}>
                    <img width='100%' height="400px" src="https://i.ibb.co/dgLMDxp/promo2.jpg" alt="" />
                </Grid>

            </Grid>
        </Box >
    );
};

export default SpecialOffer;