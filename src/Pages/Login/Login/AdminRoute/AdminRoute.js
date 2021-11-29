import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin } = useAuth();
    let location = useLocation();

    if (!admin) {
        return <Box sx={{ my: 5, display: 'flex', justifyContent: 'center' }}><CircularProgress />
        </Box>
    }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};


export default AdminRoute;