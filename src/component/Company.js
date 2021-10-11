import React from 'react';
import { Box, Typography } from '@material-ui/core';
import './Company.css';

const Company = (props) => {
    return (
        <Box component='div' className='companyItem'>
            <img src={props.src} alt='' className='logo_a'/>
            <Typography component='span' className='title'>{props.title}</Typography>
            <Typography component='span' className='content'>{props.content}</Typography>
            <Box component='div' mt='20px'>
                <Typography component='a' className='link' href='#'>
                    {props.link} <img src='svg/right-purple@1x.svg' alt='' className='icon'/>
                </Typography>
            </Box>
        </Box>
    );
}

export default Company;