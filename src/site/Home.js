import React, { useEffect } from 'react';
import { Box, AppBar, Link, Button, IconButton, Typography } from '@material-ui/core';
import { Dehaze } from '@material-ui/icons'
import './Home.css';
import AppBtn from '../component/AppBtn';
import IntroDescription from '../component/IntroDescription';
import LearnCard from '../component/LearnCard';
import Community from '../component/Community';
import CommunityMobile from '../component/CommunityMobile';
import Company from '../component/Company';
import { useDispatch, useSelector } from 'react-redux';
//import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import {setUser, setToken} from '../redux/action';
import { getCurrentName } from '../redux/reducer';

const Home = () => {
  const [isScrolled, setIsScrolled] = React.useState(0);
  const name = useSelector(getCurrentName);
  const history = useHistory();
  const dispatch = useDispatch();

  window.addEventListener('scroll', (e) => {
    if (document.documentElement.scrollTop > 0) {
      setIsScrolled(1)
    } else {
      setIsScrolled(0)
    }
  });

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = '';
    delete axios.defaults.headers.common['Authorization'];
    axios.defaults.headers.common['Accept'] = 'application/json';

    const token = localStorage.getItem('token');
  
    if (token) {
      // axios.defaults.headers.common['Authorization'] = `Token ${token}`;
      // // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // axios.get('http://localhost:8000/api/home')
      // .then (response => {
      //   dispatch(setUser({'email':response.data.user.email, 'password':response.data.user.password, 'name': response.data.user.name}));
      //   dispatch(setToken({'token':token}));
      // })
      // .catch((err) => {
      //   localStorage.removeItem('token');
      //   history.push('/login');
      // })
    }
  })

  return (
    <Box component='div'>
      <AppBar className={`navbar ${isScrolled ? 'none' : 'navspec'}`}>
        <Box component='div' className='nav_container' display='flex'>
          <Box component='div' display='flex'>
            <Link component='a' underline='none' href="#" className='nav_logo'>
              <img src={isScrolled ? 'svg/logo-color.svg' : 'svg/logo.svg'} alt=''></img>
            </Link>
            <Box component='div' display='flex' alignItems='center' className='nav_item'>
              <Link component='a' underline='none' href="#">
                Learn
              </Link>
              <Link component='a' underline='none' href="#">
                Teach
              </Link>
            </Box>
          </Box>
          <Box component='div' className='app' justifyContent='center' flexDirection='column'>
            {
              (name === '' || name === undefined) && 
              <Box component='div' className='nav_btnwrap'>
                <Button variant='contained' className='nav_btn' onClick={() => history.push('/login')}>Login</Button>
              </Box>
            }
            <Box component='div' display={(name === '' || name === undefined) ? 'none' : 'flex'}>
              <Typography component='span'>
                {name}
              </Typography>
            </Box>
          </Box>
          <Box component='div' className='app' display={isScrolled ? 'none' : 'none'} justifyContent='center' flexDirection='column'>
            <Box component='div' className='nav_btnwrap'>
              <Button variant='contained' className='nav_btn'>Get the App</Button>
            </Box>
            <Box component='div' mt={'10px'} className='tipwrap'>
              <Box component='div' className='triangle'></Box>
              <Box component='div' display='flex' justifyContent='center' className='tips'>
                <Link component='a' underline='none' href="#" className='tip'>
                  <img alt='' src='svg/apple.svg'/>
                </Link>
                <Link component='a' underline='none' href="#" className='separate'>|</Link>
                <Link component='a' underline='none' href="#" className='tip'>
                  <img alt='' src='svg/google.svg'/>
                </Link>
              </Box>
            </Box>
          </Box>
          <IconButton className='nav_iconbtn'>
            <Dehaze />
          </IconButton>
        </Box>
      </AppBar>
      <Box component='div' display='flex' flexDirection='column'>
        <Box component='div' display='flex' flexDirection='row' className='intro'>
          <Box component='div' className='introPan' position='relative'>
            <img src='png/main-background.png' alt='' className='introBack'/>
            <Box component='div' position='absolute' display='flex' justifyContent='center' bottom='40px' className='AppButton'>
              <AppBtn src='svg/Download@1x.svg'/>
              <AppBtn src='svg/google-play-badge.svg'/>
            </Box>
          </Box>
          <Box component='div' className='introPan' display='flex' flexDirection='column'>
            <IntroDescription name='Learn' title='Learn Anything'/>
            <IntroDescription name='Teach' title='Teach Anyone'/>
          </Box>
        </Box>
        <Box component='div' display='flex' flexDirection='row' className='learn'>
          <Box component='div' display='flex' flexDirection='row' className='learnPan'>
            <LearnCard src='svg/you-in-control.svg' title='Learn instantly' content='Get a tutor with the tap of a button. Connect, message, and schedule sessions. Payments are simple and easy.' />
            <LearnCard src='svg/online-person.svg' title='Anything, anytime' content='Learn or teach anything at anytime-in person or online with the tap of a button.' />
            <LearnCard src='svg/a-tutor-fit.svg' title='Anyone can teach' content='Tutors set their own prices, work on their own schedule, and are provided tools to earn more money. Anyone can tutor.' />
          </Box>
        </Box>
        <Box component='div' className='community' p={'calc(5px + 1vh) 6vw'}>
          <Box component='div' m={'50px auto 50px'}>
            <Typography component='h2'>
              Infinite Possibilities
            </Typography>
          </Box>
          <Box component='div' display='flex' flexDirection='row' justifyContent='center' className='imgPan'>
            <Box component='div' display='flex' alignItems='center' className='imgPanel'>
              <Box component='div' ml={'10px'} mr={'10px'}>
                <Community img_src='png/The_Arts@3x.png' icon_src='svg/stack.svg' name='The Arts'/>
                <Community img_src='png/Tech@3x.png' icon_src='svg/tv.svg' name='Technology'/>
              </Box>
              <Box component='div' ml={'10px'} mr={'10px'}>
                <Community img_src='png/Auto@3x.png' icon_src='svg/car.svg' name='Auto'/>
                <Community img_src='png/Remedial@3x.png' icon_src='svg/remedial.svg' name='Remedial'/>
                <Community img_src='png/Academics@3x.png' icon_src='svg/academics.svg' name='Academics'/>
              </Box>
              <Box component='div' ml={'10px'} mr={'10px'}>
                <Community img_src='png/Trades@3x.png' icon_src='png/auto.png' name='Trades'/>
                <Community img_src='' icon_src='svg/right@1x.svg' name='Learn'/>
              </Box>
            </Box>
            <Box component='div' display='flex' alignItems='center' className='imgPanel'>
              <Box component='div' ml={'10px'} mr={'10px'}>
                <Community img_src='' icon_src='svg/right@1x.svg' name='Teach'/>
                <Community img_src='png/Sport@3x.png' icon_src='svg/sport.svg' name='Sports & Games'/>
              </Box>
              <Box component='div' ml={'10px'} mr={'10px'}>
                <Community img_src='png/Business@3x.png' icon_src='svg/briefcase.svg' name='Business'/>
                <Community img_src='png/Outdoors@3x.png' icon_src='svg/compass.svg' name='Outdoors'/>
                <Community img_src='png/Language@3x.png' icon_src='svg/single-message.svg' name='Language'/>
              </Box>
              <Box component='div' ml={'10px'} mr={'10px'}>
                <Community img_src='png/Lifestyle@3x.png' icon_src='svg/single-user.svg' name='Lifestyle'/>
                <Community img_src='png/Health@3x.png' icon_src='svg/heartbeat.svg' name='Health'/>
              </Box>
            </Box>
            <Box component='div' display='none' className='mobilecommun'>
              <CommunityMobile img_src='png/The_Arts@3x.png' icon_src='svg/stack.svg' name='The Arts'/>
              <CommunityMobile img_src='png/Tech@3x.png' icon_src='svg/tv.svg' name='Technology'/>
              <CommunityMobile img_src='png/Auto@3x.png' icon_src='svg/car.svg' name='Auto'/>
              <CommunityMobile img_src='png/Remedial@3x.png' icon_src='svg/remedial.svg' name='Remedial'/>
              <CommunityMobile img_src='png/Academics@3x.png' icon_src='svg/academics.svg' name='Academics'/>
              <CommunityMobile img_src='png/Trades@3x.png' icon_src='png/auto.png' name='Trades'/>
              <CommunityMobile img_src='' icon_src='svg/right@1x.svg' name='Learn'/>
              <CommunityMobile img_src='png/Sport@3x.png' icon_src='svg/sport.svg' name='Sports & Games'/>
              <CommunityMobile img_src='' icon_src='svg/right@1x.svg' name='Teach'/>
              <CommunityMobile img_src='png/Business@3x.png' icon_src='svg/briefcase.svg' name='Business'/>
              <CommunityMobile img_src='png/Outdoors@3x.png' icon_src='svg/compass.svg' name='Outdoors'/>
              <CommunityMobile img_src='png/Language@3x.png' icon_src='svg/single-message.svg' name='Language'/>
              <CommunityMobile img_src='png/Lifestyle@3x.png' icon_src='svg/single-user.svg' name='Lifestyle'/>
              <CommunityMobile img_src='png/Health@3x.png' icon_src='svg/heartbeat.svg' name='Health'/>
            </Box>
          </Box>
          <Box component='div' className='communBorder'></Box>
          <Box component='div' className='companyPan'>
            <Box component='div' className='companySection'>
              <Company src='png/FAQ.png' title='Frequently asked questions' content='Support is just a tap away. We can also answer any questions you might have in our FAQ section.' link='Get Help'/>
              <Company src='png/Why_QT.png' title='Why QuickTutor?' content='Turn your knowledge into dollars & become your own boss today.' link='Learn more'/>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;