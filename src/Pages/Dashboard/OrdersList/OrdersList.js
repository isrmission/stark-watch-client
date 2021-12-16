import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';


const OrdersList = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `https://enigmatic-oasis-12833.herokuapp.com/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDelete = id => {
        const warning = window.confirm("Are you sure to delete your order?");
        console.log(id)
        if (warning) {

            const url = `https://enigmatic-oasis-12833.herokuapp.com/orders/${id}`;
            fetch((url), {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        // const remainingUsers=users.filter(user=>user._id!==id);
                        window.location.reload();
                    }
                })
        }

    }


    return (
        <div>
            <h2 style={{ backgroundColor: "#808080", lineHeight: '60px' }}>
                Your Total Orders: {orders.length}
            </h2>
            <TableContainer sx={{ width: '90%', mx: "auto", }} component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="Order List table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Phone</TableCell>
                            <TableCell align="center">Product</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                                <TableCell align="center">{row.phone}</TableCell>
                                <TableCell align="center">
                                    <img width={'20%'} src={row.image} alt="" />
                                </TableCell>
                                <TableCell sx={{ fontWeight: 600 }} align="center">
                                    ${row.price * row.quantity}
                                </TableCell>
                                <TableCell align="center">{row.quantity}</TableCell>
                                <TableCell align="center">
                                    {
                                        row.payment ? <span style={{ color: 'green', fontWeight: '600' }}>Paid</span> : <Box sx={{ display: 'flex', alignItems: 'center', justifyItems: 'center', gap: 1 }} >
                                            <Button sx={{ p: '2px 5px', ":hover": { bgcolor: '#1976d2', color: 'white' } }} onClick={() => handleDelete(row._id)} variant="outlined">Cancel</Button>
                                            <Link style={{ textDecoration: 'none' }} to={`/dashboard/payment/${row._id}`}>
                                                <Button sx={{ p: '2px 5px', ":hover": { bgcolor: '#1976d2', color: 'white' } }} variant="outlined">Pay</Button>
                                            </Link>
                                        </Box>
                                    }
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default OrdersList;

