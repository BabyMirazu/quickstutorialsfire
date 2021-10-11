import React from 'react';
import { Box, TextField, Button } from '@material-ui/core';
import './Register.css';
import {AccountCircle, Lock, PermIdentity} from '@material-ui/icons';
import axios from 'axios';
import { useHistory } from 'react-router-dom/';


const Reset = () => {
    let userName = React.useRef();
    let password = React.useRef();
    let name = React.useRef();
    const history = useHistory();

    const reset = () => {
        axios.post('http://localhost:8000/api/reset', [{username: userName.value, password: password.value, name: name.value}])
        .then((response) => {
            if (response.data === 'NErr') {
                alert('Username is not correct!');
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
                    <TextField label="username" variant="standard" inputRef={(ref) => {userName = ref}}/>
                </Box>
                <Box display='flex' alignItems='center' mt={1} mb={1}>
                    <PermIdentity className='login-icon'/>
                    <TextField label="your name" variant="standard" inputRef={(ref) => {name = ref}}/>
                </Box>
                <Box display='flex' alignItems='center' mt={1} mb={1}>
                    <Lock className='login-icon'/>
                    <TextField type="password" label="password" variant="standard" inputRef={(ref) => {password = ref}}/>
                </Box>
                <Box component='div' mt={4} mb={1}>
                    <Button color='primary' variant='contained' onClick={reset}>Reset</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Reset;