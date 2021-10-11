import React from 'react';
import { Box, TextField, Button, Typography, Link } from '@material-ui/core';
import './Login.css';
import {AccountCircle, Lock} from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { setUser, setToken } from '../redux/action';
// import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

const Login = () => {
    let email = React.useRef();
    let password = React.useRef();
    const dispatch = useDispatch();
    const history = useHistory();

    const login = () => {
        // const auth = getAuth();
        // signInWithEmailAndPassword(auth, email.value, password.value)
        // .then(() => {
        //     alert('success')
        // })
        axios.post('http://localhost:8000/api/login', {email: email.value, password: password.value})
        .then((response) => {
            const data = response.data
            if (data.message === 'Invalid username or password.') {
                alert('Invalid username or password.');
            } else if (data.message === 'User is not active.') {
                alert('User is not active.');
            } else {
                dispatch(setUser({'email': data.user.email, 'password': data.user.password, 'name': data.user.name}));
                dispatch(setToken({'token': data.token}));
                localStorage.setItem('token', data.token);
                history.push('/');
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
                    <Lock className='login-icon'/>
                    <TextField type="password" label="password" variant="standard" inputRef={(ref) => {password = ref}}/>
                </Box>
                <Box component='div' mt={4} mb={1}>
                    <Button color='primary' variant='contained' onClick={login}>LogIn</Button>
                </Box>
                <Box component='div'>
                    <Link component='a' href="/register">
                        <Typography component='span'>Create a new account?</Typography>
                    </Link>
                </Box>
                <Box component='div'>
                    <Link component='a' href="/reset">
                        <Typography component='span'>Forgot password?</Typography>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Login;