import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import { Link } from "react-router-dom";

const TopBanner = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: 8 }} >
            <Grid container style={{ backgroundColor: 'rgba(29,29,29,255)' }} columns={{ xs: 12, sm: 8, md: 12 }}>
                <Grid item xs={10} sm={6} md={6}>
                    <img style={{ height: "100%", width: "100%" }} src="https://i.ibb.co/6W10qCy/slider.png" alt="" />
                </Grid>
                <Grid item xs={10} sm={6} md={6} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: 3
                }}>
                    <Box>
                        <img src="https://i.ibb.co/HnGZPxB/slider-1-removebg-preview.png" alt="" />
                        <Typography variant="h3" style={{ color: "white" }} sx={{ fontFamily: 'Monospace' }}>
                            Quality Timepiece Collections
                        </Typography>
                        <Link style={{ textDecoration: 'none' }} to="/explore">
                            <Button variant="outlined" style={{ border: "1px solid goldenrod" }} sx={{ px: 5, py: 1, mt: 5, color: 'white', ":hover": { backgroundColor: 'white', color: 'info.main' } }}>
                                SHOP NOW
                            </Button>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    );
};

export default TopBanner;