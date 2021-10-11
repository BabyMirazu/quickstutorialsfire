import React from 'react';
import { Box, Card, CardContent, Typography } from '@material-ui/core';
import './LearnCard.css';

const LearnCard = (props) => {
    return (
        <Box component='div' className='cardpan' p={'20px'}>
            <Card className='card'>
                <CardContent>
                    <img src={props.src} alt='' className='img'/>
                    <Typography component='h2'>
                        {props.title}
                    </Typography>
                    <Typography component='span'>
                        {props.content}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default LearnCard;