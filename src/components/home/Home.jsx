import React from 'react'
import { useNavigate } from 'react-router-dom';
import {styled, Typography, Box, Button} from '@mui/material'

const Typo = styled(Typography)`
  &:nth-child(2n+1){
    font-size: 20px;
    margin-top: 20px;
    color: rgba(255,255,255,0.8);
  }

  &:nth-child(2n){
    font-size: 50px;
    font-weight: 300;
    color: rgba(255,255,255,0.8);
    word-spacing: 10px;
    letter-spacing: 5px;
  }
`;

const Component = styled(Box)`
  position: relative;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  background-color: rgba(0,0,0,0.5);
`;

const BackgroundImage = styled('div')({
    position: 'absolute',
    zIndex: '-1',
    width: '100vw',
    height: '100vh',
    background: 'url(http://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/online/PublishingImages/blog/health-care-economics.jpg&w=1200&h=630) no-repeat center',
    backgroundSize: 'cover',
});

const ContinueButton = styled(Button)`
  background-color: black;
  color: #fff;
  width: 200px;
  margin-top: 20px;

  &:hover{
    background-color: #fff;
    color: #000;
  }
`;

const Home = () => {

  const navigate = useNavigate();

  const continueClick = () => {
    navigate('/main');
  }

  return (
    <Component>
      <BackgroundImage></BackgroundImage>
      <Typo variant='h1'>Welcome to Covid Checker</Typo>
      <Typo variant='h3'>Press the below button to continue</Typo>
      <ContinueButton variant="contained" onClick={continueClick} >Click to continue</ContinueButton>
    </Component>
  )
}

export default Home