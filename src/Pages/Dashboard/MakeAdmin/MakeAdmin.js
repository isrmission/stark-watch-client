import { Alert, Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [adminSuccess, setAdminSuccess] = useState(false)
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://enigmatic-oasis-12833.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('')
                    setAdminSuccess(true)
                }
                console.log(data)
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>
                Make An Admin
            </h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    required
                    onBlur={handleOnBlur}
                    id="outlined-required"
                    label="Enter Email"
                    name="email"
                    type="email"
                    defaultValue=''
                />
                <Button sx={{ ml: 2, py: 2 }} type="submit" variant="contained">Proceed</Button>

            </form>
            {adminSuccess && <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}> <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                Operation Successfull!
            </Alert></Box>
            }
        </div>
    );
};

export default MakeAdmin;