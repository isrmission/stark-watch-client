import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const WhyUS = () => {
    return (
        <Grid sx={{ py: 5, px: 3 }} container spacing={1} columns={{ xs: 12, sm: 8, md: 12 }}>
            <Grid item xs={12} sm={8} md={6}>
                <img style={{ width: '80%', height: "500px" }} src='https://i.ibb.co/b6JLK1V/gear.png' alt="" />
            </Grid>
            <Grid item xs={12} sm={8} md={6} sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Box>
                    <Typography variant="h3" sx={{ fontFamily: 'Monospace', color: 'text.disabled' }}>
                        What Makes us Tick
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'text.disabled', mb: 3 }}>
                        A look behind the scenes
                    </Typography>
                    <Typography>
                        If you're like us, one of the first things you want to know about a new independent brand is, "what movement do they use?". This is an important question because the movement has a lot to do with the quality and reliability as well as the value you perceive the watch to have.
                    </Typography>


                </Box>
            </Grid>

        </Grid>
    );
};

export default WhyUS;