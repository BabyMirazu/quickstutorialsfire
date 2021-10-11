import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import './IntroDescription.css';

const IntroDescription = (props) => {
    return (
        <Box component='div' className={`item ${props.name === 'Learn' ? 'item_color1' : 'item_color2'}`}>
            <Box component='div' className='body'>
                <Typography component='h2' className='title'>
                    {props.title}
                </Typography>
                <Button variant='contained' className='btn' endIcon={<ArrowForward />}>
                    <Typography component='span'>
                        {props.name}
                    </Typography>
                </Button>
            </Box>
        </Box>
    );
}

export default IntroDescription;