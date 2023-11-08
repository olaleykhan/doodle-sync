import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {useAuth} from '@/contexts/AuthContext';
import { Box } from '@mui/material'

import Signup from './components/Signup'

const Auth = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {

    console.log("guard in login page being called")
    if (isLoggedIn) {
      navigate('/', {
        state: {
          from: location.pathname
        },
        replace: true
      });
    }
  }, [isLoggedIn]);
  return (
    <Box sx={{
      maxWidth: 400,
      margin: 'auto',
      marginTop: 10,
    }}> 
      <Signup/>
    </Box>
  )
}

export default Auth