import React from 'react';
import { Box, Link } from '@material-ui/core';
import './AppBtn.css';

const AppBtn = (props) => {
    return (
        <Box component='div' className='btn'>
            <Link href='#' component='a'>
                <img src={props.src} alt='' className='img'/>
            </Link>
        </Box>
    );
}

export default AppBtn;