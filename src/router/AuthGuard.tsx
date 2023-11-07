import { useOutlet , useLoaderData} from 'react-router-dom';
import {AuthProvider, useAuth} from '../hooks';

const AuthGuard = () => {

    const outlet = useOutlet();

  return (
    <AuthProvider>{outlet}</AuthProvider>
  );
};

export default AuthGuard;