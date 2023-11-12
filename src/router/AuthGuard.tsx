import { useEffect, ReactElement } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {useAuth} from '@/contexts/AuthContext';


type Props = {
  children: ReactElement | null;
};

const AuthGuard:React.FC<Props> = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/auth', {
        state: {
          from: location.pathname
        },
        replace: true
      });
    }
  }, [isLoggedIn]);

  return children;
};

export default AuthGuard;
