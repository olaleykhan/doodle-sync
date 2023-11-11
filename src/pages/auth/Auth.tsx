import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {useAuth} from '@/contexts/AuthContext';
import Signup from './components/Signup'
import AuthLayout from '@/pages/auth/components/AuthLayout';



const Auth = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [page, setpage] = useState<'login'|'signup'>("signup");
  
  useEffect(() => {
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
   <AuthLayout page={page} setPage={setpage} >
    {page === "login" ? "LOGIN" : <Signup />}
   </AuthLayout>
  )
}

export default Auth