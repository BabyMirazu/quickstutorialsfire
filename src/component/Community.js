import React from 'react';
import { Box, Card, CardContent, Typography } from '@material-ui/core';
import './Community.css';

const Community = (props) => {
    return (
        <Box component='div' className='card_item'>
            <Card className={(props.name === 'Learn' || props.name === 'Teach') ? 'blackCard' : 'card'}>
                <CardContent className='card_content'>
                    <img style={(props.name === 'Learn' || props.name === 'Teach') ? {display: 'none'} : {display: 'block'}} src={props.img_src} className='img' alt=''/>
                    <Box component='div' className='name_pan' display={(props.name === 'Learn' || props.name === 'Teach') ? 'none' : 'flex'}>
                        <Box component='div' className='icon_pan' display='flex' alignSelf='center'>
                            <img src={props.icon_src} className='icon' alt=''/>
                        </Box>
                        <Typography component='span'>
                            {props.name}
                        </Typography>
                    </Box>
                    <Box component='div' className='blackPan' display={(props.name === 'Learn' || props.name === 'Teach') ? 'flex' : 'none'}>
                        <Typography component='span' className='blackTitle'>
                            {props.name}
                        </Typography>
                        <Box component='div' position='absolute' className={props.name === 'Learn' ? 'blackButton' : 'blackButtonS'}>
                            <Typography component='span' className='blackIconPan'>
                                <img src={props.icon_src} alt=''/>
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Community;