import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allorders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDelete = id => {
        const warning = window.confirm("Are you sure to delete your order?");
        console.log(id)
        if (warning) {

            const url = `http://localhost:5000/orders/${id}`;
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
                Total Orders: {orders.length}
            </h2>
            <TableContainer sx={{ width: '75%', mx: "auto", }} component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="Order List table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Product</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Action</TableCell>
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
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right">{row.product}</TableCell>
                                <TableCell align="right">{row.quantity}</TableCell>
                                <TableCell align="right">
                                    <Button onClick={() => handleDelete(row._id)} variant="outlined">Cancel</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageAllOrders;