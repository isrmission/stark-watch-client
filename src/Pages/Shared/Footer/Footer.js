import { Button, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#242424', color: 'white', bottom: 0, width: "100%", marginTop: "50px" }}>
            <Box sx={{ pb: 2, pt: 4 }}>
                <Typography variant="h5">
                    Stark Watch Company
                </Typography>
                <Typography>
                    Dhaka, LLC
                </Typography>
                <Box sx={{ py: 2 }}>
                    <Link style={{ color: 'white', textDecorationColor: 'white' }}>
                        <Typography>
                            Email: contact@starkwatch.com
                        </Typography>
                    </Link>
                    <Link style={{ color: 'white', textDecorationColor: 'white' }}>
                        <Typography>
                            Privacy Policy
                        </Typography>
                    </Link>
                    <Link style={{ color: 'white', textDecorationColor: 'white' }}>
                        <Typography>
                            Terms & Conditions
                        </Typography>
                    </Link>
                </Box>
                <Typography variant="caption" display="block" gutterBottom>
                    ©2021 by Stark Watch Company
                </Typography>
            </Box>
        </div>
    );
};

export default Footer;