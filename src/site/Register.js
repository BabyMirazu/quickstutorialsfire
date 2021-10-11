import React from 'react';
import { Box, TextField, Button, Typography, Link } from '@material-ui/core';
import './Register.css';
import {AccountCircle, Lock, PermIdentity} from '@material-ui/icons';
import axios from 'axios';
import { useHistory } from 'react-router-dom/';

const Register = () => {
    let email = React.useRef();
    let password = React.useRef();
    let name = React.useRef();
    const history = useHistory();

    const register = () => {
        axios.post('http://localhost:8000/api/register', {email: email.value, password: password.value, name: name.value})
        .then((response) => {
            const data = response.data
            if (data.message === 'User already exists.') {
            // if (data === 'NErr') {
                alert('User already exists.');
            } else if (data.message === 'Unexpected error occured.') {
            // } else if (data === 'VErr') {
                alert('Unexpected error occured.');
                // alert('Verified Error.');
            } else {
                alert('success');
                history.push('/login');
            }
        })
    }

    return (
        <Box component='div' display='flex' justifyContent='center' className='LogPage' alignItems='center'>
            <Box component='div' className='LogDial' display='flex' flexDirection='column' alignItems='center'>
                <Box display='flex' alignItems='center' mt={1} mb={1}>
                    <AccountCircle className='login-icon'/>
                    <TextField label="email" variant="standard" inputRef={(ref) => {email = ref}}/>
                </Box>
                <Box display='flex' alignItems='center' mt={1} mb={1}>
                    <PermIdentity className='login-icon'/>
                    <TextField label="your name" variant="standard" inputRef={(ref) => {name = ref}}/>
                </Box>
                <Box display='flex' alignItems='center' mt={1} mb={1}>
                    <Lock className='login-icon'/>
                    <TextField type="password" label="password" variant="standard" inputRef={(ref) => {password = ref}}/>
                </Box>
                <Box display='flex' alignItems='center' mt={1} mb={1}>
                    <Lock className='login-icon'/>
                    <TextField type="password" label="confirm password" variant="standard"/>
                </Box>
                <Box component='div' mt={4} mb={1}>
                    <Button color='primary' variant='contained' onClick={register}>Register</Button>
                </Box>
                <Box component='div'>
                    <Link component='a' href="/login">
                        <Typography component='span'>Have already your account?</Typography>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}

export default Register;