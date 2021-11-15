import React from 'react';
import useAuth from '../../../hooks/useAuth';
import OrdersList from '../OrdersList/OrdersList';

const DashboardHome = () => {
    const { user, admin } = useAuth();

    return (
        <>
            {admin ?
                <h2>
                    Welcome, {user.displayName}
                </h2>
                :
                <OrdersList></OrdersList>
            }
        </>
    );
};

export default DashboardHome;