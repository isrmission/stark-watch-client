import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';
import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/system';


const ManageProducts = () => {
    const { isLoading } = useAuth();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://enigmatic-oasis-12833.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products.length])

    const handleDelete = id => {
        const warning = window.confirm("Are you sure to delete your order?");
        console.log(id)
        if (warning) {

            const url = `https://enigmatic-oasis-12833.herokuapp.com/${id}`;
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
        <>
            {
                isLoading ? <Box sx={{ width: 300 }}>
                    <Skeleton />
                    <Skeleton animation="wave" />
                    <Skeleton animation={false} />
                </Box>
                    :
                    <div>
                        <h2 style={{ backgroundColor: "#808080", lineHeight: '60px' }}>
                            Total Products: {products.length}
                        </h2>
                        <TableContainer sx={{ width: '75%', mx: "auto", }} component={Paper}>
                            <Table sx={{ minWidth: 650 }} size="small" aria-label="Order List table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Image</TableCell>
                                        <TableCell align="center">Product Name</TableCell>
                                        <TableCell align="right">Brand</TableCell>
                                        <TableCell align="right">Price</TableCell>
                                        <TableCell align="center">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {products.map((row) => (
                                        <TableRow
                                            key={row._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="center" style={{ width: "20%", }} component="th" scope="row">
                                                <img style={{ width: "15%", }} src={row.image}
                                                    alt="" />
                                            </TableCell>
                                            {/* <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell> */}
                                            <TableCell style={{ textAlign: 'center' }} align="right">{row.product_name}</TableCell>
                                            <TableCell align="right">{row.brand}</TableCell>
                                            <TableCell align="right">${row.price}</TableCell>
                                            <TableCell align="right">
                                                <Button onClick={() => handleDelete(row._id)} variant="outlined">Delete</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
            }
        </>
    );
};

export default ManageProducts;