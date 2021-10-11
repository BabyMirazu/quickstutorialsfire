import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Verify = (props) => {
    const history = useHistory();
    const go = () => {
        history.push('/login');
    }
    return (
        <Box component='div' display='flex' justifyContent='center' className='LogPage' alignItems='center'>
            <Box component='div' className='LogDial' display='flex' flexDirection='column' alignItems='center'>
                <Box component='div' mt={4} mb={1}>
                    <Typography component='h2'>
                        Verify Succeed!
                    </Typography>
                </Box>
                <Box component='div' mt={4} mb={1}>
                    <Button color='primary' variant='contained' onClick={go}>Go!</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Verify;